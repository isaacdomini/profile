// var rand = Math.floor(Math.random() * 4);
// var style = "header{background-image: url(./images/back0"+rand+".jpg);background-size:cover;background-repeat:no-repeat;background-position: center center;}";
// /*
// // header{    background-image: url(../images/back00.jpg);
// //     background-size:     cover;
// //     background-repeat:   no-repeat;
// //     background-position: center center;
// //     color: white;
// // }";*/
// document.write("<style>"+style+"</style>");
/* Pre Loading images */
var images = new Array()
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image()
    images[i].src = preload.arguments[i]
  }
}
preload(
  "images/back00.jpg",
  "images/back01.jpg",
  "images/back02.jpg",
  "images/back03.jpg",
  "images/back04.jpg",
  "images/back05.jpg",
  "images/back06.jpg"
)

var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=7){nextimage=0;}
    $('header')
    .css('background-image','url("images/back0'+nextimage+'.jpg")')
    .fadeIn(2000,function(){
        setTimeout(doSlideshow,5000);
    });
    console.log('background-image','url("images/bg'+nextimage+'.jpg")');
    nextimage++;
    $('header')
    .css('background-size','cover');
    $('header')
    .css('background-repeat','no-repeat');
    $('header')
    .css('background-position','center center');
}
