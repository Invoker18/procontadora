<script setup lang="ts">
import { parseDecimal } from '~/utils/calculators'
import { calculateResico, resicoIncomeLimit, type ResicoPeriod } from '~/utils/resico'

const props = defineProps<{ period: ResicoPeriod }>()
type FieldKey = 'income' | 'otherIncome' | 'withheld' | 'paid'
const annual = computed(() => props.period === 'anual')
const inputs = reactive<Record<FieldKey, string>>({
  income: '',
  otherIncome: '0',
  withheld: '0',
  paid: '0'
})
const submitted = ref(false)

const fields = computed<{ key: FieldKey; label: string; hint: string }[]>(() => [
  {
    key: 'income',
    label: annual.value
      ? 'Ingresos cobrados en el ejercicio, sin IVA'
      : 'Ingresos cobrados en el mes, sin IVA',
    hint: 'Ingresos de actividades RESICO amparados por CFDI efectivamente cobrados.'
  },
  {
    key: 'otherIncome',
    label: 'Otros ingresos RESICO cobrados, sin IVA',
    hint: 'Solo ingresos elegibles del mismo periodo no incluidos arriba; no agregues ingresos de otros regímenes.'
  },
  {
    key: 'withheld',
    label: annual.value ? 'ISR retenido en el ejercicio' : 'ISR retenido en el mes',
    hint: 'Retenciones de ISR aplicables al periodo. Consulta tus comprobantes.'
  },
  ...(annual.value
    ? [
        {
          key: 'paid' as const,
          label: 'ISR pagado en declaraciones mensuales',
          hint: 'Importe pagado del ejercicio, sin volver a incluir las retenciones capturadas arriba.'
        }
      ]
    : [])
])

const parsed = computed(() => ({
  income: parseDecimal(inputs.income, resicoIncomeLimit),
  otherIncome: parseDecimal(inputs.otherIncome, resicoIncomeLimit),
  withheld: parseDecimal(inputs.withheld, resicoIncomeLimit),
  paid: annual.value ? parseDecimal(inputs.paid, resicoIncomeLimit) : 0
}))

const errors = computed(() => {
  const result: Partial<Record<FieldKey, string>> = {}
  for (const field of fields.value) {
    if (parsed.value[field.key] === null) {
      result[field.key] = 'Ingresa un número de 0 a 3,500,000, con hasta dos decimales.'
    }
  }
  return result
})

const exceedsLimit = computed(() => {
  const { income, otherIncome } = parsed.value
  return income !== null && otherIncome !== null && income + otherIncome > resicoIncomeLimit
})

const result = computed(() => {
  if (!submitted.value || Object.keys(errors.value).length || exceedsLimit.value) return null
  const { income, otherIncome, withheld, paid } = parsed.value
  if (income === null || otherIncome === null || withheld === null || paid === null) return null
  return calculateResico(props.period, { income, otherIncome, withheld, paid })
})

function formatCurrency(cents: number) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(cents / 100)
}

function formatRate(rate: number) {
  return `${new Intl.NumberFormat('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(rate)}%`
}
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2 md:items-start">
    <form
      class="border-champagne-200 rounded-xl border bg-white p-6 shadow-sm sm:p-8"
      novalidate
      @submit.prevent="submitted = true"
    >
      <h2 class="text-vino-950 font-serif text-xl font-bold">Datos del cálculo {{ period }}</h2>
      <p class="text-marfil-700 mt-2 text-sm leading-6">
        Captura importes en pesos del mismo {{ annual ? 'ejercicio' : 'mes' }}.
      </p>
      <div v-for="field in fields" :key="field.key" class="mt-6">
        <label :for="`${period}-${field.key}`" class="text-vino-950 block text-sm font-semibold">
          {{ field.label }}
        </label>
        <p :id="`${period}-${field.key}-hint`" class="text-marfil-700 mt-1 text-xs leading-5">
          {{ field.hint }}
        </p>
        <input
          :id="`${period}-${field.key}`"
          v-model="inputs[field.key]"
          type="text"
          inputmode="decimal"
          autocomplete="off"
          placeholder="0.00"
          :aria-describedby="
            submitted && errors[field.key]
              ? `${period}-${field.key}-hint ${period}-${field.key}-error`
              : `${period}-${field.key}-hint`
          "
          :aria-invalid="submitted && !!errors[field.key]"
          class="border-champagne-300 text-vino-950 focus:border-vino-600 focus:ring-vino-600/20 mt-2 w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:ring-4"
        />
        <p
          v-if="submitted && errors[field.key]"
          :id="`${period}-${field.key}-error`"
          class="text-vino-700 mt-2 text-xs"
          role="alert"
        >
          {{ errors[field.key] }}
        </p>
      </div>
      <p v-if="submitted && exceedsLimit" class="text-vino-700 mt-4 text-sm" role="alert">
        La suma de ingresos supera $3,500,000. Este cálculo no cubre ese importe; revisa tu régimen
        con una persona especialista.
      </p>
      <button
        type="submit"
        class="bg-vino-900 text-marfil-50 hover:bg-vino-700 focus-visible:outline-vino-700 mt-7 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Calcular <UIcon name="i-lucide-arrow-right" class="size-4" />
      </button>
    </form>

    <div class="border-champagne-200 bg-champagne-100/50 rounded-xl border p-6 sm:p-8">
      <p class="text-dorado-700 text-xs font-bold tracking-[0.16em] uppercase">
        Resultado orientativo
      </p>
      <div v-if="result" class="mt-5" aria-live="polite">
        <dl class="text-marfil-700 space-y-3 text-sm">
          <div class="flex justify-between gap-4">
            <dt>Total de ingresos</dt>
            <dd class="text-vino-950 font-semibold">{{ formatCurrency(result.income) }}</dd>
          </div>
          <div class="flex justify-between gap-4">
            <dt>Tasa aplicable</dt>
            <dd class="text-vino-950 font-semibold">{{ formatRate(result.rate) }}</dd>
          </div>
          <div class="flex justify-between gap-4">
            <dt>ISR causado estimado</dt>
            <dd class="text-vino-950 font-semibold">{{ formatCurrency(result.tax) }}</dd>
          </div>
          <div class="flex justify-between gap-4">
            <dt>ISR retenido</dt>
            <dd class="text-vino-950 font-semibold">− {{ formatCurrency(result.withheld) }}</dd>
          </div>
          <div v-if="annual" class="flex justify-between gap-4">
            <dt>ISR pagado mensualmente</dt>
            <dd class="text-vino-950 font-semibold">− {{ formatCurrency(result.paid) }}</dd>
          </div>
        </dl>
        <div class="border-champagne-300 mt-6 border-t pt-5">
          <p class="text-marfil-700 text-sm">Diferencia estimada</p>
          <p class="text-vino-950 mt-2 font-serif text-3xl font-bold">
            {{ formatCurrency(result.difference) }}
          </p>
          <p v-if="result.difference < 0" class="text-marfil-700 mt-3 text-xs leading-5">
            La diferencia negativa indica que las cantidades capturadas superan el ISR estimado. No
            confirma un saldo a favor ni el derecho a devolución.
          </p>
        </div>
      </div>
      <p v-else class="text-marfil-700 mt-4 text-sm leading-6" aria-live="polite">
        Ingresa los datos y selecciona calcular para ver el resultado.
      </p>
      <div
        class="border-champagne-300 text-marfil-700 mt-6 space-y-3 border-t pt-5 text-xs leading-6"
      >
        <p>
          Es una estimación aritmética para ingresos RESICO de personas físicas; no determina
          elegibilidad, ingresos acumulados en el año, ajustes aplicables ni el impuesto definitivo.
          No contempla tratamientos especiales, como la exención para actividades primarias.
        </p>
        <p v-if="annual">
          Algunas personas en RESICO pueden quedar relevadas de presentar declaración anual según
          las reglas aplicables. Este cálculo no determina si debes presentarla.
        </p>
        <p>Consulta tu caso y la normativa vigente con una persona especialista.</p>
      </div>
      <div class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold">
        <a
          :href="
            annual
              ? 'https://legislacion.scjn.gob.mx/Buscador/Paginas/wfArticulosFullText.aspx?q=Wct5OSsXp/CsyLrt7V+fcZ7goVDCl1ng/zlAbC5zt+JEpPHwSgdyEgYGsMX0nfIJtN+qJX7a/WtpATqEyPMhKOCC0PHKhxuz2xd0TZd45+bO6O2gZMqpT0QH3fLoWydBu+rq3zSx3xokQWdIdeNV+IMz2pVmKevKclBdBQjTKwU=#ctl00_MainContentPlaceHolder_gridArticulosFullText_row1_liReferencia'
              : 'https://legislacion.scjn.gob.mx/Buscador/Paginas/wfArticuladoResultadoBusqueda.aspx?q=Wct5OSsXp/CsyLrt7V+fcbersxDgpKEVzWwh7nP7HuEeFmdiMBtuC4K6qGxRw1vh4QReY6u8cHux/zRJOWBjFw+XkKuWB0YDx9fUBaq85fWzwmlO6EHdwUTSJmsvviUA'
          "
          target="_blank"
          rel="noopener noreferrer"
          class="text-vino-800 inline-flex items-center gap-1 underline underline-offset-4"
        >
          Artículo {{ annual ? '113-F' : '113-E' }} de la Ley del ISR (SCJN)
          <UIcon name="i-lucide-external-link" class="size-3.5" />
        </a>
        <a
          v-if="annual"
          href="https://www.sat.gob.mx/minisitio/DeclaracionAnual/Personas/quienes_deben_presentarla.html"
          target="_blank"
          rel="noopener noreferrer"
          class="text-vino-800 inline-flex items-center gap-1 underline underline-offset-4"
        >
          Orientación del SAT sobre declaración anual
          <UIcon name="i-lucide-external-link" class="size-3.5" />
        </a>
      </div>
    </div>
  </div>
</template>
