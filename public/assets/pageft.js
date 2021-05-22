document.cookie = "cookie=cake"

function favicon(url) { var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = url; document.getElementsByTagName('head')[0].appendChild(link) }

        function titlechange() {
     var paget = document.getElementById("tchange").value
     document.title = paget;
     localStorage.setItem('title', paget);
    }

(function favTitle() {
  const title = localStorage.getItem('title');
  const faviconurl = localStorage.getItem('faviconurl');
  if (faviconurl) {

  } else {
    localStorage.setItem('faviconurl', '/assets/favicon.jpg')
    favicon(localStorage.getItem('faviconurl'))
  }
  if (title) {

  } else {
    localStorage.setItem('title', 'Ludicrous')
    document.title = "Ludicrous"
  }
  const stylemode = localStorage.getItem('stylemode');
  if (stylemode == "light") {
    light()
  } else if (stylemode == "dark") {
    dark()
  }
  favicon(localStorage.getItem('faviconurl'));  
  document.title = title;
  document.getElementById('titdis').innerHTML = 'Current Page Title: '+document.title
})()
      function co() {
        localStorage.setItem('title', "Ludicrous");
        document.title = "Ludicrous";
        localStorage.setItem('faviconurl', 'assets/favicon.jpg');
        favicon('assets/favicon.jpg')
      }
      function favco() {
      var fa = document.getElementById('favurl').value
      localStorage.setItem('faviconurl', fa);
      favicon(document.getElementById('favurl').value);
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

function generateform(event) {
  generate()
  event.preventDefault();
}

function dark() {
  document.getElementById('style').href = "assets/indexstyle.css"
  localStorage.setItem('stylemode', 'dark')
}

function light() {
  document.getElementById('style').href = "assets/lightstyle.css"
  localStorage.setItem('stylemode', 'light')
}