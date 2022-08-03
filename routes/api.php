<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\Users\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// public route

Route::post('/login', [AuthController::class,'authenticate'])->name('login');
Route::post('/register', [AuthController::class,'register'])->name('register');
    Route::apiResources(['users' => UserController::class]);

// protected route
Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::get('/auth/user', [AuthController::class, 'authUser']);
    //Route::get('/users', [UserController::class,'index']);
    Route::delete('/logout', [AuthController::class,'logout']);
});
