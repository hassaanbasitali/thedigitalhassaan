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
import { toast } from "sonner";

const projects = [
{
  title: "Plus Accountants",
  description: "A complete digital ecosystem build that reactivated a dormant client base and doubled monthly revenue.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Plus-accountants-1763757916767.png?width=800&height=600&resize=contain",
  link: "/projects/plus-accountants",
  results: "+70% organic traffic"
},
{
  title: "Dua Construction Services",
  description: "Architecting a lead generation system that secured two major, high-value construction contracts.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Dua-Construction-1763757910714.png?width=800&height=600&resize=contain",
  link: "/projects/dua-construction",
  results: "12+ qualified leads/month"
},
{
  title: "ABH Systems Pvt Ltd",
  description: "A hyper-efficient brand launch that delivered exceptional ROI and immediate market traction.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Abh-Laptops-1763757892256.png?width=800&height=600&resize=contain",
  link: "/projects/abh-systems",
  results: "$180K pipeline in 90 days"
}];

const testimonials = [
{
  name: "Muhammad Kamran",
  role: "CEO, Plus Accountants",
  content: "Before Hassaan, our digital marketing was non-existent. He came in with a clear, methodical plan and built a complete system from the ground up. He didn't just get us new followers; he re-engaged our old clients and created a predictable way to get new ones. The best part? Our revenue doubled, and the system he built is something my own team can now easily manage.",
  avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/82745004-5748-4154-8146-df633235fbda/generated_images/professional-corporate-headshot-of-a-sou-ce36087c-20251117213325.jpg",
  rating: 5
},
{
  name: "Zain Ul Arifeen",
  role: "Founder, Dua Construction Services",
  content: "I was skeptical that 'digital marketing' would work for a construction business like ours. Hassaan took our inconsistent social media and lack of professional materials and completely transformed our image. The company profile he created and the strategy he implemented made us look credible and professional, which is everything in this industry. The results are real—we closed two huge deals directly because of the system he put in place.",
  avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/82745004-5748-4154-8146-df633235fbda/generated_images/professional-corporate-headshot-of-a-sou-2f66ceb7-20251117213325.jpg",
  rating: 5
},
{
  name: "Akbar Ali",
  role: "CEO, ABH Systems Pvt Ltd",
  content: "We were a new brand launching on a very tight budget. What impressed me most about Hassaan was his efficiency—he didn't waste a single rupee. He built our entire brand and got us making sales almost immediately. To get over 35 sales in our first two months with such a tiny ad spend is incredible. He's incredibly efficient with capital. The return on our small investment was outstanding.",
  avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/82745004-5748-4154-8146-df633235fbda/generated_images/professional-corporate-headshot-of-a-sou-cbbb102d-20251117213325.jpg",
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
    toast.success("Thank you! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}>

                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-foreground">
                  B2B Marketing
                  <span className="text-[#39FF14]"> Specialist</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                  I build digital infrastructure that drives high-ticket sales for US professional service firms.
                </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}>
                <Link href="/services">
                  <Button size="lg" className="bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                    View My Services <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-105">
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative">

              <motion.div 
                className="relative w-full aspect-square max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}>
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Portfolio-Main-Image-1762817919671.jpg?width=600&height=600&resize=contain"
                      alt="B2B Digital Marketing Infrastructure Specialist - Hassaan Basit Ali | thedigitalhassaan"
                      fill
                      className="rounded-2xl object-cover shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MY CORE PRINCIPLES Section */}
      <section className="py-20 px-6 bg-card overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6 text-foreground">
              MY CORE PRINCIPLES
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light !whitespace-pre-line">This is the commitment and value I bring to every client project. It's what separates my architectural approach from everyone else.

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
            
            <div className="flex-shrink-0 w-6 md:w-12" />
            
            {corePrinciples.map((principle, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
                  <div className="text-6xl md:text-7xl font-bold mb-6" style={{ color: 'rgba(255, 255, 255, 0.2)' }}>
                    {principle.number}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {principle.title}
                  </h3>
                  
                  <p className="text-base md:text-lg font-light leading-relaxed" style={{ color: '#E5E5E5' }}>
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            )}
            
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Don't just take my word for it. These projects are more than just a portfolio—they're stories of partnership, strategy, and what happens when we build the right system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="transition-all duration-300">

                <Link href={project.link}>
                  <Card className="overflow-hidden hover:border-[#39FF14]/40 transition-all duration-300 group h-full hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-[#39FF14] transition-colors duration-300 text-foreground">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-foreground font-semibold flex items-center group-hover:text-[#39FF14] transition-colors duration-300">
                        View Case Study <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Real Words from Real <span className="text-[#39FF14]">Partners</span>
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="transition-all duration-300">

                <Card className="h-full hover:shadow-[0_0_20px_rgba(57,255,20,0.1)] transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full" />

                      <div>
                        <CardTitle className="text-lg text-foreground">{testimonial.name}</CardTitle>
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
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Let's Build Your
                <span className="text-[#39FF14]"> Digital Ecosystem</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to transform your online presence? Let's discuss how I can help your business grow.
              </p>
              
              <div className="space-y-4">
                <div className="pt-2">
                  <p className="font-semibold text-foreground mb-4">Connect With Me</p>
                  <div className="flex items-center gap-3">
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.instagram.com/thedigitalhassaan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center hover:bg-[#39FF14]/20 transition-colors">
                      <Instagram className="text-[#39FF14]" size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.facebook.com/thedigitalhassaan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center hover:bg-[#39FF14]/20 transition-colors">
                      <Facebook className="text-[#39FF14]" size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.linkedin.com/in/thedigitalhassaan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center hover:bg-[#39FF14]/20 transition-colors">
                      <Linkedin className="text-[#39FF14]" size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.fiverr.com/hassaanbasit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center hover:bg-[#39FF14]/20 transition-colors">
                      <Globe className="text-[#39FF14]" size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}>

              <Card className="hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] transition-all duration-300">
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
                        required
                        className="transition-all duration-300 focus:border-[#39FF14]/50" />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="transition-all duration-300 focus:border-[#39FF14]/50" />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Tell me about your project..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="transition-all duration-300 focus:border-[#39FF14]/50" />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
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