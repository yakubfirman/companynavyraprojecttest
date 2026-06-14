<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Products/Index', [
            'products' => Product::latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Products/CreateEdit');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'nullable|numeric|min:0',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imageFile = $request->file('image');
            $filename = time() . '_' . uniqid() . '.webp';
            
            $manager = new \Intervention\Image\ImageManager(new \Intervention\Image\Drivers\Gd\Driver());
            $image = $manager->read($imageFile);
            
            $path = storage_path('app/public/products');
            if (!file_exists($path)) {
                mkdir($path, 0755, true);
            }
            
            $image->toWebp(80)->save($path . '/' . $filename);
            
            $validated['image'] = '/storage/products/' . $filename;
        }

        Product::create($validated);

        return redirect()->route('admin.products.index')->with('success', 'Product created successfully.');
    }

    public function edit(Product $product)
    {
        return Inertia::render('Admin/Products/CreateEdit', [
            'product' => $product
        ]);
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'nullable|numeric|min:0',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $imageFile = $request->file('image');
            $filename = time() . '_' . uniqid() . '.webp';
            
            $manager = new \Intervention\Image\ImageManager(new \Intervention\Image\Drivers\Gd\Driver());
            $image = $manager->read($imageFile);
            
            $path = storage_path('app/public/products');
            if (!file_exists($path)) {
                mkdir($path, 0755, true);
            }
            
            $image->toWebp(80)->save($path . '/' . $filename);
            
            // Delete old image if exists
            if ($product->image && str_starts_with($product->image, '/storage/products/')) {
                $oldPath = storage_path('app/public/products/' . basename($product->image));
                if (file_exists($oldPath)) {
                    unlink($oldPath);
                }
            }
            
            $validated['image'] = '/storage/products/' . $filename;
        } else {
            unset($validated['image']);
        }

        $product->update($validated);

        return redirect()->route('admin.products.index')->with('success', 'Product updated successfully.');
    }

    public function destroy(Product $product)
    {
        if ($product->image && str_starts_with($product->image, '/storage/products/')) {
            $oldPath = storage_path('app/public/products/' . basename($product->image));
            if (file_exists($oldPath)) {
                unlink($oldPath);
            }
        }
        $product->delete();
        return redirect()->back()->with('success', 'Product deleted successfully.');
    }
}
