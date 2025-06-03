<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BluetoothController;

Route::post('/bluetooth-data', [BluetoothController::class, 'store']);
