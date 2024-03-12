<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Scategorie; 

class Categorie extends Model
{
    use HasFactory;
    protected $fillable = [
        'nomcategorie','imagecategorie'
      ];
    }
    class scategories extends Model{
    public function scategories()
{
return $this->hasMany(Scategorie::class ,"categorieID");
}
    }