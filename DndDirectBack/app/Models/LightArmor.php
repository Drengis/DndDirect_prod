<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LightArmor extends Model
{
    use HasFactory;

    protected $table = 'light_armors'; // Указать имя таблицы, если отличается от имени модели

    protected $fillable = [
        'name',
        'price',
        'armor_class',
        'strength',
        'stealth',
    ];
}