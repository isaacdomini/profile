console.log(    
`

 _________ __                                    
/   _____//  |_  ____ ______                     
\\_____  \\\\   __\\/  _ \\\\____ \\                    
/        \\|  | (  <_> )  |_> >                   
/_______  /|__|  \\____/|   __/                    
       \\/             |__|                       
.____                  __   .__                   
|    |    ____   ____ |  | _|__| ____    ____     
|    |   /  _ \\ /  _ \\|  |/ /  |/    \\  / ___\\    
|    |__(  <_> |  <_> )    <|  |   |  \\/ /_/  >   
|_______ \\____/ \\____/|__|_ \\__|___|  /\\___  /    
       \\/                 \\/       \\//_____/     
  _____   __      __  .__                        
 /  _  \\_/  |_  _/  |_|  |__   ____              
/  /_\\  \\   __\\ \\   __\\  |  \\_/ __ \\             
/    |    \\  |    |  | |   Y  \\  ___/             
\\____|__  /__|    |__| |___|  /\\___  >            
       \\/                  \\/     \\/             
_________                            .__          
\\_   ___ \\  ____   ____   __________ |  |   ____  
/    \\  \\/ /  _ \\ /    \\ /  ___/  _ \\|  | _/ __ \\ 
\\     \\___(  <_> )   |  \\\\___ (  <_> )  |_\\  ___/ 
\\______  /\\____/|___|  /____  >____/|____/\\___  >
       \\/            \\/     \\/                \\/ 

`
)
mapboxgl.accessToken = 'pk.eyJ1IjoiaWRvbWluaSIsImEiOiJjazNyZXViZGEwYnQ1M2Vyd3RvdjIwOHRsIn0.-9PrntkPoS_LMcljXRQyGA';
var gperson = {};
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/idomini/ckg4is60v04pe19p3jpy3avne', // stylesheet location
    center: [80.291,23.376], // starting position [lng, lat]
    zoom: 4 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {
  var json = undefined
  $.getJSON("data.json", function(data) {
    json = data
    // console.log(json); // this will show the info it in firebug console
    json.forEach(person => {
      gperson = person
      // console.log(person)

      // create a DOM element for the marker
      var el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage =
      `url(images/${person.image})`;
      // el.style.width = '70' + 'px';
      // el.style.height = '70' + 'px';
      // el.style.borderRadius = '50%'
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        if($(`#${person.id}-sticky`).is(":hidden")){
          $(".sticky-profile").hide(400);
          $(`#${person.id}-sticky`).show(400);
        }
      });
        
      // add marker to map
      new mapboxgl.Marker(el)
      .setLngLat(gperson.loc)
      .addTo(map);

      if(person.alias){
        return
      }
      $('body').append(
        $(`<div id="${gperson.id}-sticky" class="sticky-profile">`)
          .append(`<div >`)
          .append(`<div class="profile-content">
            <div class="modal-body">
              <h4 class="" id="${gperson.id}title">${gperson.name} - ${gperson.job}</h4>
              <img src="images/${gperson.pic_path}" class="profile">
              <h5>Favorite Memory</h5>
              <p>${gperson.fav_memory}</p>
              <span id="${gperson.id}-images1"></span>
              <h5>How do you celebrate Diwali?</h5>
              <p>${gperson.celebrate}</p>
              <span id="${gperson.id}-images2"></span>
              <h5>Food you like </h5>
              <p>${gperson.food}</p>
              <span id="${gperson.id}-images3"></span>
              <h5>Your Diwali Traditions</h5>
              <p>${gperson.traditions}</p>
              <span id="${gperson.id}-images4"></span>
              <h5>What does Diwali mean to you?</h5>
              <p>${gperson.diwali_meaning}</p>
              <span id="${gperson.id}-images5"></span>
              <span id="${gperson.id}-images6"></span>
            </div>
          </div>`) 
      );
      // $('#main-content')
      //   .append(
      //     $(`<div id="${gperson.id}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="${gperson.id}Label" aria-hidden="true">`)
      //       .append(`<div class="modal-dialog  modal-sm">`)
      //       .append(`<div class="modal-content">
      //       <div class="modal-header">
      //         <h4 class="modal-title" id="${gperson.id}Label">${gperson.name} - ${gperson.job}</h4>
      //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      //           <span aria-hidden="true">&times;</span>
      //         </button>
      //       </div>
      //       <div class="modal-body">
      //         <img src="images/${gperson.pic_path}" class="profile-content">
      //         <h5>Favorite Memory</h5>
      //         <p>${gperson.fav_memory}</p>
      //         <span id="${gperson.id}-images1"></span>
      //         <h5>How do you celebrate Diwali?</h5>
      //         <p>${gperson.celebrate}</p>
      //         <span id="${gperson.id}-images2"></span>
      //         <h5>Food you like </h5>
      //         <p>${gperson.food}</p>
      //         <span id="${gperson.id}-images3"></span>
      //         <h5>Your Diwali Traditions</h5>
      //         <p>${gperson.traditions}</p>
      //         <span id="${gperson.id}-images4"></span>
      //         <h5>What does Diwali mean to you?</h5>
      //         <p>${gperson.diwali_meaning}</p>
      //         <span id="${gperson.id}-images5"></span>
      //         <span id="${gperson.id}-images6"></span>
      //       </div>
      //       <div class="modal-footer">
      //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      //       </div>
      //     </div>`)
      //   );
      var i =0;
      for (i = 0; i < 6; i++) {
        if(person.pic_other_paths.length > i) {
          // console.log(`${person.id}-images${i+1}`)
          $(`#${person.id}-images${i+1}`).append(`<img src="images/${person.pic_other_paths[i]}" class="profile"></img>`)
        }
      }
    });
  });
});


map.on('click', function (e) {
  $(".sticky-profile").hide(400);
});
map.scrollZoom.disable();
