<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class RegisterController extends Controller
{
    /**
     * Show the registration form
     */
    public function create()
    {
        return Inertia::render('signup/page', [
            'title' => 'Register - DigiEd'
        ]);
    }

    /**
     * Handle registration request
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Password::defaults()],
            'role' => ['required', 'in:student,tutor,parent,school'],
            'phone' => ['nullable', 'string', 'max:20'],
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
            'phone' => $validated['phone'] ?? null,
        ]);

        Auth::login($user);

        // Redirect based on role
        return match($user->role) {
            'student' => redirect()->route('dashboard.student'),
            'tutor' => redirect()->route('dashboard.tutor'),
            'parent' => redirect()->route('dashboard.parent'),
            'school' => redirect()->route('dashboard.school'),
            default => redirect()->route('home'),
        };
    }
}
