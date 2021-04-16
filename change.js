// variables 
sh = screen.height;
sw = screen.width;

var ra = document.getElementById('right');
var la = document.getElementById('left');

var lt = document.getElementById('lefttext');
var rt = document.getElementById('righttext');

var h = document.getElementById('h');
var a = document.getElementById('a');
var c = document.getElementById('c');

home = document.getElementById("home");
aboutus = document.getElementById("aboutus");
contact = document.getElementById("contact");

aboutus.style.left = sw + 'px';
contact.style.left = sw*2 + 'px';

var page = 0;

// CHANGE PAGES
function changeright(){
    page++;
    //console.log('changing right: ' + page);
    updatepage(page);
}

function changeleft(){
    page--;
    updatepage(page);
    //console.log('changing left: ' + page);
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

    home.style.opacity = ("1");
    aboutus.style.opacity = ("0");
    contact.style.opacity = ("0");

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
}

function aboutuspage(){
    page = 1;
    lt.innerHTML = "Home";
    rt.innerHTML = "Contact";
    
    h.style.opacity = (".3");
    a.style.opacity = ("1");
    c.style.opacity = (".3");

    home.style.opacity = ("0");
    aboutus.style.opacity = ("1");
    contact.style.opacity = ("0");

    h.style.boxShadow = ("0 0 0px 0px white");
    a.style.boxShadow = ("0 0 10px 1px white");
    c.style.boxShadow = ("0 0 0px 0px white");
    
    la.style.opacity = ("1");
    ra.style.opacity = ("1");
    home.style.left = -sw + 'px';
    aboutus.style.left = 0 + 'px';
    contact.style.left = sw + 'px';
}

function contactpage(){
    page = 2;
    lt.innerHTML = "About Us";
    rt.innerHTML = "";
    
    home.style.opacity = ("0");
    aboutus.style.opacity = ("0");
    contact.style.opacity = ("1");

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
