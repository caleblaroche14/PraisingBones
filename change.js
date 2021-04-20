// variables 
var pagenum = 2 // starts at 0
var sh = window.innerHeight;
var sw = window.innerWidth;

home = document.getElementById("home");
classes = document.getElementById("classes");
events = document.getElementById("events");
registration = document.getElementById("registration");
founder = document.getElementById("founder");

event1 = document.getElementById("event1");
event2 = document.getElementById("event2");
event3 = document.getElementById("event3");

classes.style.left = sw + 'px';
events.style.left = sw*2 + 'px';
registration.style.left = sw*3 + 'px';
founder.style.left = sw*4 + 'px';


event1.style.top = sh + 'px';
event2.style.top = sh*2 + 'px';
event3.style.top = sh*3 + 'px';

home.width = sw;
classes.width = sw;
events.width = sw;
registration.width = sw;
founder.width = sw;


event1.width = sw;

var page = 0;
var downpage = 0;

// CHANGE PAGES
function changeright(){
    if (page < pagenum){
        page++;
        console.log('changing right: ' + page);
        updatepage(page);
    }
}

function changeleft(){
    if (page > 0){
        page--;
        updatepage(page);
        console.log('changing left: ' + page);
    }
}

function chagnedown(downpage){
    godown(downpage);
    console.log('changing down: ' + downpage);
}

function trans(){
    home.style.transition = ("2s");
    classes.style.transition = ("2s");
    events.style.transition = ("2s");
    registration.style.transition = ("2s");
    founder.style.transition = ("2s");
    event1.style.transition = ("2s");
}


function updatepage(p){
    
    if (p == 0){
        homepage();
    }else if(p == 1){
        classespage();
    }else if(p == 2){
        eventspage();
    }
}

function homepage(){
    trans();
    
    page = 0;
    home.style.left = 0 + 'px';
    classes.style.left = sw + 'px';
    events.style.left = sw*2 + 'px';
    registration.style.left = sw*3 + 'px';
    founder.style.left = sw*4 + 'px';

    console.log(classes.style.left)
}

function classespage(){
    trans();

    page = 1;
  
    home.style.left = -sw + 'px';
    classes.style.left = 0 + 'px';
    events.style.left = sw + 'px';
    registration.style.left = sw*2 + 'px';
    founder.style.left = sw*3 + 'px';
    console.log(classes.style.left)
}

function eventspage(){
    trans();

    page = 2;
    home.style.left = -sw*2 + 'px';
    classes.style.left = -sw + 'px';
    events.style.left = 0 + 'px';
    registration.style.left = sw + 'px';
    founder.style.left = sw*2 + 'px';
    console.log(classes.style.left)
}

function registrationpage(){
    trans();

    page = 3;
    home.style.left = -sw*3 + 'px';
    classes.style.left = -sw*2 + 'px';
    events.style.left = -sw + 'px';
    registration.style.left = 0 + 'px';
    founder.style.left = sw + 'px';
}

function founderpage(){
    trans();

    page = 3;
    home.style.left = -sw*4 + 'px';
    classes.style.left = -sw*3 + 'px';
    events.style.left = -sw*2 + 'px';
    registration.style.left = -sw + 'px';
    founder.style.left = 0 + 'px';
}

// go down
function godown(dp){
    home.style.transition = ("2s");
    classes.style.transition = ("2s");
    events.style.transition = ("2s");
    event1.style.transition = ("2s");
    event2.style.transition = ("2s");
    event3.style.transition = ("2s");
    
    console.log('going down ' + dp);

    if (dp == 0){
        home.style.top = -sh*2 + 'px';
        classes.style.top = -sh*2 + 'px';
        events.style.top = -sh*2 + 'px';

        event1.style.top = 0 + 'px';
        console.log(event1.style.top);
    }else if(dp == 1){
        home.style.top = -sh*3 + 'px';
        classes.style.top = -sh*3 + 'px';
        events.style.top = -sh*3 + 'px';
        event1.style.top = -sh + 'px';
        event2.style.top = 0 + 'px';
        
    }else if(dp == 2){
        home.style.top = -sh*4 + 'px';
        classes.style.top = -sh*4 + 'px';
        events.style.top = -sh*4 + 'px';
        event1.style.top = -sh*2 + 'px';
        event2.style.top = -sh + 'px';
        event3.style.top = 0 + 'px';
    }
}

function goup(){
    console.log('going up ');
    home.style.top = 0 + 'px';
    classes.style.top = 0 + 'px';
    events.style.top = 0 + 'px';
    event1.style.top = sh + 'px';
    event2.style.top = sh*2 + 'px';
    event3.style.top = sh*3 + 'px';
    updatepage(page)
}


function reportWindowSize(){
    console.log('screen h/w: ' + sh + ' ' + sw);
    sh = window.innerHeight;
    sw = window.innerWidth;



    home.width = sw;
    classes.width = sw;
    events.width = sw;
    registration.width = sw;
    founder.width = sw;
    event1.width = sw;
    event2.width = sw;
    event3.width = sw;

    home.height = sh;
    classes.height = sh;
    events.height = sh;
    registration.height = sh;
    founder.height = sh;
    event1.height = sh;
    event2.height = sh;
    event3.height = sh;


    updatepage(page);
    
}
window.onresize = reportWindowSize;