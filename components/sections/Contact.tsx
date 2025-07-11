"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, MessageCircle, Phone, QrCode } from "lucide-react"

interface ContactProps {
  onWhatsAppClick?: () => void;
}

export default function Contact({ onWhatsAppClick }: ContactProps) {
  // Custom WhatsApp handler with default message
  const handleWhatsAppClick = () => {
    // Default message with URI encoding
    const defaultMessage = encodeURIComponent("Hello! I'm interested in your creative services. Can you help me with my project?");
    const phoneNumber = "917838570981"; // Include country code without +
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Also call the prop function if provided
    if (onWhatsAppClick) {
      onWhatsAppClick();
    }
  };
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
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white inline-block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Let's Work Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Ready to bring your creative vision to life? Reach out and let's create something amazing!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="dark:bg-gray-800/90 dark:border-gray-700 border-none shadow-lg backdrop-blur-sm overflow-hidden relative group hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-24 -right-24 w-40 h-40 bg-purple-500/10 rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-40 h-40 bg-indigo-500/10 rounded-full"></div>
            <CardHeader>
              <CardTitle className="dark:text-white flex items-center text-xl">
                <span className="inline-block w-8 h-8 mr-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">✉️</span>
                Get a Quote
              </CardTitle>
              <CardDescription className="dark:text-gray-300">Tell me about your project and I'll get back to you soon!</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative group">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all pl-10"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                  </div>
                </div>
                
                <div className="relative group">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all pl-10"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                </div>
                
                <div className="relative group">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all pl-10"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                </div>
                
                <div className="relative group">
                  <Input
                    placeholder="Service Needed"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all pl-10"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                  </div>
                </div>
                
                <div className="relative group">
                  <Textarea
                    placeholder="Project Details"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="border-gray-300 dark:border-gray-600 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all pl-10 pt-3"
                  />
                  <div className="absolute left-3 top-4 text-gray-400 dark:text-gray-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><path d="M9 9h1"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Payment */}
          <div className="space-y-6">
            {/* <Card className="dark:bg-gray-800 dark:border-gray-700">
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
            </Card> */}

            <Card className="dark:bg-gray-800/90 dark:border-gray-700 border-none shadow-lg backdrop-blur-sm overflow-hidden relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-24 -right-24 w-40 h-40 bg-indigo-500/10 rounded-full"></div>
              <div className="absolute -bottom-24 -left-24 w-40 h-40 bg-purple-500/10 rounded-full"></div>
              <CardHeader>
                <CardTitle className="dark:text-white flex items-center text-xl">
                  <span className="inline-block w-8 h-8 mr-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">📞</span>
                  Contact Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="dark:text-gray-300 font-medium">+91 7838570981</span>
                </div>
                <div className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="dark:text-gray-300 font-medium">hello@creativestudio.com</span>
                </div>
                <div className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mr-4">
                    <Instagram className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <span className="dark:text-gray-300 font-medium">@creativestudio</span>
                </div>
                <Button onClick={handleWhatsAppClick} className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-md hover:shadow-lg transition-all mt-2 group">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping"></span>
                    </div>
                    <span>Chat on WhatsApp</span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
