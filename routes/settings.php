<?php

use App\Http\Controllers\Settings\SettingsController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->prefix('settings')->name('settings.')->group(function () {
    Route::get('/', [SettingsController::class, 'index'])->name('index');
    Route::put('/profile', [SettingsController::class, 'updateProfile'])->name('profile.update');
    Route::put('/password', [SettingsController::class, 'updatePassword'])->name('password.update');
    Route::put('/notifications', [SettingsController::class, 'updateNotifications'])->name('notifications.update');
    Route::put('/privacy', [SettingsController::class, 'updatePrivacy'])->name('privacy.update');
    Route::delete('/account', [SettingsController::class, 'deleteAccount'])->name('account.delete');
});
