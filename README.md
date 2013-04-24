## Description

* Animating css properties for modern and legacy browsers with graceful degredation.
* When animating, in modern browsers it will use a transition, while in older ones jQuery does the animation animation.
* I have noticed in mobile (iOS and Android) browsers, the css transitions are smoother than jQuery timer animations.
* Hopefully soon jQuery would run animations intelligently based on css3 support.

## Dependencies

* jQuery 1.8+ (cross browser framework).
* Modernizr (property detection).

## How to use

* Object Oriented Javascript
  * Instantiate Animate - `var app = new Animate();`
  * Call animate function passing in css properties, duration (in milli seconds) or call back - `app.animate($(selector),{ property : value }, 1000);`
