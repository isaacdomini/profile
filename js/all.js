$(window).scroll(function () {
if( $(window).scrollTop() > $('#cheader').height() && !($('#cmenu').hasClass('csticky'))){
$('#cmenu').addClass('csticky');
} else if ($(window).scrollTop() < $('#cheader').height()){
$('#cmenu').removeClass('csticky');
}
console.log($(window).scrollTop());
console.log($('#cheader').height());
});
