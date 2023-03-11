
var ball=document.getElementById("ball");
 ball.style.top=ball.offsetTop+"px";
 ball.style.left=ball.offsetLeft+"px";
 var ballHeight=ball.offsetHeight;
 var ballWidth=ball.offsetWidth;

 function setvalue(value){
    return value+"px";
 }


 function keycode(keypress){
    var top=parseInt(ball.style.top);
    var left=parseInt(ball.style.left);
    //if w is pressed
    if(keypress===119||keypress===87){
        if(top>5){
            ball.style.top=setvalue(top-5);
        }
    }
    //A is pressed
    else if(keypress===97||keypress===65){
        if(left>5){
            ball.style.left=setvalue(left-5);
        }
    }
    // S is pressed
    else if(keypress===115||keypress===83){
        if(top<(window.innerHeight-ballHeight)-5){
            ball.style.top=setvalue(top+5)
        }
    }
    else if(keypress===100||keypress===68){
        if(left<(window.innerWidth-ballWidth)-5){
            ball.style.left=setvalue(left+5);
        }
    }
 };



 window.addEventListener("keypress", function (event) {
    //    code(event.code); //- You can use this
    //    key(event.key); //- You can also use this
        keycode(event.keyCode);
    });
 
 