LCARS (Library Computer Access Retrieval System)
================================================

LCARS is a CSS framework like [Bootstrap](http://getbootstrap.com/), [Foundation](http://foundation.zurb.com/), [Topcoat](http://topcoat.io/), [Brick](http://mozilla.github.io/brick/index.html), or [Pure](http://purecss.io/).

It's purpose is to create website inspired by the user interface of a popular sci-fi franchise.

Lcars is build on [Stylus](http://learnboost.github.io/stylus/) with [Nib](https://github.com/visionmedia/nib) and [Rupture](https://github.com/jenius/rupture).

# Demo

[See](http://joernweissenborn.github.io/lcars/)

# Usage

## Buttons

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

## Grid System

Every CSS framework needs to have its own grid system. Ours is based on fractions.

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

Grid prefix's and suffix's can be used to create spacing before and after a grid column.

```html
<div class="lcars-row">
  <div class="lcars-column u-1-3 prefix-1-3"> 1/3 page width with 1/3 prefix margin</div>
  <div class="lcars-column u-1-3"> 1/3 page width </div>
</div>

<div class="lcars-row">
  <div class="lcars-column u-1-3"> 1/3 page width </div>
  <div class="lcars-column u-1-3 suffix-1-3"> 1/3 page width with 1/3 suffix margin</div>
</div>
```

## Menus

To give your page the classic LCARS look, you'll want to add vertical menus.

```html
<ul class="lcars-menu">
  <li><a href="#">Menu Item 1</a></li>
  <li><a href="#">Menu Item 2</a></li>
  <li><a href="#">Menu Item 3</a></li>
  <li><a href="#">Menu Item 4</a></li>
  <li><a href="#">Menu Item 5</a></li>
</ul>
```

## Elbows

The defining style element of LCARS interfaces are rounded *elbows* that connect horizontal dividers and vertical menus.

![LCARS Elbow](lcars/img/Elbow1.png)

You can create these using the `lcars-elbow` class. You define the width of these elbows by adding them onto a column.

```html
<div class="lcars-row">
  <div class="lcars-column u-1-8 lcars-elbow left bottom">
    Top Left elbow
  </div>
  <div class="lcars-column u-7-8 lcars-divider">
    Dashed divider lines
  </div>
</div>
```

# Thanks

Thanks to @garrett- for initial development!
