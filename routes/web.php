<?php

use \Illuminate\Support\Facades\Auth;
use \Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});


Route::get('/', 'ViewController@main')->name('main');
Route::get('/profile', 'ViewController@profile')->name('profile');
Route::get('/dashboard', 'ViewController@dashboard')->name('dashboard');
Route::get('/projects', 'ViewController@projects')->name('projects');
Route::get('/services', 'ViewController@services')->name('services');
