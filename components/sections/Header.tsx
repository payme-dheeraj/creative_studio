"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mr-2">
            <Sparkles className="h-5 w-5 text-white"/>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Creative Studio</span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}>Portfolio</a>
          <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}>Services</a>
          <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) }}>Pricing</a>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            size="sm"
          >
            Contact Us
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
