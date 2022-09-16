<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/api/form', function () {
  header("Location: /");
  die();
});
$router->post('/api/form', 'CidbController@register');
$router->get('/api/event', 'EventController@index');
$router->post('/api/consumer/unsubscribe', 'CidbController@unsubscribe');
// NOTE: will need to add auth for this route:
// $router->get('/api/rsvp', 'RsvpController@index');
