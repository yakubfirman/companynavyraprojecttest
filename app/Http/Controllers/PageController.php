<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Event;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('Home', [
            'products' => Product::take(3)->get(),
            'events' => Event::take(3)->get()
        ]);
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function products()
    {
        return Inertia::render('Products', [
            'products' => Product::all()
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function events()
    {
        return Inertia::render('Events', [
            'events' => Event::all()
        ]);
    }
}
