<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class ParentDashboardController extends Controller
{
    /**
     * Display the parent dashboard.
     */
    public function index(): Response
    {
        $user = Auth::user();

        return Inertia::render('pages/dashboard/parent/page', [
            'user' => $user,
            'children' => $this->getChildren($user->id),
            'upcomingSessions' => $this->getUpcomingSessions($user->id),
            'recentActivity' => $this->getRecentActivity($user->id),
            'spending' => $this->getSpending($user->id),
        ]);
    }

    /**
     * Get children for the parent.
     */
    private function getChildren(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'id' => 1,
                'name' => 'Emma Johnson',
                'grade' => '8th Grade',
                'activeSessions' => 3,
                'progress' => 88,
            ],
            [
                'id' => 2,
                'name' => 'Liam Johnson',
                'grade' => '6th Grade',
                'activeSessions' => 2,
                'progress' => 92,
            ],
        ];
    }

    /**
     * Get upcoming sessions for all children.
     */
    private function getUpcomingSessions(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'id' => 1,
                'child' => 'Emma Johnson',
                'subject' => 'Mathematics',
                'tutor' => 'Dr. Sarah Johnson',
                'date' => now()->addDays(1)->format('Y-m-d'),
                'time' => '14:00',
            ],
            [
                'id' => 2,
                'child' => 'Liam Johnson',
                'subject' => 'English',
                'tutor' => 'Ms. Emily Davis',
                'date' => now()->addDays(2)->format('Y-m-d'),
                'time' => '15:00',
            ],
        ];
    }

    /**
     * Get recent activity for all children.
     */
    private function getRecentActivity(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'child' => 'Emma Johnson',
                'type' => 'session_completed',
                'description' => 'Completed Mathematics session',
                'date' => now()->subDays(1)->format('Y-m-d H:i'),
            ],
            [
                'child' => 'Liam Johnson',
                'type' => 'assignment_submitted',
                'description' => 'Submitted English homework',
                'date' => now()->subDays(1)->format('Y-m-d H:i'),
            ],
        ];
    }

    /**
     * Get spending data.
     */
    private function getSpending(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            'thisMonth' => 450,
            'lastMonth' => 420,
            'total' => 3200,
        ];
    }
}
