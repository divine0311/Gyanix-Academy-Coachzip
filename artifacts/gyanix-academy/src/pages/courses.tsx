import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, Stethoscope, Shield, GraduationCap, School, Microscope, BrainCircuit } from "lucide-react";
import coursesImg from "@assets/generated_images/courses-hero.jpg";

export default function Courses() {
  const courses = [
    {
      id: "iit-jee",
      title: "IIT-JEE (Mains & Advanced)",
      desc: "Comprehensive coaching for engineering aspirants with focus on advanced problem-solving.",
      icon: Calculator,
      color: "bg-blue-100 text-blue-600",
      features: ["Daily Practice Papers", "Weekly Mock Tests", "Advanced Study Material"]
    },
    {
      id: "neet",
      title: "NEET Preparation",
      desc: "Expert guidance in PCB to secure top ranks in medical entrance examinations.",
      icon: Stethoscope,
      color: "bg-emerald-100 text-emerald-600",
      features: ["NCERT Focused", "Diagram-based Learning", "Previous Year Analysis"]
    },
    {
      id: "nda",
      title: "NDA & Defence",
      desc: "Structured preparation for written exams and SSB interviews for defence services.",
      icon: Shield,
      color: "bg-red-100 text-red-600",
      features: ["Maths & GAT Coverage", "Current Affairs", "Physical Fitness Tips"]
    },
    {
      id: "cuet",
      title: "CUET",
      desc: "Target top central universities with our specialized domain and general test prep.",
      icon: GraduationCap,
      color: "bg-purple-100 text-purple-600",
      features: ["Domain Specific Classes", "Language Prep", "Computer Based Tests"]
    },
    {
      id: "rms",
      title: "RMS & Sainik School",
      desc: "Early foundation and specific preparation for elite military school admissions.",
      icon: School,
      color: "bg-orange-100 text-orange-600",
      features: ["Basic Math & Intelligence", "GK Modules", "Interview Prep"]
    },
    {
      id: "boards",
      title: "School Boards (5th–12th)",
      desc: "Strong academic foundation covering CBSE/State board curriculum perfectly.",
      icon: BookOpen,
      color: "bg-teal-100 text-teal-600",
      features: ["Concept Clarity", "Board Pattern Tests", "Doubt Classes"]
    },
    {
      id: "olympiads",
      title: "Olympiads",
      desc: "Train for national and international level science and math olympiads.",
      icon: BrainCircuit,
      color: "bg-indigo-100 text-indigo-600",
      features: ["Analytical Thinking", "High-order Problems", "National Level Benchmarking"]
    },
    {
      id: "foundation",
      title: "Pre-Foundation",
      desc: "Start early! Special programs for classes 6 to 8 to build a competitive edge.",
      icon: Microscope,
      color: "bg-yellow-100 text-yellow-600",
      features: ["Mental Ability", "Science Fundamentals", "Fun Learning"]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={coursesImg} alt="Students studying" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
            >
              Academic Programs
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 mb-8"
            >
              Discover our range of meticulously designed courses to help you crack the toughest exams with confidence and secure top ranks.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="p-8 flex-1">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${course.color}`}>
                    <course.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{course.desc}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0 mt-auto border-t border-gray-50 bg-gray-50/50">
                  <Link href="/contact">
                    <Button className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-colors" variant="outline">
                      Enquire Now
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 transform group-hover:translate-x-1 transition-transform">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
