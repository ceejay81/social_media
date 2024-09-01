<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use IonAuth\IonAuth; // Import the Ion Auth namespace

class AuthController extends Controller
{
    protected $ionAuth;

    public function __construct()
    {
        $this->ionAuth = new IonAuth();
    }

    public function login()
    {
        // Example login logic
        if ($this->ionAuth->loggedIn()) {
            return redirect()->to('/dashboard');
        }

        // Show login form
        return view('auth/login');
    }

    public function logout()
    {
        $this->ionAuth->logout();
        return redirect()->to('/login');
    }
}
