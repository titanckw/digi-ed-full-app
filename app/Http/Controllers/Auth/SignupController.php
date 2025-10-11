<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class SignupController extends Controller
{
    /**
     * Display the signup page.
     */
    public function showSignupForm(): Response
    {
        return Inertia::render('pages/signup/page');
    }

    /**
     * Handle signup request.
     */
    public function signup(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Password::defaults()],
            'role' => ['required', 'in:student,tutor,parent,school'],
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
        ]);

        Auth::login($user);

        // Redirect based on user role
        return match ($user->role) {
            'tutor' => redirect()->route('dashboard.tutor'),
            'parent' => redirect()->route('dashboard.parent'),
            'school' => redirect()->route('dashboard.school'),
            default => redirect()->route('dashboard.student'),
        };
    }
}
