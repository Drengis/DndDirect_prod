<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediumArmor extends Model
{
    use HasFactory;

    protected $table = 'medium_armors'; // Указать имя таблицы, если отличается от имени модели

    protected $fillable = [
        'name',
        'price',
        'armor_class',
        'strength',
        'stealth',
    ];
}