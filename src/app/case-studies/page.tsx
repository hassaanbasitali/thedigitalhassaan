"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, Users, Target, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

const caseStudies = [
  {
    slug: "plus-accountants",
    title: "Plus Accountants",
    description: "A complete digital transformation that doubled monthly revenue and built a sustainable growth engine.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Plus-accountants-1763757465924.png?width=8000&height=8000&resize=contain",
    results: ["+200% Revenue", "70+ New Clients", "4.2x Engagement"],
    category: "Professional Services"
  },
  {
    slug: "dua-construction",
    title: "Dua Construction",
    description: "Modernizing a construction giant's digital footprint and establishing industry authority.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Dua-construction-1763757519688.png?width=8000&height=8000&resize=contain",
    results: ["Enhanced Brand Authority", "Optimized Digital Presence", "B2B Lead Generation"],
    category: "Construction"
  },
  {
    slug: "abh-systems",
    title: "ABH Systems Pvt Ltd",
    description: "Strategic repositioning for a tech firm to attract high-value enterprise clients.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Abh-systems-1763757577519.png?width=8000&height=8000&resize=contain",
    results: ["Global Market Reach", "Enterprise Client Acquisition", "Brand Systematization"],
    category: "Tech & Software"
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Case <span className="text-[#39FF14]">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Real results for real businesses. Explore how my digital growth architecture transforms companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 px-6 pb-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/projects/${study.slug}`}>
                  <Card className="group h-full overflow-hidden border-border/50 hover:border-[#39FF14] transition-all duration-500 bg-card/50 backdrop-blur-sm">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <span className="text-white font-bold flex items-center gap-2">
                          View Case Study <ArrowRight size={18} className="text-[#39FF14]" />
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-[#39FF14]/30 text-[#39FF14] text-xs font-bold rounded-full uppercase tracking-wider">
                          {study.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-[#39FF14] transition-colors duration-300">
                        {study.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground line-clamp-2 italic">
                        "{study.description}"
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.results.map((result, i) => (
                          <span 
                            key={i} 
                            className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-[#39FF14]/5 text-[#39FF14] border border-[#39FF14]/10 rounded"
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
