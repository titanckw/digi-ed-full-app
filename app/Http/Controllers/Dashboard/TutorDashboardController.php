<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class TutorDashboardController extends Controller
{
    /**
     * Display the tutor dashboard.
     */
    public function index(): Response
    {
        $user = Auth::user();

        return Inertia::render('pages/dashboard/tutor/page', [
            'user' => $user,
            'upcomingSessions' => $this->getUpcomingSessions($user->id),
            'students' => $this->getStudents($user->id),
            'earnings' => $this->getEarnings($user->id),
            'reviews' => $this->getReviews($user->id),
        ]);
    }

    /**
     * Get upcoming sessions for the tutor.
     */
    private function getUpcomingSessions(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'id' => 1,
                'subject' => 'Mathematics',
                'student' => 'John Doe',
                'date' => now()->addDays(1)->format('Y-m-d'),
                'time' => '14:00',
                'duration' => 60,
            ],
            [
                'id' => 2,
                'subject' => 'Mathematics',
                'student' => 'Jane Smith',
                'date' => now()->addDays(1)->format('Y-m-d'),
                'time' => '16:00',
                'duration' => 60,
            ],
        ];
    }

    /**
     * Get students for the tutor.
     */
    private function getStudents(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'id' => 1,
                'name' => 'John Doe',
                'totalSessions' => 10,
                'progress' => 85,
            ],
            [
                'id' => 2,
                'name' => 'Jane Smith',
                'totalSessions' => 8,
                'progress' => 90,
            ],
        ];
    }

    /**
     * Get earnings data for the tutor.
     */
    private function getEarnings(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            'thisMonth' => 2500,
            'lastMonth' => 2200,
            'total' => 15000,
            'pending' => 500,
        ];
    }

    /**
     * Get reviews for the tutor.
     */
    private function getReviews(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'student' => 'John Doe',
                'rating' => 5,
                'comment' => 'Excellent tutor! Very patient and knowledgeable.',
                'date' => now()->subDays(2)->format('Y-m-d'),
            ],
            [
                'student' => 'Jane Smith',
                'rating' => 5,
                'comment' => 'Great teaching style and very helpful.',
                'date' => now()->subDays(5)->format('Y-m-d'),
            ],
        ];
    }
}
