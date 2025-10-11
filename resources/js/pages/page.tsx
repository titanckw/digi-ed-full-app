"use client";

import { Button } from "../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Logo } from "../components/logo";
import {
    BookOpen,
    Users,
    Star,
    Shield,
    Clock,
    CheckCircle,
    ArrowRight,
    Play,
    MessageCircle,
    TrendingUp,
    Eye,
    UserCheck,
    School,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    const features = [
        {
            icon: Users,
            title: "Expert Tutors",
            description: "Connect with qualified tutors across all subjects",
        },
        {
            icon: Shield,
            title: "Safe & Secure",
            description: "Advanced content moderation and parental controls",
        },
        {
            icon: Clock,
            title: "Flexible Scheduling",
            description: "Book sessions that fit your schedule",
        },
        {
            icon: TrendingUp,
            title: "Track Progress",
            description: "Monitor learning progress with detailed analytics",
        },
    ];

    const tutors = [
        {
            name: "Dr. Grace Wanjiru",
            subject: "Mathematics",
            rating: 4.9,
            reviews: 127,
            image: "/placeholder.svg?height=80&width=80",
            badge: "Top Rated",
        },
        {
            name: "Prof. David Ochieng",
            subject: "Computer Science",
            rating: 4.8,
            reviews: 89,
            image: "/placeholder.svg?height=80&width=80",
            badge: "Expert",
        },
        {
            name: "Faith Chebet",
            subject: "Kiswahili & CRE",
            rating: 4.9,
            reviews: 156,
            image: "/placeholder.svg?height=80&width=80",
            badge: "Patient Teacher",
        },
    ];

    const testimonials = [
        {
            name: "Peter Kamau",
            role: "Student",
            content:
                "DigiEd helped me improve my math grades significantly. The tutors are amazing!",
            rating: 5,
        },
        {
            name: "Mary Akinyi",
            role: "Parent",
            content:
                "I love the parental monitoring features. I can see exactly how my child is progressing.",
            rating: 5,
        },
        {
            name: "Mwalimu David",
            role: "Tutor",
            content:
                "Teaching on DigiEd has been rewarding. The platform makes it easy to connect with students.",
            rating: 5,
        },
    ];

    const handleGetStarted = () => {
        router.push("/signup");
    };

    const handleFindTutors = () => {
        router.push("/tutors");
    };

    const handleLogin = () => {
        router.push("/login");
    };

    const handleHowItWorks = () => {
        router.push("/how-it-works");
    };

    const handleAbout = () => {
        router.push("/about");
    };

    const handleParentDashboard = () => {
        router.push("/dashboard/parent");
    };

    const handleStudentDashboard = () => {
        router.push("/dashboard/student");
    };

    const handleTutorDashboard = () => {
        router.push("/dashboard/tutor");
    };

    const handleSchoolDashboard = () => {
        router.push("/dashboard/school");
    };

    const handleContact = () => {
        alert(
            "Contact DigiEd Support:\n\n📧 Email: support@digied.co.ke\n📞 Phone: +254 700 123 456\n💬 Live Chat: Available 24/7\n🕐 Hours: Monday-Friday 9AM-6PM EAT\n\nWe're here to help with any questions!"
        );
    };

    const handlePricing = () => {
        alert(
            "DigiEd Pricing:\n\n👨‍🎓 Students: Pay per session (KES)\n👨‍🏫 Tutors: Keep 80% of earnings\n👨‍👩‍👧‍👦 Parents: Free monitoring tools\n💳 No monthly fees\n🎯 M-Pesa & Card accepted\n\nView detailed pricing on our website!"
        );
    };

    const handleHelp = () => {
        alert(
            "DigiEd Help Center:\n\n❓ Frequently Asked Questions\n📚 User Guides & Tutorials\n🎥 Video Walkthroughs\n📋 Community Guidelines\n🛡️ Safety Information\n📞 Contact Support\n\nFind answers to all your questions!"
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Logo size="xl" />

                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={handleHowItWorks}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            How it Works
                        </button>
                        <button
                            onClick={handleFindTutors}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            Find Tutors
                        </button>
                        <button
                            onClick={handleAbout}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={handlePricing}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            Pricing
                        </button>
                        <button
                            onClick={handleContact}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            Contact
                        </button>
                    </nav>

                    <div className="flex items-center space-x-3">
                        <Button
                            variant="ghost"
                            className="text-primary hover:text-primary/80"
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                        <Button
                            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                            onClick={handleGetStarted}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                            <Shield className="w-3 h-3 mr-1" />
                            Safe & Secure Learning Platform
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Learn with{" "}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Expert Tutors
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Connect with qualified tutors for personalized
                            learning experiences. Safe, secure, and designed for
                            success with advanced parental monitoring.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg px-8 py-3"
                                onClick={handleGetStarted}
                            >
                                Start Learning Today
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 py-3 bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                                onClick={handleFindTutors}
                            >
                                <Play className="mr-2 w-5 h-5" />
                                Explore Tutors
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose DigiEd?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We provide a comprehensive learning platform with
                            safety and quality at its core
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="text-center hover:shadow-lg transition-shadow cursor-pointer"
                            >
                                <CardHeader>
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Tutors */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Expert Tutors
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Learn from qualified professionals who are
                            passionate about teaching
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tutors.map((tutor, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow cursor-pointer"
                            >
                                <CardHeader className="text-center">
                                    <Avatar className="w-20 h-20 mx-auto mb-4">
                                        <AvatarImage
                                            src={
                                                tutor.image ||
                                                "/placeholder.svg"
                                            }
                                        />
                                        <AvatarFallback>
                                            {tutor.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-xl">
                                        {tutor.name}
                                    </CardTitle>
                                    <CardDescription className="text-primary font-medium">
                                        {tutor.subject}
                                    </CardDescription>
                                    <Badge className="bg-accent/10 text-accent border-accent/20 mt-2">
                                        {tutor.badge}
                                    </Badge>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <div className="flex items-center justify-center mb-4">
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        <span className="ml-1 font-medium">
                                            {tutor.rating}
                                        </span>
                                        <span className="ml-1 text-gray-500">
                                            ({tutor.reviews} reviews)
                                        </span>
                                    </div>
                                    <Button
                                        className="w-full bg-gradient-to-r from-primary to-secondary"
                                        onClick={handleFindTutors}
                                    >
                                        View Profile
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                            onClick={handleFindTutors}
                        >
                            View All Tutors
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Parent Monitoring Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                                <Shield className="w-3 h-3 mr-1" />
                                Parent Monitoring
                            </Badge>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Keep Your Children Safe While Learning
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Our advanced parental monitoring system gives
                                you complete visibility and control over your
                                child's learning experience.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                    <span>Live session monitoring</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                    <span>Automatic content filtering</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                    <span>Session recordings and reports</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                    <span>Emergency stop controls</span>
                                </div>
                            </div>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-primary to-secondary"
                                onClick={handleParentDashboard}
                            >
                                <Eye className="mr-2 w-5 h-5" />
                                View Parent Dashboard
                            </Button>
                        </div>
                        <div className="relative">
                            <Card className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold">
                                            Live Session Monitor
                                        </h3>
                                        <Badge className="bg-accent/10 text-accent border-accent/20">
                                            <div className="w-2 h-2 bg-accent rounded-full mr-1 animate-pulse"></div>
                                            Live
                                        </Badge>
                                    </div>
                                    <div className="bg-gray-100 rounded-lg p-4">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <Avatar className="w-8 h-8">
                                                <AvatarFallback>
                                                    SJ
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium text-sm">
                                                    Asha with Dr. Grace Wanjiru
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Mathematics • 23:45 elapsed
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 text-center">
                                            <div>
                                                <p className="text-xs text-gray-500">
                                                    Focus Level
                                                </p>
                                                <p className="font-medium text-accent">
                                                    Excellent
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">
                                                    Behavior Score
                                                </p>
                                                <p className="font-medium text-accent">
                                                    95%
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="flex-1 bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                                        >
                                            <Eye className="w-3 h-3 mr-1" />
                                            View
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="flex-1 bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                                        >
                                            <MessageCircle className="w-3 h-3 mr-1" />
                                            Message
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Dashboards */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Tailored Experiences for Everyone
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Whether you're a student, tutor, or parent, we have
                            the perfect dashboard for your needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card
                            className="hover:shadow-lg transition-shadow cursor-pointer"
                            onClick={handleStudentDashboard}
                        >
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <BookOpen className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl">
                                    Student Dashboard
                                </CardTitle>
                                <CardDescription>
                                    Track progress, book sessions, and
                                    communicate with tutors
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                        Session scheduling
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                        Progress tracking
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                        Secure messaging
                                    </div>
                                </div>
                                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600">
                                    View Student Dashboard
                                </Button>
                            </CardContent>
                        </Card>

                        <Card
                            className="hover:shadow-lg transition-shadow cursor-pointer"
                            onClick={handleTutorDashboard}
                        >
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <UserCheck className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl">
                                    Tutor Dashboard
                                </CardTitle>
                                <CardDescription>
                                    Manage students, track earnings, and
                                    schedule sessions
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                        Earnings tracking
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                        Student management
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                        Performance analytics
                                    </div>
                                </div>
                                <Button className="w-full bg-gradient-to-r from-accent to-accent/80">
                                    View Tutor Dashboard
                                </Button>
                            </CardContent>
                        </Card>

                        <Card
                            className="hover:shadow-lg transition-shadow cursor-pointer"
                            onClick={handleParentDashboard}
                        >
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl">
                                    Parent Dashboard
                                </CardTitle>
                                <CardDescription>
                                    Monitor children's learning and ensure their
                                    safety
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                        Live monitoring
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                        Safety controls
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                        Progress reports
                                    </div>
                                </div>
                                <Button className="w-full bg-gradient-to-r from-secondary to-secondary/80">
                                    View Parent Dashboard
                                </Button>
                            </CardContent>
                        </Card>

                        <Card
                            className="hover:shadow-lg transition-shadow cursor-pointer"
                            onClick={handleSchoolDashboard}
                        >
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <School className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl">
                                    School Dashboard
                                </CardTitle>
                                <CardDescription>
                                    Manage classes, monitor students, and track
                                    CBC progress
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                        Classroom live view
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                        CBC competency tracking
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                                        Group project management
                                    </div>
                                </div>
                                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600">
                                    View School Dashboard
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* For Schools Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            {/* You can replace this with a more relevant image or component */}
                            <Card className="p-6">
                                <CardHeader>
                                    <CardTitle>
                                        CBC Classroom Live View
                                    </CardTitle>
                                    <CardDescription>
                                        Mwalimu Juma's Form 2 Maths
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3 bg-blue-50 rounded-lg text-center">
                                            <p className="font-bold text-2xl text-blue-600">
                                                24/25
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Wanafunzi Online
                                            </p>
                                        </div>
                                        <div className="p-3 bg-green-50 rounded-lg text-center">
                                            <p className="font-bold text-2xl text-accent">
                                                88%
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Avg. Progress
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                                <School className="w-3 h-3 mr-1" />
                                DigiEd for Schools
                            </Badge>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Empower Your Classroom
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Bring DigiEd's interactive learning to your
                                school. Our tools for educators align with the
                                Kenyan CBC curriculum and help prepare students
                                for KCSE success.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                    <span>Track CBC Core Competencies</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                    <span>
                                        Assign and manage group projects
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                    <span>
                                        Monitor progress towards KCSE goals
                                    </span>
                                </div>
                            </div>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-primary to-secondary"
                                onClick={() =>
                                    router.push("/signup?role=school")
                                }
                            >
                                Learn More About School Plans
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Our Users Say
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Hear from students, parents, and tutors who love
                            using DigiEd
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 text-yellow-400 fill-current"
                                                />
                                            )
                                        )}
                                    </div>
                                    <p className="text-gray-600 mb-4 italic">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="flex items-center">
                                        <Avatar className="w-10 h-10 mr-3">
                                            <AvatarFallback>
                                                {testimonial.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
                <div className="container mx-auto text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Start Your Learning Journey?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Join thousands of students, tutors, and parents who
                            trust DigiEd for safe, effective online learning.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3"
                                onClick={handleGetStarted}
                            >
                                Get Started Free
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3 bg-transparent"
                                onClick={handleFindTutors}
                            >
                                Browse Tutors
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="mb-4">
                                <Logo size="xl" className="text-white" />
                            </div>
                            <p className="text-gray-400 mb-4">
                                Safe, secure, and effective online tutoring
                                platform for students of all ages.
                            </p>
                            <div className="flex space-x-4">
                                <Badge className="bg-accent/10 text-accent border-accent/20">
                                    <Shield className="w-3 h-3 mr-1" />
                                    Safe Learning
                                </Badge>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Platform
                            </h3>
                            <div className="space-y-2">
                                <button
                                    onClick={handleHowItWorks}
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    How it Works
                                </button>
                                <button
                                    onClick={handleFindTutors}
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    Find Tutors
                                </button>
                                <button
                                    onClick={handlePricing}
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    Pricing
                                </button>
                                <button
                                    onClick={handleHelp}
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    Help Center
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Dashboards
                            </h3>
                            <div className="space-y-2">
                                <button
                                    onClick={handleStudentDashboard}
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    Student Dashboard
                                </button>
                                <button
                                    onClick={handleTutorDashboard}
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    Tutor Dashboard
                                </button>
                                <button
                                    onClick={handleParentDashboard}
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    Parent Dashboard
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Support
                            </h3>
                            <div className="space-y-2">
                                <button
                                    onClick={handleContact}
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    Contact Us
                                </button>
                                <button
                                    onClick={handleAbout}
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    About Us
                                </button>
                                <button
                                    onClick={handleHelp}
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    FAQ
                                </button>
                                <Link
                                    href="/privacy"
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/terms"
                                    className="block text-gray-400 hover:text-white transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                        <p className="text-gray-400">
                            © 2024 DigiEd. All rights reserved. Safe learning
                            platform with advanced content moderation.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
