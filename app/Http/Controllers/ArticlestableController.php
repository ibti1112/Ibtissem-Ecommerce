<?php

namespace App\Http\Controllers;

use App\Models\Articletable; // Assurez-vous d'importer correctement le modèle Articletable
use Illuminate\Http\Request;

class ArticletableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Articletable::with('scategories')->get(); // Utilisez le modèle Articletable
        return $articles;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $article = new Articletable([
            'designation' => $request->input('designation'),
            'marque' => $request->input('marque'),
            'reference' => $request->input('reference'),
            'qtestock' => $request->input('qtestock'),
            'prix' => $request->input('prix'),
            'imageart' => $request->input('imageart'),
            'scategorieID' => $request->input('scategorieID') // Assurez-vous que le nom de la colonne correspond
        ]);
        $article->save();
        return response()->json($article, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $article = Articletable::find($id); // Utilisez le modèle Articletable
        return response()->json($article);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $article = Articletable::find($id); 
        $article->update($request->all());
        return response()->json($article, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $article = Articletable::find($id); 
        $article->delete();
        return response()->json('Article supprimé !', 200);
    }
}