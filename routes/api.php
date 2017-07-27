<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->	get('/test', function(){
    return response()->json([
        'user'  => [
            'first_name'  => 'Swapnil',
            'last_name'   => 'Chaudhari'
        ]
    ]);
});

Route::middleware('auth:api')->	get('/currentUser', function(){
	$currentUser = app('Illuminate\Contracts\Auth\Guard')->user();
    return response()->json([
        'user'  => $currentUser
    ]);
});