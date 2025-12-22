"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Users, Target, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

export default function PlusAccountantsCase() {
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
              Plus <span className="text-[#39FF14]">Accountants</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
              A complete digital transformation that doubled monthly revenue, reactivated a dormant client base, and built a sustainable growth engine.
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Plus-accountants-1763757465924.png?width=8000&height=8000&resize=contain"
                  alt="Plus Accountants Project"
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
              { icon: <TrendingUp size={40} />, value: "+200%", label: "Revenue Growth" },
              { icon: <Users size={40} />, value: "70+", label: "New Clients Closed" },
              { icon: <Target size={40} />, value: "4.2x", label: "Engagement Rate" },
              { icon: <CheckCircle size={40} />, value: "95%", label: "Client Retention" }
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
              Plus Accountants had a strong client base but suffered from zero digital engagement and no system for generating a consistent lead flow. They were losing ground to modern competitors and needed a complete digital overhaul to reignite their growth.
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
                  title: "Immediate Revenue Activation",
                  description: "Launched a targeted re-engagement campaign to their existing client list via Zoho CRM and an optimized WhatsApp channel, securing over 50 clients in the first two months."
                },
                {
                  title: "Brand Repositioning",
                  description: "Refreshed the brand's visual assets and defined a clear brand message to project a more modern, authoritative image across all platforms."
                },
                {
                  title: "Organic Ecosystem Build",
                  description: "Built and optimized their presence on key social platforms, deploying platform-specific content strategies that established them as thought leaders without any ad spend."
                },
                {
                  title: "Systemization & Scaling",
                  description: "Implemented a custom CRM and sales tracking process to manage the new influx of leads, creating a sustainable growth system that their internal staff continues to use today."
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
                "Doubled the client's monthly revenue.",
                "Secured 70+ new client contracts and 20+ high-value upsells.",
                "Engaged with 347 new prospects, leading to a consistent lead flow.",
                "Established a fully operational digital ecosystem now managed by their in-house team."
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
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/82745004-5748-4154-8146-df633235fbda/generated_images/professional-corporate-headshot-of-a-sou-ce36087c-20251117213325.jpg"
                    alt="Muhammad Kamran"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-xl">Muhammad Kamran</p>
                    <p className="text-muted-foreground">CEO, Plus Accountants</p>
                  </div>
                </div>
                <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                  "Before Hassaan, our digital marketing was non-existent. He came in with a clear, methodical plan and built a complete system from the ground up. He didn't just get us new followers; he re-engaged our old clients and created a predictable way to get new ones. The best part? Our revenue doubled, and the system he built is something my own team can now easily manage."
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