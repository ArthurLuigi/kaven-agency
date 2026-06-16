export type OfferCategory = "recurring" | "project"

export type Offer = {
  id: string
  title: string
  price: string
  cadence?: string
  description: string
  features: string[]
  cta: string
  category: OfferCategory
  featured?: boolean
  previewImage?: string
}

export const growthPlans: Offer[] = [
  {
    id: "start",
    title: "KAVEN START",
    price: "R$ 997",
    cadence: "/mês",
    description: "Ideal para empresas iniciando no digital.",
    features: [
      "Gestão de Meta Ads",
      "1 campanha ativa",
      "8 artes mensais",
      "Ajustes semanais",
      "Suporte via WhatsApp",
    ],
    cta: "Começar com Start",
    category: "recurring",
  },
  {
    id: "growth",
    title: "KAVEN GROWTH",
    price: "R$ 1.997",
    cadence: "/mês",
    description: "Para empresas que querem escalar resultados.",
    features: [
      "Meta Ads + Google Ads",
      "Até 4 campanhas",
      "Funil + remarketing",
      "12 artes + 4 vídeos",
      "Reunião estratégica",
    ],
    cta: "Escolher Growth",
    category: "recurring",
    featured: true,
  },
  {
    id: "dominance",
    title: "KAVEN DOMINANCE",
    price: "R$ 3.997",
    cadence: "/mês",
    description: "Para empresas que desejam liderar o mercado.",
    features: [
      "Estratégias avançadas de escala",
      "Funis personalizados",
      "Dashboard em tempo real",
      "20 artes + 8 vídeos",
      "Consultoria e suporte VIP",
    ],
    cta: "Falar sobre Dominance",
    category: "recurring",
  },
]

export const implementationProjects: Offer[] = [
  {
    id: "launch",
    title: "KAVEN LAUNCH",
    price: "R$ 1.997",
    description: "Sua empresa pronta para vender.",
    features: [
      "Landing Page profissional",
      "Copy estratégica",
      "Design responsivo",
      "Integração com WhatsApp",
      "Entrega em até 10 dias",
    ],
    cta: "Lançar meu projeto",
    category: "project",
    previewImage: "/project-launch-preview.svg",
  },
  {
    id: "brand-pro",
    title: "KAVEN BRAND PRO",
    price: "R$ 3.997",
    description: "Construindo marcas fortes.",
    features: [
      "Tudo do Kaven Launch",
      "Logotipo profissional",
      "Identidade visual completa",
      "Manual básico da marca",
      "Domínio configurado",
    ],
    cta: "Construir minha marca",
    category: "project",
    previewImage: "/project-brand-preview.svg",
  },
  {
    id: "empire",
    title: "KAVEN EMPIRE",
    price: "R$ 7.997",
    description: "Estrutura completa para crescer sem limites.",
    features: [
      "Website premium ou Landing Page avançada",
      "Identidade visual completa",
      "Naming e pesquisa de viabilidade",
      "SEO + métricas + integrações",
      "30 dias de suporte",
    ],
    cta: "Criar minha estrutura",
    category: "project",
    featured: true,
    previewImage: "/project-empire-preview.svg",
  },
]

export const allOffers = [...growthPlans, ...implementationProjects]
