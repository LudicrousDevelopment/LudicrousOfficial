const express = require('express');
const fetch = require('node-fetch');
app = express();
const storage = require('node-sessionstorage')
config = require(__dirname + '/config.json'),

atob = str => new Buffer.from(str, 'base64').toString('utf-8')

let requrl;
let urlenc;

// VOIDNET

app.get('/watch', function(req, res){
    v = req.query.v;
    v2 = req.query.v;

var string = v;
var character = '/';
var countObject = {} ; 

function characterCount(word, character) {
   var count = 0;
    for (var i = 0; i < word.length; i++) {
       if (word[i] === character) {
           count++;
       }
  }
  return count;
}
for (var i = 0, l = character.length; i < l; i++) {
    var currentChar = character[i];
    num = characterCount(string, currentChar);
}

domain = v.split('/');
    domain = domain[0];
v = "/go?url=youtube.com/watch?v=" + v;
    vpath2 = v2;
    vpath2 = vpath2.split('/', num);
    let count = 0;
    test = "";
    
    for(let i = 0; i <= num - 2; i++)
    {
     test = test + vpath2[i] + "/";
    }
    
fetch(v).then(function (res) {
        return res.text();
    
    }).then(function (text) {
code = text;
v = v.split("?", 1);
    v = v.toString();
var str = v.split("."); 
var type = str[str.length - 1];
    var data;
    if(type == "png")
    {
        res.setHeader("content-type", "image/png");
         res.setHeader("content-encoding", "delta");
        
    } else{
    if(type == "svg")
    {
        res.setHeader("content-type", "image/svg+xml");
    } else
    {
        if (type == "css")
        {
         res.setHeader("content-type", "text/css");   
        }
        else {
res.setHeader("content-type", "text/html");
    } 
    }
    }
code = code.replace(/href=".\//gi, domain + '/');
code = code.replace(/href="(?!https:\/\/|\/)/gi, url2 + '/');
code = code.replace(/href="\//gi, domain + '/');
code = code.replace(/content="\//gi, 'content="' + url2 + '/');
code = code.replace(/action="\//gi, 'content="' + domain + '/');
code = code.replace(/a href="https\:\/\/www./gi, 'a href="');
code = code.replace(/src="\//gi, 'src="' + url2 + '/');
code = code.replace(/url\("\//gi, 'url("' + url2 + '/');
    res.send(code);
return;
    });
});

app.get('/unb', function(req, res){
    requrl = req.query.url
    urlenc = requrl;
    res.redirect('/'+config.prefix+'?path='+urlenc) 
});

app.get('/'+config.prefix, function(req, res){
    url = atob(req.query.path)
    url2 = url

var string = url;
var character = '/';
var countObject = {} ; 

function characterCount(word, character) {
   var count = 0;
    for (var i = 0; i < word.length; i++) {
       if (word[i] === character) {
           count++;
       }
  }
  return count;
}
for (var i = 0, l = character.length; i < l; i++) {
    var currentChar = character[i];
    num = characterCount(string, currentChar);
}

domain = url.split('/');
    domain = domain[0];
url = "http://" + url;
    path2 = url2;
    path2 = path2.split('/', num);
    let count = 0;
    test = "";
    
    for(let i = 0; i <= num - 2; i++)
    {
     test = test + path2[i] + "/";
    }
    
fetch(url).then(function (res) {
        return res.text();
    
    }).then(function (text) {
code = text;
url = url.split("?", 1);
    url = url.toString();
var str = url.split("."); 
var type = str[str.length - 1];
    var data;
    if(type == "png")
    {
        res.setHeader("content-type", "image/png");
         res.setHeader("content-encoding", "delta");
        
    } else{
    if(type == "svg")
    {
        res.setHeader("content-type", "image/svg+xml");
    } else
    {
        if (type == "css")
        {
         res.setHeader("content-type", "text/css");   
        }
        else {
res.setHeader("content-type", "text/html");
    } 
    }
    }
code = code.replace(/href=".\//gi, '/unb?url='+domain + '/');
code = code.replace(/href="(?!https:\/\/|\/)/gi, '/unb?url='+url2 + '/');
code = code.replace(/href="\//gi, 'href=/unb?url'+'='+domain + '/');
code = code.replace(/content="\//gi, 'content="' + url2 + '/');
code = code.replace(/action="\//gi, 'content="' + domain + '/');
code = code.replace(/a href="https\:\/\/www./gi, 'a href="https://"+document.location.host+"/unb?url"+domain');
code = code.replace(/src="\//gi, 'src="' + url2 + '/');
code = code.replace(/url\("\//gi, 'url("' + url2 + '/');
    res.send(code);
return;
    });
});

// PAGE NAVIGATION //

// The Following Code is for the Main Pages

app.use(express.static('public'))

app.get('/', function(req, res){
res.sendFile('/pages/index.html', { root: __dirname + '/public' });
console.log('Someone has logged onto Ludicrous!')
});

app.get('/guide', function(req, res){
res.sendFile('/assets/guide.html', { root: __dirname + '/public' });
});

app.get('/settings', function(req, res){
res.sendFile('/pages/settings.html', { root: __dirname + '/public' });
});

app.get('/surf', function(req, res){
res.sendFile('/pages/surf.html', { root: __dirname + '/public' });
});

app.get('/credits', function(req, res){
res.sendFile('/pages/credits.html', { root: __dirname + '/public' });
});

app.get('/chat', function(req, res){
res.sendFile('/pages/chatbox.html', { root: __dirname + '/public' });
});

app.get('/home', function(req, res){
res.sendFile('/pages/home.html', { root: __dirname + '/public' });
});

app.get('/land', function(req, res){
res.sendFile('/pages/hometest.html', { root: __dirname + '/public' });
});

app.get('/play', function(req, res){
res.sendFile('/pages/games.html', { root: __dirname + '/public' });
});

// Proxy Pages

app.get('/py', function(req, res){
res.sendFile('/surfpages/pydodge.html', { root: __dirname + '/public' });
});

app.get('/tp', function(req, res){
res.sendFile('/surfpages/translate.html', { root: __dirname + '/public' });
});

app.get('/voidnet', function(req, res){
res.sendFile('/surfpages/VoidNet.html', { root: __dirname + '/public' });
});

app.get('/womginx', function(req, res){
res.sendFile('/surfpages/womginx.html', { root: __dirname + '/public' });
});

app.get('/alloy', function(req, res){
res.sendFile('/surfpages/alloy.html', { root: __dirname + '/public' });
});

// Games

app.get('/games', function(req, res){
res.sendFile('/gpages/games.html', { root: __dirname + '/public' });
});

app.get('/emulate', function(req, res){
res.sendFile('/gpages/assets/css/gfiles/rarch/index.html', { root: __dirname + '/public' });
});

app.get('/html5', function(req, res){
res.sendFile('/gpages/html5.html', { root: __dirname + '/public' });
});

app.get('/flashem', function(req, res){
res.redirect('/gpages/assets/flash/index.html')
});

//Licensed

app.get('/licensed', function(req, res){
res.sendFile('/pages/licensed.html', { root: __dirname + '/public' });
});

// 400 Pages

app.use(function (req, res, next) {
  res.status(404).sendFile('/pages/error.html', {root: __dirname + '/public'})
})

app.get('/auth', function(req, res){
res.sendFile('/pages/403.html', { root: __dirname + '/public' });
});

// DEPLOYMENT

app.listen(process.env.PORT || config.port, function () {
  console.log('Server listening on port ' + PORT);
});