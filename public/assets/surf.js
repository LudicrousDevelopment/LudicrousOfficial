function alloy() {
document.location.href="/alloy"
}
function womginx() {
document.location.href="/womginx"
}
function voidnet() {
document.location.href="/voidnet"
}
function py() {
document.location.href="/py"
}
function molten() {
  alert("Molten Is In Beta And Will Be Ready Soon")
}
function alloygo() {
var ainput = document.getElementById('url')
window.location.assign('http://a.'+document.location.host+`/prox/?url=${btoa(ainput.value)}`);
}
function womginxgo() {
var url = document.getElementById("url").value
document.cookie = "womginx_are_you_a_bot=no";
window.location.assign("http://w."+document.location.host+"/main/"+url)
}
function voidnetgo() {
var url = document.getElementById("url").value
document.location = "https://"+document.location.hostname+"/unb?url="+url;
}

function pygo() {
  var ainput = document.getElementById('url')
  window.location.assign('http://p.'+document.location.host+`/course/${ ainput.value }`);
}

window.onload = document.cookie="womginx_are_you_a_bot=no";