import { TerminAnfrage } from "./termin-schemas"

const PHONE_NUMBER = "41791976484" // Lia's WhatsApp number

export function generateWhatsAppMessage(data: TerminAnfrage): string {
  const message = `Hallo Lia! 👋

Ich mochte gerne einen Termin vereinbaren:

👤 Name: ${data.name}
💭 Wunsche: ${data.wuensche}
📅 Termin: ${data.termin}

📸 Ich sende dir gleich:
• 2-3 Fotos meiner aktuellen Frisur (vorne, seitlich, hinten)
• Falls vorhanden: ein Inspirationsfoto von dem Look, den ich mir vorstelle

Vielen Dank! 😊`

  return message
}

export function generateWhatsAppURL(data: TerminAnfrage): string {
  const message = generateWhatsAppMessage(data)
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`
}

export function openWhatsApp(data: TerminAnfrage): void {
  const url = generateWhatsAppURL(data)
  
  // Open in new tab/window
  window.open(url, '_blank', 'noopener,noreferrer')
}