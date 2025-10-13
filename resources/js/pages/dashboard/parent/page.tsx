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
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../../../components/ui/avatar";
import { Progress } from "../../..//components/ui/progress";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../../components/ui/tabs";
import { Logo } from "../../../components/logo";
import {
    BookOpen,
    Calendar,
    Clock,
    Star,
    TrendingUp,
    Users,
    MessageCircle,
    Shield,
    Eye,
    Settings,
    AlertTriangle,
    CheckCircle,
    Video,
    FileText,
    Bell,
    DollarSign,
    BarChart3,
    UserCheck,
    Play,
} from "lucide-react";
import { router } from "@inertiajs/react";

export default function ParentDashboard() {
    const [selectedChild, setSelectedChild] = useState("emma");
    const [isMonitoring, setIsMonitoring] = useState(false);

    const children = [
        {
            id: "emma",
            name: "Emma Johnson",
            age: 14,
            grade: "9th Grade",
            avatar: "/placeholder.svg?height=40&width=40",
            subjects: ["Mathematics", "Physics", "Chemistry"],
            totalSessions: 24,
            hoursLearned: 36,
            averageRating: 4.8,
            activeTutors: 3,
        },
        {
            id: "alex",
            name: "Alex Johnson",
            age: 12,
            grade: "7th Grade",
            avatar: "/placeholder.svg?height=40&width=40",
            subjects: ["English", "History", "Science"],
            totalSessions: 18,
            hoursLearned: 27,
            averageRating: 4.6,
            activeTutors: 2,
        },
    ];

    const currentChild =
        children.find((child) => child.id === selectedChild) || children[0];

    const upcomingSessions = [
        {
            id: 1,
            child: "Emma Johnson",
            tutor: "Dr. Sarah Johnson",
            subject: "Advanced Mathematics",
            date: "Today",
            time: "2:00 PM",
            duration: "1 hour",
            status: "scheduled",
            canMonitor: true,
        },
        {
            id: 2,
            child: "Alex Johnson",
            tutor: "Prof. Michael Chen",
            subject: "English Literature",
            date: "Tomorrow",
            time: "4:30 PM",
            duration: "1.5 hours",
            status: "scheduled",
            canMonitor: true,
        },
    ];

    const recentSessions = [
        {
            id: 1,
            child: "Emma Johnson",
            tutor: "Dr. Sarah Johnson",
            subject: "Mathematics",
            date: "Dec 15, 2024",
            duration: "1 hour",
            rating: 5,
            parentRating: 5,
            notes: "Emma showed great improvement in algebra. Very engaged throughout the session.",
            behaviorScore: 95,
            focusLevel: "Excellent",
            concerns: [],
        },
        {
            id: 2,
            child: "Alex Johnson",
            tutor: "Emma Wilson",
            subject: "English",
            date: "Dec 14, 2024",
            duration: "1 hour",
            rating: 4,
            parentRating: 4,
            notes: "Good progress on essay writing. Alex was a bit distracted in the middle but recovered well.",
            behaviorScore: 82,
            focusLevel: "Good",
            concerns: ["Brief distraction around 20 minutes"],
        },
    ];

    const safetyAlerts = [
        {
            id: 1,
            type: "info",
            message: "All tutors have completed background checks",
            timestamp: "2 hours ago",
        },
        {
            id: 2,
            type: "success",
            message: "Session recording saved successfully",
            timestamp: "1 day ago",
        },
    ];

    const progressData = [
        { subject: "Mathematics", progress: 85, trend: "up", sessions: 12 },
        { subject: "Physics", progress: 72, trend: "up", sessions: 8 },
        { subject: "Chemistry", progress: 68, trend: "stable", sessions: 6 },
        { subject: "English", progress: 90, trend: "up", sessions: 10 },
    ];

    // Update all button handlers to be more functional and provide better user feedback

    const handleMonitorSession = (sessionId: number) => {
        setIsMonitoring(true);
        // Simulate starting monitoring with realistic feedback
        setTimeout(() => {
            alert(
                `Live monitoring started for session ${sessionId}. You can now view the session in real-time.`
            );
        }, 500);

        // Auto-stop monitoring after demo period
        setTimeout(() => {
            setIsMonitoring(false);
            alert(
                "Monitoring session ended. Session recording has been saved."
            );
        }, 5000);
    };

    const handleViewRecording = (sessionId: number) => {
        // Simulate opening recording viewer
        const session = recentSessions.find((s) => s.id === sessionId);
        if (session) {
            alert(
                `Opening session recording:\n\nSession: ${session.subject} with ${session.tutor}\nDate: ${session.date}\nDuration: ${session.duration}\n\nRecording will open in a new window.`
            );
        }
    };

    const handleContactTutor = (tutorName: string) => {
        // Simulate opening messaging interface
        alert(
            `Opening message thread with ${tutorName}.\n\nYou can:\n• Send messages about your child's progress\n• Ask questions about upcoming sessions\n• Share any concerns or feedback\n\nMessage interface will open shortly.`
        );
    };

    const handleViewReport = (childId: string) => {
        const child = children.find((c) => c.id === childId);
        if (child) {
            alert(
                `Generating comprehensive report for ${child.name}:\n\n• Academic progress across all subjects\n• Session attendance and engagement\n• Tutor feedback and ratings\n• Behavior and focus analysis\n• Spending summary\n\nReport will be ready in a few moments.`
            );
        }
    };

    const handleSettings = () => {
        router.get("/dashboard/parent/settings");
    };

    const handleEmergencyStop = () => {
        if (
            confirm(
                "Are you sure you want to immediately end the current session? This action cannot be undone."
            )
        ) {
            setIsMonitoring(false);
            alert(
                "Emergency stop activated!\n\n• Session ended immediately\n• Tutor has been notified\n• Incident report generated\n• You will be contacted by our safety team\n\nYour child's safety is our priority."
            );
        }
    };

    // Add new handlers for additional functionality
    const handleViewSchedule = () => {
        alert(
            "Opening calendar view:\n\n• View all upcoming sessions\n• Reschedule or cancel sessions\n• Set availability preferences\n• Block specific time slots\n• Manage recurring sessions"
        );
    };

    const handleMessages = () => {
        alert(
            "Opening parent message center:\n\n• Messages from tutors\n• Session notifications\n• Safety alerts\n• Progress updates\n• Platform announcements"
        );
    };

    const handleProgressReport = () => {
        alert(
            "Generating detailed progress report:\n\n• Subject-wise performance analysis\n• Learning goal achievements\n• Tutor recommendations\n• Areas for improvement\n• Comparative progress charts"
        );
    };

    const handleAddAvailability = () => {
        alert(
            "Setting child availability:\n\n• Add available time slots\n• Set recurring schedules\n• Block unavailable times\n• Set maximum daily hours\n• Configure break preferences"
        );
    };

    const handleViewProfile = (childId: string) => {
        const child = children.find((c) => c.id === childId);
        if (child) {
            alert(
                `Viewing ${child.name}'s profile:\n\n• Academic information\n• Learning preferences\n• Session history\n• Tutor relationships\n• Progress milestones\n• Safety settings`
            );
        }
    };

    const handleEarningsReport = () => {
        alert(
            "Opening spending analysis:\n\n• Monthly tutoring expenses\n• Cost per subject breakdown\n• Tutor rate comparisons\n• Budget vs actual spending\n• Cost-effectiveness metrics"
        );
    };

    // Update the notification handler
    const handleNotifications = () => {
        alert(
            "Parent Notifications:\n\n🔔 New session reminder (2 hours)\n✅ Session completed successfully\n📊 Weekly progress report available\n🛡️ All safety checks passed\n💬 New message from Dr. Sarah Johnson"
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <header className="border-b bg-white/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Logo size="xl" />
                    <div className="flex items-center space-x-4">
                        <Badge className="bg-accent/10 text-accent border-accent/20 flex items-center">
                            <Shield className="w-3 h-3 mr-1" />
                            Parent Mode
                        </Badge>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleNotifications}
                        >
                            <Bell className="w-4 h-4 mr-2" />
                            Alerts
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleSettings}
                        >
                            <Settings className="w-4 h-4 mr-2" />
                            Settings
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.post("/logout")}
                        >
                            <Avatar className="w-8 h-8">
                                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                <AvatarFallback>PJ</AvatarFallback>
                            </Avatar>
                        </Button>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Parent Dashboard
                    </h1>
                    <p className="text-gray-600">
                        Monitor and support your children's learning journey
                    </p>
                </div>

                {/* Child Selector */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-4">
                        {children.map((child) => (
                            <Card
                                key={child.id}
                                className={`cursor-pointer transition-all duration-200 ${
                                    selectedChild === child.id
                                        ? "ring-2 ring-primary bg-primary/5"
                                        : "hover:shadow-md"
                                }`}
                                onClick={() => setSelectedChild(child.id)}
                            >
                                <CardContent className="p-4">
                                    <div className="flex items-center space-x-3">
                                        <Avatar>
                                            <AvatarImage
                                                src={
                                                    child.avatar ||
                                                    "/placeholder.svg"
                                                }
                                            />
                                            <AvatarFallback>
                                                {child.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">
                                                {child.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {child.grade}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Quick Stats for Selected Child */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card
                        className="cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleViewReport(currentChild.id)}
                    >
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">
                                        Total Sessions
                                    </p>
                                    <p className="text-2xl font-bold text-primary">
                                        {currentChild.totalSessions}
                                    </p>
                                </div>
                                <BookOpen className="w-8 h-8 text-primary" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        className="cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleViewReport(currentChild.id)}
                    >
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">
                                        Hours Learned
                                    </p>
                                    <p className="text-2xl font-bold text-secondary">
                                        {currentChild.hoursLearned}
                                    </p>
                                </div>
                                <Clock className="w-8 h-8 text-secondary" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        className="cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleViewReport(currentChild.id)}
                    >
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">
                                        Active Tutors
                                    </p>
                                    <p className="text-2xl font-bold text-primary">
                                        {currentChild.activeTutors}
                                    </p>
                                </div>
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        className="cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleViewReport(currentChild.id)}
                    >
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">
                                        Avg. Rating
                                    </p>
                                    <p className="text-2xl font-bold text-yellow-600">
                                        {currentChild.averageRating}
                                    </p>
                                </div>
                                <Star className="w-8 h-8 text-yellow-600" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="monitoring" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="monitoring">
                            Live Monitoring
                        </TabsTrigger>
                        <TabsTrigger value="sessions">Sessions</TabsTrigger>
                        <TabsTrigger value="progress">Progress</TabsTrigger>
                        <TabsTrigger value="safety">Safety</TabsTrigger>
                        <TabsTrigger value="reports">Reports</TabsTrigger>
                    </TabsList>

                    {/* Live Monitoring Tab */}
                    <TabsContent value="monitoring" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Video className="w-5 h-5 mr-2" />
                                    Live Session Monitoring
                                </CardTitle>
                                <CardDescription>
                                    Monitor ongoing sessions in real-time with
                                    safety controls
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {isMonitoring ? (
                                    <div className="space-y-4">
                                        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                                                    <span className="font-medium text-accent">
                                                        Live Session Active
                                                    </span>
                                                </div>
                                                <Badge className="bg-accent/10 text-accent border-accent/20">
                                                    Emma with Dr. Sarah Johnson
                                                </Badge>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                                <div className="text-center">
                                                    <p className="text-sm text-gray-600">
                                                        Session Time
                                                    </p>
                                                    <p className="text-lg font-bold">
                                                        23:45
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-sm text-gray-600">
                                                        Focus Level
                                                    </p>
                                                    <p className="text-lg font-bold text-accent">
                                                        Excellent
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-sm text-gray-600">
                                                        Behavior Score
                                                    </p>
                                                    <p className="text-lg font-bold text-accent">
                                                        95%
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    <Eye className="w-4 h-4 mr-2" />
                                                    View Session
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    <MessageCircle className="w-4 h-4 mr-2" />
                                                    Send Note
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={
                                                        handleEmergencyStop
                                                    }
                                                >
                                                    <AlertTriangle className="w-4 h-4 mr-2" />
                                                    Emergency Stop
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                        <p className="text-gray-600 mb-4">
                                            No active sessions to monitor
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            When your child starts a session,
                                            you'll be able to monitor it here
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Upcoming Sessions with Monitor Options */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Upcoming Sessions</CardTitle>
                                <CardDescription>
                                    Sessions you can monitor today
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {upcomingSessions.map((session) => (
                                        <div
                                            key={session.id}
                                            className="flex items-center justify-between p-4 border rounded-lg"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <Avatar>
                                                    <AvatarFallback>
                                                        {session.tutor
                                                            .split(" ")
                                                            .map((n) => n[0])
                                                            .join("")}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-medium">
                                                        {session.child}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        {session.subject} with{" "}
                                                        {session.tutor}
                                                    </p>
                                                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>
                                                            {session.date} at{" "}
                                                            {session.time}
                                                        </span>
                                                        <Clock className="w-4 h-4 ml-2" />
                                                        <span>
                                                            {session.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleMonitorSession(
                                                            session.id
                                                        )
                                                    }
                                                >
                                                    <Eye className="w-4 h-4 mr-2" />
                                                    Monitor
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleContactTutor(
                                                            session.tutor
                                                        )
                                                    }
                                                >
                                                    <MessageCircle className="w-4 h-4 mr-2" />
                                                    Contact
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Sessions Tab */}
                    <TabsContent value="sessions" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Sessions</CardTitle>
                                <CardDescription>
                                    Detailed session history and recordings
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {recentSessions.map((session) => (
                                        <div
                                            key={session.id}
                                            className="border rounded-lg p-4 space-y-4"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium">
                                                        {session.child} -{" "}
                                                        {session.subject}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        with {session.tutor} •{" "}
                                                        {session.date}
                                                    </p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <div className="flex items-center">
                                                        {[...Array(5)].map(
                                                            (_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className={`w-4 h-4 ${
                                                                        i <
                                                                        session.rating
                                                                            ? "text-yellow-400 fill-current"
                                                                            : "text-gray-300"
                                                                    }`}
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="space-y-2">
                                                    <p className="text-sm font-medium">
                                                        Behavior Score
                                                    </p>
                                                    <div className="flex items-center space-x-2">
                                                        <Progress
                                                            value={
                                                                session.behaviorScore
                                                            }
                                                            className="flex-1"
                                                        />
                                                        <span className="text-sm font-medium">
                                                            {
                                                                session.behaviorScore
                                                            }
                                                            %
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-sm font-medium">
                                                        Focus Level
                                                    </p>
                                                    <Badge
                                                        className={`${
                                                            session.focusLevel ===
                                                            "Excellent"
                                                                ? "bg-accent/10 text-accent border-accent/20"
                                                                : session.focusLevel ===
                                                                  "Good"
                                                                ? "bg-blue-100 text-blue-800"
                                                                : "bg-yellow-100 text-yellow-800"
                                                        }`}
                                                    >
                                                        {session.focusLevel}
                                                    </Badge>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-sm font-medium">
                                                        Duration
                                                    </p>
                                                    <p className="text-sm">
                                                        {session.duration}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <p className="text-sm font-medium">
                                                    Tutor Notes
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    {session.notes}
                                                </p>
                                            </div>

                                            {session.concerns.length > 0 && (
                                                <div className="space-y-2">
                                                    <p className="text-sm font-medium text-orange-600">
                                                        Concerns
                                                    </p>
                                                    <ul className="text-sm text-orange-600">
                                                        {session.concerns.map(
                                                            (concern, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="flex items-center"
                                                                >
                                                                    <AlertTriangle className="w-3 h-3 mr-2" />
                                                                    {concern}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )}

                                            <div className="flex space-x-2 pt-2 border-t">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleViewRecording(
                                                            session.id
                                                        )
                                                    }
                                                >
                                                    <Play className="w-4 h-4 mr-2" />
                                                    View Recording
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleContactTutor(
                                                            session.tutor
                                                        )
                                                    }
                                                >
                                                    <MessageCircle className="w-4 h-4 mr-2" />
                                                    Contact Tutor
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    <FileText className="w-4 h-4 mr-2" />
                                                    Download Report
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Progress Tab */}
                    <TabsContent value="progress" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Learning Progress - {currentChild.name}
                                </CardTitle>
                                <CardDescription>
                                    Track academic improvement across subjects
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {progressData.map((item, index) => (
                                        <div key={index} className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <span className="font-medium">
                                                        {item.subject}
                                                    </span>
                                                    <Badge variant="outline">
                                                        {item.sessions} sessions
                                                    </Badge>
                                                    <div className="flex items-center space-x-1">
                                                        <TrendingUp
                                                            className={`w-4 h-4 ${
                                                                item.trend ===
                                                                "up"
                                                                    ? "text-accent"
                                                                    : item.trend ===
                                                                      "down"
                                                                    ? "text-red-500"
                                                                    : "text-gray-500"
                                                            }`}
                                                        />
                                                        <span className="text-sm text-gray-600 capitalize">
                                                            {item.trend}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-sm font-medium">
                                                    {item.progress}%
                                                </span>
                                            </div>
                                            <Progress
                                                value={item.progress}
                                                className="h-3"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Weekly Study Hours</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-primary mb-2">
                                            12.5
                                        </div>
                                        <p className="text-gray-600">
                                            hours this week
                                        </p>
                                        <p className="text-sm text-accent mt-2">
                                            ↑ 15% from last week
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Average Session Rating
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-yellow-600 mb-2">
                                            4.8
                                        </div>
                                        <div className="flex justify-center mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-5 h-5 ${
                                                        i < Math.floor(4.8)
                                                            ? "text-yellow-400 fill-current"
                                                            : "text-gray-300"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Based on 24 sessions
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Safety Tab */}
                    <TabsContent value="safety" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Shield className="w-5 h-5 mr-2" />
                                    Safety & Security
                                </CardTitle>
                                <CardDescription>
                                    Monitor safety features and alerts
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg">
                                            <CheckCircle className="w-5 h-5 text-accent" />
                                            <div>
                                                <p className="font-medium text-accent">
                                                    Background Checks
                                                </p>
                                                <p className="text-sm text-accent/80">
                                                    All tutors verified
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg">
                                            <CheckCircle className="w-5 h-5 text-accent" />
                                            <div>
                                                <p className="font-medium text-accent">
                                                    Session Recording
                                                </p>
                                                <p className="text-sm text-accent/80">
                                                    Always enabled
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg">
                                            <CheckCircle className="w-5 h-5 text-accent" />
                                            <div>
                                                <p className="font-medium text-accent">
                                                    Live Monitoring
                                                </p>
                                                <p className="text-sm text-accent/80">
                                                    Available 24/7
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg">
                                            <CheckCircle className="w-5 h-5 text-accent" />
                                            <div>
                                                <p className="font-medium text-accent">
                                                    Emergency Controls
                                                </p>
                                                <p className="text-sm text-accent/80">
                                                    Instant session stop
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Safety Alerts</CardTitle>
                                <CardDescription>
                                    System notifications and safety updates
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {safetyAlerts.map((alert) => (
                                        <div
                                            key={alert.id}
                                            className={`flex items-start space-x-3 p-3 rounded-lg ${
                                                alert.type === "success"
                                                    ? "bg-accent/10"
                                                    : alert.type === "warning"
                                                    ? "bg-yellow-50"
                                                    : "bg-blue-50"
                                            }`}
                                        >
                                            {alert.type === "success" && (
                                                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                                            )}
                                            {alert.type === "warning" && (
                                                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                                            )}
                                            {alert.type === "info" && (
                                                <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                                            )}
                                            <div className="flex-1">
                                                <p className="text-sm">
                                                    {alert.message}
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {alert.timestamp}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Reports Tab */}
                    <TabsContent value="reports" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Detailed Reports</CardTitle>
                                <CardDescription>
                                    Comprehensive learning and behavior reports
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Button
                                        variant="outline"
                                        className="h-24 flex-col space-y-2 bg-transparent"
                                        onClick={() =>
                                            handleViewReport(currentChild.id)
                                        }
                                    >
                                        <BarChart3 className="w-6 h-6" />
                                        <span>Academic Progress Report</span>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="h-24 flex-col space-y-2 bg-transparent"
                                        onClick={() =>
                                            handleViewReport(currentChild.id)
                                        }
                                    >
                                        <UserCheck className="w-6 h-6" />
                                        <span>Behavior Analysis</span>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="h-24 flex-col space-y-2 bg-transparent"
                                        onClick={() =>
                                            handleViewReport(currentChild.id)
                                        }
                                    >
                                        <DollarSign className="w-6 h-6" />
                                        <span>Spending Summary</span>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="h-24 flex-col space-y-2 bg-transparent"
                                        onClick={() =>
                                            handleViewReport(currentChild.id)
                                        }
                                    >
                                        <FileText className="w-6 h-6" />
                                        <span>Monthly Summary</span>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
