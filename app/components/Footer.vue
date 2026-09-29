<template>
  <footer class="bg-vino-950 text-marfil-100/80 relative overflow-hidden py-12">
    <div
      class="bg-dorado-500/10 pointer-events-none absolute -top-40 -left-40 h-125 w-125 rounded-full blur-3xl"
    ></div>

    <!-- Destello radial superior izquierdo (tono dorado/champagne muy suave) -->
    <div
      class="bg-vino-700/20 pointer-events-none absolute -right-40 -bottom-40 h-100 w-100 rounded-full blur-3xl"
    ></div>
    <UContainer>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Columna 1: Marca y descripción -->
        <div class="space-y-3">
          <p class="text-dorado-400 font-serif text-xl font-bold tracking-wide">PRO Contadora</p>
          <p class="text-sm leading-6">
            Rigor clínico y seguridad financiera para organizaciones de salud.
          </p>
          <div
            class="text-dorado-400 mt-auto flex items-center gap-1 text-xs font-semibold uppercase"
          >
            <p>POTENCIA</p>
            &bull;
            <p>REESTRUCTURA</p>
            &bull;
            <p>OPTIMIZA</p>
          </div>
        </div>

        <!-- Columna 2: Especialidades -->
        <div class="text-sm leading-7">
          <p class="text-dorado-400 mb-2 font-bold">Especialidades</p>
          <ul class="space-y-1.5">
            <li class="flex items-center gap-2">
              <UIcon
                name="i-heroicons-check-circle-16-solid"
                class="text-dorado-400/80 h-4 w-4 shrink-0"
              />
              <span>Clínicas y hospitales</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-heroicons-check-circle-16-solid"
                class="text-dorado-400/80 h-4 w-4 shrink-0"
              />
              <span>Medicina veterinaria</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-heroicons-check-circle-16-solid"
                class="text-dorado-400/80 h-4 w-4 shrink-0"
              />
              <span>Laboratorios y bancos de sangre</span>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Contacto directivo (Correo, Teléfono y Ubicación) -->
        <div class="text-sm leading-7">
          <p class="text-dorado-400 mb-2 font-bold">Contacto directivo</p>
          <ul class="space-y-2">
            <li>
              <a
                href="mailto:info@procontadora.com"
                class="hover:text-dorado-400 group inline-flex items-center gap-2 transition-colors duration-200"
              >
                <UIcon
                  name="i-heroicons-envelope"
                  class="text-dorado-400 h-4 w-4 transition-transform group-hover:scale-110"
                />
                <span>info@procontadora.com</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+525512345678"
                class="hover:text-dorado-400 group inline-flex items-center gap-2 transition-colors duration-200"
              >
                <UIcon
                  name="i-heroicons-phone"
                  class="text-dorado-400 h-4 w-4 transition-transform group-hover:scale-110"
                />
                <span>+52 55 1234 5678</span>
              </a>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-heroicons-map-pin" class="text-dorado-400 mt-1 h-4 w-4 shrink-0" />
              <span>Atención a nivel nacional, México</span>
            </li>
            <li class="flex items-start gap-2 text-xs opacity-90">
              <UIcon
                name="i-heroicons-shield-check"
                class="text-dorado-400 mt-0.5 h-4 w-4 shrink-0"
              />
              <span>Acuerdo de confidencialidad médica</span>
            </li>
          </ul>
        </div>

        <!-- Columna 4: Redes Sociales con interacción mejorada -->
        <div class="text-sm">
          <p class="text-dorado-400 mb-3 font-bold">Síguenos</p>
          <div class="flex items-center gap-2.5">
            <UTooltip v-for="social in socialLinks" :key="social.name" :text="social.name">
              <ULink
                :to="social.href"
                :aria-label="social.name"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-vino-900/40 border-dorado-400/20 text-marfil-100/90 hover:text-dorado-400 hover:bg-vino-900 hover:border-dorado-400 hover:shadow-dorado-400/10 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
              >
                <UIcon :name="social.icon" class="h-5 w-5 transition-transform duration-200" />
              </ULink>
            </UTooltip>
          </div>
        </div>
      </div>

      <!-- Derechos de autor -->
      <div class="border-dorado-400/30 text-marfil-50 mt-10 border-t pt-6 text-center text-xs">
        &copy; {{ currentYear }} PRO Contadora - Marisela Sánchez. Todos los derechos reservados.
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: 'i-simple-icons-instagram'
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: 'i-simple-icons-facebook'
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: 'i-simple-icons-youtube'
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com',
    icon: 'i-simple-icons-x'
  }
]
</script>
