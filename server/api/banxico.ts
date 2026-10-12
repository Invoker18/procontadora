// server/api/banxico.ts
export default defineCachedEventHandler(
  async (event) => {
    const config = useRuntimeConfig(event)
    const apiKey = config.banxicoApiKey

    if (!apiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Banxico API key is not configured on the server.'
      })
    }

    // Key Series for Procontadora: USD FIX (SF43718), UDI (SP68257), Target Rate (SF61745)
    const seriesIds = 'SF43718,SP68257,SF61745,SF46410,SF60648'

    try {
      const response: any = await $fetch(
        `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${seriesIds}/datos/oportuno`,
        {
          headers: {
            'Bmx-Token': apiKey,
            Accept: 'application/json'
          }
        }
      )

      const seriesList = response?.bmx?.series || []

      return seriesList.map((series: any) => {
        const latest = series.datos?.[0] || {}
        const { date, dateLabel } = formatBanxicoDate(latest.fecha)

        return {
          id: series.idSerie,
          title: series.titulo,
          shortTitle: formatTitle(series.idSerie),
          value: latest.dato || 'N/A',
          date,
          dateLabel
        }
      })
    } catch (error: any) {
      throw createError({
        statusCode: error.response?.status || 500,
        statusMessage: 'Error fetching data from Banxico SIE API.'
      })
    }
  },
  {
    // Cache options
    maxAge: 60, // Cache expires after 1 minute (in seconds)
    swr: true, // Stale-while-revalidate: serves cached data instantly while fetching fresh data in the background if expired
    name: 'banxico-indicators'
  }
)

function formatTitle(id: string): string {
  const titles: Record<string, string> = {
    SF43718: 'Dólar (FIX)',
    SP68257: 'UDI',
    SF61745: 'Tasa Objetivo',
    SF46410: 'Euro',
    SF60648: 'TIIE 28 días'
  }
  return titles[id] || id
}

function formatBanxicoDate(value: unknown): { date: string | null; dateLabel: string } {
  if (typeof value !== 'string') {
    return { date: null, dateLabel: 'Fecha no disponible' }
  }

  const match = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  if (!match) {
    return { date: null, dateLabel: 'Fecha no disponible' }
  }

  const [, dayText, monthText, yearText] = match
  const day = Number(dayText)
  const month = Number(monthText)
  const year = Number(yearText)
  const parsedDate = new Date(Date.UTC(year, month - 1, day))

  if (
    parsedDate.getUTCFullYear() !== year ||
    parsedDate.getUTCMonth() !== month - 1 ||
    parsedDate.getUTCDate() !== day
  ) {
    return { date: null, dateLabel: 'Fecha no disponible' }
  }

  return {
    date: `${yearText}-${monthText}-${dayText}`,
    dateLabel: new Intl.DateTimeFormat('es-MX', {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(parsedDate)
  }
}
