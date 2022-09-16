<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rsvp extends Model
{
    protected $table = 'rsvp';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cidb', 'event_id', 'location'
    ];

    /**
     * Get the Event that owns the Rsvp.
     */
    public function event()
    {
        return $this->belongsTo('App\Event');
    }
}
