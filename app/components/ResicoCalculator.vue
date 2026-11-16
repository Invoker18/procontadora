<script setup lang="ts">
const tabs = [
  { label: 'Mensual', value: 'mensual', slot: 'mensual' as const },
  { label: 'Anual', value: 'anual', slot: 'anual' as const }
]
</script>

<template>
  <UTabs
    :items="tabs"
    default-value="mensual"
    :unmount-on-hide="false"
    class="mt-8"
    :ui="{
      list: 'bg-champagne-100 w-full max-w-sm rounded-lg p-1',
      indicator: 'bg-vino-900 rounded-md',
      trigger: 'text-vino-800 font-semibold data-[state=active]:text-white',
      content: 'mt-6'
    }"
  >
    <template #mensual>
      <ResicoCalculatorForm period="mensual" />
    </template>
    <template #anual>
      <ResicoCalculatorForm period="anual" />
    </template>
  </UTabs>

  <section class="text-marfil-700 mt-12 space-y-8 leading-7">
    <div>
      <h2 class="text-vino-950 font-serif text-2xl font-bold">
        Cómo usar la calculadora de ISR RESICO
      </h2>
      <p class="mt-3">
        Esta herramienta ofrece una estimación para personas físicas en el Régimen Simplificado de
        Confianza (RESICO). Selecciona el periodo mensual o anual y captura importes en pesos
        correspondientes a ese mismo periodo.
      </p>
      <ol class="mt-4 list-decimal space-y-2 pl-6">
        <li>Ingresa los ingresos RESICO efectivamente cobrados, sin IVA, y otros ingresos RESICO del periodo que no hayas incluido.</li>
        <li>Agrega las retenciones de ISR aplicables. Para el cálculo anual, captura también los pagos mensuales realizados, sin duplicar retenciones.</li>
        <li>Selecciona «Calcular» para consultar los ingresos capturados, la tasa de la tabla utilizada y la diferencia estimada.</li>
      </ol>
    </div>

    <div>
      <h2 class="text-vino-950 font-serif text-2xl font-bold">Ejemplo orientativo</h2>
      <p class="mt-3">
        Si capturas $20,000 de ingresos mensuales RESICO, sin otros ingresos ni retenciones, la
        herramienta aplica la tasa de 1% de su tabla y muestra un ISR estimado de $200. Este ejemplo
        solo ilustra el cálculo; la situación fiscal y las obligaciones de cada persona pueden ser
        diferentes.
      </p>
    </div>

    <div>
      <h2 class="text-vino-950 font-serif text-2xl font-bold">Preguntas frecuentes sobre RESICO</h2>
      <div class="mt-4 space-y-5">
        <div>
          <h3 class="text-vino-950 font-semibold">¿Qué ingresos debo capturar?</h3>
          <p class="mt-1">
            Captura los ingresos RESICO efectivamente cobrados en el periodo elegido, sin IVA.
            No incluyas ingresos de otros regímenes ni dupliques cantidades entre los campos.
          </p>
        </div>
        <div>
          <h3 class="text-vino-950 font-semibold">¿La calculadora determina si debo declarar?</h3>
          <p class="mt-1">
            No. El resultado es una estimación aritmética y no determina elegibilidad, obligaciones
            de declaración, ajustes o tratamientos especiales. Algunas personas pueden quedar
            relevadas de presentar declaración anual según las reglas aplicables.
          </p>
        </div>
        <div>
          <h3 class="text-vino-950 font-semibold">¿Una diferencia negativa es un saldo a favor?</h3>
          <p class="mt-1">
            No necesariamente. Significa que los importes de retenciones y pagos capturados superan
            el ISR estimado; no confirma un saldo a favor ni el derecho a una devolución.
          </p>
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-vino-950 font-serif text-2xl font-bold">Consulta las fuentes y tu caso</h2>
      <p class="mt-3">
        La herramienta usa las tablas de los artículos 113-E y 113-F de la Ley del ISR. Consulta los
        enlaces a la legislación y a la orientación del SAT junto al resultado, y verifica la
        normativa vigente y tu situación con una persona especialista antes de presentar tu
        declaración.
      </p>
      <NuxtLink
        to="/#contacto"
        class="text-vino-800 hover:text-vino-600 mt-4 inline-flex font-semibold underline underline-offset-4"
      >
        Contactar a PRO Contadora
      </NuxtLink>
    </div>
  </section>
</template>
