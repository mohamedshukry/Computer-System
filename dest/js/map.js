(function ($) {
	var myLatLng = new google.maps.LatLng(30.588899,31.492356);
	var markerposition = new google.maps.LatLng(30.588899,31.492356);
	var marker;
	var map;
	var iconBase = 'http://maps.google.com/mapfiles/kml/paddle/';
  

	function initialize() {
	  var mapOptions = {
		zoom: 15,
		center: myLatLng,
	  };

	  map = new google.maps.Map(document.getElementById('google-map'),
			  mapOptions);

	  marker = new google.maps.Marker({
		map:map,
		animation: google.maps.Animation.DROP,
		position: markerposition,
		icon: iconBase + 'red-circle.png',
	  });
	  marker.setAnimation(google.maps.Animation.BOUNCE);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	
})(jQuery);
