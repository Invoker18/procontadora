<template>
  <ClientOnly>
    <!-- 1. BANNER FLOTANTE INICIAL -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-8"
    >
      <div
        v-if="showBanner"
        class="border-dorado-400/30 bg-vino-950/95 text-marfil-100/90 fixed right-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border p-5 shadow-2xl backdrop-blur-xl sm:right-6 sm:bottom-6 sm:max-w-md"
      >
        <div class="flex items-start gap-3">
          <UIcon name="i-heroicons-shield-check" class="text-dorado-400 h-6 w-6 shrink-0" />
          <div class="space-y-2">
            <h3 class="text-dorado-400 font-serif text-base font-bold">Privacidad y Cookies</h3>
            <p class="text-marfil-100/80 text-xs leading-5">
              Utilizamos cookies para garantizar la seguridad y experiencia del sitio. Puedes
              revisar nuestra
              <NuxtLink
                to="/politica-de-privacidad"
                class="text-dorado-400 hover:text-marfil-50 underline underline-offset-2"
              >
                Política de Privacidad </NuxtLink
              >.
            </p>
          </div>
        </div>

        <!-- Botones de Acción del Banner -->
        <div
          class="border-dorado-400/20 mt-4 flex flex-wrap items-center justify-end gap-2 border-t pt-3"
        >
          <UButton
            variant="ghost"
            size="sm"
            class="text-marfil-100/70 hover:bg-vino-900 hover:text-dorado-400"
            @click="isModalOpen = true"
          >
            Configurar
          </UButton>

          <UButton
            variant="outline"
            size="sm"
            class="border-dorado-400/40 text-marfil-100 hover:bg-vino-900 ring-dorado-400"
            @click="rejectNonEssential"
          >
            Solo esenciales
          </UButton>

          <UButton
            size="sm"
            class="bg-rojo-950 text-marfil-50 hover:bg-rojo-900 font-semibold"
            :ui="{ trailingIcon: 'text-dorado-400' }"
            trailing-icon="i-heroicons-check"
            @click="acceptAll"
          >
            Aceptar todas
          </UButton>
        </div>
      </div>
    </Transition>

    <!-- 2. MODAL DE CONFIGURACIÓN GRANULAR (Sintaxis Nuxt UI 3/4) -->
    <UModal
      v-model:open="isModalOpen"
      :ui="{
        content:
          'bg-vino-950 border-dorado-400/30 text-marfil-100 max-w-lg rounded-2xl border shadow-2xl backdrop-blur-2xl'
      }"
    >
      <template #content>
        <div class="space-y-6 p-6">
          <!-- Encabezado del Modal -->
          <div class="border-dorado-400/20 flex items-center justify-between border-b pb-4">
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-adjustments-horizontal" class="text-dorado-400 h-5 w-5" />
              <h2 class="text-dorado-400 font-serif text-lg font-bold">Preferencias de Cookies</h2>
            </div>
            <UButton
              icon="i-heroicons-x-mark"
              color="neutral"
              variant="ghost"
              size="sm"
              class="text-marfil-100/70 hover:text-marfil-50"
              @click="isModalOpen = false"
            />
          </div>

          <p class="text-marfil-100/80 text-xs leading-relaxed">
            Personaliza tus preferencias sobre las tecnologías de seguimiento que empleamos en
            nuestra firma contable.
          </p>

          <!-- Opciones Granulares con Switches -->
          <div class="space-y-4">
            <!-- Esenciales -->
            <div
              class="border-dorado-400/20 bg-vino-900/40 flex items-center justify-between rounded-xl border p-3.5"
            >
              <div class="space-y-0.5 pr-4">
                <p class="text-marfil-50 text-xs font-bold">Cookies Estrictamente Necesarias</p>
                <p class="text-marfil-100/70 text-[11px] leading-4">
                  Indispensables para la navegabilidad, seguridad del sitio y protección de datos.
                </p>
              </div>
              <USwitch :model-value="true" disabled class="shrink-0" />
            </div>

            <!-- Analíticas -->
            <div
              class="border-dorado-400/20 bg-vino-900/40 flex items-center justify-between rounded-xl border p-3.5"
            >
              <div class="space-y-0.5 pr-4">
                <p class="text-marfil-50 text-xs font-bold">Cookies Analíticas</p>
                <p class="text-marfil-100/70 text-[11px] leading-4">
                  Nos permiten evaluar el rendimiento del sitio de forma completamente anónima.
                </p>
              </div>
              <USwitch v-model="cookieSettings.analytics" class="shrink-0" />
            </div>

            <!-- Marketing -->
            <div
              class="border-dorado-400/20 bg-vino-900/40 flex items-center justify-between rounded-xl border p-3.5"
            >
              <div class="space-y-0.5 pr-4">
                <p class="text-marfil-50 text-xs font-bold">
                  Cookies de Marketing y Personalización
                </p>
                <p class="text-marfil-100/70 text-[11px] leading-4">
                  Utilizadas para ofrecerte información adaptada a la gestión contable de tu clínica
                  o empresa.
                </p>
              </div>
              <USwitch v-model="cookieSettings.marketing" class="shrink-0" />
            </div>
          </div>

          <!-- Botones de Acción del Modal -->
          <div class="border-dorado-400/20 flex items-center justify-end gap-3 border-t pt-4">
            <UButton
              variant="ghost"
              size="sm"
              class="text-marfil-100/70 hover:bg-vino-900"
              @click="isModalOpen = false"
            >
              Cancelar
            </UButton>

            <UButton
              size="sm"
              class="bg-rojo-950 text-marfil-50 hover:bg-rojo-900 font-semibold"
              @click="savePreferences"
            >
              Guardar preferencias
            </UButton>
          </div>
        </div>
      </template>
    </UModal>
  </ClientOnly>
</template>

<script setup lang="ts">
const consentCookie = useCookie<{
  accepted: boolean
  analytics: boolean
  marketing: boolean
}>('pro_cookie_consent', {
  maxAge: 60 * 60 * 24 * 365,
  sameSite: 'lax'
})

const isModalOpen = ref(false)
const showBanner = ref(false)

const cookieSettings = reactive({
  analytics: true,
  marketing: false
})

onMounted(() => {
  if (!consentCookie.value?.accepted) {
    showBanner.value = true
  }
})

const acceptAll = () => {
  consentCookie.value = {
    accepted: true,
    analytics: true,
    marketing: true
  }
  showBanner.value = false
}

const rejectNonEssential = () => {
  consentCookie.value = {
    accepted: true,
    analytics: false,
    marketing: false
  }
  showBanner.value = false
}

const savePreferences = () => {
  consentCookie.value = {
    accepted: true,
    analytics: cookieSettings.analytics,
    marketing: cookieSettings.marketing
  }
  isModalOpen.value = false
  showBanner.value = false
}
</script>
