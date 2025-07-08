"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock } from "lucide-react"

interface PricingProps {
  onWhatsAppClick: () => void;
}

export default function Pricing({ onWhatsAppClick }: PricingProps) {
  const services = [
    {
      service: "3 Custom Reels",
      price: "₹499",
      delivery: "24 hrs",
      features: ["HD Quality", "Trending Audio", "Custom Graphics", "Optimized for IG"],
    },
    {
      service: "Instagram Posters (5)",
      price: "₹399",
      delivery: "1 day",
      features: ["Brand Colors", "High Resolution", "Multiple Formats", "Ready to Post"],
    },
    {
      service: "Wedding Invite Video",
      price: "₹699",
      delivery: "48 hrs",
      features: ["Custom Animation", "Music Included", "Multiple Versions", "HD Export"],
    },
  ]

  return (
    <section id="pricing" className="py-16 px-4 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services & Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">{service.service}</CardTitle>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">{service.price}</div>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  {service.delivery}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" 
                  onClick={onWhatsAppClick}
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
