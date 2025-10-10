"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Logo } from "@/components/logo"
import {
  Users,
  Shield,
  TrendingUp,
  DollarSign,
  Globe,
  Clock,
  MessageCircle,
  Video,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Eye,
  Calendar,
  Award,
  Zap,
  Target,
  Heart,
  Download,
  PieChart,
  Activity,
  Smartphone,
  Lock,
  PlayCircle,
  Ban,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Building,
  Lightbulb,
  Rocket,
  Database,
  Cloud,
  Cpu,
  Wifi,
} from "lucide-react"

export function InvestorReport() {
  const [selectedMetric, setSelectedMetric] = useState("overview")

  // Platform Statistics
  const platformStats = {
    totalUsers: 65000,
    activeStudents: 50000,
    verifiedTutors: 10000,
    parentAccounts: 5000,
    sessionsCompleted: 250000,
    totalRevenue: 2500000,
    monthlyGrowth: 15.2,
    userRetention: 89.5,
    averageRating: 4.8,
    countriesServed: 45,
  }

  // Financial Metrics
  const financialMetrics = {
    monthlyRevenue: 425000,
    revenueGrowth: 18.5,
    averageSessionValue: 45,
    tutorEarnings: 2000000,
    platformCommission: 500000,
    customerAcquisitionCost: 25,
    lifetimeValue: 850,
    churnRate: 3.2,
  }

  // Safety & Moderation Stats
  const safetyStats = {
    messagesModerated: 1250000,
    violationsDetected: 2500,
    usersBlocked: 150,
    parentMonitoringSessions: 15000,
    safetyScore: 99.8,
    responseTime: "< 1 second",
    falsePositives: 0.2,
    adminActions: 45,
  }

  // Technology Stack
  const techStack = [
    { name: "Next.js 15", category: "Frontend", description: "Modern React framework with App Router" },
    { name: "TypeScript", category: "Language", description: "Type-safe development" },
    { name: "Tailwind CSS", category: "Styling", description: "Utility-first CSS framework" },
    { name: "shadcn/ui", category: "Components", description: "Accessible component library" },
    { name: "Real-time AI", category: "Moderation", description: "Content filtering & user safety" },
    { name: "WebRTC", category: "Video", description: "Peer-to-peer video calling" },
    { name: "PostgreSQL", category: "Database", description: "Scalable relational database" },
    { name: "Redis", category: "Cache", description: "High-performance caching" },
    { name: "AWS/Vercel", category: "Infrastructure", description: "Cloud hosting & CDN" },
    { name: "Stripe", category: "Payments", description: "Secure payment processing" },
  ]

  // Key Features
  const keyFeatures = [
    {
      category: "Core Platform",
      features: [
        "Multi-role user system (Students, Tutors, Parents)",
        "Advanced tutor search and filtering",
        "Real-time video calling and screen sharing",
        "Interactive whiteboard and file sharing",
        "Flexible scheduling and calendar integration",
        "Secure payment processing and escrow",
        "Progress tracking and analytics",
        "Mobile-responsive design",
      ],
    },
    {
      category: "Safety & Moderation",
      features: [
        "AI-powered content moderation",
        "Real-time message filtering",
        "Automatic user blocking system",
        "Comprehensive violation tracking",
        "Admin moderation panel",
        "Parent monitoring dashboard",
        "Session recording and playback",
        "Emergency stop controls",
      ],
    },
    {
      category: "Parent Controls",
      features: [
        "Live session monitoring",
        "Real-time safety alerts",
        "Session recordings access",
        "Progress reports and analytics",
        "Tutor communication oversight",
        "Spending controls and limits",
        "Child profile management",
        "Safety score tracking",
      ],
    },
    {
      category: "Business Intelligence",
      features: [
        "Revenue tracking and analytics",
        "User behavior insights",
        "Performance metrics dashboard",
        "Automated reporting system",
        "A/B testing framework",
        "Conversion funnel analysis",
        "Churn prediction models",
        "Market trend analysis",
      ],
    },
  ]

  // Market Opportunity
  const marketData = {
    totalMarket: 350000000000, // $350B
    onlineTutoringMarket: 12000000000, // $12B
    expectedGrowth: 14.7, // 14.7% CAGR
    targetMarket: 2400000000, // $2.4B
    marketPenetration: 0.1, // 0.1%
    competitorAnalysis: [
      { name: "Wyzant", marketShare: 15, weakness: "Limited safety features" },
      { name: "Tutor.com", marketShare: 12, weakness: "High pricing" },
      { name: "Chegg Tutors", marketShare: 10, weakness: "Academic focus only" },
      { name: "Preply", marketShare: 8, weakness: "Language learning focus" },
    ],
  }

  // Revenue Projections
  const revenueProjections = [
    { year: 2024, revenue: 5100000, users: 75000, growth: 25 },
    { year: 2025, revenue: 12750000, users: 150000, growth: 150 },
    { year: 2026, revenue: 25500000, users: 300000, growth: 100 },
    { year: 2027, revenue: 45900000, users: 500000, growth: 80 },
    { year: 2028, revenue: 73440000, users: 750000, growth: 60 },
  ]

  // Competitive Advantages
  const competitiveAdvantages = [
    {
      title: "Advanced Safety System",
      description: "Industry-leading AI-powered content moderation and parental controls",
      impact: "99.8% safety score, 10x better than competitors",
      icon: Shield,
    },
    {
      title: "Multi-Stakeholder Platform",
      description: "Unique three-way ecosystem serving students, tutors, and parents",
      impact: "3x higher user retention than single-role platforms",
      icon: Users,
    },
    {
      title: "Real-Time Monitoring",
      description: "Live session oversight with instant intervention capabilities",
      impact: "First-to-market parent monitoring solution",
      icon: Eye,
    },
    {
      title: "Scalable Technology",
      description: "Modern tech stack built for global scale and performance",
      impact: "Can handle 10M+ concurrent users",
      icon: Zap,
    },
  ]

  // Investment Highlights
  const investmentHighlights = [
    {
      metric: "Market Size",
      value: "$350B",
      description: "Global education technology market",
      growth: "+14.7% CAGR",
    },
    {
      metric: "Revenue Growth",
      value: "18.5%",
      description: "Month-over-month revenue growth",
      growth: "Accelerating",
    },
    {
      metric: "User Retention",
      value: "89.5%",
      description: "12-month user retention rate",
      growth: "Industry leading",
    },
    {
      metric: "Safety Score",
      value: "99.8%",
      description: "Platform safety rating",
      growth: "Best in class",
    },
  ]

  const handleDownloadReport = () => {
    alert(
      "📊 Investor Report Download\n\n📄 Generating comprehensive PDF report...\n📈 Including all metrics and projections\n💼 Executive summary attached\n📧 Sending to your email\n\nReport will be ready in 2-3 minutes!",
    )
  }

  const handleScheduleDemo = () => {
    alert(
      "🎯 Schedule Investor Demo\n\n📅 Available time slots:\n• Tomorrow 2:00 PM EST\n• Thursday 10:00 AM EST\n• Friday 3:00 PM EST\n\n👥 Demo includes:\n• Live platform walkthrough\n• Safety features demonstration\n• Financial metrics review\n• Q&A session\n\n📧 Calendar invite will be sent!",
    )
  }

  const handleContactTeam = () => {
    alert(
      "📞 Contact Investment Team\n\n👨‍💼 CEO: Sarah Chen\n📧 sarah@digied.com\n📱 +1 (555) 123-4567\n\n👨‍💻 CTO: Michael Rodriguez\n📧 michael@digied.com\n📱 +1 (555) 123-4568\n\n🏢 Office: San Francisco, CA\n⏰ Available: Mon-Fri 9AM-6PM PST",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Logo size="xl" />
          </div>
          <p className="text-lg text-gray-600 mb-2">Investor Report 2024</p>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The World's Safest Online Tutoring Platform with Advanced AI Moderation and Parental Controls
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary" onClick={handleDownloadReport}>
              <Download className="w-5 h-5 mr-2" />
              Download Full Report
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              onClick={handleScheduleDemo}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              onClick={handleContactTeam}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Team
            </Button>
          </div>
        </div>

        {/* Executive Summary */}
        <Card className="mb-12 border-0 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
            <CardTitle className="text-3xl flex items-center">
              <Target className="w-8 h-8 mr-3" />
              Executive Summary
            </CardTitle>
            <CardDescription className="text-white/90 text-lg">
              Revolutionizing online education with safety-first approach
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Opportunity</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The global online tutoring market is experiencing unprecedented growth, driven by increased demand for
                  personalized education and safety concerns around traditional in-person tutoring. DigiEd addresses
                  these challenges with the industry's most advanced safety platform.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                    <span>$350B global education technology market</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                    <span>14.7% annual growth rate (2024-2028)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                    <span>First platform with comprehensive parent monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                    <span>AI-powered safety system with 99.8% accuracy</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  DigiEd is the world's first tutoring platform designed with safety as the primary focus. Our
                  three-stakeholder ecosystem serves students, tutors, and parents with unprecedented transparency and
                  control.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">65K+</div>
                    <div className="text-sm text-gray-600">Total Users</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-accent">$2.5M</div>
                    <div className="text-sm text-gray-600">Total Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">250K+</div>
                    <div className="text-sm text-gray-600">Sessions</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-secondary">45</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={selectedMetric} onValueChange={setSelectedMetric} className="space-y-8">
          <TabsList className="grid w-full grid-cols-6 h-14">
            <TabsTrigger value="overview" className="text-sm">
              Platform Overview
            </TabsTrigger>
            <TabsTrigger value="financials" className="text-sm">
              Financial Metrics
            </TabsTrigger>
            <TabsTrigger value="safety" className="text-sm">
              Safety & Moderation
            </TabsTrigger>
            <TabsTrigger value="technology" className="text-sm">
              Technology Stack
            </TabsTrigger>
            <TabsTrigger value="market" className="text-sm">
              Market Analysis
            </TabsTrigger>
            <TabsTrigger value="projections" className="text-sm">
              Growth Projections
            </TabsTrigger>
          </TabsList>

          {/* Platform Overview */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {investmentHighlights.map((highlight, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{highlight.value}</div>
                    <div className="text-lg font-medium text-gray-900 mb-2">{highlight.metric}</div>
                    <div className="text-sm text-gray-600 mb-2">{highlight.description}</div>
                    <Badge className="bg-accent/10 text-accent border-accent/20">{highlight.growth}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-2" />
                    User Base Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Students</span>
                        <span className="font-medium">50,000 (77%)</span>
                      </div>
                      <Progress value={77} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Tutors</span>
                        <span className="font-medium">10,000 (15%)</span>
                      </div>
                      <Progress value={15} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Parents</span>
                        <span className="font-medium">5,000 (8%)</span>
                      </div>
                      <Progress value={8} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-6 h-6 mr-2" />
                    Global Reach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">45</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-accent">24/7</div>
                      <div className="text-sm text-gray-600">Availability</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">15+</div>
                      <div className="text-sm text-gray-600">Languages</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Competitive Advantages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {competitiveAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <advantage.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{advantage.title}</h4>
                        <p className="text-gray-600 mb-2">{advantage.description}</p>
                        <Badge className="bg-accent/10 text-accent border-accent/20">{advantage.impact}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financial Metrics */}
          <TabsContent value="financials" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-accent">
                    ${financialMetrics.monthlyRevenue.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                  <Badge className="mt-2 bg-accent/10 text-accent border-accent/20">
                    +{financialMetrics.revenueGrowth}% MoM
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600">${financialMetrics.averageSessionValue}</div>
                  <div className="text-sm text-gray-600">Avg Session Value</div>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">Industry Leading</Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-600">${financialMetrics.customerAcquisitionCost}</div>
                  <div className="text-sm text-gray-600">Customer Acquisition Cost</div>
                  <Badge className="mt-2 bg-purple-100 text-purple-800">Low CAC</Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-red-600">${financialMetrics.lifetimeValue}</div>
                  <div className="text-sm text-gray-600">Customer Lifetime Value</div>
                  <Badge className="mt-2 bg-red-100 text-red-800">34:1 LTV:CAC</Badge>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="w-6 h-6 mr-2" />
                    Revenue Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Platform Commission (20%)</span>
                        <span className="font-medium">$500K</span>
                      </div>
                      <Progress value={20} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Tutor Earnings (80%)</span>
                        <span className="font-medium">$2M</span>
                      </div>
                      <Progress value={80} className="h-3" />
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex justify-between">
                        <span className="font-semibold">Total Volume</span>
                        <span className="font-semibold">$2.5M</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-6 h-6 mr-2" />
                    Key Financial Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Monthly Recurring Revenue</span>
                      <span className="font-semibold text-accent">$425K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Annual Run Rate</span>
                      <span className="font-semibold text-blue-600">$5.1M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Gross Margin</span>
                      <span className="font-semibold text-purple-600">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Churn Rate</span>
                      <span className="font-semibold text-secondary">3.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Net Revenue Retention</span>
                      <span className="font-semibold text-red-600">125%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Safety & Moderation */}
          <TabsContent value="safety" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-accent">{safetyStats.safetyScore}%</div>
                  <div className="text-sm text-gray-600">Safety Score</div>
                  <Badge className="mt-2 bg-accent/10 text-accent border-accent/20">Industry Best</Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600">
                    {safetyStats.messagesModerated.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Messages Moderated</div>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">Real-time</Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-secondary">{safetyStats.violationsDetected}</div>
                  <div className="text-sm text-gray-600">Violations Detected</div>
                  <Badge className="mt-2 bg-orange-100 text-orange-800">Auto-blocked</Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-600">{safetyStats.responseTime}</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                  <Badge className="mt-2 bg-purple-100 text-purple-800">Lightning Fast</Badge>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="w-6 h-6 mr-2" />
                    Parent Monitoring Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <Video className="w-5 h-5 text-accent mr-3" />
                        <span>Live Session Monitoring</span>
                      </div>
                      <Badge className="bg-accent/10 text-accent border-accent/20">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-blue-600 mr-3" />
                        <span>Content Filtering</span>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">99.8% Accuracy</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center">
                        <PlayCircle className="w-5 h-5 text-purple-600 mr-3" />
                        <span>Session Recordings</span>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">Automatic</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div className="flex items-center">
                        <Ban className="w-5 h-5 text-red-600 mr-3" />
                        <span>Emergency Stop</span>
                      </div>
                      <Badge className="bg-red-100 text-red-800">Instant</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-6 h-6 mr-2" />
                    AI Moderation Capabilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-2">Content Categories Detected</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span>• Personal Information</span>
                        <span>• Inappropriate Language</span>
                        <span>• Sexual Content</span>
                        <span>• Harassment/Bullying</span>
                        <span>• Solicitation</span>
                        <span>• Academic Dishonesty</span>
                        <span>• Threats/Violence</span>
                        <span>• Spam/Substances</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-accent">{safetyStats.falsePositives}%</div>
                        <div className="text-xs text-gray-600">False Positives</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">{safetyStats.usersBlocked}</div>
                        <div className="text-xs text-gray-600">Users Blocked</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Technology Stack */}
          <TabsContent value="technology" className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cpu className="w-6 h-6 mr-2" />
                  Technology Architecture
                </CardTitle>
                <CardDescription>Modern, scalable, and secure technology stack</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techStack.map((tech, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{tech.name}</h4>
                        <Badge variant="outline">{tech.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cloud className="w-6 h-6 mr-2" />
                    Infrastructure & Scalability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <Database className="w-5 h-5 text-blue-600 mr-3" />
                        <span>Database Performance</span>
                      </div>
                      <span className="font-medium">99.9% Uptime</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <Wifi className="w-5 h-5 text-accent mr-3" />
                        <span>API Response Time</span>
                      </div>
                      <span className="font-medium">&lt; 100ms</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-purple-600 mr-3" />
                        <span>Concurrent Users</span>
                      </div>
                      <span className="font-medium">10M+ Capacity</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center">
                        <Lock className="w-5 h-5 text-secondary mr-3" />
                        <span>Security Compliance</span>
                      </div>
                      <span className="font-medium">SOC 2 Type II</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="w-6 h-6 mr-2" />
                    Platform Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {keyFeatures[0].features.slice(0, 8).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-3" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Market Analysis */}
          <TabsContent value="market" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600">
                    ${(marketData.totalMarket / 1000000000).toFixed(0)}B
                  </div>
                  <div className="text-sm text-gray-600">Total Addressable Market</div>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">Education Technology</Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-accent">
                    ${(marketData.onlineTutoringMarket / 1000000000).toFixed(0)}B
                  </div>
                  <div className="text-sm text-gray-600">Online Tutoring Market</div>
                  <Badge className="mt-2 bg-accent/10 text-accent border-accent/20">Serviceable Market</Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-600">{marketData.expectedGrowth}%</div>
                  <div className="text-sm text-gray-600">Expected CAGR</div>
                  <Badge className="mt-2 bg-purple-100 text-purple-800">2024-2028</Badge>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-6 h-6 mr-2" />
                    Competitive Landscape
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {marketData.competitorAnalysis.map((competitor, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{competitor.name}</h4>
                          <Badge variant="outline">{competitor.marketShare}% Market Share</Badge>
                        </div>
                        <div className="flex items-center">
                          <AlertTriangle className="w-4 h-4 text-secondary mr-2" />
                          <span className="text-sm text-gray-600">{competitor.weakness}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="w-6 h-6 mr-2" />
                    Market Opportunity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Growing Demand</h4>
                      <p className="text-sm text-blue-800">
                        Post-pandemic shift to online learning has created permanent demand for digital tutoring
                        solutions.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Safety Concerns</h4>
                      <p className="text-sm text-green-800">
                        Parents increasingly concerned about child safety in online environments, creating demand for
                        monitored platforms.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Global Expansion</h4>
                      <p className="text-sm text-purple-800">
                        Opportunity to expand into emerging markets with growing middle class and internet penetration.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Growth Projections */}
          <TabsContent value="projections" className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Rocket className="w-6 h-6 mr-2" />
                  5-Year Revenue Projections
                </CardTitle>
                <CardDescription>Conservative growth estimates based on current trajectory</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {revenueProjections.map((projection, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                          {projection.year}
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">
                            ${(projection.revenue / 1000000).toFixed(1)}M
                          </div>
                          <div className="text-sm text-gray-600">Revenue</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold">{projection.users.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Users</div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-accent/10 text-accent border-accent/20">+{projection.growth}%</Badge>
                        <div className="text-xs text-gray-500 mt-1">Growth</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    Key Growth Drivers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold">Market Expansion</h4>
                        <p className="text-sm text-gray-600">Enter 20+ new countries by 2026</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold">Product Innovation</h4>
                        <p className="text-sm text-gray-600">AI-powered personalized learning paths</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold">Enterprise Sales</h4>
                        <p className="text-sm text-gray-600">B2B partnerships with schools and institutions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold">Mobile App Launch</h4>
                        <p className="text-sm text-gray-600">Native iOS and Android applications</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="w-6 h-6 mr-2" />
                    Investment Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Series A: $5M</h4>
                      <div className="text-sm text-blue-800 space-y-1">
                        <div>• Product development & AI enhancement</div>
                        <div>• Market expansion (5 new countries)</div>
                        <div>• Team scaling (25 new hires)</div>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Series B: $15M</h4>
                      <div className="text-sm text-green-800 space-y-1">
                        <div>• Global expansion (20 countries)</div>
                        <div>• Enterprise sales team</div>
                        <div>• Mobile app development</div>
                      </div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Series C: $30M</h4>
                      <div className="text-sm text-purple-800 space-y-1">
                        <div>• Market leadership consolidation</div>
                        <div>• Advanced AI features</div>
                        <div>• Strategic acquisitions</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-primary to-secondary text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Education Together?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join us in building the world's safest and most effective online tutoring platform. With proven traction,
              innovative technology, and a massive market opportunity, DigiEd is positioned for explosive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100" onClick={handleScheduleDemo}>
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Investor Meeting
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                onClick={handleDownloadReport}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Complete Deck
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                onClick={handleContactTeam}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Leadership
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Sarah Chen, CEO</h3>
                <p className="text-gray-600 mb-2">Former educator, 15+ years EdTech</p>
                <p className="text-sm text-gray-500">sarah@digied.com</p>
                <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Michael Rodriguez, CTO</h3>
                <p className="text-gray-600 mb-2">Ex-Google, Microsoft veteran</p>
                <p className="text-sm text-gray-500">michael@digied.com</p>
                <p className="text-sm text-gray-500">+1 (555) 123-4568</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">DigiEd Headquarters</h3>
                <p className="text-gray-600 mb-2">San Francisco, California</p>
                <p className="text-sm text-gray-500">hello@digied.com</p>
                <p className="text-sm text-gray-500">1-800-DIGIED</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
