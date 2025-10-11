<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index(): Response
    {
        return Inertia::render('pages/page', [
            'featuredTutors' => $this->getFeaturedTutors(),
            'testimonials' => $this->getTestimonials(),
            'stats' => $this->getStats(),
        ]);
    }

    /**
     * Get featured tutors for the home page.
     */
    private function getFeaturedTutors(): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'id' => 1,
                'name' => 'Dr. Sarah Johnson',
                'subject' => 'Mathematics',
                'rating' => 4.9,
                'students' => 150,
                'image' => '/images/tutors/sarah.jpg',
            ],
            [
                'id' => 2,
                'name' => 'Prof. Michael Chen',
                'subject' => 'Physics',
                'rating' => 4.8,
                'students' => 120,
                'image' => '/images/tutors/michael.jpg',
            ],
            [
                'id' => 3,
                'name' => 'Ms. Emily Davis',
                'subject' => 'English',
                'rating' => 5.0,
                'students' => 200,
                'image' => '/images/tutors/emily.jpg',
            ],
        ];
    }

    /**
     * Get testimonials for the home page.
     */
    private function getTestimonials(): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'id' => 1,
                'name' => 'John Smith',
                'role' => 'Parent',
                'content' => 'DigiEd has transformed my child\'s learning experience. The tutors are exceptional!',
                'rating' => 5,
            ],
            [
                'id' => 2,
                'name' => 'Lisa Anderson',
                'role' => 'Student',
                'content' => 'I love the interactive sessions and the progress tracking features.',
                'rating' => 5,
            ],
            [
                'id' => 3,
                'name' => 'Robert Williams',
                'role' => 'School Administrator',
                'content' => 'The best platform for managing our school\'s tutoring program.',
                'rating' => 5,
            ],
        ];
    }

    /**
     * Get platform statistics.
     */
    private function getStats(): array
    {
        // TODO: Replace with actual database queries
        return [
            'students' => 10000,
            'tutors' => 500,
            'sessions' => 50000,
            'satisfaction' => 98,
        ];
    }
}
