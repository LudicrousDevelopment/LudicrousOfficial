document.cookie = "cookie=cake"
var favicon = {
    change: function(iconURL) {
        if (arguments.length == 2) {
            document.title = optionalDocTitle}
        this.addLink(iconURL, "icon")
        this.addLink(iconURL, "shortcut icon")

        if (!IE) {
            if (!window.__IFrame) {
                __IFrame = document.createElement('iframe')
                var s = __IFrame.style
                s.height = s.width = s.left = s.top = s.border = 0
                s.position = 'absolute'
                s.visibility = 'hidden'
                document.body.appendChild(__IFrame)}
            __IFrame.src = 'about:blank'}},

    addLink: function(iconURL, relValue) {
        var link = document.createElement("link")
        link.type = "image/x-icon"
        link.rel = relValue
        link.href = iconURL
        this.removeLinkIfExists(relValue)
        this.docHead.appendChild(link)},

    removeLinkIfExists: function(relValue) {
        var links = this.docHead.getElementsByTagName("link");
        for (var i=0; i<links.length; i++) {
            var link = links[i]
            if (link.type == "image/x-icon" && link.rel == relValue) {
                this.docHead.removeChild(link)
                return}}}, // Assuming only one match at most.

    docHead: document.getElementsByTagName("head")[0]}

        function titlechange() {
     var paget = document.getElementById("tchange").value
     document.title = paget;
     localStorage.setItem('title', paget);
    }

function favTitle() {
  const title = localStorage.getItem('title');
  const faviconurl = localStorage.getItem('faviconurl');
  document.title = title;
  favicon.change(faviconurl);
    document.getElementById('titdis').innerHTML = 'Current Page Title: '+document.title
}
      function co() {
        localStorage.setItem('title', "Ludicrous");
        document.title = "Ludicrous";
        localStorage.setItem('faviconurl', 'assets/favicon.jpg');
        favicon.change('assets/favicon.jpg')
      }
      function favco() {
      var fa = document.getElementById('favurl').value
      localStorage.setItem('faviconurl', fa);
      favicon.change(document.getElementById('favurl').value);
      }

document.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
      titlechange()
      favicon.change(document.getElementById('favurl').value)
      document.cookie="favicon="+document.getElementById('favurl').value;
  }
});

var elem = document.getElementById("gamesdiv");

function fullsc() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

function doSomething() {
    var myCookie = getCookie("MyCookie");

    if (myCookie == null) {
      window.location.assign('/403')
    }
    else {
        // do cookie exists stuff
    }
}

chrome.webRequest.onHeadersReceived.addListener(info => {
    const headers = info.responseHeaders; // original headers
    for (let i=headers.length-1; i>=0; --i) {
        let header = headers[i].name.toLowerCase();
        if (header === "x-frame-options" || header === "frame-options") {
            headers.splice(i, 1); // Remove the header
        }
    }
    // return modified headers
    return {responseHeaders: headers};
}, {
    urls: [ "<all_urls>" ], // match all pages
    types: [ "sub_frame" ] // for framing only
}, ["blocking", "responseHeaders"]);

chrome.webRequest.onHeadersReceived.addListener(info => {
    const headers = info.responseHeaders; // original headers
    for (let i=headers.length-1; i>=0; --i) {
        let header = headers[i].name.toLowerCase();
        if (header === "content-security-policy") { // csp header is found
            // modifying frame-ancestors; this implies that the directive is already present
            headers[i].value = headers[i].value.replace("frame-ancestors", "frame-ancestors https://ludicrous.gq/");
        }
    }
    // return modified headers
    return {responseHeaders: headers};
}, {
    urls: [ "<all_urls>" ], // match all pages
    types: [ "sub_frame" ] // for framing only
}, ["blocking", "responseHeaders"]);

document.body.addEventListener('click', function (evt) {
    if (evt.target.className === 'nodiscordbutton') {
        alert('this')
    }
}, false);

window.onload = favTitle();