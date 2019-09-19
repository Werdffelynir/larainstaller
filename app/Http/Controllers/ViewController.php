<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewController extends Controller
{


    public function main() {
        return view('main', []);
    }
    public function profile() {
        return view('profile', []);
    }
    public function dashboard() {
        return view('dashboard', []);
    }
    public function projects() {
        return view('dashboard', []);
    }
    public function services() {
        return view('dashboard', []);
    }
}
