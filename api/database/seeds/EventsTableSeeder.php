<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Event;

class EventsTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
     public function run()
     {
         Event::create([
             'name' => 'California 12/5',
             'location' => 'Griffith Observatory, 2800 E Observatory Rd, Los Angeles, CA 90027',
             'date' => 1544029200,
             'capacity' => 60
         ]);
         
         Event::create([
             'name' => 'Los Angeles 12/6',
             'location' => 'Los Angeles, CA 90027',
             'date' => 1544029200,
             'capacity' => 1
         ]);
    }
}