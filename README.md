![alt text](http://gnome-look.org/CONTENT/content-pre1/104822-1.png)

This is a super simple node server for providing auto complete functionality for Magic the Gathering Card Names.

To run the project:
<code>node bin/www</code>

The server will default to starting up at localhost:3000

The Server has only one API route:

/search

If you provide no query param for the autocomplete, it will return back the full list of cards.

Otherwise just provide a query param to do a naive autocomplete search for that card. e.g.
<code>
/search?query=garruk
</code>

Will Return the following: 
<code>
[
"Garruk Wildspeaker",
"Garruk, Apex Predator",
"Garruk, Caller of Beasts",
"Garruk's Horde",
"Garruk's Companion",
"Garruk's Packleader",
"Garruk, Primal Hunter",
"Garruk Relentless",
"Garruk, the Veil-Cursed"
]
</code>

