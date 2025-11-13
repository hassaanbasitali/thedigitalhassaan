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
              Strategic positioning pivot generating $180K in qualified pipeline within 90 days
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
              alt="ABH Systems Website"
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
              { icon: <Target size={40} />, value: "$180K", label: "Pipeline in 90 Days" },
              { icon: <Users size={40} />, value: "35+", label: "Enterprise Leads" },
              { icon: <TrendingUp size={40} />, value: "+420%", label: "Lead Quality Score" },
              { icon: <CheckCircle size={40} />, value: "8.2x", label: "ROI on Investment" }
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
              ABH Systems, a B2B technology solutions provider, was positioned too broadly in the market. Their 
              messaging tried to appeal to everyone, which meant it resonated with no one. They were generating 
              some leads, but most were low-quality and from companies too small to afford their enterprise solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Their sales team was spending countless hours qualifying leads that weren't a good fit, and their 
              marketing efforts weren't attracting the enterprise clients they needed to grow profitably.
            </p>
            <p className="text-lg text-muted-foreground">
              They needed a complete strategic repositioning and a digital ecosystem specifically designed to attract 
              and convert enterprise B2B clients.
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
              I developed a comprehensive strategy focused on quality over quantity:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Strategic Repositioning",
                  description: "Narrowed their focus to a specific industry vertical where they had the most success. Repositioned them as specialized experts rather than generalists, commanding premium pricing."
                },
                {
                  title: "Enterprise-Focused Website",
                  description: "Rebuilt the website specifically for enterprise decision-makers, featuring detailed case studies, ROI calculators, and trust signals that resonate with large organizations."
                },
                {
                  title: "Thought Leadership Content",
                  description: "Created in-depth white papers, industry reports, and executive guides that positioned them as thought leaders and attracted C-level attention."
                },
                {
                  title: "Account-Based Marketing",
                  description: "Implemented a targeted ABM strategy with personalized campaigns for their ideal customer profile, ensuring marketing efforts focused on high-value prospects."
                },
                {
                  title: "Sales Enablement System",
                  description: "Built a comprehensive sales enablement platform with automated qualification, nurturing sequences, and sales collateral that accelerated the enterprise sales cycle."
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
              The strategic pivot delivered exceptional results:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "$180K in qualified pipeline within 90 days",
                "35+ enterprise-level leads",
                "420% improvement in lead quality score",
                "8.2x return on investment",
                "Average deal size increased by 3.4x",
                "Sales cycle reduced by 40%",
                "Featured speaker at industry conferences",
                "Established as category leader"
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
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                    alt="Emily Rodriguez"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-xl">Emily Rodriguez</p>
                    <p className="text-muted-foreground">Marketing Director, ABH Systems</p>
                  </div>
                </div>
                <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                  "Hassaan's strategic approach is unmatched. He positioned us perfectly in the market and built 
                  systems that generated $180K in pipeline within 90 days. Incredible ROI. What impressed me most 
                  was how he understood our business better than we did ourselves. He saw opportunities we were 
                  missing and executed flawlessly. This is what working with a true digital growth architect looks like."
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