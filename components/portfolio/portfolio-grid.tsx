"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface PortfolioItem {
  id: string
  title: string
  category: string
  type: "video" | "image"
  thumbnail: string
  content: string
  description: string
}

export function PortfolioGrid() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    // Fetch portfolio data
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('/portfolio/portfolio-data.json')
        const data = await response.json()
        
        // Add placeholders for development environment
        const itemsWithPlaceholders = data.items.map((item: PortfolioItem) => ({
          ...item,
          thumbnail: '/placeholder.svg',
          content: item.type === 'video' 
            ? 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' 
            : '/placeholder.jpg'
        }))
        
        setPortfolioItems(itemsWithPlaceholders)
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
      }
    }

    fetchPortfolioData()
  }, [])

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item)
    setIsDialogOpen(true)
  }

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Recent Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="overflow-hidden border-none shadow-lg">
            <div 
              className="relative aspect-square cursor-pointer group"
              onClick={() => handleItemClick(item)}
            >
              <div className="relative w-full h-full bg-muted">
                <Image 
                  src={item.thumbnail || "/placeholder.jpg"} 
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                    <Play className="h-8 w-8 text-black" />
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground mb-1">
                {item.category}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedItem?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {selectedItem?.type === 'video' ? (
              <>
                <video 
                  src={selectedItem.content} 
                  controls 
                  className="w-full aspect-video"
                  poster={selectedItem.thumbnail}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="mt-2 text-xs text-muted-foreground">
                  Sample video for demonstration purposes
                </div>
              </>
            ) : (
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={selectedItem?.content || "/placeholder.jpg"}
                  alt={selectedItem?.title || "Portfolio item"}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <p className="mt-4 text-muted-foreground">{selectedItem?.description}</p>
            
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Close</Button>
              <Button>Download</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
