<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class InvestorReportController extends Controller
{
    /**
     * Display the investor report page.
     */
    public function index(): Response
    {
        return Inertia::render('pages/investor-report/page', [
            'metrics' => $this->getMetrics(),
            'growth' => $this->getGrowthData(),
            'financials' => $this->getFinancials(),
            'milestones' => $this->getMilestones(),
        ]);
    }

    /**
     * Get key metrics.
     */
    private function getMetrics(): array
    {
        // TODO: Replace with actual database queries
        return [
            'totalRevenue' => 5000000,
            'activeUsers' => 10000,
            'monthlyGrowth' => 15,
            'customerRetention' => 92,
        ];
    }

    /**
     * Get growth data.
     */
    private function getGrowthData(): array
    {
        // TODO: Replace with actual database queries
        return [
            ['month' => 'Jan', 'users' => 5000, 'revenue' => 200000],
            ['month' => 'Feb', 'users' => 6000, 'revenue' => 250000],
            ['month' => 'Mar', 'users' => 7500, 'revenue' => 320000],
            ['month' => 'Apr', 'users' => 8500, 'revenue' => 380000],
            ['month' => 'May', 'users' => 9200, 'revenue' => 420000],
            ['month' => 'Jun', 'users' => 10000, 'revenue' => 500000],
        ];
    }

    /**
     * Get financial data.
     */
    private function getFinancials(): array
    {
        return [
            'revenue' => 5000000,
            'expenses' => 3000000,
            'profit' => 2000000,
            'profitMargin' => 40,
        ];
    }

    /**
     * Get company milestones.
     */
    private function getMilestones(): array
    {
        return [
            [
                'date' => '2023-01',
                'title' => 'Series A Funding',
                'description' => 'Raised $5M in Series A funding.',
            ],
            [
                'date' => '2023-06',
                'title' => '10,000 Users',
                'description' => 'Reached 10,000 active users milestone.',
            ],
            [
                'date' => '2023-09',
                'title' => 'International Expansion',
                'description' => 'Expanded to 50 countries worldwide.',
            ],
        ];
    }
}
