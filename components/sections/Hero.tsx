"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative py-12 md:py-20 px-4 text-center bg-gradient-to-br from-indigo-50 via-purple-50 to-white dark:from-gray-900 dark:via-indigo-950 dark:to-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
            <Sparkles className="h-12 w-12 md:h-16 md:w-16 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 md:mb-4">
            Creative Studio
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
            Hi! I help businesses grow online with stunning Instagram Reels, posters, and videos that capture
            attention and drive engagement.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            size="lg"
          >
            Get Started
          </Button>
          {/* <Button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline" 
            size="lg"
          >
            View Portfolio
          </Button> */}
        </div>
      </div>
    </section>
  )
}
