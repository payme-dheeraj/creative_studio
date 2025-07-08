"use client"

import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Creative Studio
            </h3>
            <p className="text-gray-600 mt-2">
              Elevating brands through creative social media content
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/creativestudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Creative Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
