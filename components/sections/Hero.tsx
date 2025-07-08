"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 px-4 text-center bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
            <Sparkles className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Creative Studio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Hi! I help businesses grow online with stunning Instagram Reels, posters, and videos that capture
            attention and drive engagement.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            size="lg"
          >
            Get Started
          </Button>
          <Button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline" 
            size="lg"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
