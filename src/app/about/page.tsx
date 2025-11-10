"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

const processSteps = [
{
  title: "1. Discovery & Strategic Analysis",
  content: "I start by deeply understanding your business, target audience, competitive landscape, and growth objectives. This isn't just a questionnaire—it's a comprehensive strategic analysis that informs every decision moving forward."
},
{
  title: "2. Ecosystem Architecture Planning",
  content: "Based on the discovery phase, I design a complete digital ecosystem architecture. This includes website structure, content strategy, technical infrastructure, marketing automation, and growth channels—all working together seamlessly."
},
{
  title: "3. Design & Development",
  content: "With a solid strategy in place, I build your digital assets using modern, scalable technologies. Every element is crafted for performance, user experience, and conversion optimization."
},
{
  title: "4. Integration & Optimization",
  content: "I integrate all the moving pieces—analytics, CRM, marketing automation, SEO tools—and optimize every touchpoint for maximum effectiveness. This is where the ecosystem comes alive."
},
{
  title: "5. Launch & Growth Support",
  content: "After launch, I provide ongoing support to ensure your ecosystem performs optimally. I monitor key metrics, make data-driven improvements, and help you scale as your business grows."
}];


const advantageComparisons = [
{
  category: "Approach",
  traditional: "Build a website",
  architect: "Design a complete digital ecosystem"
},
{
  category: "Focus",
  traditional: "Aesthetics and features",
  architect: "Business growth and ROI"
},
{
  category: "Strategy",
  traditional: "Reactive to client requests",
  architect: "Proactive strategic planning"
},
{
  category: "Integration",
  traditional: "Standalone website",
  architect: "Connected tools and platforms"
},
{
  category: "Results",
  traditional: "A nice-looking website",
  architect: "Measurable business growth"
},
{
  category: "Support",
  traditional: "Limited post-launch",
  architect: "Ongoing optimization and scaling"
}];


const blueprintSteps = [
{
  step: "01",
  title: "Brand Foundation",
  description: "Positioning, messaging, and visual identity that resonates with your ideal customers",
  icon: "🎨",
  color: "from-purple-500/20 to-pink-500/20"
},
{
  step: "02",
  title: "High-Converting Website",
  description: "Fast, beautiful, and optimized for turning visitors into customers",
  icon: "🌐",
  color: "from-blue-500/20 to-cyan-500/20"
},
{
  step: "03",
  title: "Content Engine",
  description: "SEO-optimized content that attracts organic traffic and establishes authority",
  icon: "📝",
  color: "from-green-500/20 to-emerald-500/20"
},
{
  step: "04",
  title: "Marketing Automation",
  description: "Automated systems for lead capture, nurturing, and customer retention",
  icon: "⚡",
  color: "from-yellow-500/20 to-orange-500/20"
},
{
  step: "05",
  title: "Analytics & Growth",
  description: "Data-driven insights and continuous optimization for sustainable growth",
  icon: "📊",
  color: "from-red-500/20 to-rose-500/20"
}];


export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                I Build
                <span className="text-[#39FF14]"> Ecosystems</span>,
                Not Just Websites
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Most web developers build websites. I architect complete digital ecosystems that drive measurable business growth.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience across web development, digital marketing, SEO, and business strategy, 
                I bring a unique holistic approach that most specialists simply can't offer.
              </p>
              <div className="space-y-4">
                {[
                "Strategic thinker with technical execution skills",
                "Business growth focus, not just pretty designs",
                "Full-stack capabilities across the digital spectrum",
                "Proven track record of delivering measurable results"].
                map((item, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3">

                    <CheckCircle className="text-[#39FF14] flex-shrink-0" size={24} />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative">

              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Portfolio-Secondary-Image-1762817919635.jpg?width=8000&height=8000&resize=contain"
                  alt="Hassaan Basit"
                  fill
                  className="rounded-2xl object-cover shadow-2xl border-4 border-[#39FF14]" />

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#39FF14]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Architectural Process */}
      <section className="py-20 px-6 bg-card !w-full !h-[775px]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My Architectural <span className="text-[#39FF14]">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures every project delivers measurable results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <Accordion type="single" collapsible className="w-full">
              {processSteps.map((step, index) =>
              <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#39FF14]">
                    {step.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {step.content}
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* The Architect's Advantage */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Architect's <span className="text-[#39FF14]">Advantage</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Traditional web developers vs. a Digital Growth Architect
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {advantageComparisons.map((comparison, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}>

                <Card className="h-full hover:border-[#39FF14] transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#39FF14]">{comparison.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-500 text-sm">✕</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">Traditional Developer</p>
                        <p className="text-foreground">{comparison.traditional}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#39FF14]/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="text-[#39FF14]" size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#39FF14] mb-1">Digital Growth Architect</p>
                        <p className="text-foreground font-semibold">{comparison.architect}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 5-Step Ecosystem Blueprint */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My 5-Step <span className="text-[#39FF14]">Ecosystem Blueprint</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The core components that make up every successful digital ecosystem I build
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blueprintSteps.map((item, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}>

                <Card className={`h-full bg-gradient-to-br ${item.color} hover:border-[#39FF14] transition-all duration-300 group`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-6xl">{item.icon}</span>
                      <span className="text-4xl font-bold text-[#39FF14] opacity-50 group-hover:opacity-100 transition-opacity">
                        {item.step}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-[#39FF14] transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
              { icon: <Users size={40} />, value: "50+", label: "Happy Clients" },
              { icon: <TrendingUp size={40} />, value: "340%", label: "Avg Traffic Increase" },
              { icon: <CheckCircle size={40} />, value: "100+", label: "Projects Completed" },
              { icon: <Zap size={40} />, value: "5", label: "Years Experience" }].
              map((stat, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center">

                  <div className="flex justify-center mb-4 text-[#39FF14]">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-[#39FF14]">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>);

}