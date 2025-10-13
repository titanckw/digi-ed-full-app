import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Alert, AlertDescription } from "../components/ui/alert";
import {
    Send,
    Shield,
    AlertTriangle,
    Ban,
    CheckCircle,
    MessageCircle,
    LogInIcon as Logo,
} from "lucide-react";
import {
    filterMessage,
    isUserBlocked,
    getUserViolations,
} from "../lib/content-moderation";

interface Message {
    id: string;
    senderId: string;
    senderName: string;
    senderType: "student" | "tutor" | "parent";
    recipientId: string;
    recipientName: string;
    recipientType: "student" | "tutor" | "parent";
    content: string;
    timestamp: Date;
    status: "sent" | "blocked" | "flagged";
    moderationInfo?: {
        violations: string[];
        action: string;
    };
}

interface MessageSystemProps {
    currentUserId: string;
    currentUserName: string;
    currentUserType: "student" | "tutor" | "parent";
    recipientId: string;
    recipientName: string;
    recipientType: "student" | "tutor" | "parent";
}

export function MessageSystem({
    currentUserId,
    currentUserName,
    currentUserType,
    recipientId,
    recipientName,
    recipientType,
}: MessageSystemProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [isBlocked, setIsBlocked] = useState(false);
    const [blockReason, setBlockReason] = useState("");
    const [violations, setViolations] = useState<any[]>([]);
    const [showModerationAlert, setShowModerationAlert] = useState(false);
    const [moderationMessage, setModerationMessage] = useState("");

    useEffect(() => {
        // Check if current user is blocked
        const blocked = isUserBlocked(currentUserId);
        setIsBlocked(blocked);

        if (blocked) {
            setBlockReason(
                "Your account has been temporarily restricted due to policy violations."
            );
        }

        // Get user violations
        const userViolations = getUserViolations(currentUserId);
        setViolations(userViolations);

        // Load existing messages (in a real app, this would come from a database)
        loadMessages();
    }, [currentUserId]);

    const loadMessages = () => {
        // Simulate loading messages from database
        const sampleMessages: Message[] = [
            {
                id: "1",
                senderId: recipientId,
                senderName: recipientName,
                senderType: recipientType,
                recipientId: currentUserId,
                recipientName: currentUserName,
                recipientType: currentUserType,
                content:
                    "Hi! I'm looking forward to our tutoring session tomorrow.",
                timestamp: new Date(Date.now() - 60000),
                status: "sent",
            },
            {
                id: "2",
                senderId: currentUserId,
                senderName: currentUserName,
                senderType: currentUserType,
                recipientId: recipientId,
                recipientName: recipientName,
                recipientType: recipientType,
                content:
                    "Great! I have all the materials ready. What specific topics would you like to focus on?",
                timestamp: new Date(Date.now() - 30000),
                status: "sent",
            },
        ];

        setMessages(sampleMessages);
    };

    const handleSendMessage = () => {
        if (!newMessage.trim()) return;

        // Filter the message through content moderation
        const filterResult = filterMessage(
            newMessage,
            currentUserId,
            currentUserType,
            recipientId,
            recipientType
        );

        if (!filterResult.allowed) {
            // Message was blocked
            setShowModerationAlert(true);
            setModerationMessage(
                filterResult.reason || "Message blocked due to policy violation"
            );

            // Add blocked message to chat (for demonstration)
            const blockedMessage: Message = {
                id: `msg_${Date.now()}`,
                senderId: currentUserId,
                senderName: currentUserName,
                senderType: currentUserType,
                recipientId: recipientId,
                recipientName: recipientName,
                recipientType: recipientType,
                content: newMessage,
                timestamp: new Date(),
                status: "blocked",
                moderationInfo: {
                    violations:
                        filterResult.reason?.split(": ")[1]?.split(", ") || [],
                    action: filterResult.action || "blocked",
                },
            };

            setMessages((prev) => [...prev, blockedMessage]);
            setNewMessage("");

            // Show user-friendly alert
            alert(
                `❌ Message Blocked\n\nYour message was blocked because it violates our community guidelines.\n\nReason: ${filterResult.reason}\n\nPlease review our community guidelines and try again with appropriate content.`
            );

            return;
        }

        // Message is allowed, send it
        const message: Message = {
            id: `msg_${Date.now()}`,
            senderId: currentUserId,
            senderName: currentUserName,
            senderType: currentUserType,
            recipientId: recipientId,
            recipientName: recipientName,
            recipientType: recipientType,
            content: filterResult.filteredContent || newMessage,
            timestamp: new Date(),
            status: "sent",
        };

        setMessages((prev) => [...prev, message]);
        setNewMessage("");
        setShowModerationAlert(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (isBlocked) {
        return (
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="flex items-center text-red-600">
                        <Ban className="w-5 h-5 mr-2" />
                        Account Restricted
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Alert className="border-red-200 bg-red-50">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <AlertDescription className="text-red-800">
                            {blockReason}
                        </AlertDescription>
                    </Alert>

                    {violations.length > 0 && (
                        <div className="mt-4">
                            <h4 className="font-medium text-gray-900 mb-2">
                                Recent Violations:
                            </h4>
                            <div className="space-y-2">
                                {violations
                                    .slice(-3)
                                    .map((violation, index) => (
                                        <div
                                            key={index}
                                            className="p-2 bg-gray-50 rounded text-sm"
                                        >
                                            <div className="flex items-center justify-between">
                                                <Badge
                                                    variant="destructive"
                                                    className="text-xs"
                                                >
                                                    {violation.severity}
                                                </Badge>
                                                <span className="text-gray-500">
                                                    {violation.timestamp.toLocaleDateString()}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 mt-1">
                                                {violation.violationType}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-4 p-4 bg-blue-50 rounded">
                        <h4 className="font-medium text-blue-900 mb-2">
                            How to restore your account:
                        </h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Review our Community Guidelines</li>
                            <li>• Wait for the restriction period to end</li>
                            <li>
                                • Contact support if you believe this is an
                                error
                            </li>
                            <li>
                                • Ensure future messages comply with our
                                policies
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center">
                    <Logo size="xl" />
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat with {recipientName}
                    <Badge className="ml-2 bg-green-100 text-green-800">
                        <Shield className="w-3 h-3 mr-1" />
                        Protected
                    </Badge>
                </CardTitle>
            </CardHeader>

            <CardContent>
                {showModerationAlert && (
                    <Alert className="mb-4 border-orange-200 bg-orange-50">
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                        <AlertDescription className="text-orange-800">
                            {moderationMessage}
                        </AlertDescription>
                    </Alert>
                )}

                {/* Messages */}
                <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${
                                message.senderId === currentUserId
                                    ? "justify-end"
                                    : "justify-start"
                            }`}
                        >
                            <div
                                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                    message.status === "blocked"
                                        ? "bg-red-100 border border-red-200"
                                        : message.senderId === currentUserId
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-gray-100"
                                }`}
                            >
                                <div className="flex items-center mb-1">
                                    <Avatar className="w-6 h-6 mr-2">
                                        <AvatarFallback className="text-xs">
                                            {message.senderName
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="text-xs font-medium">
                                        {message.senderName}
                                    </span>
                                    {message.status === "blocked" && (
                                        <Ban className="w-3 h-3 ml-1 text-red-600" />
                                    )}
                                </div>

                                <p
                                    className={`text-sm ${
                                        message.status === "blocked"
                                            ? "text-red-800 line-through"
                                            : ""
                                    }`}
                                >
                                    {message.status === "blocked"
                                        ? "[Message Blocked]"
                                        : message.content}
                                </p>

                                {message.status === "blocked" &&
                                    message.moderationInfo && (
                                        <div className="mt-2 text-xs text-red-600">
                                            <p>
                                                Violations:{" "}
                                                {message.moderationInfo.violations.join(
                                                    ", "
                                                )}
                                            </p>
                                            <p>
                                                Action:{" "}
                                                {message.moderationInfo.action}
                                            </p>
                                        </div>
                                    )}

                                <div className="flex items-center justify-between mt-1">
                                    <span className="text-xs opacity-70">
                                        {formatTime(message.timestamp)}
                                    </span>
                                    {message.status === "sent" &&
                                        message.senderId === currentUserId && (
                                            <CheckCircle className="w-3 h-3 opacity-70" />
                                        )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="flex space-x-2">
                    <Textarea
                        placeholder="Type your message... (Messages are automatically monitored for safety)"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1 min-h-[40px] max-h-[120px]"
                        disabled={isBlocked}
                    />
                    <Button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim() || isBlocked}
                        className="bg-gradient-to-r from-primary to-secondary"
                    >
                        <Send className="w-4 h-4" />
                    </Button>
                </div>

                {/* Safety Notice */}
                <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-800">
                    <div className="flex items-center">
                        <Shield className="w-3 h-3 mr-1" />
                        <span>
                            All messages are monitored for safety. Inappropriate
                            content will be blocked automatically.
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
