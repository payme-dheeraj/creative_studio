"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Instagram, Play, FileImage, Video, Clock, CheckCircle, Phone, Mail, QrCode } from "lucide-react"

export default function PortfolioPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("Name", formData.name)
      formDataToSend.append("Email", formData.email)
      formDataToSend.append("Phone", formData.phone)
      formDataToSend.append("Service", formData.service)
      formDataToSend.append("Message", formData.message)
      formDataToSend.append("Timestamp", new Date().toLocaleString())

      const res = await fetch("https://script.google.com/macros/s/AKfycbw2bCSJ0gk7JAZ78CkSHNmr9On8m5-7e15AdRBVuFvrv4NeIsXaSgnLYbiVErPz7Pk/exec", {
        method: "POST",
        body: formDataToSend,
      })

      if (!res.ok) throw new Error("Failed to submit form")

      alert("Thank you! Your message has been sent successfully. I'll get back to you soon.")
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    } catch (err) {
      console.error(err)
      alert("Sorry, there was an error sending your message. Please try WhatsApp instead.")
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your creative services. Can we discuss my requirements?")
    window.open(`https://wa.me/917838570981?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsApp}
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Video className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Creative Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Hi! I help businesses grow online with stunning Instagram Reels, posters, and videos that capture
              attention and drive engagement.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Instagram className="h-4 w-4 mr-2" />
              Instagram Reels
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <FileImage className="h-4 w-4 mr-2" />
              Social Media Posters
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Video className="h-4 w-4 mr-2" />
              Wedding Invites
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleWhatsApp} size="lg" className="bg-green-500 hover:bg-green-600">
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat on WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "Reel", title: "Product Launch Reel", category: "Instagram Content", image: "/portfolio/reel1.jpg" },
              { type: "Poster", title: "Event Promotion", category: "Social Media", image: "/portfolio/poster1.jpg" },
              { type: "Video", title: "Wedding Invitation", category: "Special Occasions", image: "/portfolio/video1.jpg" },
              { type: "Reel", title: "Brand Story Reel", category: "Instagram Content", image: "/portfolio/reel2.jpg" },
              { type: "Poster", title: "Festival Greetings", category: "Social Media", image: "/portfolio/poster2.jpg" },
              { type: "Video", title: "Business Promo", category: "Marketing", image: "/portfolio/video2.jpg" },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <Play className="h-12 w-12 text-white opacity-80" />
                    </div>
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2">
                      {item.type}
                    </Badge>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services & Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
            ].map((service, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-2">{service.service}</CardTitle>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{service.price}</div>
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
                  <Button className="w-full" onClick={handleWhatsApp}>
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Payment Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Let's Work Together</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Get a Quote</CardTitle>
                <CardDescription>Tell me about your project and I'll get back to you soon!</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Service Needed"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Project Details"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Payment & Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <QrCode className="h-5 w-5 mr-2" />
                    Quick Payment
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-gray-100 p-6 rounded-lg mb-4">
                    <img src="/placeholder.svg?height=150&width=150" alt="UPI QR Code" className="mx-auto mb-4" />
                    <p className="text-sm text-gray-600 mb-2">Scan to Pay via UPI</p>
                    <p className="font-mono text-sm">creativestudio@upi</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 bg-transparent" size="sm">
                      Razorpay Link
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent" size="sm">
                      PayU Link
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-gray-500" />
                    <span>+91 7838570981</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-gray-500" />
                    <span>hello@creativestudio.com</span>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 mr-3 text-gray-500" />
                    <span>@creativestudio</span>
                  </div>
                  <Button onClick={handleWhatsApp} className="w-full bg-green-500 hover:bg-green-600">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">© 2024 Creative Studio. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Helping businesses grow with creative content that converts</p>
        </div>
      </footer>
    </div>
  )
}
