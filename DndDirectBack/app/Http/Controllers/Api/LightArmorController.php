<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\LightArmor;
use Illuminate\Http\Request;

class LightArmorController extends Controller
{
    public function index()
    {
        return LightArmor::all(); // Получить все легкие доспехи
    }

    public function show($id)
    {
        return LightArmor::findOrFail($id); // Получить броню по ID
    }

}