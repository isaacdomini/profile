var cdrop = document.querySelector('.cdropdown');
var cdropmenu = $("#cdropmenu");
var menuWidth = cdropmenu.outerWidth();
cdropmenu.css({
  right : '-'+menuWidth+'px'
});
console.log(menuWidth);
var toggle = document.querySelector(".chamburger");
toggleHandler(toggle);
function toggleMenu(){
  (toggle.classList.contains("is-active") === true) ? toggle.classList.remove("is-active") : toggle.classList.add("is-active");
  if (cdrop.style.right == '0px') {
    cdropmenu.animate({
      right : '-'+menuWidth+'px'
    });
    console.log("test0");
  }else{
    cdropmenu.animate({
      right : '0px'
    });
    console.log("test2");
  }
}
function toggleHandler(toggle) {
  toggle.addEventListener( "click", function(e) {
    e.preventDefault();
    toggleMenu();
  });
}
var menuItems = cdrop.querySelectorAll('.item');
for (var i = menuItems.length - 1; i>=0; i--){
  menuItems[i].addEventListener("click",function(e){
      e.preventDefault();
      toggleMenu();
  });
}
var lastId,
    topMenu = $("#cmenu"),
    topMenuHeight = topMenu.outerHeight(),
    windowHeight = $(window).outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      o = href === "#" ? 0 : $(href).offset().top-topMenuHeight;
  $('html, body').stop().animate({
      scrollTop: o
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight+(windowHeight/2);

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }
});
