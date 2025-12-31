"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

const projects = [
    {
      title: "Plus Accountants",
      description: "B2B Marketing Case Study: Scaling an Australian Accounting Firm with Digital Infrastructure. Delivered 50+ sales and 20+ upsells through ROI-driven Digital Marketing and B2B Lead Generation.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Plus-accountants-1763757465924.png?width=8000&height=8000&resize=contain",
      href: "/projects/plus-accountants",
      tags: ["Strategy", "CRM", "Social Media"],
      stats: "50+ Sales | 20+ Upsells"
    },
  {
    title: "Dua Construction Services",
    description: "Architecting a professional digital presence from scratch that secured two major, high-value contracts.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Dua-Construction-1763757493868.png?width=8000&height=8000&resize=contain",
    href: "/projects/dua-construction",
    tags: ["Branding", "Web Dev", "Lead Gen"],
    stats: "2 Major Deals"
  },
  {
    title: "ABH Systems Pvt Ltd",
    description: "A hyper-efficient brand launch for a new tech subsidiary that delivered exceptional ROI.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Abh-Laptops-1763757514325.png?width=8000&height=8000&resize=contain",
    href: "/projects/abh-systems",
    tags: ["Market Research", "E-commerce", "ROI"],
    stats: "625x ROAS"
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="min-h-[60vh] flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                B2B Marketing <span className="text-[#39FF14]">Case Studies</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                ROI-driven Digital Marketing & B2B Lead Generation: Scaling Professional Service Firms with custom Digital Infrastructure.
              </p>
            </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={project.href}>
                  <Card className="h-full group hover:border-[#39FF14] transition-all duration-500 overflow-hidden bg-card/50 backdrop-blur-sm">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <Button variant="outline" className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black">
                          View Case Study <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#39FF14] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          {project.stats}
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] uppercase tracking-wider text-[#39FF14]/70 font-bold border border-[#39FF14]/20 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <CardTitle className="text-2xl group-hover:text-[#39FF14] transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-[#39FF14] font-semibold text-sm group-hover:gap-2 transition-all">
                        Read full story <ArrowRight size={16} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-20 px-6 bg-[#39FF14]/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-3xl border border-[#39FF14]/20 bg-background/50 backdrop-blur-md"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to see these results for <span className="text-[#39FF14]">your business?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every strategy is custom-built to solve your unique challenges and hit your specific goals.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-bold px-10">
                Let's Build Your Success Story
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
