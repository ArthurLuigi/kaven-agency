import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { OfferCard } from "@/components/offer-card"
import { growthPlans } from "@/data/offers"

describe("OfferCard", () => {
  it("retorna a oferta selecionada pelo CTA", async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()
    const offer = growthPlans[1]

    render(<OfferCard offer={offer} onSelect={onSelect} />)
    await user.click(screen.getByRole("button", { name: /escolher growth/i }))

    expect(onSelect).toHaveBeenCalledWith(offer)
  })

  it("mantém o escopo adicional acessível em detalhes expansíveis", async () => {
    const user = userEvent.setup()
    const offer = growthPlans[1]

    render(<OfferCard offer={offer} onSelect={vi.fn()} />)

    const details = screen.getByText("Ver tudo que está incluso").closest("details")
    expect(details).not.toHaveAttribute("open")

    await user.click(screen.getByText("Ver tudo que está incluso"))

    expect(details).toHaveAttribute("open")
    expect(screen.getByText("Suporte prioritário")).toBeInTheDocument()
    expect(screen.getByText(offer.idealFor)).toBeInTheDocument()
  })
})
