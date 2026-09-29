<template>
  <main class="bg-champagne-100/60 text-vino-950 min-h-screen pt-14 pb-28">
    <UContainer class="max-w-4xl">
      <!-- Encabezado de la página -->
      <div class="border-dorado-400/30 mb-10 space-y-3 border-b pb-6">
        <UBadge color="neutral" variant="outline" class="border-dorado-400 text-vino-950">
          Marco Legal y Confidencialidad
        </UBadge>
        <h1 class="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          Aviso de Privacidad Integral
        </h1>
        <p class="text-vino-950/70 text-xs">Última actualización: {{ lastUpdated }}</p>
      </div>

      <!-- Contenido de la Política -->
      <article
        class="prose prose-stone text-vino-950/90 max-w-none space-y-8 text-sm leading-relaxed"
      >
        <!-- 1. Identidad del Responsable -->
        <section class="space-y-2">
          <h2 class="text-vino-950 font-serif text-xl font-bold">
            1. Identidad y Domicilio del Responsable
          </h2>
          <p>
            <strong>PRO Contadora</strong>, representada por <strong>Marisela Sánchez</strong>, con
            domicilio operativo y de atención a nivel nacional en México, es la responsable del
            tratamiento, uso y protección de sus datos personales. Garantizamos el estricto
            cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares (LFPDPPP).
          </p>
        </section>

        <!-- 2. Datos Personales Recabados -->
        <section class="space-y-2">
          <h2 class="text-vino-950 font-serif text-xl font-bold">
            2. Datos Personales que Recabamos
          </h2>
          <p>
            Para la prestación de nuestros servicios de auditoría, contabilidad y diagnóstico
            financiero, podemos solicitar:
          </p>
          <ul class="list-disc space-y-1 pl-5">
            <li>
              <strong>Datos de Identificación:</strong> Nombre completo, correo electrónico y número
              telefónico.
            </li>
            <li>
              <strong>Datos Fiscales y Financieros:</strong> RFC, situación fiscal y razón social de
              organizaciones médicas o clínicas.
            </li>
            <li>
              <strong>Información Confidencial de Salud/Institucional:</strong> Protegida bajo
              acuerdos explícitos de confidencialidad médica e institucional.
            </li>
          </ul>
        </section>

        <!-- 3. Finalidades del Tratamiento -->
        <section class="space-y-2">
          <h2 class="text-vino-950 font-serif text-xl font-bold">
            3. Finalidades del Tratamiento de Datos
          </h2>
          <p>
            Los datos recabados se utilizarán exclusivamente para las siguientes finalidades
            primarias:
          </p>
          <ul class="list-disc space-y-1 pl-5">
            <li>Evaluación y elaboración de diagnósticos financieros o contables.</li>
            <li>Atención de consultas directas, cotizaciones y acuerdos de confidencialidad.</li>
            <li>Cumplimiento de obligaciones fiscales y contables regulatorias.</li>
          </ul>
        </section>

        <!-- 4. Uso de Cookies y Tecnologías de Rastreo -->
        <section class="space-y-2">
          <h2 class="text-vino-950 font-serif text-xl font-bold">4. Uso de Cookies</h2>
          <p>
            Nuestro sitio web utiliza cookies técnicas (estrictamente necesarias para el
            funcionamiento del sitio) y cookies analíticas para mejorar la experiencia de
            navegación. Usted puede ajustar o revocar sus preferencias sobre cookies en cualquier
            momento mediante el panel de configuración disponible en la parte inferior de nuestro
            sitio.
          </p>
        </section>

        <!-- 5. Derechos ARCO -->
        <section class="space-y-2">
          <h2 class="text-vino-950 font-serif text-xl font-bold">
            5. Derechos ARCO (Acceso, Rectificación, Cancelación u Oposición)
          </h2>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos, para qué los utilizamos y
            las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la
            corrección de su información (Rectificación), su eliminación (Cancelación) u oponerse al
            uso de los mismos para fines específicos (Oposición).
          </p>
          <p>
            Para ejercer cualquiera de los derechos ARCO, envíe un correo electrónico a
            <a
              href="mailto:info@procontadora.com"
              class="text-rojo-950 hover:text-dorado-400 font-bold underline"
            >
              info@procontadora.com
            </a>
            especificando su nombre y la solicitud concreta referente a sus datos.
          </p>
        </section>

        <!-- 6. Modificaciones -->
        <section class="space-y-2">
          <h2 class="text-vino-950 font-serif text-xl font-bold">
            6. Cambios al Aviso de Privacidad
          </h2>
          <p>
            El presente aviso de privacidad puede sufrir modificaciones derivadas de requerimientos
            legales o de nuestras propias prácticas de privacidad. Cualquier cambio será publicado
            directamente en esta sección.
          </p>
        </section>
      </article>

      <!-- Botón de regreso -->
      <div class="border-dorado-400/30 mt-12 border-t pt-6">
        <UButton
          to="/"
          icon="i-heroicons-arrow-left"
          variant="ghost"
          class="text-vino-950 hover:bg-champagne-200"
        >
          Volver a la página principal
        </UButton>
      </div>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
const lastUpdated = '29 de Septiembre de 2026'

// Configuración de SEO para la página
useSeoMeta({
  title: 'Política de Privacidad - PRO Contadora',
  description:
    'Aviso de privacidad integral y protección de datos personales de PRO Contadora - Marisela Sánchez.',
  robots: 'noindex, follow' // Evita la indexación excesiva si prefieres mantener la privacidad limpia
})
</script>
