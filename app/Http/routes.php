<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::post('/message','MessageController@store');
Route::get('/message','MessageController@index');
Route::get('/message/{id}','MessageController@show');
Route::put('/message/{id}','MessageController@update');
Route::delete('/message/{id}','MessageController@destroy');