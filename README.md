trunKit.js
==========

"…" to full text on hover
-------------------------

trunKit is a simple jQuery plugin that does two things:

*    Remove words from the end of the content of a fixed-height div until the remaining content plus … fits
*    Add a div inside the displayed div (inheriting most of the css characteristics) that appears on hover with the full content

Files
-----
Include the trunKit.js and trunKit.css files.

Usage
-----

`$(".captionDiv").trunKit();`

Configuration Parameters
------------------------
The trunKit() function takes an optional hash of settings:

*   Class used for both the hover selector and the visual display of the full text overlay. *(defaults to "trunKit")*
*   durationFadeIn
Standard jQuery duration parameter, in ms, for fadeIn() of overlay. *(defaults to 200)*
*   durationFadeOut
Standard jQuery duration parameter, in ms, for fadeIn() of overlay. *(defaults to 200)*

Live Example
------------
Please see [trunKit.alienbill.com](http://trunKit.alienbill.com/) for a live example.

