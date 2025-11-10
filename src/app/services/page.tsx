"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

const alacarte = [
  {
    title: "Website Design & Development",
    price: "From $5,000",
    description: "Custom, high-converting websites built with modern technologies",
    features: [
      "Responsive design for all devices",
      "SEO-optimized structure",
      "Fast loading speeds",
      "Content management system",
      "Analytics integration",
      "30 days of support"
    ]
  },
  {
    title: "Brand Identity & Strategy",
    price: "From $3,000",
    description: "Complete brand development from positioning to visual identity",
    features: [
      "Market research & positioning",
      "Logo & visual identity design",
      "Brand guidelines document",
      "Marketing collateral design",
      "Brand voice & messaging",
      "Competitor analysis"
    ]
  },
  {
    title: "SEO & Content Strategy",
    price: "From $2,500/mo",
    description: "Comprehensive SEO strategy to drive organic traffic and rankings",
    features: [
      "Technical SEO audit & fixes",
      "Keyword research & strategy",
      "On-page optimization",
      "Content calendar creation",
      "Link building strategy",
      "Monthly performance reports"
    ]
  },
  {
    title: "Marketing Automation Setup",
    price: "From $4,000",
    description: "Automated systems for lead generation, nurturing, and conversion",
    features: [
      "Email marketing automation",
      "CRM integration",
      "Lead capture forms",
      "Automated workflows",
      "Analytics & tracking",
      "Training & documentation"
    ]
  },
  {
    title: "E-commerce Development",
    price: "From $8,000",
    description: "Full-featured online stores optimized for conversions",
    features: [
      "Product catalog setup",
      "Payment gateway integration",
      "Inventory management",
      "Order processing system",
      "Customer account portal",
      "Mobile-optimized checkout"
    ]
  },
  {
    title: "Performance Optimization",
    price: "From $2,000",
    description: "Speed up your website and improve user experience",
    features: [
      "Site speed audit",
      "Image optimization",
      "Code minification",
      "CDN implementation",
      "Core Web Vitals optimization",
      "Performance monitoring"
    ]
  },
  {
    title: "Analytics & Reporting",
    price: "From $1,500/mo",
    description: "Data-driven insights to guide your business decisions",
    features: [
      "Analytics setup & configuration",
      "Custom dashboard creation",
      "Monthly performance reports",
      "Conversion tracking",
      "User behavior analysis",
      "Strategic recommendations"
    ]
  },
  {
    title: "Consultation & Strategy",
    price: "$500/session",
    description: "Expert guidance on your digital growth strategy",
    features: [
      "90-minute strategy session",
      "Personalized action plan",
      "Competitive analysis",
      "Growth opportunity identification",
      "Technology recommendations",
      "Follow-up support via email"
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
              Services & <span className="text-[#39FF14]">Packages</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Flexible solutions to fit your needs and budget, from individual services to complete digital ecosystem builds
            </p>
          </motion.div>
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
                  The complete solution for businesses serious about digital growth
                </p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold text-[#39FF14]">$25,000+</span>
                  <span className="text-muted-foreground">investment</span>
                </div>
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
                      Get Started Today <ArrowRight className="ml-2" size={20} />
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
                    <div className="text-2xl font-bold text-[#39FF14] my-2">
                      {service.price}
                    </div>
                    <CardDescription>{service.description}</CardDescription>
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
              Let's discuss your project and create a custom solution that fits your needs and budget
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
