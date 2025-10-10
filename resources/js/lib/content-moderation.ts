// Content moderation system for DigiEd platform

export interface ModerationResult {
  isBlocked: boolean
  violations: string[]
  severity: "low" | "medium" | "high" | "critical"
  blockedWords: string[]
  suggestedAction: "warn" | "block_temporary" | "block_permanent" | "report_admin"
}

export interface UserViolation {
  id: string
  userId: string
  userType: "student" | "tutor" | "parent"
  violationType: string
  content: string
  severity: "low" | "medium" | "high" | "critical"
  timestamp: Date
  action: string
}

export interface BlockedUser {
  userId: string
  userType: "student" | "tutor" | "parent"
  reason: string
  blockedAt: Date
  blockedUntil?: Date
  isPermanent: boolean
  violations: UserViolation[]
}

// Comprehensive list of inappropriate content patterns
const INAPPROPRIATE_CONTENT = {
  // Personal information sharing
  personal_info: [
    /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g, // Phone numbers
    /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, // Email addresses
    /\b\d{1,5}\s+\w+\s+(street|st|avenue|ave|road|rd|drive|dr|lane|ln|boulevard|blvd)\b/gi, // Addresses
    /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g, // Credit card numbers
    /\b\d{3}[-\s]?\d{2}[-\s]?\d{4}\b/g, // SSN patterns
  ],

  // Inappropriate language and content
  profanity: [/\b(fuck|shit|damn|bitch|asshole|bastard|crap|piss)\b/gi, /\b(stupid|idiot|moron|dumb|retard)\b/gi],

  // Sexual content
  sexual: [
    /\b(sex|sexual|porn|nude|naked|breast|penis|vagina)\b/gi,
    /\b(horny|sexy|hot|attractive|beautiful|handsome)\s+(student|tutor|teacher)\b/gi,
  ],

  // Harassment and bullying
  harassment: [/\b(kill yourself|die|hate you|loser|worthless)\b/gi, /\b(ugly|fat|disgusting|pathetic|failure)\b/gi],

  // Solicitation and inappropriate requests
  solicitation: [
    /\b(meet\s+in\s+person|private\s+meeting|alone|secret)\b/gi,
    /\b(send\s+photo|picture|pic|selfie)\b/gi,
    /\b(whatsapp|telegram|snapchat|instagram|facebook)\b/gi,
    /\b(phone\s+number|call\s+me|text\s+me)\b/gi,
  ],

  // Academic dishonesty
  cheating: [
    /\b(do\s+my\s+homework|complete\s+assignment|take\s+test|exam\s+answers)\b/gi,
    /\b(cheat|plagiarize|copy|steal)\b/gi,
  ],

  // Spam and promotional content
  spam: [/\b(buy\s+now|click\s+here|free\s+money|make\s+money)\b/gi, /\b(discount|sale|offer|promotion|deal)\b/gi],

  // Threats and violence
  threats: [/\b(kill|murder|hurt|harm|beat|punch|fight)\b/gi, /\b(weapon|gun|knife|bomb|violence)\b/gi],

  // Drug and alcohol references
  substances: [/\b(drugs|weed|marijuana|cocaine|alcohol|beer|wine|drunk)\b/gi, /\b(high|stoned|wasted|party|club)\b/gi],
}

// Severity levels for different violation types
const VIOLATION_SEVERITY = {
  personal_info: "high" as const,
  profanity: "medium" as const,
  sexual: "critical" as const,
  harassment: "critical" as const,
  solicitation: "critical" as const,
  cheating: "high" as const,
  spam: "low" as const,
  threats: "critical" as const,
  substances: "high" as const,
}

// User violation tracking (in a real app, this would be in a database)
const userViolations: { [userId: string]: UserViolation[] } = {}
const blockedUsers: { [userId: string]: BlockedUser } = {}

export function moderateContent(
  content: string,
  userId: string,
  userType: "student" | "tutor" | "parent",
): ModerationResult {
  const violations: string[] = []
  const blockedWords: string[] = []
  let highestSeverity: "low" | "medium" | "high" | "critical" = "low"

  // Check each category of inappropriate content
  for (const [category, patterns] of Object.entries(INAPPROPRIATE_CONTENT)) {
    for (const pattern of patterns) {
      const matches = content.match(pattern)
      if (matches) {
        violations.push(category)
        blockedWords.push(...matches)

        const severity = VIOLATION_SEVERITY[category as keyof typeof VIOLATION_SEVERITY]
        if (getSeverityLevel(severity) > getSeverityLevel(highestSeverity)) {
          highestSeverity = severity
        }
      }
    }
  }

  // Record violation if any found
  if (violations.length > 0) {
    recordViolation(userId, userType, violations, content, highestSeverity)
  }

  // Determine suggested action based on severity and user history
  const suggestedAction = determineSuggestedAction(userId, highestSeverity, violations)

  return {
    isBlocked: violations.length > 0,
    violations: [...new Set(violations)], // Remove duplicates
    severity: highestSeverity,
    blockedWords: [...new Set(blockedWords)], // Remove duplicates
    suggestedAction,
  }
}

function getSeverityLevel(severity: string): number {
  const levels = { low: 1, medium: 2, high: 3, critical: 4 }
  return levels[severity as keyof typeof levels] || 1
}

function recordViolation(
  userId: string,
  userType: "student" | "tutor" | "parent",
  violations: string[],
  content: string,
  severity: "low" | "medium" | "high" | "critical",
) {
  const violation: UserViolation = {
    id: `violation_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    userType,
    violationType: violations.join(", "),
    content,
    severity,
    timestamp: new Date(),
    action: "recorded",
  }

  if (!userViolations[userId]) {
    userViolations[userId] = []
  }

  userViolations[userId].push(violation)
}

function determineSuggestedAction(
  userId: string,
  severity: "low" | "medium" | "high" | "critical",
  violations: string[],
): "warn" | "block_temporary" | "block_permanent" | "report_admin" {
  const userHistory = userViolations[userId] || []
  const recentViolations = userHistory.filter(
    (v) => Date.now() - v.timestamp.getTime() < 30 * 24 * 60 * 60 * 1000, // Last 30 days
  )

  // Critical violations = immediate action
  if (severity === "critical") {
    if (violations.includes("sexual") || violations.includes("harassment") || violations.includes("solicitation")) {
      return "block_permanent"
    }
    return "block_temporary"
  }

  // High severity with history = temporary block
  if (severity === "high" && recentViolations.length >= 2) {
    return "block_temporary"
  }

  // Multiple violations = escalate
  if (recentViolations.length >= 3) {
    return "block_temporary"
  }

  // First or minor violations = warn
  return "warn"
}

export function blockUser(
  userId: string,
  userType: "student" | "tutor" | "parent",
  reason: string,
  duration?: number, // Duration in hours, undefined for permanent
  adminId?: string,
): BlockedUser {
  const blockedUser: BlockedUser = {
    userId,
    userType,
    reason,
    blockedAt: new Date(),
    blockedUntil: duration ? new Date(Date.now() + duration * 60 * 60 * 1000) : undefined,
    isPermanent: !duration,
    violations: userViolations[userId] || [],
  }

  blockedUsers[userId] = blockedUser

  // In a real app, this would also:
  // - Update database
  // - Send notifications to admins
  // - Log the action
  // - Cancel any active sessions

  return blockedUser
}

export function isUserBlocked(userId: string): boolean {
  const blockedUser = blockedUsers[userId]
  if (!blockedUser) return false

  // Check if temporary block has expired
  if (!blockedUser.isPermanent && blockedUser.blockedUntil) {
    if (new Date() > blockedUser.blockedUntil) {
      // Block has expired, remove it
      delete blockedUsers[userId]
      return false
    }
  }

  return true
}

export function unblockUser(userId: string, adminId: string): boolean {
  if (blockedUsers[userId]) {
    delete blockedUsers[userId]
    return true
  }
  return false
}

export function getUserViolations(userId: string): UserViolation[] {
  return userViolations[userId] || []
}

export function getBlockedUsers(): BlockedUser[] {
  return Object.values(blockedUsers)
}

export function cleanMessage(content: string): string {
  let cleanedContent = content

  // Replace inappropriate content with asterisks
  for (const patterns of Object.values(INAPPROPRIATE_CONTENT)) {
    for (const pattern of patterns) {
      cleanedContent = cleanedContent.replace(pattern, (match) => "*".repeat(match.length))
    }
  }

  return cleanedContent
}

// Auto-moderation actions
export function executeAutoModeration(userId: string, userType: "student" | "tutor" | "parent", action: string) {
  switch (action) {
    case "warn":
      // Send warning notification
      console.log(`Warning sent to user ${userId}`)
      break

    case "block_temporary":
      blockUser(userId, userType, "Automatic temporary block due to content violations", 24) // 24 hours
      console.log(`User ${userId} temporarily blocked for 24 hours`)
      break

    case "block_permanent":
      blockUser(userId, userType, "Permanent block due to severe content violations")
      console.log(`User ${userId} permanently blocked`)
      break

    case "report_admin":
      // Report to admin for manual review
      console.log(`User ${userId} reported to admin for manual review`)
      break
  }
}

// Message filtering for real-time chat
export function filterMessage(
  content: string,
  senderId: string,
  senderType: "student" | "tutor" | "parent",
  recipientId: string,
  recipientType: "student" | "tutor" | "parent",
): { allowed: boolean; filteredContent?: string; reason?: string; action?: string } {
  // Check if sender is blocked
  if (isUserBlocked(senderId)) {
    return {
      allowed: false,
      reason: "User is currently blocked and cannot send messages",
    }
  }

  // Moderate the content
  const moderationResult = moderateContent(content, senderId, senderType)

  if (moderationResult.isBlocked) {
    // Execute auto-moderation
    executeAutoModeration(senderId, senderType, moderationResult.suggestedAction)

    return {
      allowed: false,
      reason: `Message blocked due to: ${moderationResult.violations.join(", ")}`,
      action: moderationResult.suggestedAction,
    }
  }

  // Message is clean, allow it
  return {
    allowed: true,
    filteredContent: content,
  }
}
