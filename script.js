

// Variables
var sh = screen.height;
var sw = screen.width;

var ra = document.getElementById('right');
var la = document.getElementById('left');

// Style
ra.style.top = ((sh/2)-60) + 'px';
ra.style.right = 0 + 'px';

la.style.top = ((sh/2)-60) + 'px';
la.style.left = 0 + 'px';

function reportWindowSize(){

    sh = screen.height;
    sw = screen.width;
    ra.style.top = ((sh/2)-60) + 'px';
    ra.style.right = 0 + 'px';
    
    la.style.top = ((sh/2)-60) + 'px';
    la.style.left = 0 + 'px';

    console.log('changing sizes');
}
window.onresize = reportWindowSize;