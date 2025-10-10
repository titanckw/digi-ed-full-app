"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/logo";
import {
  UserPlus,
  Search,
  Calendar,
  Video,
  Star,
  CreditCard,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield,
  School,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function HowItWorksPage() {
  const router = useRouter();

  // Update all how-it-works page handlers

  // Update the existing handlers to provide better feedback
  const handleGetStarted = (role: string) => {
    const roleMessages = {
      student:
        "Ready to start learning? 📚\n\n✨ Find expert tutors\n📅 Flexible scheduling\n💰 Affordable rates\n🎯 Personalized learning\n\nLet's create your student account!",
      tutor:
        "Ready to start teaching? 👨‍🏫\n\n💰 Earn money sharing knowledge\n📅 Flexible schedule\n🌍 Teach students worldwide\n⭐ Build your reputation\n\nLet's create your tutor account!",
      parent:
        "Ready to monitor your child's learning? 👨‍👩‍👧‍👦\n\n🛡️ Ensure child safety\n📊 Track progress\n💬 Communicate with tutors\n📹 Monitor sessions\n\nLet's create your parent account!",
    };

    alert(roleMessages[role as keyof typeof roleMessages]);
    setTimeout(() => router.push(`/signup?role=${role}`), 1000);
  };

  // Add navigation handlers for footer
  const handleFooterLink = (page: string) => {
    alert(`Navigating to ${page}...`);
    setTimeout(() => router.push(`/${page}`), 500);
  };

  const studentSteps = [
    {
      step: 1,
      title: "Create Your Profile",
      description:
        "Sign up and tell us about your learning goals, subjects of interest, and preferred learning style.",
      icon: UserPlus, //
      details: [
        "Complete profile setup",
        "Set learning preferences",
        "Add academic background",
      ],
    },
    {
      step: 2,
      title: "Find Perfect Tutors",
      description:
        "Browse our verified tutors, filter by subject, price, availability, and read reviews.",
      icon: Search,
      details: [
        "Advanced search filters",
        "Read tutor reviews",
        "Compare rates and experience",
      ],
    },
    {
      step: 3,
      title: "Book Your Session",
      description:
        "Schedule sessions that fit your calendar and choose between online or in-person meetings.",
      icon: Calendar, //
      details: [
        "Flexible scheduling",
        "Online or in-person",
        "Instant booking confirmation",
      ],
    },
    {
      step: 4,
      title: "Learn & Grow",
      description:
        "Attend your sessions, track progress, and achieve your academic goals with expert guidance.",
      icon: Video,
      details: [
        "Interactive sessions",
        "KCSE prep tracking",
        "Personalized feedback",
      ],
    },
  ];

  const tutorSteps = [
    {
      step: 1,
      title: "Apply & Get Verified",
      description:
        "Submit your application with credentials, experience, and teaching expertise for verification.",
      icon: UserPlus, //
      details: [
        "Upload credentials",
        "Background verification",
        "Teaching assessment",
      ],
    },
    {
      step: 2,
      title: "Set Your Availability",
      description:
        "Create your schedule, set your rates, and define your teaching preferences.",
      icon: Calendar,
      details: [
        "Flexible scheduling",
        "Set hourly rates (KES)",
        "Choose subjects to teach",
      ],
    },
    {
      step: 3,
      title: "Connect with Students",
      description:
        "Receive booking requests, communicate with students, and build your reputation.",
      icon: MessageCircle,
      details: ["Student matching", "Direct messaging", "Build your profile"],
    },
    {
      step: 4,
      title: "Teach & Earn",
      description:
        "Conduct sessions, help students succeed, and earn money doing what you love.",
      icon: CreditCard,
      details: ["Secure payments", "Weekly payouts", "Performance bonuses"],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Tutors",
      description:
        "All tutors undergo thorough background checks and credential verification.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Find tutors available around the clock across different time zones.",
    },
    {
      icon: Users,
      title: "Personalized Matching",
      description:
        "Our algorithm matches you with tutors based on your learning style and goals.",
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description:
        "Rating system and feedback ensure high-quality tutoring experiences.",
    },
  ];

  const schoolSteps = [
    {
      step: 1,
      title: "Create a School Account",
      description:
        "Sign up as a teacher and set up your school or classroom profile in minutes.",
      icon: UserPlus,
      details: [
        "Register your institution",
        "Add teacher profiles",
        "Set up classrooms",
      ],
    },
    {
      step: 2,
      title: "Onboard Your Students",
      description:
        "Easily add students to your digital classroom and get them ready for interactive learning.",
      icon: Users,
      details: [
        "Bulk student import",
        "Generate unique login codes",
        "Assign students to classes",
      ],
    },
    {
      step: 3,
      title: "Launch Lab Sessions",
      description:
        "Start a group session where you can guide the entire class through lessons on our platform.",
      icon: School, //
      details: [
        "Group whiteboards",
        "Broadcast messages",
        "Assign group tasks",
      ],
    },
    {
      step: 4,
      title: "Monitor & Analyze",
      description:
        "Use the teacher dashboard to monitor student activity in real-time and track class-wide progress.",
      icon: Video,
      details: [
        "Live student monitoring",
        "CBC competency analytics",
        "Identify learning gaps",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo size="xl" />
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => router.push("/tutors")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Find Tutors
            </button>
            <button
              onClick={() => router.push("/how-it-works")}
              className="text-primary font-medium"
            >
              How it Works
            </button>
            <button
              onClick={() => router.push("/about")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </button>
          </nav>
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              className="text-primary hover:text-primary/80"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
            <Button
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              onClick={() => router.push("/signup")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            📚 Simple Steps to Success
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
            How DigiEd Works
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you're a student looking to learn or a tutor ready to teach,
            DigiEd makes it simple to connect, schedule, and succeed. Here's how
            our platform works for everyone.
          </p>
        </div>
      </section>

      {/* For Students Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              For Students
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your learning journey in just four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentSteps.map((step, index) => (
              <Card
                key={index}
                className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-primary">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-4">
                    {step.description}
                  </CardDescription>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {step.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center"
                      >
                        <CheckCircle className="w-3 h-3 text-accent mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg px-8 py-6"
              onClick={() => handleGetStarted("student")}
            >
              Start Learning Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* For Tutors Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              For Tutors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Share your expertise and earn money in four easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tutorSteps.map((step, index) => (
              <Card
                key={index}
                className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-secondary">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-4">
                    {step.description}
                  </CardDescription>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {step.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center"
                      >
                        <CheckCircle className="w-3 h-3 text-accent mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 bg-transparent"
              onClick={() => handleGetStarted("tutor")}
            >
              Start Teaching Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* For Schools Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              For Kenyan Schools & Labs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bring DigiEd's powerful learning tools into your classroom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolSteps.map((step, index) => (
              <Card
                key={index}
                className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-accent">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-4">
                    {step.description}
                  </CardDescription>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {step.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center"
                      >
                        <CheckCircle className="w-3 h-3 text-accent mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-green-500 hover:from-accent/90 hover:to-green-500/90 text-lg px-8 py-6"
              onClick={() => router.push("/signup?role=school")}
            >
              Get Started with Your School
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose DigiEd?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform is designed with safety, quality, and convenience in
              mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students and tutors who are already part of the
            DigiEd community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => handleGetStarted("student")}
            >
              I Want to Learn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-transparent"
              onClick={() => handleGetStarted("tutor")}
            >
              I Want to Teach
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Logo size="md" className="text-white" />
              </div>
              <p className="text-gray-400">
                Connecting students and tutors for better learning experiences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Students</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => handleFooterLink("tutors")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Find Tutors
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLink("subjects")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Browse Subjects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLink("pricing")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Pricing
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Tutors</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => handleGetStarted("tutor")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Become a Tutor
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLink("tutor-resources")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Resources
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLink("earnings")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Earnings
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => handleFooterLink("help")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLink("contact")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFooterLink("privacy")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DigiEd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
