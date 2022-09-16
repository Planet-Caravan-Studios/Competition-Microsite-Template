<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RsvpController extends BaseController
{
    public function index (Request $request) {
        try {
            $statusCode = 200; 
            $response = \App\Rsvp::all();
        } catch (Exception $e) {
            $statusCode = 400;
            $response = null;
        } finally {
            return response()->json($response, $statusCode);
        }
    }
}
