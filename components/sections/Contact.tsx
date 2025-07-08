"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, MessageCircle, Phone, QrCode } from "lucide-react"

interface ContactProps {
  onWhatsAppClick: () => void;
}

export default function Contact({ onWhatsAppClick }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting the form. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Let's Work Together</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Get a Quote</CardTitle>
              <CardDescription className="dark:text-gray-300">Tell me about your project and I'll get back to you soon!</CardDescription>
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
                <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Payment */}
          <div className="space-y-6">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <QrCode className="h-5 w-5 mr-2" />
                  Quick Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg mb-4">
                  <img src="/image.png?height=150&width=150" alt="UPI QR Code" className="mx-auto mb-4" />
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Scan to Pay via UPI</p>
                  <p className="font-mono text-sm dark:text-gray-300">creativestudio@upi</p>
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

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
                  <span className="dark:text-gray-300">+91 7838570981</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
                  <span className="dark:text-gray-300">hello@creativestudio.com</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
                  <span className="dark:text-gray-300">@creativestudio</span>
                </div>
                <Button onClick={onWhatsAppClick} className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
