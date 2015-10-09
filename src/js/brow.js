function Brow() {
//        The BROw's = The Browsers
// ------------------------------------------//
// Create Holders
var bVer = navigator.appVersion;
var bAgnt = navigator.userAgent;
var bName = navigator.appName;

// Outputs Holders
var fullVersion = '' + parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;

//        The BROw's = The Browsers
// ---------------------------------------------//
// If/Else Statements to prove browser         //
// identification while checking for          //
// "Version" (navigator.appVersion == bVer)  //
//==========================================//
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

//BROw's
// ------------------------------------------//
// Substring used to shortend up the output //
//=========================================//
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

//BROw's
// ------------------------------------------//
// Substring used to shortend up the output //
//=========================================//
/*document.write('' +
  '<div id="myBrow" class="alert alert-danger ' +  + '">'+
  '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
  '<small>You are currently using, ' + bName +
  ' as a browser. For more details <a href="brow.html">Click Here</a>.</small></div><br>'
)*/



$(document).ready(function() {
//BROw's
// -------------------------------------------//
//        Activated Close Function.         //
//=========================================//
$(function() {
    $('.close').click(function() {
        $('#myBrow').remove();
    });
});

});


return {bName:bName, fullVersion:fullVersion, majorVersion:majorVersion}
}

var b1 = Brow();

//--insanen.com
//\/|!ster7_!k
