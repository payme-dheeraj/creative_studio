"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Instagram, Play, FileImage, Video, Clock, CheckCircle, Phone, Mail, QrCode, Palette, Image as ImageIcon, PenTool, Layers, Download, X } from "lucide-react"
// import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"

// Portfolio item type definition
type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  type: string;
  thumbnail: string;
  description: string;
  videoUrl?: string;
}

export default function PortfolioPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  
  // Portfolio items data
  const portfolioItems: PortfolioItem[] = [
    // Videos
    {
      id: "video1",
      title: "Wedding Invitation",
      category: "video",
      type: "Video",
      thumbnail: "/portfolio/video1.jpg",
      description: "Special Occasions",
      videoUrl: "/portfolio/videos/wedding-invitation.mp4"
    },
    {
      id: "video2",
      title: "Corporate Overview",
      category: "video",
      type: "Video",
      thumbnail: "/portfolio/video2.jpg",
      description: "Business Promotion",
      videoUrl: "/portfolio/videos/corporate-overview.mp4"
    },
    {
      id: "video3",
      title: "Product Demo",
      category: "video",
      type: "Video",
      thumbnail: "/portfolio/video1.jpg",
      description: "E-Commerce",
      videoUrl: "/portfolio/videos/video3.mp4"
      // videoUrl: "/portfolio/videos/product-demo.mp4"
    },
    
    // Reels
    {
      id: "reel1",
      title: "Product Launch",
      category: "reel",
      type: "Reel",
      thumbnail: "/portfolio/reel1.jpg",
      description: "Instagram Content",
      videoUrl: "/portfolio/reels/product-launch.mp4"
    },
    {
      id: "reel2",
      title: "Brand Story",
      category: "reel",
      type: "Reel",
      thumbnail: "/portfolio/reel2.jpg",
      description: "Instagram Content",
      videoUrl: "/portfolio/reels/brand-story.mp4"
    },
    {
      id: "reel3",
      title: "Festival Greetings",
      category: "reel",
      type: "Reel",
      thumbnail: "/portfolio/reel1.jpg",
      description: "Social Media",
      videoUrl: "/portfolio/reels/festival-greetings.mp4"
    },
    
    // Posters
    {
      id: "poster1",
      title: "Event Promotion",
      category: "poster",
      type: "Poster",
      thumbnail: "/portfolio/posters/poster1.png",
      description: "Social Media"
    },
    {
      id: "poster2",
      title: "Sale Announcement",
      category: "poster",
      type: "Poster",
      thumbnail: "/portfolio/poster2.jpg",
      description: "E-Commerce"
    },
    {
      id: "poster3",
      title: "Restaurant Menu",
      category: "poster",
      type: "Poster",
      thumbnail: "/portfolio/posters/poster1.png",
      description: "Food & Beverage"
    },
    
    // Logos
    {
      id: "logo1",
      title: "Brand Identity",
      category: "logo",
      type: "Logo",
      thumbnail: "/portfolio/logos/logo1.png",
      description: "Corporate Branding"
    },
    {
      id: "logo2",
      title: "Startup Logo",
      category: "logo",
      type: "Logo",
      thumbnail: "/portfolio/logos/logo2.png",
      description: "Tech Company"
    },
    {
      id: "logo3",
      title: "Restaurant Branding",
      category: "logo",
      type: "Logo",
      thumbnail: "/portfolio/logos/logo1.png",
      description: "Food & Beverage"
    },
    
    // Thumbnails
    {
      id: "thumbnail1",
      title: "YouTube Series",
      category: "thumbnail",
      type: "Thumbnail",
      thumbnail: "/portfolio/thumbnails/thumb1.jpg",
      description: "Content Creation"
    },
    {
      id: "thumbnail2",
      title: "Tutorial Thumbnail",
      category: "thumbnail",
      type: "Thumbnail",
      thumbnail: "/portfolio/thumbnails/thumb2.jpg",
      description: "Educational Content"
    },
    {
      id: "thumbnail3",
      title: "Podcast Cover",
      category: "thumbnail",
      type: "Thumbnail",
      thumbnail: "/portfolio/thumbnails/thumb1.jpg",
      description: "Audio Content"
    }
  ]
  
  // Filter portfolio items based on active category
  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

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
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <Video className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
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
      <section id="portfolio" className="py-16 px-4 bg-gradient-to-br from-white to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Recent Work</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">A showcase of our creative projects across various media formats</p>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("all")}
              className={`flex items-center gap-1 ${activeCategory === "all" ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" : "hover:text-indigo-600"}`}
            >
              <Layers className="h-4 w-4" />
              All
            </Button>
            <Button
              variant={activeCategory === "video" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("video")}
              className={`flex items-center gap-1 ${activeCategory === "video" ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" : "hover:text-indigo-600"}`}
            >
              <Video className="h-4 w-4" />
              Videos
            </Button>
            <Button
              variant={activeCategory === "reel" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("reel")}
              className={`flex items-center gap-1 ${activeCategory === "reel" ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" : "hover:text-indigo-600"}`}
            >
              <Instagram className="h-4 w-4" />
              Reels
            </Button>
            <Button
              variant={activeCategory === "poster" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("poster")}
              className={`flex items-center gap-1 ${activeCategory === "poster" ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" : "hover:text-indigo-600"}`}
            >
              <FileImage className="h-4 w-4" />
              Posters
            </Button>
            <Button
              variant={activeCategory === "logo" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("logo")}
              className={`flex items-center gap-1 ${activeCategory === "logo" ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" : "hover:text-indigo-600"}`}
            >
              <PenTool className="h-4 w-4" />
              Logos
            </Button>
            <Button
              variant={activeCategory === "thumbnail" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("thumbnail")}
              className={`flex items-center gap-1 ${activeCategory === "thumbnail" ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" : "hover:text-indigo-600"}`}
            >
              <ImageIcon className="h-4 w-4" />
              Thumbnails
            </Button>
          </div>
          
          {/* Main Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden border-none shadow-lg group">
                <div className="relative aspect-square cursor-pointer" onClick={() => setSelectedItem(item)}>
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    {(item.category === "video" || item.category === "reel") ? (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500/80 to-purple-500/80 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    ) : (
                      <div className="px-4 py-2 bg-white/80 rounded-full text-sm font-medium">
                        View Details
                      </div>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-muted-foreground mb-1">{item.type}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                </CardContent>
              </Card>
            ))}
            
            {filteredItems.length === 0 && (
              <div className="col-span-3 py-12 text-center">
                <div className="mb-4 text-gray-400">
                  <Layers className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-medium mb-2">No items found</h3>
                <p className="text-gray-500">No portfolio items match the selected category.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setActiveCategory("all")}
                >
                  View all works
                </Button>
              </div>
            )}
          </div>
          
          {/* <div className="text-center">
            <Button className="px-8" size="lg">
              View All Projects
            </Button>
          </div> */}
        </div>
      </section>

      {/* Portfolio Item Modal */}
      <section>
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              {/* Video or Image Preview */}
              <div className="aspect-video bg-gray-100 w-full">
                {(selectedItem.category === "video" || selectedItem.category === "reel") ? (
                  selectedItem.videoUrl ? (
                    <video 
                      src={selectedItem.videoUrl} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-contain"
                      poster={selectedItem.thumbnail}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
                      <Play className="h-12 w-12 text-gray-400 mb-2" />
                      <p className="text-gray-500 text-sm">Video preview not available</p>
                    </div>
                  )
                ) : (
                  <img 
                    src={selectedItem.thumbnail} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center"
                onClick={() => setSelectedItem(null)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                  <p className="text-gray-600">{selectedItem.description}</p>
                </div>
                <Badge>{selectedItem.type}</Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="space-x-2">
                  <Badge variant="outline">{selectedItem.category}</Badge>
                  <Badge variant="outline">Portfolio</Badge>
                </div>
                
                {selectedItem.videoUrl && (selectedItem.category === "video" || selectedItem.category === "reel") ? (
                  <a href={selectedItem.videoUrl} download target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </a>
                ) : (
                  <a href={selectedItem.thumbnail} download target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-indigo-50 to-white">
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
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" onClick={handleWhatsApp}>
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Payment Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-purple-50">
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
                  <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" disabled={loading}>
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
                    <img src="/image.png?height=150&width=150" alt="UPI QR Code" className="mx-auto mb-4" />
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
                  <Button onClick={handleWhatsApp} className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
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
      <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4">© 2024 Creative Studio. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Helping businesses grow with creative content that converts</p>
        </div>
      </footer>
    </div>
  )
}
