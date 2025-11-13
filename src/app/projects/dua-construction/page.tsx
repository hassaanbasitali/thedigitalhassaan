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
              DUA <span className="text-[#39FF14]">Construction</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
              Multi-phase ecosystem build generating 50+ qualified leads per month and establishing market authority
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-[#39FF14]/10 border border-[#39FF14] rounded-full text-sm font-semibold">
                Lead Generation
              </span>
              <span className="px-4 py-2 bg-[#39FF14]/10 border border-[#39FF14] rounded-full text-sm font-semibold">
                Brand Authority
              </span>
              <span className="px-4 py-2 bg-[#39FF14]/10 border border-[#39FF14] rounded-full text-sm font-semibold">
                Content Marketing
              </span>
              <span className="px-4 py-2 bg-[#39FF14]/10 border border-[#39FF14] rounded-full text-sm font-semibold">
                CRM Integration
              </span>
            </div>
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
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop"
              alt="DUA Construction Website"
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
              { icon: <Users size={40} />, value: "50+", label: "Qualified Leads/Month" },
              { icon: <TrendingUp size={40} />, value: "+280%", label: "Website Traffic Growth" },
              { icon: <Target size={40} />, value: "5.8x", label: "Lead Quality Score" },
              { icon: <CheckCircle size={40} />, value: "$2.4M", label: "Pipeline Generated" }
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
              DUA Construction was relying entirely on word-of-mouth and traditional marketing methods. While this 
              brought in some business, it was inconsistent and didn't allow them to scale predictably.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              They had a basic website that didn't showcase their work effectively, no content marketing strategy, 
              and no system for capturing and nurturing leads. In the competitive construction market, they were 
              virtually invisible online.
            </p>
            <p className="text-lg text-muted-foreground">
              They needed a comprehensive digital ecosystem that would generate consistent, high-quality leads and 
              establish them as a trusted authority in their market.
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
              I developed a multi-phase digital ecosystem strategy:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Phase 1: Foundation",
                  description: "Rebuilt the website with a focus on showcasing their portfolio, client testimonials, and clear service offerings. Implemented lead capture forms and integrated with their CRM."
                },
                {
                  title: "Phase 2: Content Authority",
                  description: "Created a comprehensive content strategy including project case studies, educational blog posts, and video walkthroughs of completed projects to build trust and authority."
                },
                {
                  title: "Phase 3: Lead Generation",
                  description: "Implemented targeted SEO campaigns, local search optimization, and paid advertising to drive qualified traffic. Set up automated lead nurturing sequences."
                },
                {
                  title: "Phase 4: Social Proof",
                  description: "Built a system for collecting and showcasing client reviews, created shareable project galleries, and established their presence on relevant industry platforms."
                },
                {
                  title: "Phase 5: Optimization",
                  description: "Implemented analytics tracking, conversion rate optimization, and ongoing A/B testing to continuously improve lead quality and conversion rates."
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
              The ecosystem transformed DUA Construction's business:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "50+ qualified leads per month consistently",
                "280% increase in website traffic",
                "$2.4M in pipeline generated in first year",
                "5.8x improvement in lead quality score",
                "First page rankings for all target keywords",
                "Featured in top construction industry blogs",
                "85% reduction in cost per lead",
                "Established as regional market leader"
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
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    alt="Michael Chen"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-xl">Michael Chen</p>
                    <p className="text-muted-foreground">Founder, DUA Construction</p>
                  </div>
                </div>
                <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                  "Working with Hassaan was transformative. He understood our business deeply and created a digital 
                  ecosystem that actually drives growth. We're seeing 50+ qualified leads every month now, and the 
                  quality is outstanding. His multi-phase approach meant we saw results quickly while building a 
                  foundation for long-term growth. Can't recommend him enough."
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