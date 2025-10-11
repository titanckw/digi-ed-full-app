"use client"

import { useState } from "react"
import { Button } from "../../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Input } from "../../../../components/ui/input"
import { Label } from "../../../../components/ui/label"
import { Switch } from "../../../../components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select"
import { Textarea } from "../../../../components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs"
import { BookOpen, Shield, Bell, Eye, Users, AlertTriangle, Save, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ParentSettingsPage() {
  const router = useRouter()

  const [settings, setSettings] = useState({
    // Monitoring Settings
    liveMonitoring: true,
    sessionRecording: true,
    behaviorAlerts: true,
    focusAlerts: true,
    emergencyNotifications: true,

    // Privacy Settings
    shareProgressWithTutors: true,
    allowTutorNotes: true,
    recordingRetention: "90", // days

    // Notification Settings
    sessionReminders: true,
    progressReports: true,
    safetyAlerts: true,
    weeklyDigest: true,
    emailNotifications: true,
    smsNotifications: false,

    // Parental Controls
    approveNewTutors: true,
    sessionTimeLimit: "120", // minutes
    allowedSubjects: ["Mathematics", "Physics", "Chemistry", "English"],
    restrictedWords: "",
    maxDailyHours: "3",

    // Emergency Settings
    emergencyContacts: [
      { name: "Mom", phone: "+1234567890" },
      { name: "Dad", phone: "+1234567891" },
    ],
    autoEndSession: false,
    suspiciousActivityAction: "alert", // alert, pause, end
  })

  // Update all settings handlers to provide better feedback and functionality

  const handleSave = () => {
    // Simulate saving settings with validation
    const requiredFields = []

    if (settings.emergencyContacts.some((contact) => !contact.name || !contact.phone)) {
      requiredFields.push("Complete emergency contact information")
    }

    if (settings.allowedSubjects.length === 0) {
      requiredFields.push("At least one allowed subject")
    }

    if (requiredFields.length > 0) {
      alert(`Please complete the following required fields:\n\n• ${requiredFields.join("\n• ")}`)
      return
    }

    // Show saving progress
    const saveButton = document.querySelector('button[type="submit"]') as HTMLButtonElement
    if (saveButton) {
      saveButton.textContent = "Saving..."
      saveButton.disabled = true
    }

    setTimeout(() => {
      alert(
        "Settings saved successfully!\n\n✅ Monitoring preferences updated\n✅ Safety settings configured\n✅ Notification preferences set\n✅ Parental controls activated\n✅ Emergency settings saved\n\nChanges will take effect immediately.",
      )

      if (saveButton) {
        saveButton.textContent = "Save Settings"
        saveButton.disabled = false
      }
    }, 1500)
  }

  // Add validation for emergency contacts
  const validateEmergencyContact = (contact: { name: string; phone: string }) => {
    const phoneRegex = /^\+?[\d\s\-$$$$]+$/
    return contact.name.trim().length > 0 && phoneRegex.test(contact.phone)
  }

  // Update emergency contact handlers
  const handleAddEmergencyContact = () => {
    if (settings.emergencyContacts.length >= 5) {
      alert("Maximum of 5 emergency contacts allowed.")
      return
    }

    setSettings((prev) => ({
      ...prev,
      emergencyContacts: [...prev.emergencyContacts, { name: "", phone: "" }],
    }))
  }

  const handleRemoveEmergencyContact = (index: number) => {
    if (settings.emergencyContacts.length <= 1) {
      alert("At least one emergency contact is required.")
      return
    }

    setSettings((prev) => ({
      ...prev,
      emergencyContacts: prev.emergencyContacts.filter((_, i) => i !== index),
    }))
  }

  // Add test notification handler
  const handleTestNotification = () => {
    alert(
      "Test notification sent!\n\n📧 Email: Sent to your registered email\n📱 SMS: Sent to your phone number\n🔔 Push: Sent to your mobile app\n\nPlease check your devices to confirm receipt.",
    )
  }

  const handleToggle = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }))
  }

  const handleSelectChange = (key: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => router.push("/dashboard/parent")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DigiEd
              </span>
            </div>
          </div>
          <Button type="submit" onClick={handleSave} className="bg-gradient-to-r from-primary to-secondary">
            <Save className="w-4 h-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Parent Settings</h1>
          <p className="text-gray-600">Configure monitoring, safety, and notification preferences</p>
        </div>

        <Tabs defaultValue="monitoring" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="controls">Parental Controls</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
          </TabsList>

          {/* Monitoring Settings */}
          <TabsContent value="monitoring" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Session Monitoring
                </CardTitle>
                <CardDescription>Configure how you want to monitor your child's tutoring sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Live Session Monitoring</Label>
                    <p className="text-sm text-gray-600">Watch sessions in real-time as they happen</p>
                  </div>
                  <Switch checked={settings.liveMonitoring} onCheckedChange={() => handleToggle("liveMonitoring")} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Session Recording</Label>
                    <p className="text-sm text-gray-600">Automatically record all sessions for later review</p>
                  </div>
                  <Switch
                    checked={settings.sessionRecording}
                    onCheckedChange={() => handleToggle("sessionRecording")}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Behavior Alerts</Label>
                    <p className="text-sm text-gray-600">Get notified about behavior concerns during sessions</p>
                  </div>
                  <Switch checked={settings.behaviorAlerts} onCheckedChange={() => handleToggle("behaviorAlerts")} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Focus Level Alerts</Label>
                    <p className="text-sm text-gray-600">Receive alerts when focus levels drop significantly</p>
                  </div>
                  <Switch checked={settings.focusAlerts} onCheckedChange={() => handleToggle("focusAlerts")} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="retention">Recording Retention Period</Label>
                  <Select
                    value={settings.recordingRetention}
                    onValueChange={(value) => handleSelectChange("recordingRetention", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="180">6 months</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Safety Settings */}
          <TabsContent value="safety" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Safety & Security
                </CardTitle>
                <CardDescription>Configure safety features and security preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Share Progress with Tutors</Label>
                    <p className="text-sm text-gray-600">Allow tutors to see your child's overall progress</p>
                  </div>
                  <Switch
                    checked={settings.shareProgressWithTutors}
                    onCheckedChange={() => handleToggle("shareProgressWithTutors")}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Allow Tutor Notes</Label>
                    <p className="text-sm text-gray-600">Let tutors add private notes about sessions</p>
                  </div>
                  <Switch checked={settings.allowTutorNotes} onCheckedChange={() => handleToggle("allowTutorNotes")} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="suspiciousAction">Suspicious Activity Response</Label>
                  <Select
                    value={settings.suspiciousActivityAction}
                    onValueChange={(value) => handleSelectChange("suspiciousActivityAction", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alert">Send Alert Only</SelectItem>
                      <SelectItem value="pause">Pause Session</SelectItem>
                      <SelectItem value="end">End Session Immediately</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="restrictedWords">Restricted Words/Phrases</Label>
                  <Textarea
                    id="restrictedWords"
                    placeholder="Enter words or phrases that should trigger alerts (comma-separated)"
                    value={settings.restrictedWords}
                    onChange={(e) => setSettings((prev) => ({ ...prev, restrictedWords: e.target.value }))}
                  />
                  <p className="text-sm text-gray-600">Sessions will be flagged if these words are detected</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>Choose how and when you want to receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Session Reminders</Label>
                    <p className="text-sm text-gray-600">Get notified before sessions start</p>
                  </div>
                  <Switch
                    checked={settings.sessionReminders}
                    onCheckedChange={() => handleToggle("sessionReminders")}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Progress Reports</Label>
                    <p className="text-sm text-gray-600">Receive weekly progress summaries</p>
                  </div>
                  <Switch checked={settings.progressReports} onCheckedChange={() => handleToggle("progressReports")} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Safety Alerts</Label>
                    <p className="text-sm text-gray-600">Immediate notifications for safety concerns</p>
                  </div>
                  <Switch checked={settings.safetyAlerts} onCheckedChange={() => handleToggle("safetyAlerts")} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Email Notifications</Label>
                    <p className="text-sm text-gray-600">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={() => handleToggle("emailNotifications")}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">SMS Notifications</Label>
                    <p className="text-sm text-gray-600">Receive urgent alerts via text message</p>
                  </div>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={() => handleToggle("smsNotifications")}
                  />
                </div>
                <Button variant="outline" onClick={handleTestNotification}>
                  Test Notifications
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Parental Controls */}
          <TabsContent value="controls" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Parental Controls
                </CardTitle>
                <CardDescription>Set limits and restrictions for your child's tutoring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Approve New Tutors</Label>
                    <p className="text-sm text-gray-600">Require your approval before booking with new tutors</p>
                  </div>
                  <Switch
                    checked={settings.approveNewTutors}
                    onCheckedChange={() => handleToggle("approveNewTutors")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sessionLimit">Maximum Session Duration (minutes)</Label>
                  <Select
                    value={settings.sessionTimeLimit}
                    onValueChange={(value) => handleSelectChange("sessionTimeLimit", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="90">1.5 hours</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                      <SelectItem value="180">3 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dailyLimit">Maximum Daily Hours</Label>
                  <Select
                    value={settings.maxDailyHours}
                    onValueChange={(value) => handleSelectChange("maxDailyHours", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 hour</SelectItem>
                      <SelectItem value="2">2 hours</SelectItem>
                      <SelectItem value="3">3 hours</SelectItem>
                      <SelectItem value="4">4 hours</SelectItem>
                      <SelectItem value="5">5 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Allowed Subjects</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Mathematics",
                      "Physics",
                      "Chemistry",
                      "Biology",
                      "English",
                      "History",
                      "Computer Science",
                      "Languages",
                    ].map((subject) => (
                      <div key={subject} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={subject}
                          checked={settings.allowedSubjects.includes(subject)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSettings((prev) => ({
                                ...prev,
                                allowedSubjects: [...prev.allowedSubjects, subject],
                              }))
                            } else {
                              setSettings((prev) => ({
                                ...prev,
                                allowedSubjects: prev.allowedSubjects.filter((s) => s !== subject),
                              }))
                            }
                          }}
                          className="rounded"
                        />
                        <Label htmlFor={subject} className="text-sm">
                          {subject}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Emergency Settings */}
          <TabsContent value="emergency" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Emergency Settings
                </CardTitle>
                <CardDescription>Configure emergency contacts and automatic responses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-base">Emergency Contacts</Label>
                  {settings.emergencyContacts.map((contact, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Contact Name"
                        value={contact.name}
                        onChange={(e) => {
                          const newContacts = [...settings.emergencyContacts]
                          newContacts[index].name = e.target.value
                          setSettings((prev) => ({ ...prev, emergencyContacts: newContacts }))
                        }}
                      />
                      <Input
                        placeholder="Phone Number"
                        value={contact.phone}
                        onChange={(e) => {
                          const newContacts = [...settings.emergencyContacts]
                          newContacts[index].phone = e.target.value
                          setSettings((prev) => ({ ...prev, emergencyContacts: newContacts }))
                        }}
                      />
                      <Button variant="destructive" size="sm" onClick={() => handleRemoveEmergencyContact(index)}>
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => {
                      handleAddEmergencyContact()
                    }}
                  >
                    Add Emergency Contact
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Auto-End Sessions</Label>
                    <p className="text-sm text-gray-600">
                      Automatically end sessions if suspicious activity is detected
                    </p>
                  </div>
                  <Switch checked={settings.autoEndSession} onCheckedChange={() => handleToggle("autoEndSession")} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Emergency Notifications</Label>
                    <p className="text-sm text-gray-600">Send immediate alerts for emergency situations</p>
                  </div>
                  <Switch
                    checked={settings.emergencyNotifications}
                    onCheckedChange={() => handleToggle("emergencyNotifications")}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
