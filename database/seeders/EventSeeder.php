<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $events = [
            [
                'title' => 'Tech Innovators Summit 2026',
                'description' => 'Join industry leaders to discuss the future of AI, cloud computing, and modern web development architectures.',
                'event_date' => '2026-08-15 09:00:00',
                'location' => 'Grand Ballroom, Ritz-Carlton Jakarta',
                'image' => null,
                'registration_link' => null,
            ],
            [
                'title' => 'React & Laravel Masterclass',
                'description' => 'An intensive full-day workshop covering advanced patterns for building scalable SPAs with Inertia.js, React, and Laravel 13.',
                'event_date' => '2026-09-05 10:00:00',
                'location' => 'Navyra HQ & Online via Zoom',
                'image' => null,
                'registration_link' => null,
            ],
            [
                'title' => 'Digital Transformation Webinar',
                'description' => 'A free webinar focusing on how traditional businesses can leverage custom software to streamline operations and boost revenue.',
                'event_date' => '2026-10-12 19:00:00',
                'location' => 'Online (Google Meet)',
                'image' => null,
                'registration_link' => null,
            ]
        ];

        DB::table('events')->insert($events);
    }
}
