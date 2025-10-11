<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class HowItWorksController extends Controller
{
    /**
     * Display the how it works page.
     */
    public function index(): Response
    {
        return Inertia::render('pages/how-it-works/page', [
            'steps' => $this->getSteps(),
            'features' => $this->getFeatures(),
            'faqs' => $this->getFaqs(),
        ]);
    }

    /**
     * Get the steps for how the platform works.
     */
    private function getSteps(): array
    {
        return [
            [
                'number' => 1,
                'title' => 'Sign Up',
                'description' => 'Create your account and complete your profile.',
                'icon' => 'user-plus',
            ],
            [
                'number' => 2,
                'title' => 'Find a Tutor',
                'description' => 'Browse our qualified tutors and find the perfect match.',
                'icon' => 'search',
            ],
            [
                'number' => 3,
                'title' => 'Book a Session',
                'description' => 'Schedule a session at a time that works for you.',
                'icon' => 'calendar',
            ],
            [
                'number' => 4,
                'title' => 'Start Learning',
                'description' => 'Join your live session and start learning.',
                'icon' => 'video',
            ],
        ];
    }

    /**
     * Get platform features.
     */
    private function getFeatures(): array
    {
        return [
            [
                'title' => 'Live Sessions',
                'description' => 'Interactive one-on-one or group sessions with qualified tutors.',
            ],
            [
                'title' => 'Progress Tracking',
                'description' => 'Monitor your learning progress with detailed analytics.',
            ],
            [
                'title' => 'Flexible Scheduling',
                'description' => 'Book sessions at times that work for your schedule.',
            ],
            [
                'title' => 'Secure Payments',
                'description' => 'Safe and secure payment processing for all transactions.',
            ],
        ];
    }

    /**
     * Get frequently asked questions.
     */
    private function getFaqs(): array
    {
        return [
            [
                'question' => 'How do I get started?',
                'answer' => 'Simply sign up for an account, complete your profile, and start browsing tutors.',
            ],
            [
                'question' => 'What subjects are available?',
                'answer' => 'We offer tutoring in a wide range of subjects including Math, Science, Languages, and more.',
            ],
            [
                'question' => 'How much does it cost?',
                'answer' => 'Pricing varies by tutor and subject. You can view rates on each tutor\'s profile.',
            ],
            [
                'question' => 'Can I cancel a session?',
                'answer' => 'Yes, you can cancel up to 24 hours before the scheduled session for a full refund.',
            ],
        ];
    }
}
