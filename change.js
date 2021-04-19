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

aboutus.style.left = sw + 'px';
contact.style.left = sw*2 + 'px';

home.width = sw;
aboutus.width = sw;
contact.width = sw;

var page = 0;

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