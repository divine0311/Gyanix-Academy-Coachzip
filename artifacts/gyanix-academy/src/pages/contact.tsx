import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary py-16 text-center text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Get in Touch
          </motion.h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help you take the right step towards your future.
          </p>
        </div>
      </section>

      <section className="py-16 -mt-8 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Info Cards */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-secondary flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4 text-sm">We are available Mon-Sat, 9am to 7pm.</p>
                <a href="tel:+918950175314" className="text-lg font-bold text-primary hover:text-secondary transition-colors">
                  89501-75314
                </a>
                <a href="tel:+918950275314" className="text-base font-semibold text-primary hover:text-secondary transition-colors">
                  89502-75314
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm">
                  Karnal Road, Street No. 4,<br/>
                  Near New Bus Stand, Defence Colony,<br/>
                  Kaithal, Haryana – 136027
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-center gap-3 border border-gray-100"
              >
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
                <span className="font-bold text-gray-900">Open until 7:00 PM</span>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send an Enquiry</h2>
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                    <p className="text-gray-600">Your enquiry has been submitted. Our team will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-900">Full Name</label>
                        <Input required placeholder="Enter your name" className="bg-gray-50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-900">Phone Number</label>
                        <Input required type="tel" placeholder="Enter phone number" className="bg-gray-50" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Course Interested In</label>
                      <select required className="flex h-10 w-full rounded-md border border-input bg-gray-50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="" disabled selected>Select a course</option>
                        <option value="iit">IIT-JEE</option>
                        <option value="neet">NEET</option>
                        <option value="nda">NDA</option>
                        <option value="cuet">CUET</option>
                        <option value="school">School Boards (5th-12th)</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Message</label>
                      <Textarea required placeholder="How can we help you?" className="min-h-[120px] bg-gray-50" />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto px-8 gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full mt-12 bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d110052.29653139828!2d76.32628424335939!3d29.800532700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e16790d90d8ef%3A0xc665792d4924a307!2sKaithal%2C%20Haryana!5e0!3m2!1sen!2sin!4v1714155152206!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Gyanix Academy Location"
        ></iframe>
      </section>
    </div>
  );
}
