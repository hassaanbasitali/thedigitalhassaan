"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Code, Palette, Search, BarChart, Zap, Database } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/Footer"

const skillCategories = [
  {
    category: "Strategy & Market Research",
    icon: <Code size={32} />,
    skills: [
      { name: "Market Analysis & Reporting", level: 98 },
      { name: "Targeted Audience Research", level: 97 },
      { name: "Forensic Competitor Analysis", level: 99 },
      { name: "Digital Presence Audits", level: 96 },
      { name: "Growth Strategy Development", level: 99 }
    ],
    color: "#39FF14"
  },
  {
    category: "Brand & Identity Architecture",
    icon: <Database size={32} />,
    skills: [
      { name: "Brand Strategy & Messaging", level: 97 },
      { name: "Logo & Visual Identity Design", level: 96 },
      { name: "Professional Brand Mockups", level: 98 },
      { name: "Brand Audits", level: 97 },
      { name: "High-Conversion Copywriting", level: 96 }
    ],
    color: "#39FF14"
  },
  {
    category: "Website & SEO Foundation",
    icon: <Palette size={32} />,
    skills: [
      { name: "WordPress Development", level: 98 },
      { name: "Responsive & Interactive Design", level: 97 },
      { name: "SEO Content Writing", level: 96 },
      { name: "WhatsApp & Social Integration", level: 97 },
      { name: "Full-Funnel Ecosystem Design", level: 98 }
    ],
    color: "#39FF14"
  },
  {
    category: "Organic Marketing & Content",
    icon: <Search size={32} />,
    skills: [
      { name: "Social Media Strategy", level: 99 },
      { name: "High-Engagement Content Creation", level: 98 },
      { name: "Researched Captions & Hashtags", level: 97 },
      { name: "Content Scheduling & Management", level: 96 },
      { name: "Systemization & Process Building", level: 98 }
    ],
    color: "#39FF14"
  },
  {
    category: "Social Media Advertising",
    icon: <BarChart size={32} />,
    skills: [
      { name: "Meta Ads (Facebook & Instagram)", level: 98 },
      { name: "Ad Creative & Copy Development", level: 97 },
      { name: "A/B Testing & Optimization", level: 98 },
      { name: "Winning Ad Set Identification", level: 99 },
      { name: "Data-Driven Performance Marketing", level: 97 }
    ],
    color: "#39FF14"
  },
  {
    category: "LinkedIn Authority Building",
    icon: <Zap size={32} />,
    skills: [
      { name: "Personal & Company Profile Optimization", level: 98 },
      { name: "Strategic Content Creation (Posts & Articles)", level: 97 },
      { name: "B2B Network Growth & Engagement", level: 99 },
      { name: "Lead Generation Strategy", level: 98 },
      { name: "Transparent Project Management", level: 97 }
    ],
    color: "#39FF14"
  }
]

const workingProcess = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We start with a deep-dive conversation about your business, goals, and challenges. This isn't just a sales call—it's a strategic consultation."
  },
  {
    step: "02",
    title: "Strategic Planning",
    description: "I create a comprehensive plan outlining the exact ecosystem you need, timeline, deliverables, and expected outcomes."
  },
  {
    step: "03",
    title: "Iterative Development",
    description: "I work in sprints with regular check-ins and updates. You're involved throughout the process, not left in the dark."
  },
  {
    step: "04",
    title: "Testing & Refinement",
    description: "Before launch, we thoroughly test everything and make data-driven refinements to ensure optimal performance."
  },
  {
    step: "05",
    title: "Launch & Optimization",
    description: "After launch, I monitor performance closely and make continuous improvements to maximize your ROI."
  }
]

export default function SkillsPage() {
  const [inView, setInView] = useState<{ [key: string]: boolean }>({})

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Skills & <span className="text-[#39FF14]">Expertise</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive skill set spanning development, design, marketing, and business strategy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid with Animated Progress Bars */}
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
              Technical <span className="text-[#39FF14]">Proficiency</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Years of experience refined into measurable expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-[#39FF14]">{category.icon}</div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-[#39FF14] font-semibold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.05 }}
                            className="h-full bg-[#39FF14] rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
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
              How I <span className="text-[#39FF14]">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent, collaborative process that keeps you involved every step of the way
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workingProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-[#39FF14] transition-colors group">
                  <CardHeader>
                    <div className="text-5xl font-bold text-[#39FF14] opacity-50 group-hover:opacity-100 transition-opacity mb-4">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg group-hover:text-[#39FF14] transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}