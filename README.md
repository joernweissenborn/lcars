LCARS
=====

LCARS (Library Computer Access Retrieval System)

I'm recreating a LCARS website system that I created many years ago. It was a very large jQuery plugin. I think I'm just going to create a CSS system. Something much like that of [Bootstrap](http://getbootstrap.com/), [Foundation](http://foundation.zurb.com/), [Topcoat](http://topcoat.io/), [Brick](http://mozilla.github.io/brick/index.html), or [Pure](http://purecss.io/).

I'm not exactly sure what tech I'll be building this off of. Right now I'm looking hard at [Stylus](http://learnboost.github.io/stylus/) with [Nib](https://github.com/visionmedia/nib), ~~[Jeet](https://github.com/mojotech/jeet),~~ [Rupture](https://github.com/jenius/rupture), and ~~[Typographic](https://github.com/corysimmons/typographic)~~.

Latest Updates
--------------

### 5/12/2014

#### Base Styles

The base styles and resets are all in place.

#### Buttons

Finished the inital button classes. *Example mark up*

```html
<a href="#" class="lcars-button radius">Rounded Button</a>
<a href="#" class="lcars-button right">Right Side Rounded Button</a>
<a href="#" class="lcars-button left">Left Side Rounded Button</a>

<a href="#" class="lcars-button radius">
  Button
  <span class="lcars-button-addition">B1</span>
</a>

<a href="#" class="lcars-button radius">
  <span class="lcars-button-addition">B1</span>
  Button
</a>
```

#### Grid System

Every CSS framework needs to have its own grid system. I've based mine off of fractions.

```html
<div class="lcars-row">
  <div class="lcars-column u-1-3"> 1/3 page width </div>
  <div class="lcars-column u-1-3"> 1/3 page width </div>
  <div class="lcars-column u-1-3"> 1/3 page width </div>
</div>

<div class="lcars-row">
  <div class="lcars-column u-1-3"> 1/3 page width </div>
  <div class="lcars-column u-2-3"> 2/3 page width </div>
</div>
```

This grid goes up to 12 as the highest denominator, no numerator goes beyond its denominator.

This means there are a lot of way to get the same sizes. Example; these are all the same.

```html
<div class="lcars-row">
  <div class="lcars-column u-1-2"> 1/2 page width </div>
  <div class="lcars-column u-2-4"> 2/4 (1/2) page width </div>
  <div class="lcars-column u-3-6"> 3/6 (1/2) page width </div>
  <div class="lcars-column u-4-8"> 4/8 (1/2) page width </div>
  <div class="lcars-column u-5-10"> 5/10 (1/2) page width </div>
  <div class="lcars-column u-6-12"> 6/12 (1/2) page width </div>
</div>
```

-----
