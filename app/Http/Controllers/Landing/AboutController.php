<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Display the about page.
     */
    public function index(): Response
    {
        return Inertia::render('pages/about/page', [
            'mission' => $this->getMission(),
            'values' => $this->getValues(),
            'team' => $this->getTeam(),
            'timeline' => $this->getTimeline(),
            'stats' => $this->getStats(),
        ]);
    }

    /**
     * Get company mission statement.
     */
    private function getMission(): array
    {
        return [
            'title' => 'Our Mission',
            'description' => 'To revolutionize education through technology and personalized learning experiences.',
        ];
    }

    /**
     * Get company values.
     */
    private function getValues(): array
    {
        return [
            [
                'title' => 'Excellence',
                'description' => 'We strive for excellence in everything we do.',
            ],
            [
                'title' => 'Innovation',
                'description' => 'We embrace innovation and continuous improvement.',
            ],
            [
                'title' => 'Integrity',
                'description' => 'We operate with honesty and transparency.',
            ],
            [
                'title' => 'Accessibility',
                'description' => 'We make quality education accessible to all.',
            ],
        ];
    }

    /**
     * Get team members.
     */
    private function getTeam(): array
    {
        // TODO: Replace with actual database query
        return [
            [
                'name' => 'Jane Doe',
                'role' => 'CEO & Founder',
                'image' => '/images/team/jane.jpg',
                'bio' => 'Education technology pioneer with 15 years of experience.',
            ],
            [
                'name' => 'John Smith',
                'role' => 'CTO',
                'image' => '/images/team/john.jpg',
                'bio' => 'Tech innovator passionate about educational solutions.',
            ],
            [
                'name' => 'Sarah Johnson',
                'role' => 'Head of Education',
                'image' => '/images/team/sarah.jpg',
                'bio' => 'Former teacher with a vision for personalized learning.',
            ],
        ];
    }

    /**
     * Get company timeline.
     */
    private function getTimeline(): array
    {
        return [
            [
                'year' => '2020',
                'title' => 'Founded',
                'description' => 'DigiEd was founded with a vision to transform education.',
            ],
            [
                'year' => '2021',
                'title' => 'First 1000 Students',
                'description' => 'Reached our first milestone of 1000 active students.',
            ],
            [
                'year' => '2022',
                'title' => 'Platform Expansion',
                'description' => 'Expanded to include school management features.',
            ],
            [
                'year' => '2023',
                'title' => 'Global Reach',
                'description' => 'Serving students in over 50 countries worldwide.',
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
            'schools' => 100,
            'countries' => 50,
        ];
    }
}
