import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  ChevronDownIcon,
  Clock3Icon,
  TargetIcon,
} from "lucide-react"

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
  const visibleFeatures = offer.features.slice(0, 4)
  const additionalFeatures = offer.features.slice(4)

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
          {visibleFeatures.map((feature) => (
            <li key={feature}>
              <span className="feature-check" aria-hidden="true">
                <CheckIcon />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        {additionalFeatures.length > 0 && (
          <details className="offer-details">
            <summary>
              <span>Ver tudo que está incluso</span>
              <ChevronDownIcon aria-hidden="true" />
            </summary>
            <div className="offer-details-content">
              <ul className="feature-list feature-list-additional">
                {additionalFeatures.map((feature) => (
                  <li key={feature}>
                    <span className="feature-check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        )}

        <div className="offer-context">
          <p>
            <TargetIcon aria-hidden="true" />
            <span>
              <strong>Ideal para</strong>
              {offer.idealFor}
            </span>
          </p>
          {offer.deliveryTime && (
            <p>
              <Clock3Icon aria-hidden="true" />
              <span>
                <strong>Prazo de entrega</strong>
                {offer.deliveryTime}
              </span>
            </p>
          )}
        </div>

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
