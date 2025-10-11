<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class SettingsController extends Controller
{
    /**
     * Show the settings page
     */
    public function index()
    {
        return Inertia::render('settings/index', [
            'user' => auth()->user()
        ]);
    }

    /**
     * Update profile information
     */
    public function updateProfile(Request $request)
    {
        $user = auth()->user();

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $user->id],
            'phone' => ['nullable', 'string', 'max:20'],
            'bio' => ['nullable', 'string', 'max:500'],
        ]);

        $user->update($validated);

        return back()->with('success', 'Profile updated successfully');
    }

    /**
     * Update password
     */
    public function updatePassword(Request $request)
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        auth()->user()->update([
            'password' => Hash::make($validated['password'])
        ]);

        return back()->with('success', 'Password updated successfully');
    }

    /**
     * Update notification preferences
     */
    public function updateNotifications(Request $request)
    {
        $validated = $request->validate([
            'email_notifications' => ['boolean'],
            'sms_notifications' => ['boolean'],
            'push_notifications' => ['boolean'],
            'marketing_emails' => ['boolean'],
        ]);

        auth()->user()->update($validated);

        return back()->with('success', 'Notification preferences updated');
    }

    /**
     * Update privacy settings
     */
    public function updatePrivacy(Request $request)
    {
        $validated = $request->validate([
            'profile_visibility' => ['required', 'in:public,private,connections'],
            'show_email' => ['boolean'],
            'show_phone' => ['boolean'],
        ]);

        auth()->user()->update($validated);

        return back()->with('success', 'Privacy settings updated');
    }

    /**
     * Delete account
     */
    public function deleteAccount(Request $request)
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = auth()->user();
        
        auth()->logout();
        
        $user->delete();

        return redirect()->route('home')
            ->with('success', 'Your account has been deleted');
    }
}
