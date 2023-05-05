const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if(!isLampBroken()){
        lamp.src = './img/lampada-acesa.jpg';
    }
   
}
function lapmOff(){
    if(!isLampBroken()){
    lamp.src = './img/lampada-apagada.jpg';
    }
}

function lampBroken(){
    lamp.src = './img/lampada-quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lapmOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lapmOff);
lamp.addEventListener('dblclick',lampBroken);
