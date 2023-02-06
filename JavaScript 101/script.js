var box1 = document.getElementById('changeMeColor1');
box1.style.background = 'red';

function changeColor1(){
if(box1.style.background == 'red'){
    box1.style.background = 'blue';
}else{box1.style.background = 'red';
}
}

var button2 = document.getElementById('button2');
var box2 = document.getElementById('changeMeColor2');
// box2.style.background = 'red'; - or set style=background:red inline

button2.onclick = function changeColor2(){
    switch(box2.style.background){
            case 'red':
            box2.style.background = 'blue';
            break;

            case 'blue':
            box2.style.background = 'orange';
            break;

            case 'orange':
            box2.style.background = 'red';
            
    }
}

var button3 = document.getElementById('button3');
var box3 = document.getElementById('changeMeColor3');
// ASK MARTON WHY NO WORK ON FIRST CLICK - video: TopKNot if/else conditionals with ternary operators
//     button4.onclick = function changeColor4(){
//    var color3 = (box3.style.background == 'red') ? 'blue' : 'red';
//    box3.style.background = color3; 
// }
box3.style.background = 'red';

button3.onclick = function changeColor3(){
   var color3 = (box3.style.background == 'red') ? 'blue' : 'red';
   box3.style.background = color3;
} 
// only works with 2 elements

var button4 = document.getElementById('button4');
var box4 = document.getElementById('changeMeColor4');
var color = 'red';

button4.onclick = function changeColor4(){
    if(color == 'red'){
        color = 'blue';
    }else if(color == 'blue'){
        color = 'orange';
    }else{
        color = 'red';  
    }       
     box4.style.background = color;

}

var button = document.getElementById('txtbutton');
var font = document.getElementById('changeMeFonts');
var fontFam = 'Courier New'

txtbutton.onclick = function changeFonts(){
    if(fontFam == 'Courier New'){
        fontFam = 'sans-serif';
    }else if(fontFam == 'sans-serif'){
        fontFam = 'Times New Roman';
    }
    else{
        fontFam = 'Courier New'
    }
font.style.fontFamily = fontFam;
}
function changeText(){
    document.getElementById('demo').innerHTML = 'Much better now!';
}

var buttonChangeText = document.getElementById('buttonChangeText');
var pChange = document.getElementById('pChange');

buttonChangeText.onclick = function changeText1(){
    document.getElementById('pChange').innerHTML = 'Much Better!';
}

var buttonChangeText2 = document.getElementById('buttonChangeText2');
var pChange2 = document.getElementById('pChange2');
var pChangeBtn = document.getElementById('pChangeBtn');

buttonChangeText2.onclick = function changeText2(){
    // document.getElementById('buttonChangeText2').innerHTML = 'Better now?'
    document.getElementById('pChangeBtn').innerHTML = 'Better now?'
    document.getElementById('pChange2').innerHTML = 'Much Better!';
}

