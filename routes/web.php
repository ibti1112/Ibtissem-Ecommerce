<?php

Route::get('/{any}', function () {
    return view('layout.app');
    })->where('any', '.*');

