<template>
  <section id="hero" class="border-dorado-400/30 relative overflow-hidden border-b py-14 md:py-24">
    <div class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 md:text-left lg:px-8">
      <p class="text-dorado-500 mb-4 text-sm font-bold tracking-[0.02em] uppercase">
        Especialistas financieros para el sector salud
      </p>
      <h1 class="text-vino-900 max-w-4xl font-serif text-4xl leading-tight font-bold md:text-6xl">
        Orden, blindaje fiscal y rentabilidad para tu clínica o centro de salud.
      </h1>
      <p class="text-marfil-700 mt-6 max-w-2xl text-lg leading-7 md:text-xl">
        Transformamos el caos administrativo y la incertidumbre tributaria en certeza directiva,
        liquidez predecible y control estricto de insumos médicos.
      </p>

      <div class="mt-8 flex flex-col justify-start gap-4 sm:flex-row">
        <UButton
          to="#contacto"
          size="xl"
          trailing-icon="i-lucide-arrow-right"
          class="bg-rojo-950 hover:bg-rojo-900 text-marfil-50 shadow-dorado-400/50 rounded-lg px-5 py-2.5 font-semibold shadow-md transition-all duration-300 ease-linear hover:scale-105 active:scale-95"
          :ui="{
            trailingIcon: 'text-dorado-500'
          }"
        >
          Solicitar Diagnóstico Confidencial
        </UButton>
        <UButton
          to="#metodo-pro"
          size="xl"
          icon="heroicons:adjustments-horizontal-16-solid"
          class="bg-marfil-50 hover:bg-marfil-100 text-rojo-950 border-dorado-400/30 rounded border px-6 py-3.5 font-bold transition-all duration-300 ease-linear hover:scale-105 active:scale-95"
          :ui="{
            leadingIcon: 'text-dorado-400'
          }"
        >
          Explorar Método PRO
        </UButton>
      </div>

      <dl class="mt-12 grid max-w-3xl grid-cols-3 gap-4 pt-6 text-wrap">
        <div
          class="border-dorado-400/30 bg-marfil-50 grid min-h-32 place-content-center rounded-lg border px-8 text-center"
        >
          <dt class="text-dorado-500 text-2xl font-bold">22+</dt>
          <dd class="text-marfil-700 mt-1 leading-5">Años de liderazgo hospitalario</dd>
        </div>
        <div
          class="border-dorado-400/30 bg-marfil-50 grid min-h-32 place-content-center rounded-lg border px-8 text-center"
        >
          <dt class="text-dorado-500 text-2xl font-bold">12</dt>
          <dd class="text-marfil-700 mt-1 leading-5">Años en dirección de laboratorios</dd>
        </div>
        <div
          class="border-dorado-400/30 bg-marfil-50 grid min-h-32 place-content-center rounded-lg border px-8 text-center"
        >
          <dt class="text-dorado-500 text-2xl font-bold">95%</dt>
          <dd class="text-marfil-700 mt-1 leading-5">Flujo de caja optimizado</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
