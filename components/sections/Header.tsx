"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])
  
  // Handle smooth scrolling and close mobile menu
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mr-2">
            <Sparkles className="h-5 w-5 text-white"/>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Creative Studio</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('portfolio') }}>Portfolio</a>
          <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('services') }}>Services</a>
          <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('pricing') }}>Pricing</a>
          <ThemeToggle />
          <Button 
            onClick={() => handleNavClick('contact')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            size="sm"
          >
            Contact Us
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden relative overflow-hidden group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-md"></span>
          {mobileMenuOpen ? 
            <X className="h-5 w-5 relative z-10 text-indigo-600 dark:text-indigo-400" /> : 
            <Menu className="h-5 w-5 relative z-10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
          }
        </Button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b dark:border-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col p-4 space-y-4">
            <a 
              href="#portfolio" 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" 
              onClick={(e) => { e.preventDefault(); handleNavClick('portfolio') }}
            >
              Portfolio
            </a>
            <a 
              href="#services" 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" 
              onClick={(e) => { e.preventDefault(); handleNavClick('services') }}
            >
              Services
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" 
              onClick={(e) => { e.preventDefault(); handleNavClick('pricing') }}
            >
              Pricing
            </a>
            <div className="flex items-center justify-between py-2 px-4">
              <span className="text-gray-700 dark:text-gray-300">Theme</span>
              <ThemeToggle />
            </div>
            <Button 
              onClick={() => handleNavClick('contact')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
    </header>
  )
}
