<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EvaluationNote extends Model
{
    use HasFactory;

    public function pop()
    {
        return $this->belongsTo(Pop::class);
    }
}
