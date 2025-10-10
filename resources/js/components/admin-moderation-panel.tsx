"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Ban, AlertTriangle, CheckCircle, Eye, UserX, Clock, FileText, Users } from "lucide-react"
import {
  getBlockedUsers,
  getUserViolations,
  unblockUser,
  blockUser,
  type BlockedUser,
  type UserViolation,
} from "@/lib/content-moderation"

export function AdminModerationPanel() {
  const [blockedUsers, setBlockedUsers] = useState<BlockedUser[]>([])
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const [userViolations, setUserViolations] = useState<UserViolation[]>([])
  const [stats, setStats] = useState({
    totalBlocked: 0,
    temporaryBlocks: 0,
    permanentBlocks: 0,
    recentViolations: 0,
  })

  useEffect(() => {
    loadModerationData()
  }, [])

  const loadModerationData = () => {
    const blocked = getBlockedUsers()
    setBlockedUsers(blocked)

    // Calculate stats
    const temporary = blocked.filter((u) => !u.isPermanent).length
    const permanent = blocked.filter((u) => u.isPermanent).length
    const recent = blocked.filter((u) => Date.now() - u.blockedAt.getTime() < 24 * 60 * 60 * 1000).length

    setStats({
      totalBlocked: blocked.length,
      temporaryBlocks: temporary,
      permanentBlocks: permanent,
      recentViolations: recent,
    })
  }

  const handleUnblockUser = (userId: string) => {
    if (confirm("Are you sure you want to unblock this user?")) {
      const success = unblockUser(userId, "admin_001")
      if (success) {
        alert("User has been unblocked successfully.")
        loadModerationData()
      }
    }
  }

  const handleViewViolations = (userId: string) => {
    const violations = getUserViolations(userId)
    setUserViolations(violations)
    setSelectedUser(userId)
  }

  const handleBlockUser = (userId: string, userType: "student" | "tutor" | "parent", duration?: number) => {
    const reason = prompt("Enter reason for blocking:")
    if (reason) {
      blockUser(userId, userType, reason, duration, "admin_001")
      alert(`User has been ${duration ? "temporarily" : "permanently"} blocked.`)
      loadModerationData()
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800"
      case "high":
        return "bg-orange-100 text-orange-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString() + " " + date.toLocaleTimeString()
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Moderation Panel</h1>
        <p className="text-gray-600">Monitor and manage user violations and blocks</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Blocked</p>
                <p className="text-2xl font-bold text-red-600">{stats.totalBlocked}</p>
              </div>
              <Ban className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Temporary Blocks</p>
                <p className="text-2xl font-bold text-orange-600">{stats.temporaryBlocks}</p>
              </div>
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Permanent Blocks</p>
                <p className="text-2xl font-bold text-red-600">{stats.permanentBlocks}</p>
              </div>
              <UserX className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Recent (24h)</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.recentViolations}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="blocked-users" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="blocked-users">Blocked Users</TabsTrigger>
          <TabsTrigger value="violations">Violation Details</TabsTrigger>
        </TabsList>

        <TabsContent value="blocked-users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Blocked Users Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blockedUsers.length === 0 ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-gray-600">No users are currently blocked</p>
                  </div>
                ) : (
                  blockedUsers.map((user) => (
                    <div key={user.userId} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback>
                              {user.userType === "student" ? "S" : user.userType === "tutor" ? "T" : "P"}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">User ID: {user.userId}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline">{user.userType}</Badge>
                              <Badge
                                className={
                                  user.isPermanent ? "bg-red-100 text-red-800" : "bg-orange-100 text-orange-800"
                                }
                              >
                                {user.isPermanent ? "Permanent" : "Temporary"}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleViewViolations(user.userId)}>
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleUnblockUser(user.userId)}
                            className="text-green-600 hover:text-green-700"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Unblock
                          </Button>
                        </div>
                      </div>

                      <div className="mt-3 space-y-2">
                        <div className="text-sm">
                          <span className="font-medium">Reason:</span> {user.reason}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Blocked:</span> {formatDate(user.blockedAt)}
                          {user.blockedUntil && (
                            <>
                              <span className="mx-2">•</span>
                              <span className="font-medium">Until:</span> {formatDate(user.blockedUntil)}
                            </>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Violations:</span> {user.violations.length} total
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="violations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Violation Details
                {selectedUser && <Badge className="ml-2">User: {selectedUser}</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedUser ? (
                <div className="space-y-4">
                  {userViolations.length === 0 ? (
                    <p className="text-gray-600">No violations found for this user.</p>
                  ) : (
                    userViolations.map((violation) => (
                      <div key={violation.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <Badge className={getSeverityColor(violation.severity)}>
                              {violation.severity.toUpperCase()}
                            </Badge>
                            <Badge variant="outline">{violation.userType}</Badge>
                          </div>
                          <span className="text-sm text-gray-500">{formatDate(violation.timestamp)}</span>
                        </div>

                        <div className="space-y-2">
                          <div>
                            <span className="font-medium text-sm">Violation Type:</span>
                            <p className="text-sm text-gray-700">{violation.violationType}</p>
                          </div>

                          <div>
                            <span className="font-medium text-sm">Content:</span>
                            <div className="bg-gray-50 p-2 rounded text-sm font-mono">{violation.content}</div>
                          </div>

                          <div>
                            <span className="font-medium text-sm">Action Taken:</span>
                            <p className="text-sm text-gray-700">{violation.action}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Select a user from the Blocked Users tab to view their violations</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
