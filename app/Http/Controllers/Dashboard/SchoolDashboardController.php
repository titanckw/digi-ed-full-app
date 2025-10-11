<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class SchoolDashboardController extends Controller
{
    /**
     * Display the school dashboard.
     */
    public function index(): Response
    {
        $user = Auth::user();

        return Inertia::render('pages/dashboard/school/page', [
            'user' => $user,
            'stats' => $this->getStats($user->id),
            'students' => $this->getStudents($user->id),
            'tutors' => $this->getTutors($user->id),
            'sessions' => $this->getSessions($user->id),
            'performance' => $this->getPerformance($user->id),
        ]);
    }

    /**
     * Get school statistics.
     */
    private function getStats(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            'totalStudents' => 500,
            'activeTutors' => 25,
            'totalSessions' => 1200,
            'averageScore' => 87,
        ];
    }

    /**
     * Get students for the school.
     */
    private function getStudents(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'id' => 1,
                'name' => 'John Doe',
                'grade' => '10th Grade',
                'sessions' => 15,
                'progress' => 85,
            ],
            [
                'id' => 2,
                'name' => 'Jane Smith',
                'grade' => '11th Grade',
                'sessions' => 20,
                'progress' => 92,
            ],
        ];
    }

    /**
     * Get tutors for the school.
     */
    private function getTutors(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'id' => 1,
                'name' => 'Dr. Sarah Johnson',
                'subject' => 'Mathematics',
                'students' => 30,
                'rating' => 4.9,
            ],
            [
                'id' => 2,
                'name' => 'Prof. Michael Chen',
                'subject' => 'Physics',
                'students' => 25,
                'rating' => 4.8,
            ],
        ];
    }

    /**
     * Get recent sessions.
     */
    private function getSessions(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'id' => 1,
                'student' => 'John Doe',
                'tutor' => 'Dr. Sarah Johnson',
                'subject' => 'Mathematics',
                'date' => now()->subDays(1)->format('Y-m-d'),
                'status' => 'completed',
            ],
            [
                'id' => 2,
                'student' => 'Jane Smith',
                'tutor' => 'Prof. Michael Chen',
                'subject' => 'Physics',
                'date' => now()->format('Y-m-d'),
                'status' => 'scheduled',
            ],
        ];
    }

    /**
     * Get performance data.
     */
    private function getPerformance(int $userId): array
    {
        // TODO: Replace with actual database query
        return [
            ['month' => 'Jan', 'averageScore' => 82],
            ['month' => 'Feb', 'averageScore' => 84],
            ['month' => 'Mar', 'averageScore' => 85],
            ['month' => 'Apr', 'averageScore' => 86],
            ['month' => 'May', 'averageScore' => 87],
            ['month' => 'Jun', 'averageScore' => 87],
        ];
    }
}
