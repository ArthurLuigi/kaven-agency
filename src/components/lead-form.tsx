import { zodResolver } from "@hookform/resolvers/zod"
import {
  ArrowRightIcon,
  CameraIcon,
  CheckCircle2Icon,
  Clock3Icon,
  MailIcon,
  MessageCircleIcon,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import { BrandMark } from "@/components/brand-mark"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  buildDirectMessage,
  buildLeadMessage,
  leadFormSchema,
  sendWhatsAppMessage,
  solutionForOffer,
  solutionOptions,
  type LeadFormValues,
} from "@/lib/lead"

type LeadFormProps = {
  selectedOffer?: string
}

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textarea = document.createElement("textarea")
  textarea.value = text
  textarea.style.position = "fixed"
  textarea.style.opacity = "0"
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  textarea.remove()
}

export function LeadForm({ selectedOffer }: LeadFormProps) {
  const [messageReady, setMessageReady] = useState(false)
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      company: "",
      whatsapp: "",
      solution: solutionForOffer(selectedOffer),
      objective: "",
      consent: false,
    },
  })

  useEffect(() => {
    const solution = solutionForOffer(selectedOffer)
    if (solution) {
      setValue("solution", solution, { shouldDirty: true, shouldValidate: true })
    }
  }, [selectedOffer, setValue])

  async function deliverMessage(message: string) {
    const result = await sendWhatsAppMessage({
      message,
      number: whatsappNumber,
      copyText: copyToClipboard,
    })

    if (result.mode === "copied") {
      toast.info("Mensagem copiada. Configure o número do WhatsApp para abrir a conversa automaticamente.")
    } else {
      toast.success("Briefing pronto. Abrimos uma nova conversa no WhatsApp.")
    }

    setMessageReady(true)
  }

  const onSubmit = handleSubmit(async (values) => {
    await deliverMessage(buildLeadMessage(values, selectedOffer))
  })

  const openDirectContact = async () => {
    await deliverMessage(buildDirectMessage(selectedOffer))
  }

  return (
    <section className="contact-section" id="contato">
      <div className="contact-beam" aria-hidden="true" />
      <div className="page-shell contact-grid">
        <div className="contact-copy reveal">
          <h2>Pronto para vender mais online?</h2>
          <p>
            Conte um pouco sobre o seu momento. Nós transformamos o briefing em
            uma conversa objetiva no WhatsApp.
          </p>
          <Button
            className="accent-button direct-contact"
            onClick={openDirectContact}
            size="lg"
          >
            <MessageCircleIcon data-icon="inline-start" />
            Falar agora no WhatsApp
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
          <span className="business-hours">
            <Clock3Icon />
            Resposta em horário comercial
          </span>
        </div>

        <form className="lead-form reveal" onSubmit={onSubmit} noValidate>
          {selectedOffer && (
            <div className="selected-offer" data-testid="selected-offer">
              <span>Oferta selecionada</span>
              <strong>{selectedOffer}</strong>
            </div>
          )}

          <FieldSet>
            <FieldLegend className="sr-only">Solicite uma conversa estratégica</FieldLegend>
            <FieldGroup>
              <div className="form-row">
                <Field data-invalid={Boolean(errors.name)}>
                  <FieldLabel htmlFor="name">Nome</FieldLabel>
                  <Input
                    id="name"
                    autoComplete="name"
                    placeholder="Seu nome completo"
                    aria-invalid={Boolean(errors.name)}
                    {...register("name")}
                  />
                  <FieldError errors={[errors.name]} />
                </Field>

                <Field data-invalid={Boolean(errors.company)}>
                  <FieldLabel htmlFor="company">Empresa</FieldLabel>
                  <Input
                    id="company"
                    autoComplete="organization"
                    placeholder="Nome da sua empresa"
                    aria-invalid={Boolean(errors.company)}
                    {...register("company")}
                  />
                  <FieldError errors={[errors.company]} />
                </Field>
              </div>

              <div className="form-row">
                <Field data-invalid={Boolean(errors.whatsapp)}>
                  <FieldLabel htmlFor="whatsapp">WhatsApp</FieldLabel>
                  <Input
                    id="whatsapp"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(11) 99999-9999"
                    aria-invalid={Boolean(errors.whatsapp)}
                    {...register("whatsapp")}
                  />
                  <FieldError errors={[errors.whatsapp]} />
                </Field>

                <Controller
                  control={control}
                  name="solution"
                  render={({ field }) => (
                    <Field data-invalid={Boolean(errors.solution)}>
                      <FieldLabel htmlFor="solution">Qual solução você procura?</FieldLabel>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger
                          id="solution"
                          aria-invalid={Boolean(errors.solution)}
                          className="solution-trigger"
                        >
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent position="popper" align="start">
                          <SelectGroup>
                            {solutionOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FieldError errors={[errors.solution]} />
                    </Field>
                  )}
                />
              </div>

              <Field data-invalid={Boolean(errors.objective)}>
                <FieldLabel htmlFor="objective">Conte brevemente seu objetivo</FieldLabel>
                <Textarea
                  id="objective"
                  placeholder="Fale sobre seu momento, desafios e objetivos..."
                  aria-invalid={Boolean(errors.objective)}
                  maxLength={500}
                  {...register("objective")}
                />
                <FieldError errors={[errors.objective]} />
              </Field>

              <Controller
                control={control}
                name="consent"
                render={({ field }) => (
                  <Field
                    data-invalid={Boolean(errors.consent)}
                    orientation="horizontal"
                    className="consent-field"
                  >
                    <Checkbox
                      id="consent"
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked === true)}
                      aria-invalid={Boolean(errors.consent)}
                    />
                    <FieldContent>
                      <FieldLabel htmlFor="consent">
                        Aceito ser contatado pela Kaven Agency.
                      </FieldLabel>
                      <FieldError errors={[errors.consent]} />
                    </FieldContent>
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>

          <Button
            className="accent-button submit-button"
            disabled={isSubmitting}
            size="lg"
            type="submit"
          >
            <MessageCircleIcon data-icon="inline-start" />
            {isSubmitting ? "Preparando briefing..." : "Enviar briefing pelo WhatsApp"}
          </Button>

          {messageReady && (
            <div className="form-success" role="status">
              <CheckCircle2Icon />
              Mensagem pronta para continuar a conversa.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export function SiteFooter() {
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL
  const email = import.meta.env.VITE_CONTACT_EMAIL
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "")

  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div className="footer-brand">
          <BrandMark />
          <p>Performance. Branding. Crescimento.</p>
        </div>

        <nav aria-label="Links do rodapé">
          <a href="#planos">Planos</a>
          <a href="#projetos">Projetos</a>
          <a href="#diferenciais">Diferenciais</a>
        </nav>

        <div className="footer-contact">
          <a href={instagramUrl || "#contato"} aria-label="Instagram">
            <CameraIcon />
            Instagram
          </a>
          <a
            href={whatsappNumber ? `https://wa.me/${whatsappNumber}` : "#contato"}
            aria-label="WhatsApp"
          >
            <MessageCircleIcon />
            WhatsApp
          </a>
          <a href={email ? `mailto:${email}` : "#contato"} aria-label="E-mail">
            <MailIcon />
            E-mail
          </a>
        </div>
      </div>
      <div className="page-shell footer-legal">
        © 2026 Kaven Agency. Todos os direitos reservados.
      </div>
    </footer>
  )
}
