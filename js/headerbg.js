var rand = Math.floor(Math.random() * 3);
var style = "header{background-image: url(./images/back0"+rand+".jpg);background-size:cover;background-repeat:no-repeat;}";
/*
// header{    background-image: url(../images/back00.jpg);
//     background-size:     cover;
//     background-repeat:   no-repeat;
//     background-position: center center;
//     color: white;
// }";*/
document.write("<style>"+style+"</style>");
