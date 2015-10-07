// Create Holders
var bVer = navigator.appVersion;
var bAgnt = navigator.userAgent;
var bName = navigator.appName;

// Outputs Holders
var fullVersion = '' + parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;

// In Opera, the true version is after "Opera" or after "Version"
if ((verOffset = bAgnt.indexOf("Opera")) != -1) {
    bName = "Opera";
    fullVersion = bAgnt.substring(verOffset + 6);
    if ((verOffset = bAgnt.indexOf("Version")) != -1)
        fullVersion = bAgnt.substring(verOffset + 8);
}

// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset = bAgnt.indexOf("MSIE")) != -1) {
    bName = "Microsoft Internet Explorer";
    fullVersion = bAgnt.substring(verOffset + 5);
}

// In Chrome, the true version is after "Chrome"
else if ((verOffset = bAgnt.indexOf("Chrome")) != -1) {
    bName = "Chrome";
    fullVersion = bAgnt.substring(verOffset + 7);
}

// In Safari, the true version is after "Safari" or after "Version"
else if ((verOffset = bAgnt.indexOf("Safari")) != -1) {
    bName = "Safari";
    fullVersion = bAgnt.substring(verOffset + 7);
    if ((verOffset = bAgnt.indexOf("Version")) != -1)
        fullVersion = bAgnt.substring(verOffset + 8);
}

// In Firefox, the true version is after "Firefox"
else if ((verOffset = bAgnt.indexOf("Firefox")) != -1) {
    bName = "Firefox";
    fullVersion = bAgnt.substring(verOffset + 8);
}

// In most other browsers, "name/version" is at the end of userAgent
else if ((nameOffset = bAgnt.lastIndexOf(' ') + 1) <
          (verOffset = bAgnt.lastIndexOf('/'))) {
    bName = bAgnt.substring(nameOffset, verOffset);
    fullVersion = bAgnt.substring(verOffset + 1);
    if (bName.toLowerCase() == bName.toUpperCase()) {
        bName = navigator.appName;
    }
}

// trim the fullVersion string at semicolon/space if present
if ((ix = fullVersion.indexOf(";")) != -1)
    fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1)
    fullVersion = fullVersion.substring(0, ix);

majorVersion = parseInt('' + fullVersion, 10);
if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
}

document.write('' +
  '<div id="myBrow" class="' + bName + '">'+
  '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
  '<small>You are currently using, ' + bName +
  '. Please use Chrome or Firefox for better performance.</small></div><br>'
)

//--insanen.com
//\/|!ster7_!k
