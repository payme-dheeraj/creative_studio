"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, CheckCircle, Layers, TrendingUp, Code, Palette, Video, Monitor, Smartphone, Instagram } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Creative & Digital Services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Comprehensive solutions to elevate your brand across all digital platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Social Media Management */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center">
                <Instagram className="h-5 w-5 mr-2" />
                Social Media Management
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Content calendar & posting schedule</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Community engagement & moderation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Analytics reporting & insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Platform-specific optimization</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 2: Content Creation */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center">
                <Layers className="h-5 w-5 mr-2" />
                Content Creation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Branded graphics & visual assets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Short-form video for Reels/TikTok</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Copywriting & caption creation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Hashtag research & strategy</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 3: Video Editing */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center">
                <Video className="h-5 w-5 mr-2" />
                Video Editing
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Professional color grading</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Motion graphics & animations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Sound design & music integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Format optimization for platforms</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 4: Web Design */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center">
                <Monitor className="h-5 w-5 mr-2" />
                Web Design
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Responsive modern websites</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>E-commerce & portfolio sites</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>SEO optimization & performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Content management systems</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 5: UI/UX Design */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                UI/UX Design
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>User interface prototyping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>User experience research</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Wireframing & user flows</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Accessibility implementation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Service 6: Digital Marketing */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center">
                <BarChart className="h-5 w-5 mr-2" />
                Digital Marketing
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Paid social media campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Search engine marketing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Email marketing campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Conversion rate optimization</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Service 7: Brand Strategy */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow center">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Brand Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Brand identity development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Market positioning analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Competitor research</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Brand voice & messaging</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Service 8: Web Development
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2" />
                Web Development
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Frontend & backend development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>API integration & custom solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>E-commerce functionality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Performance optimization</span>
                </li>
              </ul>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}
