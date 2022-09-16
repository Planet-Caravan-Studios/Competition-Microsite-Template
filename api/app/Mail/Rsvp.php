<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Rsvp extends Mailable
{
    use Queueable, SerializesModels;

    private $rsvp;
    public $event;
    public $date;
    public $time;
    public $confirmation;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(\App\Rsvp $rsvp)
    {
        $this->rsvp = $rsvp;
        $this->event = $rsvp->event;
        $this->date = date('F j, Y', $this->event->date); // March 10, 2001
        $this->time = date('g:i a', $this->event->date); // 5:16 pm
        $this->confirmation = date('md', $this->event->date) . '-' . $rsvp->cidb . '-' . $rsvp->id;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Bulleit Frontier Works Confirmation')
                    ->view('email.rsvp');
    }
}
