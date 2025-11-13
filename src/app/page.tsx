"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Globe, MoveHorizontal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/Footer";
import { useState, useRef } from "react";

const projects = [
{
  title: "Plus Accountants",
  description: "Complete digital transformation with brand refresh, website rebuild, and marketing automation",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
  link: "/projects/plus-accountants",
  results: "+70% organic traffic"
},
{
  title: "DUA Construction",
  description: "Multi-phase ecosystem build driving qualified lead generation and brand authority",
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
  link: "/projects/dua-construction",
  results: "12+ qualified leads/month"
},
{
  title: "ABH Systems",
  description: "Strategic positioning pivot with ecosystem development for B2B lead generation",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  link: "/projects/abh-systems",
  results: "$180K pipeline in 90 days"
}];


const testimonials = [
{
  name: "Muhammad Kamran",
  role: "CEO, Plus Accountants",
  content: "Hassaan didn't just build us a website - he architected an entire growth system. The results speak for themselves: 340% increase in organic traffic and qualified leads flowing in consistently.",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  rating: 5
},
{
  name: "Michael Chen",
  role: "Founder, DUA Construction",
  content: "Working with Hassaan was transformative. He understood our business deeply and created a digital ecosystem that actually drives growth. We're seeing 50+ qualified leads every month now.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  rating: 5
},
{
  name: "Emily Rodriguez",
  role: "Marketing Director, ABH Systems",
  content: "Hassaan's strategic approach is unmatched. He positioned us perfectly in the market and built systems that generated $180K in pipeline within 90 days. Incredible ROI.",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  rating: 5
}];

const corePrinciples = [
{
  number: "01.",
  title: "The All-in-One Engine",
  description: "Instead of scattered parts, I build your entire digital ecosystem. A single, unified system where every component works in perfect harmony."
},
{
  number: "02.",
  title: "A Strategic Foundation",
  description: "Every project begins with a deep-dive analysis. We don't guess; we architect a data-driven blueprint for your success."
},
{
  number: "03.",
  title: "A Relentless Focus on ROI",
  description: "My ultimate goal is your growth. I am obsessed with tracking performance and ensuring that your investment yields a real, measurable financial return."
},
{
  number: "04.",
  title: "A Single, Dedicated Partner",
  description: "You get one point of contact and one person who takes full responsibility for the project's success, saving you time and eliminating agency headaches."
},
{
  number: "05.",
  title: "Sustainable, Scalable Systems",
  description: "I don't just run campaigns; I build the organized systems and processes that allow your business to manage and scale its success long-term."
}];


export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activePrincipleIndex, setActivePrincipleIndex] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Thank you! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

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

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                Digital Growth
                <span className="text-[#39FF14]"> Architect</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 !whitespace-pre-line">I create interconnected Digital Ecosystems for service-based businesses, engineered to increase their sales and client acquisition.

              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-semibold">
                    View My Services <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative">

              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Portfolio-Main-Image-1762817919671.jpg?width=8000&height=8000&resize=contain"
                  alt="Hassaan Basit"
                  fill
                  className="rounded-2xl object-cover shadow-2xl"
                  priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MY CORE PRINCIPLES Section */}
      <section className="py-20 px-6 bg-card overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6 text-foreground">
              MY CORE PRINCIPLES
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              This is the commitment and value I bring to every client partnership. It's what separates my architectural approach from everyone else.
            </p>
            
            {/* Swipe Icon Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8 text-[#39FF14] animate-pulse">
              <MoveHorizontal size={24} />
              <span className="text-sm font-medium">Swipe to explore</span>
            </div>
          </div>

          {/* Horizontal Scrolling Carousel */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}>
            
            {/* Spacer to center first card */}
            <div className="flex-shrink-0 w-6 md:w-12" />
            
            {corePrinciples.map((principle, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[500px] lg:w-[600px]">
                
                <div
                className={`bg-[#1A1A1A] rounded-[24px] p-8 md:p-12 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] ${
                activePrincipleIndex === i ? '-translate-y-2 shadow-[0_0_30px_rgba(57,255,20,0.3)]' : ''}`
                }
                onTouchStart={() => setActivePrincipleIndex(i)}
                onTouchEnd={() => setTimeout(() => setActivePrincipleIndex(null), 300)}
                onClick={() => {
                  setActivePrincipleIndex(i);
                  setTimeout(() => setActivePrincipleIndex(null), 300);
                }}>
                  {/* Number */}
                  <div className="text-6xl md:text-7xl font-bold mb-6" style={{ color: 'rgba(255, 255, 255, 0.2)' }}>
                    {principle.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {principle.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base md:text-lg font-light leading-relaxed" style={{ color: '#E5E5E5' }}>
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            )}
            
            {/* Spacer to show partial card on right */}
            <div className="flex-shrink-0 w-6 md:w-12" />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses. See how I've helped companies transform their digital presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>

                <Link href={project.link}>
                  <Card className="overflow-hidden hover:border-foreground/20 transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-[#39FF14] transition-colors text-foreground">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-foreground font-semibold flex items-center">
                        View Case Study <ArrowRight className="ml-2" size={16} />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Client <span className="text-[#39FF14]">Success Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take my word for it. Here's what my clients say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>

                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full" />

                      <div>
                        <CardTitle className="text-lg !whitespace-pre-line text-foreground">{testimonial.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">{testimonial.role}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) =>
                    <Star key={i} size={16} fill="#39FF14" stroke="#39FF14" />
                    )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Let's Build Your
                <span className="text-[#39FF14]"> Digital Ecosystem</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to transform your online presence? Let's discuss how I can help your business grow.
              </p>
              
              <div className="space-y-4">
                {/* Social Media Links */}
                <div className="pt-2">
                  <p className="font-semibold text-foreground mb-4">Connect With Me</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.instagram.com/thedigitalhassaan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center hover:bg-[#39FF14]/20 transition-colors">
                      <Instagram className="text-[#39FF14]" size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com/thedigitalhassaan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center hover:bg-[#39FF14]/20 transition-colors">
                      <Facebook className="text-[#39FF14]" size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/thedigitalhassaan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center hover:bg-[#39FF14]/20 transition-colors">
                      <Linkedin className="text-[#39FF14]" size={20} />
                    </a>
                    <a
                      href="https://www.fiverr.com/hassaanbasit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center hover:bg-[#39FF14]/20 transition-colors">
                      <Globe className="text-[#39FF14]" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">Send Me a Message</CardTitle>
                  <CardDescription className="text-muted-foreground">Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required />

                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required />

                    </div>
                    <div>
                      <Textarea
                        placeholder="Tell me about your project..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required />

                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-semibold"
                      disabled={isSubmitting}>

                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2" size={18} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>);

}