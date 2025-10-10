"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Logo } from "@/components/logo"
import {
  BookOpen,
  Calendar,
  Clock,
  Star,
  TrendingUp,
  Users,
  MessageCircle,
  DollarSign,
  Award,
  Settings,
  Plus,
  Eye,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function TutorDashboard() {
  const router = useRouter()
  const [showRescheduleModal, setShowRescheduleModal] = useState(false)
  const [selectedSession, setSelectedSession] = useState<number | null>(null)

  const upcomingSessions = [
    {
      id: 1,
      student: "Alex Thompson",
      subject: "Advanced Mathematics",
      date: "Today",
      time: "2:00 PM",
      duration: "1 hour",
      rate: 45,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      student: "Maria Garcia",
      subject: "Calculus",
      date: "Tomorrow",
      time: "10:00 AM",
      duration: "1.5 hours",
      rate: 45,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recentSessions = [
    {
      id: 1,
      student: "John Smith",
      subject: "Algebra",
      date: "Dec 15, 2024",
      rating: 5,
      earnings: 45,
      feedback: "Dr. Johnson is an excellent tutor! Very patient and knowledgeable.",
    },
    {
      id: 2,
      student: "Emily Davis",
      subject: "Geometry",
      date: "Dec 14, 2024",
      rating: 5,
      earnings: 45,
      feedback: "Great session, helped me understand complex theorems.",
    },
  ]

  const monthlyStats = {
    totalEarnings: 2340,
    totalSessions: 52,
    averageRating: 4.9,
    activeStudents: 18,
  }

  const handleStartSession = (sessionId: number) => {
    const session = upcomingSessions.find((s) => s.id === sessionId)
    if (session) {
      const ready = confirm(
        `Ready to start your session with ${session.student}?\n\n✓ Session materials prepared\n✓ Camera and microphone tested\n✓ Lesson plan ready\n✓ Whiteboard tools available\n\nClick OK to start the session.`,
      )

      if (ready) {
        alert(
          `Starting session with ${session.student}...\n\n🎥 Initializing video call\n📚 Loading lesson materials\n📝 Preparing interactive whiteboard\n⏰ Session timer started\n💰 Earnings: $${session.rate}/hour\n\nConnecting now!`,
        )
      }
    }
  }

  const handleReschedule = (sessionId: number) => {
    setSelectedSession(sessionId)
    setShowRescheduleModal(true)

    const session = upcomingSessions.find((s) => s.id === sessionId)
    if (session) {
      setTimeout(() => {
        setShowRescheduleModal(false)
        alert(
          `Session rescheduled successfully!\n\n👨‍🎓 Student: ${session.student}\n📅 New time: Tomorrow at 11:00 AM\n💰 Rate: $${session.rate}/hour\n\n✉️ Student notified\n📱 Calendar updated\n👨‍👩‍👧‍👦 Parent informed`,
        )
      }, 2000)
    }
  }

  const handleManageSchedule = () => {
    alert(
      "Schedule Management:\n\n📅 View your teaching calendar\n⏰ Set available time slots\n🚫 Block unavailable times\n🔄 Manage recurring sessions\n💰 Update hourly rates\n📊 View booking statistics",
    )
  }

  const handleAddAvailability = () => {
    alert(
      "Add Teaching Availability:\n\n⏰ Set available hours\n📅 Choose specific dates\n🔄 Create recurring slots\n💰 Set rates per subject\n🌍 Configure time zones\n📝 Add session notes",
    )
  }

  const handleViewProfile = () => {
    alert(
      "Your Tutor Profile:\n\n👨‍🏫 Professional information\n🎓 Education and credentials\n📚 Subjects you teach\n⭐ Student reviews and ratings\n💰 Earnings statistics\n📊 Performance metrics",
    )
  }

  const handleMessages = () => {
    alert(
      "Tutor Message Center:\n\n💬 Messages from students\n👨‍👩‍👧‍👦 Parent communications\n📚 Session material requests\n📝 Homework submissions\n📅 Schedule change requests\n🎯 Progress discussions",
    )
  }

  const handleEarningsReport = () => {
    alert(
      "Earnings Dashboard:\n\n💰 Monthly income summary\n📊 Earnings by subject\n👨‍🎓 Income per student\n📈 Growth trends\n💳 Payment history\n📋 Tax documentation",
    )
  }

  const handleSettings = () => {
    alert(
      "Tutor Settings:\n\n👤 Profile management\n💰 Rate adjustments\n📅 Availability preferences\n🔔 Notification settings\n💳 Payment information\n🛡️ Privacy controls",
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo size="xl" />
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleMessages}>
              <MessageCircle className="w-4 h-4 mr-2" />
              Messages
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSettings}>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm" onClick={() => router.push("/login")}>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Dr. Johnson!</h1>
          <p className="text-gray-600">Ready to inspire and teach today?</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handleEarningsReport}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Earnings</p>
                  <p className="text-2xl font-bold text-accent">${monthlyStats.totalEarnings}</p>
                </div>
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handleEarningsReport}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Sessions This Month</p>
                  <p className="text-2xl font-bold text-primary">{monthlyStats.totalSessions}</p>
                </div>
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handleMessages}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Students</p>
                  <p className="text-2xl font-bold text-secondary">{monthlyStats.activeStudents}</p>
                </div>
                <Users className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handleEarningsReport}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Rating</p>
                  <p className="text-2xl font-bold text-yellow-600">{monthlyStats.averageRating}</p>
                </div>
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Sessions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Your scheduled tutoring sessions</CardDescription>
                </div>
                <Button size="sm" className="bg-gradient-to-r from-primary to-secondary" onClick={handleManageSchedule}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Manage Schedule
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={session.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {session.student
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{session.student}</p>
                          <p className="text-sm text-gray-600">{session.subject}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {session.date} at {session.time}
                            </span>
                            <Clock className="w-4 h-4 ml-2" />
                            <span>{session.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-accent">${session.rate}/hr</p>
                        <div className="flex space-x-2 mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleReschedule(session.id)}
                            disabled={showRescheduleModal && selectedSession === session.id}
                          >
                            {showRescheduleModal && selectedSession === session.id ? "Rescheduling..." : "Reschedule"}
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-primary to-secondary"
                            onClick={() => handleStartSession(session.id)}
                          >
                            Start
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Analytics */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>Your teaching performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="cursor-pointer hover:bg-gray-50 p-2 rounded" onClick={handleEarningsReport}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Student Satisfaction</span>
                        <span className="text-sm text-gray-600">98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                    <div className="cursor-pointer hover:bg-gray-50 p-2 rounded" onClick={handleEarningsReport}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Session Completion Rate</span>
                        <span className="text-sm text-gray-600">96%</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                    <div className="cursor-pointer hover:bg-gray-50 p-2 rounded" onClick={handleEarningsReport}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Response Time</span>
                        <span className="text-sm text-gray-600">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div
                      className="flex items-center justify-between p-3 bg-accent/10 rounded-lg cursor-pointer hover:bg-accent/20"
                      onClick={handleEarningsReport}
                    >
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-accent" />
                        <span className="font-medium text-accent">Top Rated Tutor</span>
                      </div>
                      <Badge className="bg-accent/10 text-accent border-accent/20">Active</Badge>
                    </div>
                    <div
                      className="flex items-center justify-between p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100"
                      onClick={handleEarningsReport}
                    >
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-blue-800">Rising Star</span>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Earned</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full justify-start bg-transparent"
                  variant="outline"
                  onClick={handleAddAvailability}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Availability
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" onClick={handleViewProfile}>
                  <Eye className="w-4 h-4 mr-2" />
                  View Profile
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" onClick={handleMessages}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Student Messages
                </Button>
                <Button
                  className="w-full justify-start bg-transparent"
                  variant="outline"
                  onClick={handleEarningsReport}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Earnings Report
                </Button>
              </CardContent>
            </Card>

            {/* Recent Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
                <CardDescription>What students are saying</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.map((session) => (
                    <div
                      key={session.id}
                      className="space-y-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                      onClick={handleEarningsReport}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">{session.student}</p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < session.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">{session.subject}</p>
                      <p className="text-xs text-accent font-medium">+${session.earnings}</p>
                      <p className="text-xs text-gray-600 italic">"{session.feedback}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Earnings Summary */}
            <Card>
              <CardHeader>
                <CardTitle>This Week's Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center cursor-pointer hover:bg-gray-50 p-2 rounded" onClick={handleEarningsReport}>
                  <p className="text-3xl font-bold text-accent mb-2">$485</p>
                  <p className="text-sm text-gray-600 mb-4">11 sessions completed</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base earnings:</span>
                      <span>$450</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bonus:</span>
                      <span className="text-accent">+$35</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-medium">
                      <span>Total:</span>
                      <span>$485</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
