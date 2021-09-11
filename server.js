const express = require('express');
const fetch = require('node-fetch');
const app = express();
const getHrefs = require('get-hrefs');
const config = require(__dirname + '/config.json');
const appjs = require(__dirname + '/app.json');
var cookieParser = require('cookie-parser');
app.use(cookieParser());

btoa = str => new Buffer.from(str).toString('base64'),
atob = str => new Buffer.from(str, 'base64').toString('utf-8');

let url;
let code;
let domain;
let find1;
let num;
let test;
let url2;
let path2;
let requrl;
let urlenc;

// VOIDNET

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




app.get('/test', function(req, res) {
if (req.query.url) {
  url = req.query.url
fetch(url).then(function (res) {
        console.log(url)
        return res.text();
    
    }).then(function (text) {
      text = getHrefs(text)
      console.log(text)
      res.send(text)
    })
} else {
  res.send(`<input id="text"><button onclick='alert(btoa(document.getElementById("text").value))'>Encrypt!</button>`)
}
});
// PAGE NAVIGATION //

// The Following Code is for the Main Pages

app.use(express.static('public'))

app.get('/', function(req, res){
res.cookie('epic', 'gamer', {expire: 3600000 + Date.now()});
res.sendFile('/pages/index.html', { root: __dirname + '/public' });
console.log('Someone has logged onto Ludicrous!')
});

//app.get('/guide', function(req, res){
//res.sendFile('/assets/guide.html', { root: __dirname + '/public' });
//});

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
res.sendFile('/pages/land.html', { root: __dirname + '/public' });
});

app.get('/gen', function(req, res){
res.sendFile('/pages/iboss.html', { root: __dirname + '/public' });
});

app.get('/play', function(req, res){
res.sendFile('/pages/games.html', { root: __dirname + '/public' });
});

app.get('/tos', function(req, res){
res.sendFile('/pages/tos.html', { root: __dirname + '/public' });
});

app.get('/discord', function(req, res){
res.sendFile('/pages/discord.html', { root: __dirname + '/public' });
});

app.get('/privacy', function(req, res){
res.sendFile('/pages/privacy.html', { root: __dirname + '/public' });
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

app.get('/bookmarks', function(req, res){
res.sendFile('/pages/bookmarks.html', { root: __dirname + '/public' });
});

app.get('/alloy', function(req, res){
res.sendFile('/surfpages/alloy.html', { root: __dirname + '/public' });
});

app.get('/smoke', function(req, res){
res.sendFile('/surfpages/smoke.html', { root: __dirname + '/public' });
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

const PORT = process.env['PORT'] || config.port;


app.listen(PORT, console.log(appjs.name+' is Running at localhost:'+process.env.PORT))
