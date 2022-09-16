<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EventController extends BaseController
{
    public function index (Request $request) {
        try {
            $statusCode = 200;
            $events = \App\Event::all();
            $response = [];
            foreach ($events as $key => $event) {
                if ($event->capacity > count($event->rsvps)) {
                    array_push($response, $event);
                }
            }
        } catch (Exception $e) {
            $statusCode = 400;
            $response = null;
        } finally {
            return response()->json($response, $statusCode);
        }
    }
}