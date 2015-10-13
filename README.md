
# [Br0\^/](//github.com/misterzik/brow)Ser Recognition
> **Old Fashion** browser recognition, with cool UI Alert, and Full details page with agent browser information.

> File Size: (37 KB)

## Version
0.0.3

## Demo

Bro\^/

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")




Bro\^/ Full Details

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")


# Installation

#### [Bower](http://bower.io/search/?q=BrowJS)
```
bower install browJS
```

#### [NuGet](https://www.nuget.org/packages/browJS/)
```
PM> Install-Package browJS
```

#### [Github](https://github.com/misterzik/browJS/archive/master.zip)
```
git clone https://github.com/misterzik/browJS.git
```



## Quick Start

### Let's make this weerk!

1. Link to the stylesheet `<link href="css/brow.min.css" rel="stylesheet"/>`

2. Link to the javascript `<script src="js/brow.min.js"></script>`

4. Run bower on root folder, to download dependencies `bower install`

3. Use brow container to display the message.
```html
<div id="myBrow" class="alert alert-danger myBrow">
  <div id="Brow"></div>
</div>
```

4. And last but not least, dont forget to fire the script with this.
	```js
  $(window).ready(function() {
    $('#myBrow').html($('#Brow').html() + '<small>You are currently using, ' + b1.bName + ' as a browser. For more details <a href="brow.html">Click Here</a>.</small><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>');
  });
	```

  If you're having problems with this script, please try to run the files, index.html, css/, js/, locally and see if you get the same errors.


  ## Contributing

  For a pull request to be considered it must resolve a bug, or add a feature which is beneficial to a large audience.

  Requests must be made against the `develop` branch. Pull requests submitted against the `master` branch will not be considered.
