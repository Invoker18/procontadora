<template>
  <section id="contacto" class="py-20 md:py-28">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
      <div>
        <p class="text-dorado-600 text-sm font-bold tracking-[0.02em] uppercase">
          Atención directa
        </p>
        <h2 class="text-vino-900 mt-3 font-serif text-3xl font-bold md:text-4xl">
          Inicia la reingeniería financiera de tu práctica de salud.
        </h2>
        <p class="text-marfil-700 mt-5 max-w-xl leading-7">
          Sesión preliminar de evaluación bajo estricto secreto profesional. Analizaremos las fugas
          y oportunidades inmediatas de tu negocio.
        </p>
        <ul class="text-marfil-700 mt-6 space-y-2 text-sm">
          <li>Atención: info@procontadora.com</li>
          <li>Sesión ejecutiva de 45 minutos, remota o presencial.</li>
          <li>Convenio NDA de no divulgación automático.</li>
        </ul>
      </div>
      <form class="border-marfil-300 bg-marfil-100 grid gap-4 border p-6" @submit.prevent>
        <label class="text-marfil-800 text-sm font-semibold"
          >Nombre<input
            class="border-marfil-400 bg-marfil-50 mt-1 w-full border px-3 py-2.5"
            type="text"
        /></label>
        <label class="text-marfil-800 text-sm font-semibold"
          >Clínica o negocio<input
            class="border-marfil-400 bg-marfil-50 mt-1 w-full border px-3 py-2.5"
            type="text"
        /></label>
        <label class="text-marfil-800 text-sm font-semibold"
          >WhatsApp o teléfono<input
            class="border-marfil-400 bg-marfil-50 mt-1 w-full border px-3 py-2.5"
            type="tel"
        /></label>
        <label class="text-marfil-800 text-sm font-semibold"
          >Correo electrónico<input
            class="border-marfil-400 bg-marfil-50 mt-1 w-full border px-3 py-2.5"
            type="email"
        /></label>
        <label class="text-marfil-800 text-sm font-semibold"
          >Especialidad o sector<select
            class="border-marfil-400 bg-marfil-50 mt-1 w-full border px-3 py-2.5"
          >
            <option>Selecciona una opción</option>
            <option>Clínica u hospital</option>
            <option>Medicina veterinaria</option>
            <option>Laboratorio</option>
          </select></label
        >
        <label class="text-marfil-800 text-sm font-semibold"
          >Desafío prioritario<textarea
            class="border-marfil-400 bg-marfil-50 mt-1 min-h-24 w-full border px-3 py-2.5"
          ></textarea>
        </label>
        <UButton
          type="submit"
          class="bg-vino-950 hover:bg-vino-800 text-marfil-50 justify-center rounded-lg py-3 font-semibold"
          >Agendar diagnóstico confidencial</UButton
        >
      </form>
    </div>
  </section>
</template>
