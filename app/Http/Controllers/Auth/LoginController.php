<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{
    /**
     * Display the login page.
     */
    public function showLoginForm(): Response
    {
        return Inertia::render('pages/login/page');
    }

    /**
     * Handle login request.
     */
    public function login(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();

            $user = Auth::user();

            // Redirect based on user role
            return match ($user->role) {
                'admin' => redirect()->intended(route('admin.dashboard')),
                'tutor' => redirect()->intended(route('dashboard.tutor')),
                'parent' => redirect()->intended(route('dashboard.parent')),
                'school' => redirect()->intended(route('dashboard.school')),
                default => redirect()->intended(route('dashboard.student')),
            };
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
}
