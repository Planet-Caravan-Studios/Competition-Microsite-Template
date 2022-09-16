<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'event';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'date', 'location', 'capacity'
    ];
    
    /**
     * Get the RSVPs for the event.
     */
    public function rsvps()
    {
        return $this->hasMany('App\Rsvp');
    }
}
