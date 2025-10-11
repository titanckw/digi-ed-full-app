"use client";

import { useState } from "react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { Progress } from "../../../components/ui/progress";
import { Logo } from "../../../components/logo";
import {
  Users,
  BookOpen,
  BarChart3,
  Settings,
  Bell,
  PlayCircle,
  Eye,
  MessageSquare,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Shield,
  ClipboardCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function SchoolDashboard() {
  const router = useRouter();

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Asha Wanjiru",
      status: "online",
      progress: 85,
      subject: "Mathematics",
      alerts: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Brian Omondi",
      status: "in-session",
      progress: 72,
      subject: "Kiswahili",
      alerts: 1,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Charity Mwende",
      status: "online",
      progress: 91,
      subject: "Mathematics",
      alerts: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "David Kimani",
      status: "offline",
      progress: 65,
      subject: "CRE",
      alerts: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Esther Achieng",
      status: "in-session",
      progress: 78,
      subject: "Kiswahili",
      alerts: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Felix Mutua",
      status: "needs-help",
      progress: 55,
      subject: "Mathematics",
      alerts: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]);

  const classStats = {
    activeStudents: students.filter((s) => s.status !== "offline").length,
    competencyMastery: Math.round(
      students.reduce((acc, s) => acc + s.progress, 0) / students.length
    ),
    sessionsToday: 2,
    alerts: students.reduce((acc, s) => acc + s.alerts, 0),
  };

  const handleStartLabSession = () => {
    alert(
      "Starting Lab Session for 'Form 2 Mathematics' 🚀\n\n• All online students will be joined to the session.\n• A shared digital exercise book will be activated.\n• You can monitor each student's screen for CBC activities.\n• Group projects can be assigned.\n\nLab session is now live!"
    );
  };

  const handleMonitorStudent = (studentName: string) => {
    alert(
      `Opening live monitor for ${studentName}...\n\n👀 You can now see their screen in real-time.\n💬 Send private messages to guide them.\n takeover control to demonstrate a concept.\n📊 View their current progress and focus level.`
    );
  };

  const handleBroadcastMessage = () => {
    const message = prompt("Enter the message to broadcast to all students:");
    if (message) {
      alert(
        `Message broadcasted to the class:\n\n"${message}"\n\nStudents will see this as a pop-up on their screen.`
      );
    }
  };

  const handleAssignProject = () => {
    alert(
      "Assigning a new CBC Project 📝\n\n• Title: 'Community Water Conservation'\n• Core Competency: Citizenship\n• Due Date: 3 weeks\n• Task: Students will research and present local water conservation methods.\n\nProject has been assigned to all students in this class."
    );
  };

  const handleViewReports = () => {
    alert(
      "Generating CBC Class Performance Report...\n\n• Overall Competency Mastery.\n• Core Competencies Breakdown (e.g., Communication, Critical Thinking).\n• Individual Student Portfolio Assessment.\n• KCSE Preparedness Score.\n\nReport will be available for download shortly."
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo size="xl" />
          <div className="flex items-center space-x-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 flex items-center">
              <Shield className="w-3 h-3 mr-1" />
              School/Lab Mode
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => alert("Opening notifications...")}
            >
              <Bell className="w-4 h-4 mr-2" />
              Alerts ({classStats.alerts})
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => alert("Opening settings...")}
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Mwalimu Juma's Classroom Dashboard
          </h1>
          <p className="text-gray-600">
            Form 2 Mathematics - CBC Aligned Session
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Active Students
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {classStats.activeStudents} / {students.length}
                  </p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Competency Mastery
                  </p>
                  <p className="text-2xl font-bold text-secondary">
                    {classStats.competencyMastery}%
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Sessions Today
                  </p>
                  <p className="text-2xl font-bold text-accent">
                    {classStats.sessionsToday}
                  </p>
                </div>
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Active Alerts
                  </p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {classStats.alerts}
                  </p>
                </div>
                <Bell className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Classroom Live View</CardTitle>
              <CardDescription>
                Monitor your students' progress and activity in real-time.
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={handleBroadcastMessage}>
                <MessageSquare className="w-4 h-4 mr-2" />
                Broadcast Message
              </Button>
              <Button variant="outline" onClick={handleAssignProject}>
                <ClipboardCheck className="w-4 h-4 mr-2" />
                Assign CBC Project
              </Button>
              <Button
                className="bg-gradient-to-r from-primary to-secondary"
                onClick={handleStartLabSession}
              >
                <PlayCircle className="w-4 h-4 mr-2" />
                Start Lab Session
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map((student) => (
                <Card
                  key={student.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={student.avatar} />
                          <AvatarFallback>
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-500">
                            {student.subject}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          student.status === "online"
                            ? "secondary"
                            : student.status === "in-session"
                            ? "default"
                            : student.status === "needs-help"
                            ? "destructive"
                            : "outline"
                        }
                      >
                        {student.status.replace("-", " ")}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Competency</span>
                          <span>{student.progress}%</span>
                        </div>
                        <Progress value={student.progress} />
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Alerts: {student.alerts}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleMonitorStudent(student.name)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Monitor
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
