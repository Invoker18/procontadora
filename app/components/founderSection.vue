<template>
  <section id="nosotros" class="py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="border-dorado-400/30 bg-marfil-50 overflow-hidden rounded-lg border shadow-lg">
        <div class="grid lg:grid-cols-12">
          <div class="relative min-h-80 lg:col-span-5 lg:min-h-full">
            <img
              :src="'/images/pro-contadora/marisela-sanchez.jpg'"
              alt="Marisela Sánchez, fundadora y CFO Estratégica de PRO Contadora"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div
              class="border-dorado-400/30 bg-vino-950/95 text-marfil-50 absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-lg border p-3 backdrop-blur-sm"
            >
              <div>
                <h2 class="font-serif text-sm font-bold">Marisela Sánchez</h2>
                <p class="text-dorado-300 mt-0.5 text-xs">Fundadora y CFO Estratégica</p>
              </div>
              <!-- <span class="text-dorado-300 flex items-center gap-1 text-xs font-bold">
                <UIcon name="i-lucide-badge-check" class="size-4" />
                Verificada
              </span> -->
            </div>
          </div>
          <div class="flex flex-col justify-between p-7 lg:col-span-7 lg:p-10">
            <div>
              <p
                class="text-dorado-600 flex items-center gap-2 text-xs font-bold tracking-[0.08em] uppercase"
              >
                <UIcon name="i-lucide-quote" class="size-5" />
                Voz directiva
              </p>
              <blockquote
                class="text-vino-900 mt-4 max-w-2xl font-serif text-xl leading-8 italic md:text-2xl md:leading-9"
              >
                “Para nosotros la contabilidad no es llenar papeles; es la columna vertebral que
                protege el esfuerzo de tu vida y te da la serenidad para cuidar a tus pacientes.”
              </blockquote>
              <p class="text-marfil-700 mt-5 max-w-2xl leading-7">
                Con más de 22 años en auditoría hospitalaria y más de 12 años liderando la dirección
                financiera de laboratorios clínicos, conjugamos el rigor de las cifras con un
                entendimiento profundo del día a día médico.
              </p>
              <div class="border-dorado-400/20 mt-7 grid gap-2 border-t pt-5 sm:grid-cols-3">
                <div
                  class="bg-marfil-100 text-vino-900 flex items-center gap-2 rounded p-2 text-xs font-bold"
                >
                  <UIcon name="i-lucide-building-2" class="text-dorado-500 size-5 shrink-0" />
                  Auditoría hospitalaria
                </div>
                <div
                  class="bg-marfil-100 text-vino-900 flex items-center gap-2 rounded p-2 text-xs font-bold"
                >
                  <UIcon name="i-lucide-flask-conical" class="text-dorado-500 size-5 shrink-0" />
                  Laboratorios diagnósticos
                </div>
                <div
                  class="bg-marfil-100 text-vino-900 flex items-center gap-2 rounded p-2 text-xs font-bold"
                >
                  <UIcon name="i-lucide-scale" class="text-dorado-500 size-5 shrink-0" />
                  Blindaje tributario
                </div>
              </div>
            </div>
            <div class="border-dorado-400/20 mt-7 flex items-center justify-between border-t pt-5">
              <span class="text-dorado-600 text-xs font-bold tracking-[0.08em] uppercase"
                >PRO Contadora</span
              >
              <a
                href="#contacto"
                class="text-vino-900 hover:text-vino-700 inline-flex items-center gap-1 text-sm font-bold"
              >
                Hablar directamente con Marisela
                <UIcon name="i-lucide-chevron-right" class="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
