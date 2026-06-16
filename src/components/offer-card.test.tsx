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
})
