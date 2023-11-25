const fs=require('fs');
//Adding the features on clicking...
function bold(){
    document.getElementById('text').style.fontWeight='bold';
}

function italic(){
    document.getElementById('text').style.fontFamily='Brush Script MT, cursive';
}

function fontSize(){
    var font_size=document.getElementById('font-size').value;
    document.getElementById('text').style.fontSize=`${font_size}px`;
}

function left(){
    document.getElementById('text').style.textAlign='left';
}
function center(){
    document.getElementById('text').style.textAlign='center';
}
function right(){
    document.getElementById('text').style.textAlign='right';
}

function font_style(){
    var fonts=document.getElementById('font_families').value;
    document.getElementById('text').style.fontFamily=`${fonts}`;
}

function upper(){
    document.getElementById('text').style.textTransform='uppercase';
}

function lower(){
    document.getElementById('text').style.textTransform='lowercase';
}

function clear_txt(){
    document.getElementById('text').value='';
}

//Removing the features on double clicking...

function boldrm(){
    document.getElementById('text').style.fontWeight='normal';
}

function italicrm(){
    document.getElementById('text').style.fontFamily='serif'
}

function upperrm(){
    document.getElementById('text').style.textTransform='none'
}

function lowerrm(){
    document.getElementById('text').style.textTransform='none'
}