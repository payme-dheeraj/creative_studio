"use client"

import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  onClick: () => void;
}

export default function WhatsAppButton({ onClick }: WhatsAppButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  )
}
