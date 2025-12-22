"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Users, Target, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

export default function DUAConstructionCase() {
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
              Dua <span className="text-[#39FF14]">Construction Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
              Architecting a professional digital presence from scratch that established market authority and secured two major, high-value contracts.
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Dua-Construction-1763757493868.png?width=8000&height=8000&resize=contain"
                  alt="Dua Construction Services Project"
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
              { icon: <CheckCircle size={40} />, value: "2", label: "Major Contracts Secured" },
              { icon: <Users size={40} />, value: "20+", label: "Qualified Leads Generated" },
              { icon: <TrendingUp size={40} />, value: "From 0 to Credible", label: "Digital Presence" },
              { icon: <Target size={40} />, value: "High-Value", label: "Pipeline Value Generated" }
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
              Dua Construction Services had a credibility problem. Their digital presence was outdated and unprofessional, and a banned Google profile made them invisible to local clients, costing them major project opportunities.
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
                  title: "Digital Presence Overhaul",
                  description: "Conducted a full audit and created a content strategy, transforming their inconsistent social media into a professional and cohesive brand presence."
                },
                {
                  title: "Credibility & Asset Creation",
                  description: "Architected their foundational digital assets from the ground up, including their first professional website, a compelling company profile, and an optimized LinkedIn profile for the owner."
                },
                {
                  title: "Strategic Visibility",
                  description: "Circumvented their Google ban by establishing a dominant, verified business presence on Yandex, instantly restoring their local search viability."
                },
                {
                  title: "Lead Generation System",
                  description: "Implemented a consistent content deployment schedule and an optimized WhatsApp Business account to professionally manage all incoming inquiries."
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
                "Directly secured two monumental, high-value construction contracts.",
                "Generated a pipeline of over 20 qualified project leads.",
                "Transformed the business from a digital liability into a powerful lead-generation asset.",
                "Established a professional, credible online image that builds trust with high-ticket clients."
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
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/82745004-5748-4154-8146-df633235fbda/generated_images/professional-corporate-headshot-of-a-sou-2f66ceb7-20251117213325.jpg"
                    alt="Zain Ul Arifeen"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-xl">Zain Ul Arifeen</p>
                    <p className="text-muted-foreground">Founder, Dua Construction Services</p>
                  </div>
                </div>
                <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                  "I was skeptical that 'digital marketing' would work for a construction business like ours. Hassaan took our inconsistent social media and lack of professional materials and completely transformed our image. The company profile he created and the strategy he implemented made us look credible and professional, which is everything in this industry. The results are real—we closed two huge deals directly because of the system he put in place."
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