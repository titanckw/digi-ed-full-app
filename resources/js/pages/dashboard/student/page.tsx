"use client"

import { useState } from "react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Progress } from "../../../components/ui/progress"
import { Logo } from "../../../components/logo"
import { BookOpen, Calendar, Clock, Star, TrendingUp, Users, MessageCircle, Search, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { MessageSystem } from "../../../components/message-system"

export default function StudentDashboard() {
  const router = useRouter()
  const [showRescheduleModal, setShowRescheduleModal] = useState(false)
  const [selectedSession, setSelectedSession] = useState<number | null>(null)
  const [showMessageSystem, setShowMessageSystem] = useState(false)
  const [selectedTutor, setSelectedTutor] = useState<{ id: string; name: string; type: "tutor" } | null>(null)

  const upcomingSessions = [
    {
      id: 1,
      tutor: "Dr. Sarah Johnson",
      tutorId: "tutor_001",
      subject: "Advanced Mathematics",
      date: "Today",
      time: "2:00 PM",
      duration: "1 hour",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      tutor: "Prof. Michael Chen",
      tutorId: "tutor_002",
      subject: "Physics",
      date: "Tomorrow",
      time: "4:30 PM",
      duration: "1.5 hours",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recentSessions = [
    {
      id: 1,
      tutor: "Emma Wilson",
      tutorId: "tutor_003",
      subject: "English Literature",
      date: "Dec 15, 2024",
      rating: 5,
      feedback: "Excellent session! Emma explained the concepts very clearly.",
    },
    {
      id: 2,
      tutor: "David Rodriguez",
      tutorId: "tutor_004",
      subject: "Chemistry",
      date: "Dec 12, 2024",
      rating: 4,
      feedback: "Good session, helped me understand organic chemistry better.",
    },
  ]

  const learningProgress = [
    { subject: "Mathematics", progress: 75, sessions: 12 },
    { subject: "Physics", progress: 60, sessions: 8 },
    { subject: "Chemistry", progress: 45, sessions: 6 },
    { subject: "English", progress: 90, sessions: 15 },
  ]

  const handleJoinSession = (sessionId: number) => {
    const session = upcomingSessions.find((s) => s.id === sessionId)
    if (session) {
      const checklist = confirm(
        `Ready to join your session with ${session.tutor}?\n\n✓ Camera and microphone ready\n✓ Study materials prepared\n✓ Quiet environment set up\n✓ Good internet connection\n\nClick OK to join the session.`,
      )

      if (checklist) {
        alert(
          `Joining session with ${session.tutor}...\n\n🎥 Starting video call\n📚 Loading session materials\n📝 Preparing whiteboard\n⏰ Session timer started\n\nYou'll be connected in a moment!`,
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
          `Session rescheduled successfully!\n\n📅 Original: ${session.date} at ${session.time}\n📅 New: Tomorrow at 3:00 PM\n\n✉️ Confirmation email sent\n📱 Calendar updated\n👨‍🏫 ${session.tutor} has been notified`,
        )
      }, 2000)
    }
  }

  const handleBookSession = () => {
    alert(
      "Find and book a new session:\n\n🔍 Browse available tutors\n📅 Check schedules and availability\n💰 Compare rates and reviews\n📚 Select your subject\n⏰ Choose your preferred time\n\nRedirecting to tutor search...",
    )
    setTimeout(() => router.push("/tutors"), 1000)
  }

  const handleViewSchedule = () => {
    alert(
      "Opening your schedule:\n\n📅 Calendar view of all sessions\n⏰ Upcoming appointments\n📝 Session notes and materials\n🔄 Reschedule options\n❌ Cancellation policies\n📊 Attendance history",
    )
  }

  const handleMessages = () => {
    setShowMessageSystem(true)
    setSelectedTutor({ id: "tutor_001", name: "Dr. Sarah Johnson", type: "tutor" })
  }

  const handleMessageTutor = (tutorId: string, tutorName: string) => {
    setSelectedTutor({ id: tutorId, name: tutorName, type: "tutor" })
    setShowMessageSystem(true)
  }

  const handleProgressReport = () => {
    alert(
      "Your Learning Progress:\n\n📊 Subject performance charts\n🎯 Goal achievement status\n📈 Improvement trends\n⭐ Tutor feedback summary\n🏆 Milestones reached\n📋 Recommendations for improvement",
    )
  }

  if (showMessageSystem && selectedTutor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo size="xl" />
            <Button variant="ghost" onClick={() => setShowMessageSystem(false)}>
              ← Back to Dashboard
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <MessageSystem
            currentUserId="student_001"
            currentUserName="John Doe"
            currentUserType="student"
            recipientId={selectedTutor.id}
            recipientName={selectedTutor.name}
            recipientType={selectedTutor.type}
          />
        </div>
      </div>
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
            <Button variant="ghost" size="sm" onClick={() => router.push("/login")}>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Ready to continue your learning journey?</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handleProgressReport}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                  <p className="text-2xl font-bold text-primary">41</p>
                </div>
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handleProgressReport}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Hours Learned</p>
                  <p className="text-2xl font-bold text-secondary">67.5</p>
                </div>
                <Clock className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => router.push("/tutors")}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Tutors</p>
                  <p className="text-2xl font-bold text-primary">4</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={handleProgressReport}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Rating</p>
                  <p className="text-2xl font-bold text-secondary">4.8</p>
                </div>
                <Star className="w-8 h-8 text-secondary" />
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
                <Button size="sm" className="bg-gradient-to-r from-primary to-secondary" onClick={handleBookSession}>
                  <Plus className="w-4 h-4 mr-2" />
                  Book Session
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
                            {session.tutor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{session.tutor}</p>
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
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleMessageTutor(session.tutorId, session.tutor)}
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Message
                        </Button>
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
                          onClick={() => handleJoinSession(session.id)}
                        >
                          Join
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Track your progress across different subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {learningProgress.map((item, index) => (
                    <div
                      key={index}
                      className="space-y-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                      onClick={handleProgressReport}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.subject}</span>
                        <span className="text-sm text-gray-600">{item.sessions} sessions</span>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{item.progress}% complete</span>
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
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
                  onClick={() => router.push("/tutors")}
                >
                  <Search className="w-4 h-4 mr-2" />
                  Find New Tutors
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" onClick={handleViewSchedule}>
                  <Calendar className="w-4 h-4 mr-2" />
                  View Schedule
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" onClick={handleMessages}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Messages
                </Button>
                <Button
                  className="w-full justify-start bg-transparent"
                  variant="outline"
                  onClick={handleProgressReport}
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Progress Report
                </Button>
              </CardContent>
            </Card>

            {/* Recent Sessions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Sessions</CardTitle>
                <CardDescription>Your latest completed sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.map((session) => (
                    <div
                      key={session.id}
                      className="space-y-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                      onClick={handleProgressReport}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">{session.tutor}</p>
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
                      <p className="text-xs text-gray-500">{session.date}</p>
                      <p className="text-xs text-gray-600 italic">"{session.feedback}"</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleMessageTutor(session.tutorId, session.tutor)
                        }}
                      >
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Message
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
