<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class TutorsController extends Controller
{
    /**
     * Display the tutors listing page.
     */
    public function index(Request $request): Response
    {
        $filters = [
            'subject' => $request->input('subject'),
            'rating' => $request->input('rating'),
            'availability' => $request->input('availability'),
        ];

        return Inertia::render('pages/tutors/app', [
            'tutors' => $this->getTutors($filters),
            'subjects' => $this->getSubjects(),
            'filters' => $filters,
        ]);
    }

    /**
     * Get tutors based on filters.
     */
    private function getTutors(array $filters): array
    {
        // TODO: Replace with actual database query with filters
        return [
            [
                'id' => 1,
                'name' => 'Dr. Sarah Johnson',
                'subject' => 'Mathematics',
                'specializations' => ['Algebra', 'Calculus', 'Geometry'],
                'rating' => 4.9,
                'reviews' => 150,
                'students' => 200,
                'hourlyRate' => 50,
                'image' => '/images/tutors/sarah.jpg',
                'bio' => 'PhD in Mathematics with 10 years of teaching experience.',
                'availability' => 'Available',
            ],
            [
                'id' => 2,
                'name' => 'Prof. Michael Chen',
                'subject' => 'Physics',
                'specializations' => ['Mechanics', 'Thermodynamics', 'Quantum Physics'],
                'rating' => 4.8,
                'reviews' => 120,
                'students' => 180,
                'hourlyRate' => 55,
                'image' => '/images/tutors/michael.jpg',
                'bio' => 'University professor specializing in advanced physics.',
                'availability' => 'Available',
            ],
            [
                'id' => 3,
                'name' => 'Ms. Emily Davis',
                'subject' => 'English',
                'specializations' => ['Literature', 'Writing', 'Grammar'],
                'rating' => 5.0,
                'reviews' => 200,
                'students' => 250,
                'hourlyRate' => 45,
                'image' => '/images/tutors/emily.jpg',
                'bio' => 'Award-winning English teacher with a passion for literature.',
                'availability' => 'Available',
            ],
        ];
    }

    /**
     * Get available subjects.
     */
    private function getSubjects(): array
    {
        // TODO: Replace with actual database query
        return [
            'Mathematics',
            'Physics',
            'Chemistry',
            'Biology',
            'English',
            'History',
            'Computer Science',
            'Languages',
        ];
    }
}
