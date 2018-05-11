// This javascript comes from a tutorial I used to get our 
// bootstrap page to play nice with google maps API
// The tutorial is located here https://bit.ly/2IzuNSR

$(function () {

var locations = [
        ["berkeleyCenter", 37.8715926, -122.272747, "<strong>Berkeley Center</strong>", "Established: 1868"],
        ["founderRock", 37.875333, -122.256882, "<strong>Founder Rock</strong>", "Established: 1860" ],
        ["greekTheater", 37.873561, -122.254422, "<strong>Greek Theater</strong>", "Built: 1903" ],
        ["slatherGate", 37.869502, -122.259326, "<strong>Slather Gate</strong>", "Built: 1903" ]
    ];

    function initMap() {
        
        var mapCanvas = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                panControl: false,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: {lat: locations[0][1], lng: locations[0][2]}
            });          
                
            for (var i = 0; i < locations.length; i++) {  
                var markerImage = 'assets/images/marker.png';
                var contentString = locations[i][3] + "<br />" + locations[i][4];
                var infowindow = new google.maps.InfoWindow({content: contentString, maxWidth: 400});
                var marker = new google.maps.Marker({
                    position: {lat: locations[i][1], lng: locations[i][2]},
                    icon: markerImage,
                    map: mapCanvas,
                    text: infowindow,
                    // test: listen
                });
                
                (function(infowindow2, marker2) {
                    marker2.addListener('click', function () {
                    infowindow2.open(mapCanvas, marker2);
                    });
                })(infowindow, marker);
                
            
            }
            
        }
        google.maps.event.addDomListener(window, 'load', initMap);
    });        