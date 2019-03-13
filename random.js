var urls = [
    "http://talez.ru/bulgakov/polotence-s-petukhom.html","http://talez.ru/bulgakov/ya-ubil.html",
    "http://talez.ru/leskov/iskusny-otvetchik.html","http://talez.ru/leskov/prividenie-v-inzhenernom-zamke.html","http://talez.ru/leskov/tainstvennye-predvestiya.html",
    "http://talez.ru/pushkin/baryshya-krestianka.html","http://talez.ru/pushkin/stancionny-smotritel.html",
	"http://talez.ru/bunin/pod-serpom-i-molotom.html",
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