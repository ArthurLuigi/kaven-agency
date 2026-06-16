import {
  BarChart3Icon,
  BoltIcon,
  CrosshairIcon,
  PenToolIcon,
  RocketIcon,
  TargetIcon,
  UserRoundIcon,
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Estratégia",
    description: "diagnóstico, posicionamento e plano de crescimento",
    icon: TargetIcon,
  },
  {
    number: "02",
    title: "Criação",
    description: "branding, conteúdo e interfaces",
    icon: PenToolIcon,
  },
  {
    number: "03",
    title: "Performance",
    description: "mídia, funis e otimização",
    icon: BarChart3Icon,
  },
  {
    number: "04",
    title: "Evolução",
    description: "dados, suporte e escala",
    icon: RocketIcon,
  },
]

const differentiators = [
  { label: "Foco em conversão", icon: CrosshairIcon },
  { label: "Entrega rápida", icon: BoltIcon },
  { label: "Atendimento humanizado", icon: UserRoundIcon },
  { label: "Transparência nos resultados", icon: BarChart3Icon },
]

export function MethodSection() {
  return (
    <section className="method-section section-pad" id="metodo">
      <div className="method-background" aria-hidden="true" />
      <div className="page-shell">
        <div className="method-grid">
          <div className="section-copy reveal">
            <h2>Tudo o que sua empresa precisa. Uma única operação.</h2>
            <p>
              Conectamos estratégia, criação, mídia e tecnologia para transformar
              investimento em ativos digitais e oportunidades reais.
            </p>
            <a className="text-link" href="#contato">
              Conhecer nosso método
            </a>
          </div>

          <ol className="process-list reveal">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <li key={step.number}>
                  <span className="process-icon">
                    <Icon />
                  </span>
                  <strong>{step.number}</strong>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="differentiator-rail" id="diferenciais">
          {differentiators.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label}>
                <Icon />
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>

        <blockquote>
          “Construímos ativos digitais que impulsionam negócios para o próximo nível.”
        </blockquote>
      </div>
    </section>
  )
}
