<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\PageController;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/products', [PageController::class, 'products'])->name('products');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/events', [PageController::class, 'events'])->name('events');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/sitemap.xml', function () {
    $xml = '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>http://navyrastudio.smartsense.my.id/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
    <url><loc>http://navyrastudio.smartsense.my.id/about</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
    <url><loc>http://navyrastudio.smartsense.my.id/products</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
    <url><loc>http://navyrastudio.smartsense.my.id/events</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
    <url><loc>http://navyrastudio.smartsense.my.id/contact</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
</urlset>';
    return response($xml, 200)->header('Content-Type', 'text/xml');
});

Route::get('/robots.txt', function () {
    $txt = "User-agent: *\nDisallow: /login\nDisallow: /register\nDisallow: /dashboard\nSitemap: http://navyrastudio.smartsense.my.id/sitemap.xml\n";
    return response($txt, 200)->header('Content-Type', 'text/plain');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin CMS Routes
    Route::resource('admin/products', App\Http\Controllers\Admin\ProductController::class)->names([
        'index' => 'admin.products.index',
        'create' => 'admin.products.create',
        'store' => 'admin.products.store',
        'edit' => 'admin.products.edit',
        'update' => 'admin.products.update',
        'destroy' => 'admin.products.destroy',
    ]);
    
    Route::resource('admin/events', App\Http\Controllers\Admin\EventController::class)->names([
        'index' => 'admin.events.index',
        'create' => 'admin.events.create',
        'store' => 'admin.events.store',
        'edit' => 'admin.events.edit',
        'update' => 'admin.events.update',
        'destroy' => 'admin.events.destroy',
    ]);
});

require __DIR__.'/auth.php';
