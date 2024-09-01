<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/login', 'AuthController::login');
$routes->get('/logout', 'AuthController::logout');

$routes->group('profile', function($routes) {
    $routes->get('edit', 'Profile::edit');
    $routes->post('update', 'Profile::update');
    $routes->post('delete', 'Profile::delete');
});
