import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, Star, Users, Trophy, ChevronRight, Award, CheckCircle } from "lucide-react";
import homeHeroImg from "@assets/generated_images/home-hero.jpg";
import homeHeroImg2 from "@assets/generated_images/home-hero-2.jpg";
import homeHeroImg3 from "@assets/generated_images/home-hero-3.jpg";

const heroSlides = [
  { src: homeHeroImg,  alt: "Students celebrating success at Gyanix Academy" },
  { src: homeHeroImg2, alt: "Students learning in modern classroom at Gyanix Academy" },
  { src: homeHeroImg3, alt: "Students celebrating exam results at Gyanix Academy" },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-gray-900">
      {count}{suffix}
    </div>
  );
}

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden py-20 lg:py-32"
        style={{ background: "linear-gradient(135deg, #0d1f4a 0%, #152460 40%, #1b2e7a 70%, #1e3580 100%)" }}
      >
        {/* Background glows & particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.06)_0%,_transparent_60%)]" />
          <div className="absolute -top-10 right-1/4 w-72 h-72 bg-secondary/25 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-96 h-60 bg-blue-400/15 rounded-full blur-3xl" />
          <div className="absolute top-20 left-20 w-3 h-3 bg-secondary rounded-full blur-[2px] opacity-70" />
          <div className="absolute bottom-40 right-20 w-5 h-5 bg-white rounded-full blur-[2px] opacity-25" />
          <div className="absolute top-40 right-1/3 w-2 h-2 bg-secondary rounded-full blur-[1px] opacity-60" />
          <div className="absolute top-1/2 left-10 w-2 h-2 bg-white rounded-full opacity-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Glassmorphism badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-md text-white text-sm font-medium mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                <span>5.0 Rated Institute in Kaithal</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Your Path to <span className="text-secondary">IIT, NEET, NDA & Defence</span> Success
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
                Join Gyanix Academy and transform your potential into achievement. Expert faculty, rigorous testing, and unwavering support for ambitious students.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-orange-500 via-secondary to-orange-400 shadow-lg shadow-secondary/40 hover:shadow-xl hover:shadow-secondary/60 hover:scale-105 transition-all duration-300 active:scale-95 text-base">
                    Book Free Demo Class
                  </button>
                </Link>
                <Link href="/courses">
                  <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white border-2 border-white/80 hover:bg-white hover:text-primary hover:border-white hover:scale-105 transition-all duration-300 active:scale-95 text-base">
                    Explore Courses
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-secondary/20 rounded-[2rem] blur-xl transform rotate-3"></div>
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl aspect-[4/3]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={heroSlides[current].src}
                    alt={heroSlides[current].alt}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
              {/* Slide dots */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-secondary w-5" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Results Driven</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — STATS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Choose Gyanix Academy?</h2>
            <p className="text-gray-500 text-lg">Our track record speaks for itself.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, target: 500, suffix: "+", label: "Students Trained", gradient: "from-blue-500 to-blue-600", desc: "and growing every year" },
              { icon: Trophy, target: 95, suffix: "%", label: "Success Rate", gradient: "from-secondary to-orange-400", desc: "students clear their exams" },
              { icon: Star, target: 5, suffix: ".0★", label: "Google Rating", gradient: "from-yellow-400 to-amber-500", desc: "across 59+ reviews" },
              { icon: BookOpen, target: 9, suffix: "+", label: "Exams Covered", gradient: "from-emerald-500 to-green-600", desc: "JEE, NEET, NDA & more" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-secondary/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                <div className="text-sm font-semibold text-gray-700 mt-1">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Why bullets */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: CheckCircle, text: "Small batches for personalised attention" },
              { icon: Award, text: "IIT/NEET/NDA expert faculty, proven results" },
              { icon: CheckCircle, text: "On-campus hostel — school + coaching + stay" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-xl px-5 py-4">
                <item.icon className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR ACHIEVERS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Achievers</h2>
            <p className="text-gray-600 text-lg">Celebrated in the community and covered by regional media.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "🏆",
                title: "District & State Ranks",
                desc: "Multiple students securing District Rank and State Rank in IIT-JEE, NEET, and NDA competitive exams.",
                tag: "Academic Excellence",
                color: "border-yellow-300 bg-yellow-50",
                tagColor: "bg-yellow-100 text-yellow-700",
              },
              {
                emoji: "📰",
                title: "Amar Ujala Coverage",
                desc: "Featured in Amar Ujala newspaper for our prize & cheque distribution award ceremony for top performers.",
                tag: "Media Recognition",
                color: "border-blue-200 bg-blue-50",
                tagColor: "bg-blue-100 text-blue-700",
              },
              {
                emoji: "🚦",
                title: "Road Safety Programme",
                desc: "Organised a road safety awareness drive with local RTO officials, covered by Jagmarg News.",
                tag: "Community Initiative",
                color: "border-green-200 bg-green-50",
                tagColor: "bg-green-100 text-green-700",
              },
              {
                emoji: "🎖️",
                title: "Prize Distribution Events",
                desc: "Regular cheque & trophy distribution ceremonies honouring top performers across all programmes.",
                tag: "Student Recognition",
                color: "border-secondary/30 bg-orange-50",
                tagColor: "bg-orange-100 text-secondary",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border-2 p-7 flex flex-col gap-4 hover:shadow-lg transition-all ${item.color}`}
              >
                <div className="text-4xl">{item.emoji}</div>
                <div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.tagColor}`}>{item.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS / COURSES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premier Programs</h2>
            <p className="text-gray-600 text-lg">Comprehensive coaching tailored for ultimate competitive success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "IIT-JEE (Mains & Adv)", desc: "Rigorous preparation for engineering aspirants.", color: "bg-blue-50 text-blue-600" },
              { title: "NEET Preparation", desc: "Expert guidance for medical entrance exams.", color: "bg-emerald-50 text-emerald-600" },
              { title: "NDA & Defence", desc: "Structured coaching for defence services.", color: "bg-red-50 text-red-600" },
              { title: "CUET", desc: "Top university admission preparation.", color: "bg-purple-50 text-purple-600" },
              { title: "RMS & Sainik School", desc: "Early preparation for prestigious schools.", color: "bg-orange-50 text-orange-600" },
              { title: "School Boards (5th-12th)", desc: "Strong foundation for academic excellence.", color: "bg-teal-50 text-teal-600" },
              { title: "Olympiads", desc: "National & international olympiad training.", color: "bg-indigo-50 text-indigo-600" },
              { title: "Foundation (Pre-Comp)", desc: "Early foundation for classes 6–8 students.", color: "bg-yellow-50 text-yellow-600" },
              { title: "G-SET Scholarship", desc: "Earn up to 100% fee waiver on the entrance test.", color: "bg-pink-50 text-pink-600" },
            ].map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${course.color}`}>
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.desc}</p>
                <Link href="/courses" className="inline-flex items-center text-primary font-semibold group-hover:text-secondary transition-colors">
                  Know More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/courses">
              <Button variant="default" size="lg" className="rounded-full px-8">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-gray-600 text-lg">A complete School · Coaching · Hostel campus designed for serious aspirants.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { emoji: "🏠", title: "Residential Hostel", desc: "Safe, comfortable on-campus hostel for outstation students." },
              { emoji: "👨‍🏫", title: "Experienced Faculty", desc: "IIT/NEET/NDA experts with proven track records." },
              { emoji: "📝", title: "Regular Tests", desc: "Weekly mock tests and detailed performance reports." },
              { emoji: "👥", title: "Small Batches", desc: "Limited seats per batch for personalised attention." },
              { emoji: "🔒", title: "Safe Campus", desc: "Secure and monitored environment for focused learning." },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-secondary/30 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{f.emoji}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-secondary/10 skew-x-12 transform origin-top-left"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to secure your future?</h2>
            <p className="text-xl text-white/80 mb-10">
              Join Gyanix Academy today and take the first step towards academic excellence. Enroll in our scholarship test to get up to 100% fee waiver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/scholarship">
                <Button variant="secondary" size="lg" className="rounded-full px-8 font-bold w-full sm:w-auto">
                  Apply for G-SET Scholarship
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8 font-bold text-white border-white hover:bg-white hover:text-primary w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS / STATS SECTION */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, count: "84+", label: "Justdial Reviews" },
              { icon: Star, count: "5.0★", label: "Google & Justdial" },
              { icon: BookOpen, count: "9+", label: "Exams Covered" },
              { icon: Trophy, count: "2025", label: "Est. in Kaithal" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900">{stat.count}</div>
                <div className="text-sm md:text-base font-medium text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-yellow-400 text-lg leading-none">★★★★★</span>
              <div className="text-sm font-semibold text-gray-800">
                <span className="text-primary font-bold">5.0</span> on Google
                <span className="text-gray-400 font-normal ml-1">(59 reviews)</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-yellow-400 text-lg leading-none">★★★★★</span>
              <div className="text-sm font-semibold text-gray-800">
                <span className="text-primary font-bold">5.0</span> on Justdial
                <span className="text-gray-400 font-normal ml-1">(84 reviews)</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-secondary/5 border border-secondary/20 rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-secondary font-bold text-base">✓</span>
              <span className="text-sm font-semibold text-gray-800">Justdial Claimed Business</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-primary font-bold text-base">🏫</span>
              <span className="text-sm font-semibold text-gray-800">School · Coaching · Hostel</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
