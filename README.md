LCARS (Library Computer Access Retrieval System)
================================================

LCARS is a purely client-side CSS and HTML framework, similar to [Bootstrap](http://getbootstrap.com/), [Foundation](http://foundation.zurb.com/), [Topcoat](http://topcoat.io/), [Brick](http://mozilla.github.io/brick/index.html), or [Pure](http://purecss.io/).

Its purpose is to create websites inspired by the user interface design of a certain popular sci-fi franchise.

LCARS is written in [Stylus](http://learnboost.github.io/stylus/). To make use of this package, you will not need the Stylus source, nor most of the metadata and configuration files. That is because each distribution also contains the compiled CSS, which is the heart of the project. However, if you wish to develop and submit Pull Requests, then you will need to modify the Stylus files and be able to compile them.

There are also a few requirements in terms of HTML elements, nesting, and corresponding CSS classes that are necessary for the styling to apply correctly. Looking directly at the source of the index.html demonstration/documentation page should prove instructive.

## Demo and Documentation

[See](http://joernweissenborn.github.io/lcars/)

## Super Quick Start Guide 
(these commands should run in a typical UNIX or linux shell as well as Windows PowerShell):
```
mkdir your_new_project_name
cd your_new_project_name
mkdir css

curl --location --output lcars_master.zip https://github.com/joernweissenborn/lcars/archive/master.zip
# Although curl is available on Windows, if you don't have it, you can do this download with powershell's Invoke-WebRequest command instead:
# Invoke-WebRequest https://github.com/joernweissenborn/lcars/archive/master.zip -OutFile lcars_master.zip

unzip lcars_master.zip
cd ./lcars-master/lcars
cp index.html ../../your_new_lcars_screen.html
cp css/lcars.css ../../css/
cd ../../
```

Next, just load up your_new_lcars_screen.html in a web browser and edit with a plain old text editor. Just pull out all the stuff you don't need and customize the text you want.

This gives you the minimum (just two files, and only about 70KB!) and won't include extensions like sound or javascript behaviors or extra complex SVG elements. And you can now safely delete lcars-master/ and lcars_master.zip if you don't want any of those extensions and want to clean up your project directory a little. This should be pretty easy to just drop into any other web project you already have built, too; just insert an [html link element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) to lcars.css in your project's html files. Also you should be aware of [how CSS works](https://developer.mozilla.org/en-US/docs/Web/CSS) in terms of how and when styling override occurs.

Now you can boldly go out and develop some new web pages never seen before.


## Problems or Feature Requests

Please file an issue, I am happy to help!

## Contributing

Pull requests are very welcome, but please relate it to an issue.

## Note for users of the original version

The library has been completly rewritten, dropping things like dividers and menu. If you want to use the old version, checkout the [legacy release](https://github.com/joernweissenborn/lcars/releases/tag/0.1).

## Thanks

Thanks to @garrett- for initial development!
Thanks to @jrwarwick for audio and SVG support!
Thanks to @xenziffen for various fixes and CSS enhancements!

