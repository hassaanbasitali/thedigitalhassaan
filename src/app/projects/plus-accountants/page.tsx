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
              Complete digital transformation delivering 340% increase in organic traffic and consistent qualified lead flow
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
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop"
              alt="Plus Accountants Website"
              fill
              className="object-cover"
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
              { icon: <TrendingUp size={40} />, value: "+340%", label: "Organic Traffic Growth" },
              { icon: <Users size={40} />, value: "85+", label: "Qualified Leads/Month" },
              { icon: <Target size={40} />, value: "4.2x", label: "ROI Increase" },
              { icon: <CheckCircle size={40} />, value: "92%", label: "Client Satisfaction" }
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
            <p className="text-lg text-muted-foreground mb-6">
              Plus Accountants came to me with an outdated website that wasn't generating any meaningful traffic or leads. 
              Their brand positioning was unclear, and they were struggling to differentiate themselves in a crowded market 
              of accounting firms.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              They needed more than just a new website—they needed a complete digital transformation that would establish 
              them as a modern, tech-savvy accounting firm and generate a consistent stream of qualified leads.
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
            <p className="text-lg text-muted-foreground mb-8">
              I architected a complete digital ecosystem for Plus Accountants:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Brand Repositioning",
                  description: "Developed a modern brand identity and positioning strategy that differentiated them as forward-thinking accountants who embrace technology and automation."
                },
                {
                  title: "Website Redesign & Development",
                  description: "Built a fast, SEO-optimized website with clear service messaging, compelling calls-to-action, and an intuitive user experience designed for conversion."
                },
                {
                  title: "Content Strategy & SEO",
                  description: "Created a comprehensive content strategy targeting high-value keywords and built authority through educational blog content and case studies."
                },
                {
                  title: "Marketing Automation",
                  description: "Implemented automated lead capture, email nurturing sequences, and CRM integration to ensure no leads fell through the cracks."
                },
                {
                  title: "Analytics & Optimization",
                  description: "Set up comprehensive tracking and created a dashboard for monitoring key metrics, enabling data-driven decision making and continuous improvement."
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
            <p className="text-lg text-muted-foreground mb-8">
              Within 6 months of launch, Plus Accountants saw transformative results:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "340% increase in organic traffic",
                "85+ qualified leads per month",
                "First page rankings for 23 target keywords",
                "4.2x return on investment",
                "52% reduction in cost per acquisition",
                "28% increase in average client value",
                "Consistent 92% client satisfaction score",
                "Featured in industry publications"
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
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Sarah Johnson"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-xl">Sarah Johnson</p>
                    <p className="text-muted-foreground">CEO, Plus Accountants</p>
                  </div>
                </div>
                <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                  "Hassaan didn't just build us a website - he architected an entire growth system. The results speak 
                  for themselves: 340% increase in organic traffic and qualified leads flowing in consistently. He 
                  understood our business deeply and created solutions we didn't even know we needed. Best investment 
                  we've made in our company."
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