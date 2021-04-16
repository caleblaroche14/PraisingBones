var hi = document.getElementById("midlogo");



var count = 0;

function changeimg(){
    count++;

    if (count == 1){
        hi.src = "images/whitefigure1.png"
    }else if(count == 2){
        hi.src = "images/whitefigure2.png"
    }else if(count == 3){
        hi.src = "images/whitefigure3.png"
        count = 0;
    }
    //console.log(count);
}

setInterval(changeimg,500)