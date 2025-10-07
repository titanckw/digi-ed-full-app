This document outlines the backend requirements, API endpoints, database schema, and other necessary components for the Digi-Ed Tutor App, built on the Laravel framework.

## 1. Core Features & Modules

The backend should be structured into modules to support the following core features:

- **User Management & Authentication:** Handling different user roles (Student, Tutor, Admin).
- **Course & Subject Management:** Creating and managing subjects and courses.
- **Tutoring Sessions:** Scheduling, booking, and conducting sessions.
- **Content Delivery:** Handling educational materials like videos, documents, and quizzes.
- **Payments & Subscriptions:** Integration with a payment gateway.
- **Messaging & Notifications:** Real-time communication between users.
- **Reviews & Ratings:** System for students to rate tutors.
- **Admin Dashboard:** For platform management and analytics.

## 2. Technology Stack

- **Framework:** Laravel (latest stable version)
- **Database:** MySQL or PostgreSQL
- **API:** RESTful API with JSON responses
- **Authentication:** Laravel Sanctum (for SPA authentication) or Passport (for OAuth2)
- **Real-time:** Laravel WebSockets (using Pusher or a self-hosted solution like Soketi)
- **Queues:** Redis or Database for background jobs (e.g., sending emails, processing videos).
- **File Storage:** Amazon S3, or local storage for development.

## 3. Database Schema (Eloquent Models)

Here are the essential Eloquent models and their relationships.

### User
Stores user data.
`id`, `name`, `email`, `password`, `role` (e.g., 'student', 'tutor', 'admin'), `profile_picture_url`, `bio` (for tutors).

**Relationships:**
- A Tutor `hasMany` Courses.
- A Student `belongsToMany` Courses (enrollments).
- A User `hasMany` Messages.

### Subject
Represents academic subjects.
`id`, `name`, `description`.

**Relationships:**
- `hasMany` Courses.

### Course
A course offered by a tutor.
`id`, `tutor_id` (FK to users), `subject_id` (FK to subjects), `title`, `description`, `price`.

**Relationships:**
- `belongsTo` a Tutor (User model).
- `belongsTo` a Subject.
- `hasMany` Lessons.
- `belongsToMany` Students (User model) through an `enrollments` pivot table.

### Lesson
A single unit within a course.
`id`, `course_id`, `title`, `content_type` (e.g., 'video', 'pdf', 'quiz'), `content_path`.

**Relationships:**
- `belongsTo` a Course.

### Session
A scheduled tutoring session.
`id`, `tutor_id`, `student_id`, `course_id`, `scheduled_at`, `duration_minutes`, `status` (e.g., 'pending', 'confirmed', 'completed', 'cancelled').

**Relationships:**
- `belongsTo` a Tutor and a Student.

### Message
For real-time chat.
`id`, `sender_id`, `receiver_id`, `message`, `read_at`.

**Relationships:**
- `belongsTo` a sender and receiver (User model).

### Review
Student reviews for tutors.
`id`, `student_id`, `tutor_id`, `rating` (1-5), `comment`.

## 4. API Endpoints (RESTful)

All endpoints should be prefixed with /api/v1/. Authentication should be handled via Laravel Sanctum, requiring an Authorization: Bearer <token> header for protected routes.

### Authentication (`/auth`)
- `POST /register`: Register a new user (student or tutor).
- `POST /login`: Authenticate a user and return an API token.
- `POST /logout`: Invalidate the user's token (requires authentication).
- `GET /me`: Get the currently authenticated user's details.

### Users (`/users`)
- `GET /tutors`: Get a list of all tutors (can be filtered by subject, rating, etc.).
- `GET /tutors/{id}`: Get a single tutor's public profile.

### Courses (`/courses`)
- `GET /courses`: Get a list of all courses.
- `POST /courses`: (Tutor/Admin only) Create a new course.
- `GET /courses/{id}`: Get details for a single course, including its lessons.
- `PUT /courses/{id}`: (Tutor/Admin only) Update a course.
- `DELETE /courses/{id}`: (Tutor/Admin only) Delete a course.

### Sessions (`/sessions`)
- `POST /sessions/book`: (Student only) Request to book a session with a tutor.
- `GET /sessions`: Get a list of the authenticated user's sessions (past and upcoming).
- `POST /sessions/{id}/confirm`: (Tutor only) Confirm a booking request.
- `POST /sessions/{id}/cancel`: (Tutor/Student) Cancel a session.

### Messaging (`/messages`)
- `GET /messages/{userId}`: Get chat history with a specific user.
- `POST /messages`: Send a new message.