"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

const alacarte = [
  {
    title: "Market Research Blueprint",
    features: [
      "In-depth Market Analysis & Comprehensive Report",
      "Detailed Target Audience Persona & Analysis",
      "Curated List of Key Competitors",
      "Forensic Competitor Analysis & Strategic Insights",
      "Actionable Recommendations to Differentiate Your Brand",
      "Data-Driven Platform Identification"
    ],
    deliverable: "A clear understanding of your market landscape, delivered via a comprehensive report, Excel database, and a professional visual presentation."
  },
  {
    title: "Digital Presence Audit",
    features: [
      "Full Audit of Your Current Digital Strategy",
      "Honest, Unbiased Evaluation of Strengths & Weaknesses",
      "A Clear, Prioritized Action Plan for Improvement",
      "Strategic Recommendations for Immediate Impact"
    ],
    deliverable: "A complete understanding of what to fix, presented in a clear roadmap to increase your sales and impact."
  },
  {
    title: "Brand Identity Kit",
    features: [
      "Comprehensive Audit of Your Existing Brand",
      "Crafting Your Core Brand Messaging & Story",
      "Development of 2 Unique Logo Concepts",
      "Creation of 2 Professional Color Palettes",
      "Selection of 2 Professional Font Pairings",
      "A Suite of 5 High-Fidelity Brand Mockups"
    ],
    deliverable: "A complete, ready-to-use professional Brand Kit with all visual assets and a comprehensive presentation."
  },
  {
    title: "Custom Growth Strategy",
    features: [
      "In-depth Discovery Session to Understand Your Business",
      "A Custom-Tailored Strategic Solution for Your Unique Problems"
    ],
    deliverable: "An experienced, personalized strategy document that provides a clear and actionable roadmap for your business growth."
  },
  {
    title: "Organic Social Media Marketing",
    features: [
      "Full Audit & Strategy for 3 Social Platforms (Excluding LinkedIn)",
      "Professional Account Creation & Optimization",
      "Complete Profile Visuals (Profile Image & Banner)",
      "A Content Calendar of 20 High-Engagement Posts",
      "Expertly Researched Captions & Trending Hashtags",
      "Full Content Scheduling Across All Platforms"
    ],
    deliverable: "A professional and active social media presence with 20 days of high-end content, managed for you."
  },
  {
    title: "WordPress Website Development",
    features: [
      "A Professional 6-7 Page Modern Minimalist Website",
      "Highly Interactive & Smooth User Experience",
      "Full Social Media & WhatsApp Integration",
      "Expertly Written SEO-Optimized Foundational Content"
    ],
    deliverable: "A professional website that acts as your 24/7 digital salesperson."
  },
  {
    title: "LinkedIn Authority Builder",
    features: [
      "Complete Personal & Company Profile Architecture",
      "Optimization of all Key Sections",
      "A Content Plan of 10 Image Posts, 10 Written Posts, 3 Articles, & 2 PDF Carousels",
      "Strategic Network Growth (150+ Connections & 200+ Invites)",
      "Proactive Engagement & Interaction Messaging"
    ],
    deliverable: "A powerful, professional LinkedIn presence for both you and your company, perfectly positioned to attract high-value B2B clients."
  },
  {
    title: "Social Media Management & Ads (1 Month)",
    features: [
      "Full Management for Meta (Facebook/Instagram) & Twitter",
      "A Content Plan of 30 Posts, 10 Stories, & 2 Edited Reels/Animations",
      "Full Profile Management",
      "Comprehensive Weekly Performance Reports",
      "A Complete Meta Ad Campaign: - 3 High-Performance Ad Creatives, - 3 High-Conversion Ad Copies, - 12 Days of Strategic A/B Testing & Optimization, - Delivery of 1 Winning Ad Campaign & Ad Set"
    ],
    deliverable: "A professionally managed social presence and a data-driven ad campaign designed to deliver exceptional results."
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
              Services & <span className="text-[#39FF14]">Packages</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Flexible solutions to fit your needs, from individual services to complete digital ecosystem builds
            </p>
          </motion.div>
        </div>
      </section>

      {/* A La Carte Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A La Carte <span className="text-[#39FF14]">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Need something specific? Choose individual services to address your exact needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alacarte.map((service, index) => (
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