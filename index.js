let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let rahaf = document.querySelector('.rahaf');
let btn = document.getElementById('btn');
let close = document.getElementById('close');
let open = document.getElementById('open');
let menu = document.getElementById('menu');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *4 + 'px';
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value *3  + 'px';
    rahaf.style.fontSize = value  + 'px';
    if (scrollY >= 130){
        rahaf.style.fontSize = 130  + 'px';
        rahaf.style.position = 'fixed';
        if (scrollY >= 750){
            rahaf.style.display = 'none';
            btn.style.display = 'block';
        }else{
            rahaf.style.display = 'block';
            btn.style.display = 'none';
        }
        if (scrollY >= 250){
            document.querySelector('.main').style.background = 'linear-gradient(#fff, #10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
        }
    }
}
btn.onclick = function(){
  scroll(0,0)
}
open.onclick = function(){
    menu.style.left='0';
    open.style.left='-200px';
    close.style.left='200px';
    close.style.background='red';
}
close.onclick = function(){
    menu.style.left='-200px';
    open.style.left='-0px';
    close.style.left='-200px';
}