CSS3Goodness
============

Purpose
-------

[CSS3 Goodness](http://css3goodness.com) is an HTML5/CSS3/jQuery webapp that allows a user to test CSS3 goodies on the fly and then have the code generated and displayed on the screen.

Hopefully over time I can grow this to include many CSS3 goodies but initially
it supports:

- border-radius (rounded corners) 
- box-shadow (drop shadow)
- text-shadow (text drop shadow).

How to use
----------

Visit the page in any friendly webkit browser and along the right of the screen
you will see a grey div with rounded corners, a drop shadow, and text drop shadow. 

On the left side of the screen are sliders for adjusting the rounded corners,
drop shadow, and text drop shadow. There are also color pickers for getting the
exact color you want.

Move the sliders or use the color picker and the grey section on the left will
be dynamically restyled and the CSS will be printed at the bottom of the
screen.

Supported Browsers
------------------

Most recent versions of

- Chrome
- Safari

TODO
----

- There is some bug that is causing the user to need to change all three sliders
for either drop shadow or text shadow before the dynamic styling takes effect. I
need to figure out what is going on here. Place to start is in firebug/webkit js
debugger.
- I wasn't able to grab the rounded corner value with jQuery to then show at the
bottom of the page when refreshFooter() is called. I need to dig in deeper and
figure out why this is/isn't happening

Caveats
-------

