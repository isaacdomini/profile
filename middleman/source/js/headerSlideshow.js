var continueSlideShow = true;
var images = new Array();
images[0] = 'images/banner0.jpg';
i=0;
slideShow(i);
function slideShow(i) {
  if (continueSlideShow){
    document.querySelector("header").style.background = 'url("'+images[i]+'")';
    document.querySelector("header").style.backgroundSize = '100%';
    i++;
    //console.log("image" + i);
    if( i > (images.length - 1) ) { i = 0; }
    setTimeout('slideShow('+i+')',10000);
  }
  else {
    return;
  }
}
// function headerBackgroundWidthCheck(){
//   if($(window).width()>413) {
//     i=0;
//     slideShow(i);
//     console.log('>413');
//     continueSlideShow = true;
//   }
//   else {
//     document.querySelector("header").style.background = 'orange';
//     console.log('<413');
//     continueSlideShow = false;
//   }
// }
// headerBackgroundWidthCheck();
// $(window).resize(function() {
//   console.log('window was resized');
//   headerBackgroundWidthCheck();
// });
