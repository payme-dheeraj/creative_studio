"use client"

import { useState } from "react"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import Portfolio from "@/components/sections/Portfolio"
import Services from "@/components/sections/Services"
import Pricing from "@/components/sections/Pricing"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"
import WhatsAppButton from "@/components/sections/WhatsAppButton"

export default function PortfolioPage() {
  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917838570981", "Hello! I'm interested in your creative services. Can you help me with my project?")
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Portfolio Section */}
      <Portfolio />
      
      {/* Services Section */}
      <Services />
      
      {/* Pricing Section */}
      <Pricing onWhatsAppClick={handleWhatsAppClick} />
      
      {/* Contact Section */}
      <Contact onWhatsAppClick={handleWhatsAppClick} />
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton onClick={handleWhatsAppClick} />
    </main>
  )
}