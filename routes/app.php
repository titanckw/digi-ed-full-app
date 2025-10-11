<?php

use App\Http\Controllers\Dashboard\StudentDashboardController;
use App\Http\Controllers\Dashboard\TutorDashboardController;
use App\Http\Controllers\Dashboard\ParentDashboardController;
use App\Http\Controllers\Dashboard\SchoolDashboardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Routes for authenticated users including dashboards for different user types
|
*/

Route::middleware(['auth'])->group(function () {
    
    // Dashboard Routes
    Route::prefix('dashboard')->name('dashboard.')->group(function () {
        
        // Student Dashboard
        Route::get('/student', [StudentDashboardController::class, 'index'])->name('student');
        
        // Tutor Dashboard
        Route::get('/tutor', [TutorDashboardController::class, 'index'])->name('tutor');
        
        // Parent Dashboard
        Route::get('/parent', [ParentDashboardController::class, 'index'])->name('parent');
        
        // School Dashboard
        Route::get('/school', [SchoolDashboardController::class, 'index'])->name('school');
    });
});
