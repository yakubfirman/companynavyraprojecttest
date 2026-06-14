<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Custom Web Application',
                'description' => 'High-performance, scalable web applications built with the latest technologies (React, Laravel, Node.js) tailored to your specific business logic.',
                'price' => 5000.00,
                'image' => 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop',
            ],
            [
                'name' => 'Mobile App Development',
                'description' => 'Native and cross-platform mobile applications for iOS and Android, focusing on intuitive user experience and seamless performance.',
                'price' => 7500.00,
                'image' => 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
            ],
            [
                'name' => 'UI/UX Design & Prototyping',
                'description' => 'Comprehensive digital product design, from wireframes and interactive prototypes to high-fidelity user interfaces that convert.',
                'price' => 2000.00,
                'image' => 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop',
            ],
            [
                'name' => 'Cloud Infrastructure Setup',
                'description' => 'Secure, scalable, and highly available cloud architecture design and implementation on AWS, Google Cloud, or Azure.',
                'price' => 3000.00,
                'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
            ],
            [
                'name' => 'SEO & Performance Optimization',
                'description' => 'Technical SEO auditing, Core Web Vitals optimization, and performance tuning to ensure maximum visibility and fast load times.',
                'price' => 1500.00,
                'image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
            ],
            [
                'name' => 'IT Consulting & Strategy',
                'description' => 'Expert guidance on digital transformation, technology stack selection, and software architecture planning.',
                'price' => 1000.00,
                'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
            ]
        ];

        DB::table('products')->insert($products);
    }
}
