<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BluetoothData;

class BluetoothController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'device' => 'required|string',
            'value' => 'required'
        ]);

        BluetoothData::create($validated);

        return response()->json(['status' => 'success']);
    }
}
