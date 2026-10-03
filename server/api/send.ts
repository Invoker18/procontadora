import { Resend } from 'resend'

interface ContactRequest {
    name?: string
    business?: string
    phone?: string
    email?: string
    specialty?: string
    challenge?: string
    acceptedPrivacy?: boolean
}

const resend = new Resend(process.env.RESEND_API_KEY)

const escapeHtml = (value: string) =>
    value.replace(/[&<>'"]/g, (character) => {
        const entities: Record<string, string> = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }

        return entities[character] ?? character
    })

export default defineEventHandler(async (event) => {
    const body = await readBody<ContactRequest>(event)
    const { name, business, phone, email, specialty, challenge, acceptedPrivacy } = body

    if (
        !name?.trim() ||
        !business?.trim() ||
        !phone?.trim() ||
        !email?.trim() ||
        !specialty?.trim() ||
        !acceptedPrivacy
    ) {
        throw createError({ statusCode: 400, statusMessage: 'Required fields are missing' })
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid email address' })
    }

    const response = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'PRO Contadora <onboarding@resend.dev>',
        to: [process.env.CONTACT_EMAIL || 'erickcabrera0108@gmail.com'],
        replyTo: email.trim(),
        subject: `Nueva solicitud de diagnóstico: ${name.trim()}`,
        html: `
            <h1>Nueva solicitud de diagnóstico confidencial</h1>
            <p><strong>Nombre:</strong> ${escapeHtml(name.trim())}</p>
            <p><strong>Clínica o negocio:</strong> ${escapeHtml(business.trim())}</p>
            <p><strong>Teléfono:</strong> ${escapeHtml(phone.trim())}</p>
            <p><strong>Correo:</strong> ${escapeHtml(email.trim())}</p>
            <p><strong>Especialidad:</strong> ${escapeHtml(specialty.trim())}</p>
            <p><strong>Desafío prioritario:</strong> ${escapeHtml(challenge?.trim() || 'No especificado')}</p>
        `
    })

    if (response.error) {
        throw createError({ statusCode: 500, statusMessage: 'Unable to send email' })
    }

    return { success: true }
})