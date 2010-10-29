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

- Make the controls on text-shadow more granular similar to box-shadow
- Apply checkForInput() to text-shadow
- Firefox is currently no dynamically restyling #dynamic in anything other than
text-shadow. I need to do some fancy footwork here to feed -moz- to firefox for
the other two styles.
- I want to make the text-shadow input more granular similar to box shadow which
would mean creating 4 inputs for it as well.
- Currently if the user doesn't enter in all of the values for the box shadow it
won't take effect.

Caveats
-------

