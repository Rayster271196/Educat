function scrollToElement(selector) {
    var el = document.querySelector(selector);    
    el.scrollIntoView({'behavior': 'smooth', 'block': 'start'});
}

function initMap() {
  // The location of Uluru
  var uluru = {lat: 15.4909, lng: 73.8278};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}


