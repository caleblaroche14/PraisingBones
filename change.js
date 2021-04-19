// variables 
var pagenum = 2 // starts at 0
var sh = window.innerHeight;
var sw = window.innerWidth;

var ra = document.getElementById('right');
var la = document.getElementById('left');

ra.style.top = ((sh/2)-ra.offsetHeight/2) + 'px';
ra.style.right = 0 + 'px';

la.style.top = ((sh/2)-la.offsetHeight/2) + 'px';
la.style.left = 0 + 'px';

var lt = document.getElementById('lefttext');
var rt = document.getElementById('righttext');

var h = document.getElementById('h');
var a = document.getElementById('a');
var c = document.getElementById('c');

home = document.getElementById("home");
aboutus = document.getElementById("aboutus");
contact = document.getElementById("contact");

event1 = document.getElementById("event1");
event2 = document.getElementById("event2");
event3 = document.getElementById("event3");

aboutus.style.left = sw + 'px';
contact.style.left = sw*2 + 'px';

event1.style.top = sh + 'px';
event2.style.top = sh*2 + 'px';
event3.style.top = sh*3 + 'px';

home.width = sw;
aboutus.width = sw;
contact.width = sw;

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

updatepage();

function updatepage(){
    
    if (page == 0){
        homepage();
    }else if(page == 1){
        aboutuspage();
    }else if(page == 2){
        contactpage();
    }
}

function homepage(){
    page = 0;
    lt.innerHTML = "";
    rt.innerHTML = "About Us";
    //home.style.opacity = ("1");
    //aboutus.style.opacity = ("1");
    //contact.style.opacity = ("1");

    h.style.opacity = ("1");
    a.style.opacity = (".3");
    c.style.opacity = (".3");

    h.style.boxShadow = ("0 0 10px 1px white");
    a.style.boxShadow = ("0 0 0px 0px white");
    c.style.boxShadow = ("0 0 0px 0px white");

    la.style.opacity = ("0");
    ra.style.opacity = ("1");

    home.style.left = 0 + 'px';
    aboutus.style.left = sw + 'px';
    contact.style.left = sw*2 + 'px';

    console.log(aboutus.style.left)
}

function aboutuspage(){
    page = 1;
    lt.innerHTML = "Home";
    rt.innerHTML = "Contact";
    
    h.style.opacity = (".3");
    a.style.opacity = ("1");
    c.style.opacity = (".3");

    //home.style.opacity = ("1");
    //aboutus.style.opacity = ("1");
    //contact.style.opacity = ("1");

    h.style.boxShadow = ("0 0 0px 0px white");
    a.style.boxShadow = ("0 0 10px 1px white");
    c.style.boxShadow = ("0 0 0px 0px white");
    
    la.style.opacity = ("1");
    ra.style.opacity = ("1");
    
    home.style.left = -sw + 'px';
    aboutus.style.left = 0 + 'px';
    contact.style.left = sw + 'px';

    home.style.transition = ("2s");
    aboutus.style.transition = ("2s");
    contact.style.transition = ("2s");
    event1.style.transition = ("2s");

    console.log(aboutus.style.left)
}

function contactpage(){
    page = 2;
    lt.innerHTML = "About Us";
    rt.innerHTML = "";
    
    //home.style.opacity = ("1");
    //aboutus.style.opacity = ("1");
    //contact.style.opacity = ("1");
//
    h.style.opacity = (".3");
    a.style.opacity = (".3");
    c.style.opacity = ("1");

    h.style.boxShadow = ("0 0 0px 0px white");
    a.style.boxShadow = ("0 0 0px 0px white");
    c.style.boxShadow = ("0 0 10px 1px white");
    
    ra.style.opacity = ("0");
    la.style.opacity = ("1");

    home.style.left = -sw*2 + 'px';
    aboutus.style.left = -sw + 'px';
    contact.style.left = 0 + 'px';

    console.log(aboutus.style.left)
}

// go down
function godown(dp){
    home.style.transition = ("2s");
    aboutus.style.transition = ("2s");
    contact.style.transition = ("2s");
    event1.style.transition = ("2s");
    event2.style.transition = ("2s");
    event3.style.transition = ("2s");
    
    console.log('going down ' + dp);
    ra.style.opacity = ("0");
    la.style.opacity = ("0");
    h.style.opacity = ("0");
    a.style.opacity = ("0");
    c.style.opacity = ("0");

    if (dp == 0){
        home.style.top = -sh*2 + 'px';
        aboutus.style.top = -sh*2 + 'px';
        contact.style.top = -sh*2 + 'px';

        event1.style.top = 0 + 'px';
        console.log(event1.style.top);
    }else if(dp == 1){
        home.style.top = -sh*3 + 'px';
        aboutus.style.top = -sh*3 + 'px';
        contact.style.top = -sh*3 + 'px';
        event1.style.top = -sh + 'px';
        event2.style.top = 0 + 'px';
        
    }else if(dp == 2){
        home.style.top = -sh*4 + 'px';
        aboutus.style.top = -sh*4 + 'px';
        contact.style.top = -sh*4 + 'px';
        event1.style.top = -sh*2 + 'px';
        event2.style.top = -sh + 'px';
        event3.style.top = 0 + 'px';
    }
}

function goup(){
    console.log('going up ');
    home.style.top = 0 + 'px';
    aboutus.style.top = 0 + 'px';
    contact.style.top = 0 + 'px';
    event1.style.top = sh + 'px';
    event2.style.top = sh*2 + 'px';
    event3.style.top = sh*3 + 'px';
    updatepage(page)
}

function rarrow(x){
    if (x == 'hide'){
        ra.style.opacity = ("0");
    }else{
        ra.style.opacity = ("1");
    }
}

function larrow(x){
    if (x == 'hide'){
        la.style.opacity = ("0");
    }else{
        la.style.opacity = ("1");
    }
}

function reportWindowSize(){
    console.log('screen h/w: ' + sh + ' ' + sw);
    sh = window.innerHeight;
    sw = window.innerWidth;



    home.width = sw;
    aboutus.width = sw;
    contact.width = sw;

    updatepage(page);

    //ra.style.top = ((sh/2)-ra.offsetHeight/2) + 'px';
    ra.style.right = 0 + 'px';
    
    //la.style.top = ((sh/2)-la.offsetHeight/2) + 'px';
    la.style.left = 0 + 'px';
    
}
window.onresize = reportWindowSize;