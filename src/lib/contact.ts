export const contactConfig = {
  whatsappNumber:
    import.meta.env.VITE_WHATSAPP_NUMBER || "+55 12 99231-8358",
  instagramUrl:
    import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/kavenagency/",
  email:
    import.meta.env.VITE_CONTACT_EMAIL || "contato.kavenagency@gmail.com",
} as const
