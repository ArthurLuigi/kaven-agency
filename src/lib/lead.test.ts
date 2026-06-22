import { describe, expect, it, vi } from "vitest"

import {
  buildLeadMessage,
  createWhatsAppUrl,
  leadFormSchema,
  sendWhatsAppMessage,
  solutionForOffer,
} from "@/lib/lead"

const validLead = {
  name: "Ana Souza",
  company: "Empresa Exemplo",
  whatsapp: "(11) 99999-9999",
  solution: "recurring",
  objective: "Escalar a geração de oportunidades.",
  consent: true,
}

describe("leadFormSchema", () => {
  it("aceita um lead válido", () => {
    expect(leadFormSchema.safeParse(validLead).success).toBe(true)
  })

  it("exige nome, WhatsApp, solução e consentimento", () => {
    const result = leadFormSchema.safeParse({
      name: "",
      company: "",
      whatsapp: "",
      solution: "",
      objective: "",
      consent: false,
    })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues.map((issue) => issue.path[0])).toEqual(
        expect.arrayContaining(["name", "whatsapp", "solution", "consent"]),
      )
    }
  })
})

describe("mensagem de WhatsApp", () => {
  it("mapeia os novos nomes comerciais para a solução correta", () => {
    expect(solutionForOffer("KAVEN SCALE")).toBe("recurring")
    expect(solutionForOffer("KAVEN BRAND")).toBe("branding")
    expect(solutionForOffer("KAVEN BUSINESS")).toBe("website")
    expect(solutionForOffer("KAVEN WEB")).toBe("landing-page")
  })

  it("inclui dados e oferta selecionada", () => {
    const message = buildLeadMessage(validLead, "KAVEN GROWTH")

    expect(message).toContain("Nome: Ana Souza")
    expect(message).toContain("Solução: Plano recorrente")
    expect(message).toContain("Oferta de interesse: KAVEN GROWTH")
  })

  it("gera URL somente quando existe número configurado", () => {
    expect(createWhatsAppUrl("Olá", "")).toBeNull()
    expect(createWhatsAppUrl("Olá", "+55 (11) 99999-9999")).toBe(
      "https://wa.me/5511999999999?text=Ol%C3%A1",
    )
  })

  it("copia a mensagem quando não existe número configurado", async () => {
    const copyText = vi.fn().mockResolvedValue(undefined)
    const openWindow = vi.fn()

    const result = await sendWhatsAppMessage({
      message: "Briefing",
      number: "",
      copyText,
      openWindow,
    })

    expect(result.mode).toBe("copied")
    expect(copyText).toHaveBeenCalledWith("Briefing")
    expect(openWindow).not.toHaveBeenCalled()
  })
})
