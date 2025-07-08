"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import { PortfolioModal } from "./PortfolioModal"

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

export default function Portfolio() {
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

  return (
    <>
      <section id="portfolio" className="py-16 px-4 bg-gradient-to-br from-white to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Recent Work</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">A showcase of our creative projects across various media formats</p>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className={activeCategory === "all" ? "bg-gradient-to-r from-indigo-600 to-purple-600" : ""}
            >
              All
            </Button>
            <Button
              variant={activeCategory === "video" ? "default" : "outline"}
              onClick={() => setActiveCategory("video")}
              className={activeCategory === "video" ? "bg-gradient-to-r from-indigo-600 to-purple-600" : ""}
            >
              Videos
            </Button>
            <Button
              variant={activeCategory === "reel" ? "default" : "outline"}
              onClick={() => setActiveCategory("reel")}
              className={activeCategory === "reel" ? "bg-gradient-to-r from-indigo-600 to-purple-600" : ""}
            >
              Reels
            </Button>
            <Button
              variant={activeCategory === "poster" ? "default" : "outline"}
              onClick={() => setActiveCategory("poster")}
              className={activeCategory === "poster" ? "bg-gradient-to-r from-indigo-600 to-purple-600" : ""}
            >
              Posters
            </Button>
            <Button
              variant={activeCategory === "logo" ? "default" : "outline"}
              onClick={() => setActiveCategory("logo")}
              className={activeCategory === "logo" ? "bg-gradient-to-r from-indigo-600 to-purple-600" : ""}
            >
              Logos
            </Button>
            <Button
              variant={activeCategory === "thumbnail" ? "default" : "outline"}
              onClick={() => setActiveCategory("thumbnail")}
              className={activeCategory === "thumbnail" ? "bg-gradient-to-r from-indigo-600 to-purple-600" : ""}
            >
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
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium">
                      {item.type}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-muted-foreground mb-1">{item.type}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      {selectedItem && (
        <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  )
}
