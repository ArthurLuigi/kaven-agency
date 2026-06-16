import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { LeadForm } from "@/components/lead-form"

const { toastInfo, toastSuccess, sendWhatsAppMock } = vi.hoisted(() => ({
  toastInfo: vi.fn(),
  toastSuccess: vi.fn(),
  sendWhatsAppMock: vi.fn(),
}))

vi.mock("sonner", () => {
  return { toast: { info: toastInfo, success: toastSuccess } }
})

vi.mock("@/lib/lead", async () => {
  const actual = await vi.importActual<typeof import("@/lib/lead")>("@/lib/lead")
  return {
    ...actual,
    sendWhatsAppMessage: sendWhatsAppMock,
  }
})

describe("LeadForm", () => {
  beforeEach(() => {
    toastInfo.mockClear()
    toastSuccess.mockClear()
    sendWhatsAppMock.mockReset()
    sendWhatsAppMock.mockResolvedValue({ mode: "copied" })
  })

  it("mostra validação para envio vazio", async () => {
    const user = userEvent.setup()
    render(<LeadForm />)

    await user.click(
      screen.getByRole("button", { name: /enviar briefing pelo whatsapp/i }),
    )

    expect(await screen.findByText("Informe seu nome.")).toBeInTheDocument()
    expect(screen.getByText("Informe um WhatsApp válido.")).toBeInTheDocument()
    expect(screen.getByText("Selecione uma solução.")).toBeInTheDocument()
  })

  it("pré-seleciona a oferta e copia a mensagem no fallback", async () => {
    const user = userEvent.setup()
    render(<LeadForm selectedOffer="KAVEN GROWTH" />)

    expect(screen.getByTestId("selected-offer")).toHaveTextContent("KAVEN GROWTH")

    await user.type(screen.getByLabelText("Nome"), "Ana Souza")
    await user.type(screen.getByLabelText("WhatsApp"), "(11) 99999-9999")
    await user.click(screen.getByLabelText("Aceito ser contatado pela Kaven Agency."))
    await user.click(
      screen.getByRole("button", { name: /enviar briefing pelo whatsapp/i }),
    )

    await waitFor(() => expect(sendWhatsAppMock).toHaveBeenCalled())
    expect(sendWhatsAppMock.mock.calls[0][0].message).toContain(
      "Oferta de interesse: KAVEN GROWTH",
    )
    expect(toastInfo).toHaveBeenCalled()
  })
})
