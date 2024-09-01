<?php 
namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\Controller;

class Auth extends BaseController
{
    public function login()
    {
        // Load login view
        return view('auth/login');
    }

    public function register()
    {
        // Load registration view
        return view('auth/register');
    }

    public function logout()
    {
        // Implement logout logic, e.g., clearing session data
        session()->destroy();
        return redirect()->to('/auth/login');
    }
}
