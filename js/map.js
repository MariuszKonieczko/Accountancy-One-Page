$(document).ready(function () {
  //Google Maps JS
  //Set Map
  function initialize() {
    const myLatlng = new google.maps.LatLng(
      50.03762259913559,
      22.004618154709846
    );
    const imagePath =
      'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png';
    let mapOptions = {
      zoom: 16,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //Callout Content
    const contentString = 'Biuro Rachunkowe';
    //Set window width + content
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 500,
    });
    //Add Marker
    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: imagePath,
      title: 'image title',
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
    //Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {
      const center = map.getCenter();
      google.maps.event.trigger(map, 'resize');
      map.setCenter(center);
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});
