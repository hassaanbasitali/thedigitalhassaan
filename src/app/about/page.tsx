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

const architectAdvantage = [
{
  number: "01",
  title: "A STRATEGIC PARTNER",
  description: "I don't just execute tasks; I analyze your business goals to create a comprehensive plan that ensures we are always moving in the right direction."
},
{
  number: "02",
  title: "METICULOUS ATTENTION TO DETAIL",
  description: "I treat your business as if it were my own, ensuring every element is perfect and aligned with our strategy."
},
{
  number: "03",
  title: "TRANSPARENT & CLEAR COMMUNICATION",
  description: "You will never be left in the dark. I believe in maintaining open, honest, and regular communication so you are always confident in the project's progress."
},
{
  number: "04",
  title: "A RELENTLESS FOCUS ON ROI",
  description: "My ultimate goal is to grow your business. I am obsessed with tracking performance and ensuring that your investment yields a real, measurable financial return."
}];

const blueprintSteps = [
{
  step: "01",
  title: "Brand Foundation",
  description: "Positioning, messaging, and visual identity that resonates with your ideal customers",
  color: "#1A1A1A"
},
{
  step: "02",
  title: "High-Converting Website",
  description: "Fast, beautiful, and optimized for turning visitors into customers",
  color: "#F5F5F5"
},
{
  step: "03",
  title: "Content Engine",
  description: "SEO-optimized content that attracts organic traffic and establishes authority",
  color: "#39FF14"
},
{
  step: "04",
  title: "Marketing Automation",
  description: "Automated systems for lead capture, nurturing, and customer retention",
  color: "#1A1A1A"
},
{
  step: "05",
  title: "Analytics & Growth",
  description: "Data-driven insights and continuous optimization for sustainable growth",
  color: "#F5F5F5"
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
              transition={{ duration: 0.5 }}>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                You Can't Build an
                <span className="text-[#39FF14]"> Engine</span> with Scattered Parts.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-light">
                What makes my approach different is my perspective. I don't see myself as a freelancer you hire for a task; I see myself as your dedicated growth architect. Think about the cost and complexity of hiring a separate strategist, a web developer, and an ad manager—it's a full-time job just to keep them in sync. As your single, expert partner, I handle all of that. The process is simpler, more cost-effective, and frees you to focus on running your business, not chasing your marketing.
              </p>
              <div className="space-y-4">
                {[
                "A Strategic Architect, Not Just a Marketer.",
                "A Relentless Focus on Your Revenue & ROI.",
                "One Cohesive System, Not Scattered Parts.",
                "A True Partner Committed to Your Success."].
                map((item, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-3">

                    <CheckCircle className="text-[#39FF14] flex-shrink-0" size={24} fill="#39FF14" />
                    <span className="text-foreground font-light">{item}</span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative">

              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Portfolio-Secondary-Image-1762817919635.jpg?width=800&height=800&resize=contain"
                  alt="Hassaan Basit"
                  fill
                  className="rounded-2xl object-cover shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Architect's Advantage - NEW SECTION */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Architect's <span className="text-[#39FF14]">Advantage</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {architectAdvantage.map((item, index) =>
              <AccordionItem key={index} value={`advantage-${index}`} className="border-2 border-border rounded-lg px-6 hover:border-[#39FF14] transition-colors duration-200">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-bold hover:text-[#39FF14] py-6">
                    <span className="flex items-center gap-4">
                      <span className="text-[#39FF14] text-2xl font-bold">{item.number}.</span>
                      <span>{item.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pb-6 pl-14">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* My Architectural Process */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}>

            <Accordion type="single" collapsible className="w-full">
              {processSteps.map((step, index) =>
              <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-[#39FF14] transition-colors duration-200">
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

      {/* 5-Step Ecosystem Blueprint */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}>

                <Card
                className={`h-full hover:border-[#39FF14] transition-all duration-200 group`}
                style={{
                  backgroundColor: item.color,
                  borderColor: item.color === "#39FF14" ? "#39FF14" : undefined
                }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span
                      className="text-4xl font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: item.color === "#F5F5F5" ? "#1A1A1A" : item.color === "#39FF14" ? "#000000" : "#39FF14" }}>
                        {item.step}
                      </span>
                    </div>
                    <CardTitle
                    className="text-xl group-hover:text-[#39FF14] transition-colors duration-200"
                    style={{ color: item.color === "#F5F5F5" ? "#1A1A1A" : item.color === "#39FF14" ? "#000000" : "#FFFFFF" }}>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription
                    className="text-base"
                    style={{ color: item.color === "#F5F5F5" ? "#666666" : item.color === "#39FF14" ? "#000000" : "#A3A3A3" }}>
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
              { icon: <Users size={40} />, value: "20+", label: "Happy Clients" },
              { icon: <TrendingUp size={40} />, value: "340%", label: "Avg Traffic Increase" },
              { icon: <CheckCircle size={40} />, value: "15+", label: "Projects Completed" },
              { icon: <Zap size={40} />, value: "3+", label: "Years Experience" }].
              map((stat, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
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