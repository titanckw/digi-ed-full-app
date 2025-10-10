"use client";

import { Button } from "@/views/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/views/components/ui/card";
import { Badge } from "@/views/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/views/components/ui/avatar";
import { Logo } from "@/views/components/logo";
import {
  Target,
  Heart,
  Users,
  Globe,
  Award,
  Shield,
  Star,
  ArrowRight,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  // Update all about page handlers

  // Update contact handlers for team members
  const handleTeamContact = (email: string, name: string) => {
    alert(
      `Contacting ${name}:\n\n📧 Email: ${email}\n💬 Opening email client\n📝 You can ask about:\n• Platform features\n• Partnership opportunities\n• Technical questions\n• Educational initiatives`
    );

    // Simulate opening email client
    setTimeout(() => {
      window.open(
        `mailto:${email}?subject=Hello from DigiEd Website&body=Hi ${name},%0D%0A%0D%0AI'm reaching out from the DigiEd website...`
      );
    }, 500);
  };

  const handleSocialLink = (platform: string, name: string) => {
    alert(
      `Opening ${name}'s ${platform} profile:\n\n🔗 Redirecting to ${platform}\n👤 View professional profile\n💼 Connect professionally\n📰 See latest updates`
    );
  };

  // Update CTA handlers
  const handleJoinMission = (role: string) => {
    const messages = {
      student:
        "Join thousands of successful students! 🎓\n\n📚 Access to expert tutors\n🎯 Personalized learning paths\n📊 Track your progress\n💰 Affordable rates",
      tutor:
        "Share your expertise with the world! 🌍\n\n💰 Earn competitive rates\n📅 Flexible scheduling\n🌟 Build your reputation\n👨‍🎓 Impact student lives",
    };

    alert(messages[role as keyof typeof messages]);
    setTimeout(() => router.push(`/signup?role=${role}`), 1000);
  };

  const handleContactUs = () => {
    alert(
      "Contact DigiEd Kenya:\n\n📧 Email: hello@digied.co.ke\n📞 Phone: +254 700 123 456\n💬 Live chat available\n📍 Nairobi, Kenya\n⏰ Response within 24 hours"
    );
  };

  const stats = [
    { number: "50,000+", label: "Students Helped", icon: Users },
    { number: "10,000+", label: "Expert Tutors", icon: Award },
    { number: "100+", label: "Countries", icon: Globe },
    { number: "4.9/5", label: "Average Rating", icon: Star },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence in Education",
      description:
        "We believe every student deserves access to high-quality, personalized education that helps them reach their full potential.",
    },
    {
      icon: Heart,
      title: "Passion for Learning",
      description:
        "Our platform is built by educators who understand the transformative power of great teaching and meaningful learning connections.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "We maintain the highest standards of safety and verification to ensure secure, reliable learning experiences for everyone.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "We foster a supportive community where students and tutors can grow together, share knowledge, and celebrate achievements.",
    },
  ];

  const team = [
    {
      name: "Grace Wanjiku",
      role: "CEO & Co-Founder",
      bio: "Former headteacher with 15+ years in Kenyan education. Passionate about leveraging tech for CBC.",
      avatar: "/placeholder.svg?height=120&width=120",
      social: { linkedin: "#", twitter: "#", email: "grace@digied.co.ke" },
    },
    {
      name: "David Ochieng",
      role: "CTO & Co-Founder",
      bio: "Software engineer from the University of Nairobi. Built solutions for local tech hubs and is passionate about EdTech.",
      avatar: "/placeholder.svg?height=120&width=120",
      social: { linkedin: "#", twitter: "#", email: "david@digied.co.ke" },
    },
    {
      name: "Dr. Fatuma Ali",
      role: "Head of Education",
      bio: "Former KICD curriculum designer and lecturer. Expert in the Competency-Based Curriculum (CBC).",
      avatar: "/placeholder.svg?height=120&width=120",
      social: { linkedin: "#", twitter: "#", email: "fatuma@digied.co.ke" },
    },
    {
      name: "Samuel Kiprop",
      role: "Head of Product",
      bio: "Product leader focused on creating intuitive, user-centered educational experiences for the African market.",
      avatar: "/placeholder.svg?height=120&width=120",
      social: { linkedin: "#", twitter: "#", email: "samuel@digied.co.ke" },
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "DigiEd Founded in Nairobi",
      description:
        "Started with a vision to make quality CBC and KCSE tutoring accessible across Kenya.",
    },
    {
      year: "2021",
      title: "1,000 Tutors",
      description:
        "Reached our first milestone of 1,000 verified tutors across 20+ subjects.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description:
        "Expanded to serve students in neighboring East African countries.",
    },
    {
      year: "2023",
      title: "CBC-Aligned Platform",
      description:
        "Launched our intelligent platform fully aligned with CBC principles for better learning outcomes.",
    },
    {
      year: "2024",
      title: "50,000+ Students",
      description:
        "Celebrating over 50,000 students who have improved their academic performance with DigiEd.",
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
              className="text-gray-600 hover:text-primary transition-colors"
            >
              How it Works
            </button>
            <button
              onClick={() => router.push("/about")}
              className="text-primary font-medium"
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
            🌟 Our Story
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
            About DigiEd
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize education by connecting passionate
            tutors with eager learners worldwide. Every student deserves access
            to personalized, high-quality education that helps them achieve
            their dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg px-8 py-6"
              onClick={() => handleJoinMission("student")}
            >
              Join Our Mission
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 bg-transparent"
              onClick={() => handleContactUs()}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to educational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by the belief that education should be accessible,
              personalized, and transformative. These values guide everything we
              do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate educators and technologists working together to
              transform education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <CardHeader className="pb-4">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleTeamContact(member.social.email, member.name)
                      }
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSocialLink("LinkedIn", member.name)}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSocialLink("Twitter", member.name)}
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a simple idea to a global platform transforming education
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <Card
                    className={`w-full max-w-md border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                          {milestone.year}
                        </Badge>
                        <CardTitle className="text-lg">
                          {milestone.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {milestone.description}
                      </CardDescription>
                    </CardContent>
                  </Card>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the DigiEd Community
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of our mission to make quality education accessible to
            everyone. Whether you want to learn or teach, we're here to support
            your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => handleJoinMission("student")}
            >
              Start Learning
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-transparent"
              onClick={() => handleJoinMission("tutor")}
            >
              Become a Tutor
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
                    onClick={() => router.push("/tutors")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Find Tutors
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/subjects")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Browse Subjects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/pricing")}
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
                    onClick={() => router.push("/signup?role=tutor")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Become a Tutor
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/tutor-resources")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Resources
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/earnings")}
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
                    onClick={() => router.push("/help")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/contact")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/privacy")}
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
