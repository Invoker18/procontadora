<!-- layouts/default.vue -->
<script setup lang="ts"></script>

<template>
  <div
    class="from-champagne-100 to-champagne-50 selection:bg-dorado-400/30 flex min-h-screen flex-col bg-gradient-to-r font-sans antialiased"
  >
    <navbar />

    <UMain class="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
      <slot />
    </UMain>

    <footer class="bg-vino-950 text-marfil-100 py-10">
      <div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p class="text-dorado-300 font-serif text-xl font-bold">PRO Contadora</p>
          <p class="mt-3 text-sm leading-6">
            Rigor clínico y seguridad financiera para organizaciones de salud.
          </p>
        </div>
        <div class="text-sm leading-7">
          <p class="text-dorado-300 font-bold">Especialidades</p>
          <p>
            Clínicas y hospitales<br />Medicina veterinaria<br />Laboratorios y bancos de sangre
          </p>
        </div>
        <div class="text-sm leading-7">
          <p class="text-dorado-300 font-bold">Contacto directivo</p>
          <p>
            info@procontadora.com<br />Atención a nivel nacional, México<br />Acuerdo de
            confidencialidad médica
          </p>
        </div>
      </div>
      <div
        class="border-marfil-50/20 text-marfil-200 mx-auto mt-8 max-w-7xl border-t px-4 pt-5 text-center text-xs sm:px-6 lg:px-8"
      >
        &copy; {{ new Date().getFullYear() }} PRO Contadora - Marisela Sánchez. Todos los derechos
        reservados.
      </div>
    </footer>
  </div>
</template>
