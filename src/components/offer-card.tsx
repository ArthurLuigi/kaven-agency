import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { Offer } from "@/data/offers"
import { cn } from "@/lib/utils"

type OfferCardProps = {
  offer: Offer
  variant?: "plan" | "project"
  index?: number
  onSelect: (offer: Offer) => void
}

export function OfferCard({
  offer,
  variant = "plan",
  index = 0,
  onSelect,
}: OfferCardProps) {
  return (
    <Card
      className={cn(
        "offer-card",
        offer.featured && "offer-card-featured",
        variant === "project" && "project-card",
        variant === "project" && `project-card-${index + 1}`,
      )}
    >
      <CardHeader>
        <div className="offer-brand">
          <img src="/logo-kaven-mark.png" alt="" aria-hidden="true" />
          <CardTitle>{offer.title}</CardTitle>
        </div>
        <Separator />
        <div className="price-line">
          <strong>{offer.price}</strong>
          {offer.cadence && <span>{offer.cadence}</span>}
        </div>
        <CardDescription>{offer.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <ul className="feature-list">
          {offer.features.map((feature) => (
            <li key={feature}>
              <span className="feature-check" aria-hidden="true">
                <CheckIcon />
              </span>
              {feature}
            </li>
          ))}
        </ul>
        {variant === "project" && offer.previewImage && (
          <div className="project-visual" aria-hidden="true">
            <img src={offer.previewImage} alt="" />
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button
          className={cn(
            "offer-button",
            variant === "plan" && "offer-button-plan",
            offer.featured ? "accent-button" : "outline-button",
          )}
          onClick={() => onSelect(offer)}
          size="lg"
          variant={offer.featured ? "default" : "outline"}
        >
          {offer.cta}
          {variant === "plan" ? (
            <ArrowRightIcon className="offer-button-arrow" aria-hidden="true" />
          ) : (
            <ArrowUpRightIcon data-icon="inline-end" />
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
