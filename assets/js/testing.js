// This javascript comes from a tutorial I used to get our 
// bootstrap page to play nice with google maps API
// The tutorial is located here https://bit.ly/2IzuNSR

$(function () {

    function initMap() {

        var locations = [
            ["berkeleyCenter", 37.8715926, -122.272747, "link", "photo"],
            ["founderRock", 37.875333, -122.256882 ]
        ];
        
        var mapCanvas = new google.maps.Map(document.getElementById('map');
        var mapOptions = {
                zoom: 14,
                panControl: false,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: {lat: locations[0][1], lng: locations[0][2]}
            }
                
            for (var i = 0; i < locations.length; i++) {  
                var marker = new google.maps.Marker({
                position: {lat: locations[i][1], lng: locations[i][2]},
                map: map
            });
        
                
            }

        var mapCanvas = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'marker.png';

        var marker = new google.maps.Marker({
            position: locations,
            map: mapCanvas,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' +
                '<h3>Info Window Content</h3>' +
                '<div class="info-content">' +
                '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(mapCanvas, marker);
        });

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});