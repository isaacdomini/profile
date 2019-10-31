/* Pre Loading images */
var images = new Array()
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image()
    images[i].src = preload.arguments[0][i]
  }
}
var imgs = [
  "https://github.com/isaacdomini/profile/raw/master/images/old/back00.jpg",
  "https://github.com/isaacdomini/profile/raw/master/images/old/back01.jpg",
  "https://github.com/isaacdomini/profile/raw/master/images/old/back02.jpg",
  "https://github.com/isaacdomini/profile/raw/master/images/old/back03.jpg"
];
var nextimage=0;
document.onload = function() {
  preload(
    imgs
  )
}

window.onload = doSlideshow;

function doSlideshow(){
    const imagearrsize = imgs.length;
    if(nextimage>imagearrsize){nextimage=0;}
    $('header')
    .css('background-image','url("'+imgs[nextimage]+'")')
    .fadeIn(2000,function(){
        setTimeout(doSlideshow,5000);
    });
    // console.log('background-image','url("images/bg'+nextimage+'.jpg")');
    nextimage++;
    $('header')
    .css('background-size','cover');
    $('header')
    .css('background-repeat','no-repeat');
    $('header')
    .css('background-position','center center');
}
