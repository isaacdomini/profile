console.log("   ______           _\n  / ____/_  _______(_)___ ______\n / /   / / / / ___/ / __ `/ ___/\n/ /___/ /_/ / /  / / /_/ / /__\n\\____/\\__, /_/  /_/\\__,_/\\___/\n     /____/");
$('#cupimg').on("click",function(){
  $('html, body').animate({scrollTop:0},'slow');
});
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll < 10){
      $('#cgoup').animate($('#cgoup').hide());
    }else{
      $('#cgoup').show();
    }
});
