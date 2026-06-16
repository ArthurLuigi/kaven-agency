import { z } from "zod"

export const solutionOptions = [
  { value: "recurring", label: "Plano recorrente" },
  { value: "landing-page", label: "Landing Page" },
  { value: "branding", label: "Branding" },
  { value: "website", label: "Website completo" },
  { value: "undecided", label: "Ainda não sei" },
] as const

export const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  company: z.string().trim().optional(),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Informe um WhatsApp válido.")
    .regex(/^[\d\s()+-]+$/, "Use apenas números e símbolos de telefone."),
  solution: z.string().min(1, "Selecione uma solução."),
  objective: z.string().trim().max(500, "Use no máximo 500 caracteres.").optional(),
  consent: z.boolean().refine((value) => value, {
    message: "Autorize o contato para enviar o briefing.",
  }),
})

export type LeadFormValues = z.infer<typeof leadFormSchema>

export function solutionForOffer(offerTitle?: string) {
  if (!offerTitle) return ""
  if (
    offerTitle.includes("START") ||
    offerTitle.includes("GROWTH") ||
    offerTitle.includes("DOMINANCE")
  ) {
    return "recurring"
  }
  if (offerTitle.includes("BRAND")) return "branding"
  if (offerTitle.includes("EMPIRE")) return "website"
  return "landing-page"
}

export function buildLeadMessage(values: LeadFormValues, selectedOffer?: string) {
  const solution =
    solutionOptions.find((option) => option.value === values.solution)?.label ??
    values.solution

  return [
    "Olá, Kaven Agency! Quero conversar sobre uma estrutura digital.",
    "",
    `Nome: ${values.name}`,
    values.company ? `Empresa: ${values.company}` : null,
    `WhatsApp: ${values.whatsapp}`,
    `Solução: ${solution}`,
    selectedOffer ? `Oferta de interesse: ${selectedOffer}` : null,
    values.objective ? `Objetivo: ${values.objective}` : null,
  ]
    .filter(Boolean)
    .join("\n")
}

export function buildDirectMessage(selectedOffer?: string) {
  return selectedOffer
    ? `Olá, Kaven Agency! Quero saber mais sobre ${selectedOffer}.`
    : "Olá, Kaven Agency! Quero entender qual estrutura digital faz sentido para minha empresa."
}

export function normalizeWhatsAppNumber(number?: string) {
  return number?.replace(/\D/g, "") ?? ""
}

export function createWhatsAppUrl(message: string, number?: string) {
  const normalizedNumber = normalizeWhatsAppNumber(number)
  if (!normalizedNumber) return null
  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`
}

type SendWhatsAppOptions = {
  message: string
  number?: string
  openWindow?: (url: string) => void
  copyText?: (text: string) => Promise<void>
}

export async function sendWhatsAppMessage({
  message,
  number,
  openWindow = (url) => window.open(url, "_blank", "noopener,noreferrer"),
  copyText = (text) => navigator.clipboard.writeText(text),
}: SendWhatsAppOptions) {
  const url = createWhatsAppUrl(message, number)

  if (url) {
    openWindow(url)
    return { mode: "opened" as const, url }
  }

  await copyText(message)
  return { mode: "copied" as const }
}
