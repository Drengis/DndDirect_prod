<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHeavyArmorsTable extends Migration
{
    public function up()
    {
        Schema::create('heavy_armors', function (Blueprint $table) {
            $table->id(); // автоинкремент
            $table->string('name'); // строка
            $table->integer('price'); // целое число
            $table->string('armor_class'); // строка
            $table->string('strength')->default('-'); // строка, дефолт прочерк
            $table->string('stealth')->default('-'); // строка, дефолт прочерк
            $table->timestamps(); // добавляет created_at и updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('heavy_armors');
    }
}