<?php

use App\Http\Controllers\Landing\HomeController;
use App\Http\Controllers\Landing\AboutController;
use App\Http\Controllers\Landing\TutorsController;
use App\Http\Controllers\Landing\HowItWorksController;
use App\Http\Controllers\Landing\InvestorReportController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Public Landing Pages
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/how-it-works', [HowItWorksController::class, 'index'])->name('how-it-works');
Route::get('/tutors', [TutorsController::class, 'index'])->name('tutors');
Route::get('/investor-report', [InvestorReportController::class, 'index'])->name('investor-report');

// Include additional route files
require __DIR__ . '/auth.php';
require __DIR__ . '/app.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/settings.php';
