<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

//Route::get('{page}', 'IndexController')->where('page','.*');

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
