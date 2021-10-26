<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Board extends Model
{
  protected $fillable =['title', 'color','owner_id'];

      public function lists(): HasMany{
 
    return    $this->hasMany(CardList::class,'board_id');

      }
      public function Owner():BelongsTo{

        return $this->belongsTo(User::class,'owner_id');
      }
}
  