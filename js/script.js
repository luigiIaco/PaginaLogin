let box=document.getElementById('box');
box.addEventListener('focusin',function() {
   document.getElementById('etichetta').style.top='-30px';
})
box.addEventListener('focusout',function() {
    document.getElementById('etichetta').style.top='0px';
});


let box_due=document.getElementById('box_due');
box_due.addEventListener('focusin',function() {
   document.getElementById('etichetta_due').style.top='-30px';
})
box_due.addEventListener('focusout',function() {
    document.getElementById('etichetta_due').style.top='0px';
});

let box_tre=document.getElementById('box_tre');
box_tre.addEventListener('focusin',function() {
   document.getElementById('etichetta_tre').style.top='-30px';
})
box_tre.addEventListener('focusout',function() {
    document.getElementById('etichetta_tre').style.top='0px';
});


let box_quattro=document.getElementById('box_quattro');
box_quattro.addEventListener('focusin',function() {
   document.getElementById('etichetta_quattro').style.top='-30px';
})
box_quattro.addEventListener('focusout',function() {
    document.getElementById('etichetta_quattro').style.top='0px';
});


let box_cinque=document.getElementById('box_cinque');
box_cinque.addEventListener('focusin',function() {
   document.getElementById('etichetta_cinque').style.top='-30px';
})
box_cinque.addEventListener('focusout',function() {
    document.getElementById('etichetta_cinque').style.top='0px';
});


document.getElementById('login').addEventListener("click",function() {
    document.getElementsByClassName('wrapper')[0].style.scale='1';
})

document.getElementById('scomparsa').addEventListener("click",function() {
    document.getElementsByClassName('wrapper')[0].style.scale='0';
    document.getElementsByClassName('wrapper')[0].style.height='400px';
    document.getElementsByClassName('casella_uno')[0].style.paddingTop='40px';
    document.getElementsByClassName('casella_due')[0].style.left='400px';
    document.getElementsByClassName('casella_uno')[0].style.left='0px';

});
document.getElementById('registrazione').addEventListener('click',function() {
    document.getElementsByClassName('casella_due')[0].style.left='67px';
    document.getElementsByClassName('wrapper')[0].style.height='470px';
    document.getElementsByClassName('casella_uno')[0].style.paddingTop='60px';
    document.getElementsByClassName('casella_uno')[0].style.left='-322px';
});

document.getElementById('accesso').addEventListener('click',function() {
    document.getElementsByClassName('casella_due')[0].style.left='400px';
    document.getElementsByClassName('casella_uno')[0].style.left='0px';
    document.getElementsByClassName('wrapper')[0].style.height='400px';
    document.getElementsByClassName('casella_uno')[0].style.paddingTop='40px';
})