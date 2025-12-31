"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

const servicePillars = [
  {
    pillar: "Sales Infrastructure",
    description: "I build the automated systems that turn traffic into profit. Focus: CRM Automation, B2B Lead Generation, and Strategic Upselling Systems.",
    services: [
      {
        title: "CRM & Sales Automation",
        features: ["HubSpot/Salesforce Integration", "Automated Follow-up Sequences", "Lead Scoring Systems", "Sales Pipeline Optimization"],
        deliverable: "An automated engine that captures, nurtures, and converts leads without manual intervention."
      },
      {
        title: "B2B Lead Generation",
        features: ["High-Ticket Client Acquisition", "Cold Outreach Systems", "LinkedIn Automation", "Qualified Meeting Setting"],
        deliverable: "A consistent stream of high-intent B2B leads ready for your sales team."
      },
      {
        title: "Strategic Upselling Systems",
        features: ["LTV Maximization", "Post-Purchase Automation", "Customer Retention Strategy", "Referral Loops"],
        deliverable: "Increased revenue from your existing client base through logical growth systems."
      }
    ]
  },
  {
    pillar: "Digital Presence",
    description: "Your website is a sales tool, not just a flyer. Focus: WordPress Website Development, Branding, and High-Conversion Copywriting.",
    services: [
      {
        title: "WordPress Website Development",
        features: ["High-Performance Architecture", "Responsive Sales-First Design", "SEO Foundation & Interactivity", "Speed & Security Optimization"],
        deliverable: "A professional, fast website engineered to act as your 24/7 digital salesperson."
      },
      {
        title: "Branding & Identity Architecture",
        features: ["Core Messaging Strategy", "Visual Identity & Logos", "Professional Brand Guidelines", "Market Positioning"],
        deliverable: "A distinctive brand that commands authority in the USA professional services market."
      },
      {
        title: "High-Conversion Copywriting",
        features: ["Direct Response Sales Copy", "SEO Content Creation", "Brand Voice Development", "Psychological Trigger Integration"],
        deliverable: "Compelling messaging that speaks directly to the needs of B2B decision-makers."
      }
    ]
  },
  {
    pillar: "Traffic & Visibility",
    description: "Tools to fuel your digital infrastructure. Focus: Meta Ads, Social Media Management, and Content Creation.",
    services: [
      {
        title: "Meta Ads (Facebook & Instagram)",
        features: ["ROI-Driven Campaign Setup", "Precision B2B Targeting", "A/B Testing & Optimization", "Detailed Performance Attribution"],
        deliverable: "Predictable, scalable traffic that feeds directly into your sales infrastructure."
      },
      {
        title: "Social Media Management",
        features: ["Cross-Platform Content Strategy", "Authority Building (LinkedIn/Meta)", "Community Engagement", "Brand Awareness Campaigns"],
        deliverable: "An active, professional presence that builds trust and long-term brand equity."
      },
      {
        title: "Strategic Content Creation",
        features: ["Educational Video/Reels", "Thought Leadership Articles", "Graphic Design & Carousels", "Content Distribution Systems"],
        deliverable: "High-quality assets that position you as the 'Digital Infrastructure Architect' in your niche."
      }
    ]
  }
]

export default function ServicesPage() {
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
              The <span className="text-[#39FF14]">Execution Pillars</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              I build the Digital Infrastructure that drives high-ticket sales for USA professional service firms as a dedicated Digital Infrastructure Architect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Pillars */}
      {servicePillars.map((pillar, pillarIndex) => (
        <section key={pillarIndex} className={`py-20 px-6 ${pillarIndex % 2 === 1 ? 'bg-card' : ''}`}>
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {pillar.pillar.split(' ')[0]} <span className="text-[#39FF14]">{pillar.pillar.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {pillar.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillar.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full flex flex-col hover:border-[#39FF14] transition-colors group">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-[#39FF14] transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.deliverable}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="text-[#39FF14] flex-shrink-0 mt-0.5" size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Signature Package */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#39FF14]/10 via-transparent to-[#39FF14]/5">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-[#39FF14] shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#39FF14]/20 to-transparent p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="text-[#39FF14]" size={32} />
                  <span className="text-sm font-bold text-[#39FF14] uppercase tracking-wider">
                    Signature Package
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Full Digital <span className="text-[#39FF14]">Ecosystem</span>
                </h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    This is my all-in-one, flagship service for businesses ready for a complete growth partner. It combines every single one of my expert services into a single, cohesive, and professionally managed system designed for maximum results.
                  </p>
                </div>

              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#39FF14]">What's Included</h3>
                    <ul className="space-y-3">
                      {[
                        "Complete brand strategy & identity",
                        "Custom website design & development",
                        "SEO optimization & content strategy",
                        "Marketing automation setup",
                        "Analytics & tracking implementation",
                        "Email marketing system",
                        "Social media integration",
                        "Lead generation systems"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="text-[#39FF14] flex-shrink-0 mt-1" size={20} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#39FF14]">Your Results</h3>
                    <ul className="space-y-3">
                      {[
                        "Complete digital presence from scratch",
                        "Automated lead generation system",
                        "SEO foundation for organic growth",
                        "Professional brand positioning",
                        "Data-driven decision making tools",
                        "Scalable infrastructure",
                        "3 months of optimization support",
                        "Training for your team"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="text-[#39FF14] flex-shrink-0 mt-1" size={20} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border mb-8">
                  <h4 className="font-bold mb-3">Perfect For:</h4>
                  <p className="text-muted-foreground">
                    B2B service businesses, professional services firms, and growing companies ready to 
                    establish a dominant digital presence and generate consistent leads.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="flex-1">
                    <Button size="lg" className="w-full bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-semibold">
                      Book a Discovery Call <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="flex-1 border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-[#39FF14]">Get Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and create a custom solution that fits your requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-semibold">
                  Start Your Project <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}