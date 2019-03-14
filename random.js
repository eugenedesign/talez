var urls = [
    "https://eugenedesign.github.io/talez/bulgakov/polotence-s-petukhom.html","https://eugenedesign.github.io/talez/bulgakov/ya-ubil.html",
    "https://eugenedesign.github.io/talez/leskov/iskusny-otvetchik.html","https://eugenedesign.github.io/talez/leskov/prividenie-v-inzhenernom-zamke.html","https://eugenedesign.github.io/talez/leskov/tainstvennye-predvestiya.html",
    "https://eugenedesign.github.io/talez/pushkin/baryshya-krestianka.html","https://eugenedesign.github.io/talez/pushkin/stancionny-smotritel.html",
	"https://eugenedesign.github.io/talez/bunin/pod-serpom-i-molotom.html",
	"https://eugenedesign.github.io/talez/chehov/otets.html","https://eugenedesign.github.io/talez/chehov/pari.html","https://eugenedesign.github.io/talez/chehov/skripka-rotshilda.html","https://eugenedesign.github.io/talez/chehov/vanika.html",
];
document.getElementById("random-link").addEventListener("click", function(){
    var url = urls[Math.floor(Math.random()*urls.length)];
  this.href = url;
});
document.getElementById("random-link-mob").addEventListener("click", function(){
    var url = urls[Math.floor(Math.random()*urls.length)];
  this.href = url;
});
document.getElementById("random-link-footer").addEventListener("click", function(){
    var url = urls[Math.floor(Math.random()*urls.length)];
  this.href = url;
});// JavaScript Document
