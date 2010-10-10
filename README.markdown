CSS3Goodness
============

Purpose
-------

[CSS3 Goodness](http://css3goodness) is an HTML5/CSS3/jQuery webapp that allows a user to test CSS3 goodies on the fly and then have the code generated and displayed on the screen.

Hopefully over time I can grow this to include many CSS3 goodies but initially
it supports:

- border-radius (rounded corners) 
- box-shadow (drop shadow)
- text-shadow (text drop shadow).

How to use
----------

Visit the page in any friendly webkit browser and you will see a purple section
with rounded corners, a drop shadow, and text drop shadow. 

On the right side of the screen you see a form with 3 input fields. Each of the
fields controls a different CSS3 style

Enter a new value and hit the update button. The purple section on the left will
be dynamically restyled and the CSS code will be printed at the bottom of the
screen.

Supported Browsers
------------------

Most recent versions of

- Chrome
- Safari

TODO
----

- Firefox is a super fail. I think it isn't recognizing the HTML5 elements. I
guess I could change all of the html5 elements to divs with an id of the html5
element name.
- I would like to be more granular with the input fields and provide an input
field for each property. That will mean having 4 input fields for drop shadows
and text drop shadows.

Caveats
-------

