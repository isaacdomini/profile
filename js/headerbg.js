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

var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=8){nextimage=0;}
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
