"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Users, Target, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

export default function ABHSystemsCase() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-[#39FF14]/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="inline-flex items-center text-[#39FF14] hover:underline mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              ABH <span className="text-[#39FF14]">Systems</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
              A hyper-efficient brand launch for a new tech subsidiary that delivered exceptional ROI and immediate market traction.
            </p>
          </motion.div>
        </div>
      </section>

        {/* Project Image */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black/5"
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Abh-Laptops-1763757514325.png?width=8000&height=8000&resize=contain"
                  alt="ABH Systems Project"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
          </div>
        </section>


      {/* Key Results */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key <span className="text-[#39FF14]">Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Target size={40} />, value: "35+", label: "Sales in 60 Days" },
              { icon: <TrendingUp size={40} />, value: "625x", label: "Return on Ad Spend" },
              { icon: <Users size={40} />, value: "10+", label: "Platforms Launched" },
              { icon: <CheckCircle size={40} />, value: "<90 Days", label: "From 0 to Profitable" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4 text-[#39FF14]">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold mb-2 text-[#39FF14]">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              The <span className="text-[#39FF14]">Challenge</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              ABH Systems was a new venture launching into a hyper-competitive market with zero brand recognition, no online presence, and a limited startup budget. The goal was to build a complete business from scratch and achieve immediate profitability with maximum capital efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              The <span className="text-[#39FF14]">Solution</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Forensic Market Research",
                  description: "Conducted an exhaustive market intelligence phase, analyzing everything from Reddit communities to competitor ad libraries to define a precise, in-demand niche and target audience."
                },
                {
                  title: "Complete Brand Architecture",
                  description: "Engineered the entire brand identity from scratch, including the Unique Selling Proposition (USP), logos, color palettes, and all foundational marketing collateral."
                },
                {
                  title: "Omnichannel Sales Infrastructure",
                  description: "Architected their commercial presence across more than ten platforms, including social channels for brand building and high-intent marketplaces like OLX and Daraz for immediate sales."
                },
                {
                  title: "Hyper-Efficient Go-to-Market",
                  description: "Managed the entire launch process, from product photoshoots to deploying a powerful organic content machine, supplemented by surgical, micro-spend ad campaigns to ignite sales."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-[#39FF14] flex-shrink-0 mt-1" size={24} />
                        <div>
                          <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              The <span className="text-[#39FF14]">Results</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Generated over 35 sales in the first 60 days from a complete standing start.",
                "Achieved an almost unbelievable return on a minuscule ad spend of only 2,800 PKR.",
                "Successfully launched and established a profitable, revenue-generating business in under 3 months.",
                "Proved the business model and achieved immediate market validation."
              ].map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <CheckCircle className="text-[#39FF14] flex-shrink-0" size={20} />
                  <span className="font-medium">{result}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-[#39FF14]">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/82745004-5748-4154-8146-df633235fbda/generated_images/professional-corporate-headshot-of-a-sou-cbbb102d-20251117213325.jpg"
                    alt="Akbar Ali"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-xl">Akbar Ali</p>
                    <p className="text-muted-foreground">CEO, ABH Systems Pvt Ltd</p>
                  </div>
                </div>
                <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                  "We were a new brand launching on a very tight budget. What impressed me most about Hassaan was his efficiency—he didn't waste a single rupee. He built our entire brand and got us making sales almost immediately. To get over 35 sales in our first two months with such a tiny ad spend is incredible. He's incredibly efficient with capital. The return on our small investment was outstanding."
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for <span className="text-[#39FF14]">Similar Results?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how I can help transform your digital presence
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-semibold">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}