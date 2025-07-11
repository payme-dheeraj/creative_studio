"use client"

import { Instagram, Facebook, Twitter, Linkedin, Mail, MapPin, Phone, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  // Handle smooth scrolling
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="pt-16 pb-8 px-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-200 dark:bg-indigo-900/20 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-200 dark:bg-purple-900/20 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <div 
              className="flex items-center mb-4 cursor-pointer group" 
              onClick={() => handleNavClick('hero')}
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                <Sparkles className="h-4 w-4 text-white"/>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                Creative Studio
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Elevating brands through creative social media content. We help businesses grow their online presence with engaging and professional content.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/creativestudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white hover:opacity-90 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              {/* <a 
                href="https://facebook.com/creativestudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white hover:opacity-90 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a> */}
              {/* <a 
                href="https://twitter.com/creativestudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white hover:opacity-90 transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com/company/creativestudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white hover:opacity-90 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a> */}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#portfolio" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('portfolio') }}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight className="h-3 w-3 mr-1" /> Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('services') }}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight className="h-3 w-3 mr-1" /> Services
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('pricing') }}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight className="h-3 w-3 mr-1" /> Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center text-sm"
                >
                  <ChevronRight className="h-3 w-3 mr-1" /> Contact
                </a>
              </li>
            </ul>
          </div>
          
          
          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">New Delhi</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">+91 7838570981</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">hello@creativestudio.com</span>
                </div>
              </li>
              <li className="pt-2">
                <Button 
                  onClick={() => handleNavClick('contact')}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-xs h-8 px-3"
                  size="sm"
                >
                  Get In Touch
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Creative Studio. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            Designed with <span className="text-red-500">♥</span> by Creative Studio Team
          </p>
        </div>
      </div>
    </footer>
  )
}
