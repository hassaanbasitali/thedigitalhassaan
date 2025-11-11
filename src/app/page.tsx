"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/Footer";
import { useState } from "react";

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
  results: "50+ qualified leads/month"
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


export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Digital Growth
                <span className="text-[#39FF14]"> Architect</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 !whitespace-pre-line">I don't just build websites. I architect complete digital ecosystems that drive measurable business growth for service based businesses 

              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-semibold">
                    View My Services <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black">
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

              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-full aspect-square max-w-md mx-auto"
                style={{ transformStyle: "preserve-3d" }}>

                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Portfolio-Main-Image-1762817919671.jpg?width=8000&height=8000&resize=contain"
                  alt="Hassaan Basit"
                  fill
                  className="rounded-2xl object-cover shadow-2xl border-4 border-[#39FF14]"
                  priority />

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#39FF14]/20 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Not Your Average <span className="text-[#39FF14]">Web Developer</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a Digital Growth Architect who takes a holistic, strategic approach to online presence. 
              Every website I build is part of a larger ecosystem designed to attract, convert, and retain customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
            { icon: "", title: "Strategic Thinking", desc: "Business-first approach to every project" },
            { icon: "", title: "Technical Excellence", desc: "Modern, scalable, performant solutions" },
            { icon: "", title: "Growth Focus", desc: "Measurable results that move the needle" }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>

                <Card className="text-center hover:border-[#39FF14] transition-colors">
                  <CardHeader>
                    <div className="text-5xl mb-4 !whitespace-pre-line !bg-none !bg-cover !bg-center !whitespace-pre-line !whitespace-pre-line !w-full !h-[54px]">{item.icon}</div>
                    <CardTitle className="!not-italic !opacity-100 !flex">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          <div className="text-center">
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black">
                Learn More About My Approach <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
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

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-[#39FF14]">Projects</span>
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
                  <Card className="overflow-hidden hover:border-[#39FF14] transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300" />

                      <div className="absolute top-4 right-4 bg-[#39FF14] text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {project.results}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-[#39FF14] transition-colors">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-[#39FF14] font-semibold flex items-center">
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

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
                        <CardTitle className="text-lg !whitespace-pre-line">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
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

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build Your
                <span className="text-[#39FF14]"> Digital Ecosystem</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to transform your online presence? Let's discuss how I can help your business grow.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center">
                    <Mail className="text-[#39FF14]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">hassaan@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center">
                    <Phone className="text-[#39FF14]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center">
                    <MapPin className="text-[#39FF14]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Available Globally</p>
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
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
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