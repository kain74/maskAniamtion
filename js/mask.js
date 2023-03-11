const wrap = document.querySelector('main');
const btns = wrap.querySelectorAll('#navi li');
const panels = wrap.querySelectorAll('section article');
const brs = wrap.querySelectorAll('br')
const videos = wrap.querySelectorAll('video');

let scene1 = document.getElementById('scene1');
let paraalax1 = new Parallax(scene1);
let scene2= document.getElementById('scene2');
let paraalax2 = new Parallax(scene2);
let scene3= document.getElementById('scene3');
let paraalax3 = new Parallax(scene3);
let scene4 = document.getElementById('scene4');
let paraalax4 = new Parallax(scene4);


btns.forEach((btn, index)=>{
    brs[index].style = "";
    btn.addEventListener('click', e =>{
        for(let i=0; i<btns.length; i++){
            btns[i].classList.remove('on');
            btns[i].ariaSelected = false;
            videos[i].pause();
            if(panels[i].classList.contains('on')){
                panels[i].classList.add('mask');
            }
        }
        btns[index].classList.add('on');
        btns[index].ariaSelected = true;
        panels[index].classList.add('lower');
        videos[index].play();
        setTimeout(()=>{
            for(let i=0; i<panels.length; i++){
                if(panels[i].classList.contains('on')){
                    panels[i].classList.remove('on');
                    panels[i].classList.remove('mask');
                }
            }
            panels[index].classList.remove('lower');
            panels[index].classList.add('on');
        },1400)
    });
});




