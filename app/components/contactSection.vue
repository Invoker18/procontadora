<script setup lang="ts">
const submitted = ref(false)

function submitForm() {
  submitted.value = true
}
</script>

<template>
  <section id="contacto" class="bg-marfil-100 py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="border-dorado-400/30 grid overflow-hidden rounded-lg border bg-white shadow-xl lg:grid-cols-12"
      >
        <div
          class="bg-vino-950 text-marfil-50 flex flex-col justify-between p-7 lg:col-span-5 lg:p-10"
        >
          <div>
            <p
              class="border-dorado-400/30 text-dorado-200 inline-flex items-center gap-2 rounded-full border bg-white/10 px-3 py-1 text-xs font-bold tracking-[0.06em] uppercase"
            >
              <UIcon name="i-lucide-lock-keyhole" class="size-4" />
              Diagnóstico confidencial
            </p>
            <h2 class="mt-5 max-w-md font-serif text-3xl leading-tight font-bold md:text-4xl">
              Inicia la reingeniería financiera de tu práctica de salud.
            </h2>
            <p class="text-marfil-200 mt-5 max-w-md leading-7">
              Sesión preliminar de evaluación bajo estricto secreto profesional. Analizaremos las
              fugas y oportunidades inmediatas de tu negocio.
            </p>
            <ul class="text-marfil-100 mt-7 space-y-4 text-sm">
              <li class="flex items-center gap-3">
                <UIcon name="i-lucide-shield-check" class="text-dorado-300 size-5 shrink-0" />
                Convenio NDA de no divulgación automático
              </li>
              <li class="flex items-center gap-3">
                <UIcon name="i-lucide-clock-3" class="text-dorado-300 size-5 shrink-0" />
                Sesión ejecutiva de 45 minutos, remota o presencial
              </li>
              <li class="flex items-center gap-3">
                <UIcon name="i-lucide-user-check" class="text-dorado-300 size-5 shrink-0" />
                Atención y diagnóstico directo por Marisela Sánchez
              </li>
            </ul>
          </div>
          <div class="border-marfil-50/15 text-marfil-300 mt-10 border-t pt-6 text-sm">
            <p class="text-dorado-200 font-semibold">Atención directa</p>
            <a
              href="mailto:info@procontadora.com"
              class="text-marfil-50 hover:text-dorado-200 mt-1 inline-block font-medium"
              >info@procontadora.com</a
            >
            <p class="mt-2 text-xs">
              Cobertura nacional para clínicas, hospitales y centros veterinarios.
            </p>
          </div>
        </div>
        <div class="p-7 lg:col-span-7 lg:p-10">
          <form class="grid gap-4" @submit.prevent="submitForm">
            <div class="grid gap-4 sm:grid-cols-2">
              <label class="text-marfil-800 text-xs font-semibold"
                >Nombre del titular o director *
                <input
                  class="border-dorado-400/30 bg-marfil-50 focus:border-vino-700 mt-1.5 w-full rounded border px-3 py-3 text-xs font-normal outline-none"
                  placeholder="Ej. Dra. Sofía Ramos"
                  required
                  type="text"
                />
              </label>
              <label class="text-marfil-800 text-xs font-semibold"
                >Nombre de la clínica o negocio *
                <input
                  class="border-dorado-400/30 bg-marfil-50 focus:border-vino-700 mt-1.5 w-full rounded border px-3 py-3 text-xs font-normal outline-none"
                  placeholder="Ej. Clínica Veterinaria San Miguel"
                  required
                  type="text"
                />
              </label>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <label class="text-marfil-800 text-xs font-semibold"
                >WhatsApp o teléfono móvil *
                <input
                  class="border-dorado-400/30 bg-marfil-50 focus:border-vino-700 mt-1.5 w-full rounded border px-3 py-3 text-xs font-normal outline-none"
                  placeholder="+52 55 0000 0000"
                  required
                  type="tel"
                />
              </label>
              <label class="text-marfil-800 text-xs font-semibold"
                >Correo electrónico directivo *
                <input
                  class="border-dorado-400/30 bg-marfil-50 focus:border-vino-700 mt-1.5 w-full rounded border px-3 py-3 text-xs font-normal outline-none"
                  placeholder="direccion@tumedica.com"
                  required
                  type="email"
                />
              </label>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <label class="text-marfil-800 text-xs font-semibold"
                >Especialidad o sector *
                <select
                  class="border-dorado-400/30 bg-marfil-50 focus:border-vino-700 mt-1.5 w-full rounded border px-3 py-3 text-xs font-normal outline-none"
                  required
                >
                  <option disabled selected value="">Selecciona tu modalidad</option>
                  <option>Clínica / Hospital quirúrgico</option>
                  <option>Hospital / Clínica veterinaria</option>
                  <option>Laboratorio diagnóstico / Imagen</option>
                  <option>Consultorio médico especializado</option>
                </select>
              </label>
              <label class="text-marfil-800 text-xs font-semibold"
                >Desafío prioritario actual
                <select
                  class="border-dorado-400/30 bg-marfil-50 focus:border-vino-700 mt-1.5 w-full rounded border px-3 py-3 text-xs font-normal outline-none"
                >
                  <option>Control de fugas en insumos / fármacos</option>
                  <option>Incertidumbre o blindaje fiscal</option>
                  <option>Flujo estancado / cuentas aseguradoras</option>
                  <option>Expansión / Adquisición de equipo</option>
                </select>
              </label>
            </div>
            <label class="text-marfil-700 flex items-start gap-2.5 pt-1 text-xs">
              <input
                class="border-dorado-400/30 text-vino-900 mt-0.5 size-4 rounded"
                required
                type="checkbox"
              />
              Acepto el tratamiento de datos y autorizo la firma automática del convenio de estricta
              confidencialidad médica.
            </label>
            <UButton
              type="submit"
              class="bg-vino-900 hover:bg-vino-950 text-marfil-50 mt-2 justify-center rounded py-3.5 font-semibold"
            >
              Agendar diagnóstico confidencial
              <UIcon name="i-lucide-lock-keyhole" class="size-4" />
            </UButton>
          </form>
          <div
            v-if="submitted"
            class="mt-4 flex items-start gap-3 rounded border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
            role="status"
          >
            <UIcon name="i-lucide-circle-check" class="size-5 shrink-0 text-emerald-700" />
            <div>
              <strong>Solicitud confidencial recibida.</strong><br />El despacho de Marisela Sánchez
              se pondrá en contacto en menos de 24 horas hábiles.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
