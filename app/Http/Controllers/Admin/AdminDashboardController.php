<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    /**
     * Display the admin dashboard.
     */
    public function index(): Response
    {
        return Inertia::render('pages/admin/page', [
            'stats' => $this->getStats(),
            'recentUsers' => $this->getRecentUsers(),
            'recentSessions' => $this->getRecentSessions(),
            'revenue' => $this->getRevenue(),
            'alerts' => $this->getAlerts(),
        ]);
    }

    /**
     * Get platform statistics.
     */
    private function getStats(): array
    {
        // TODO: Replace with actual database queries
        return [
            'totalUsers' => 10500,
            'totalTutors' => 500,
            'totalStudents' => 9500,
            'totalSchools' => 100,
            'activeSessions' => 250,
            'totalRevenue' => 500000,
            'monthlyGrowth' => 15,
        ];
    }

    /**
     * Get recent users.
     */
    private function getRecentUsers(): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'id' => 1,
                'name' => 'John Doe',
                'email' => 'john@example.com',
                'role' => 'student',
                'createdAt' => now()->subDays(1)->format('Y-m-d H:i'),
            ],
            [
                'id' => 2,
                'name' => 'Jane Smith',
                'email' => 'jane@example.com',
                'role' => 'tutor',
                'createdAt' => now()->subDays(2)->format('Y-m-d H:i'),
            ],
        ];
    }

    /**
     * Get recent sessions.
     */
    private function getRecentSessions(): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'id' => 1,
                'student' => 'John Doe',
                'tutor' => 'Dr. Sarah Johnson',
                'subject' => 'Mathematics',
                'date' => now()->format('Y-m-d H:i'),
                'status' => 'in_progress',
            ],
            [
                'id' => 2,
                'student' => 'Jane Smith',
                'tutor' => 'Prof. Michael Chen',
                'subject' => 'Physics',
                'date' => now()->subHours(2)->format('Y-m-d H:i'),
                'status' => 'completed',
            ],
        ];
    }

    /**
     * Get revenue data.
     */
    private function getRevenue(): array
    {
        // TODO: Replace with actual database query
        return [
            ['month' => 'Jan', 'revenue' => 40000],
            ['month' => 'Feb', 'revenue' => 45000],
            ['month' => 'Mar', 'revenue' => 50000],
            ['month' => 'Apr', 'revenue' => 55000],
            ['month' => 'May', 'revenue' => 60000],
            ['month' => 'Jun', 'revenue' => 65000],
        ];
    }

    /**
     * Get system alerts.
     */
    private function getAlerts(): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'type' => 'warning',
                'message' => 'Server load is high',
                'timestamp' => now()->subMinutes(30)->format('Y-m-d H:i'),
            ],
            [
                'type' => 'info',
                'message' => 'New tutor application pending review',
                'timestamp' => now()->subHours(2)->format('Y-m-d H:i'),
            ],
        ];
    }
}
