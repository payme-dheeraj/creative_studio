"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Play, X } from "lucide-react"

type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  type: string;
  thumbnail: string;
  description: string;
  videoUrl?: string;
}

interface PortfolioModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

export function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="relative">
          {/* Video or Image Preview */}
          <div className="aspect-video bg-gray-100 dark:bg-gray-700 w-full">
            {(item.category === "video" || item.category === "reel") ? (
              item.videoUrl ? (
                <video 
                  src={item.videoUrl} 
                  controls 
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <Play className="h-12 w-12 text-gray-400 dark:text-gray-300 mb-2" />
                  <p className="text-gray-500 dark:text-gray-300 text-sm">Video preview not available</p>
                </div>
              )
            ) : (
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-contain"
              />
            )}
          </div>
          
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
            <Badge>{item.type}</Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Badge variant="outline">{item.category}</Badge>
              <Badge variant="outline">Portfolio</Badge>
            </div>
            
            {item.videoUrl && (item.category === "video" || item.category === "reel") ? (
              <a href={item.videoUrl} download target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </a>
            ) : (
              <a href={item.thumbnail} download target="_blank" rel="noopener noreferrer">
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
  )
}
