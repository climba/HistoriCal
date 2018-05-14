// This javascript comes from a tutorial I used to get our 
// bootstrap page to play nice with google maps API
// The tutorial is located here https://bit.ly/2IzuNSR



    var locations = [
        {
        name: "heywood",
        lat:  37.8698334 ,
        long: -122.299789,
        title: "<strong>Charles W. Heywood House</strong>",
        est: "Established: 1878",
        photos: ['src="https://bit.ly/2rBBMQt"', 'src="https://bit.ly/2rCFLwQ"']
        },{
        name: "episcopal",
        lat:   37.8702404,
        long:  -122.294695,
        title: "<strong>Church of the Good Shepard, Episcopal</strong>",
        est: "Established: 1878",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "Westminister",
        lat:   37.869583,
        long:  -122.295679,
        title: "<strong>Westminister Presbyterian Church</strong>",
        est: "Established: 1879",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "Young",
        lat:   37.8697214,
        long:  -122.3002765,
        title: "<strong>Young-Ghego House</strong>",
        est: "Established: 1877",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "Workmen",
        lat:   37.8699157,
        long:  -122.298548,
        title: "<strong>Workmen's Cottages</strong>",
        est: "Established: 1878-1880",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "sundermann",
        lat:   37.8686208,
        long:  -122.295913,
        title: "<strong>Suendermann Plumbing Co.</strong>",
        est: "Established: Late 1870 to Early 1880s (estimate)",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "calnk",
        lat:   37.8769143,
        long:  -122.303089,
        title: "<strong>California Ink Co.</strong>",
        est: "Established: 1891",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "macaroni",
        lat:   37.8645603,
        long:  -122.297508,
        title: "<strong>West Berkeley Macaroni Factory</strong>",
        est: "Established: 1914",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "manasse",
        lat:   37.8782533,
        long:  -122.303431,
        title: "<strong>Manasse-Block Tanning Co.</strong>",
        est: "Established: 1905",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "Kawneer",
        lat:   37.8592829,
        long:  -122.292325,
        title: "<strong>Kawneer Manufacturing Co.</strong>",
        est: "Established: 1913",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "Pfister",
        lat:   37.8586362,
        long:   -122.292364,
        title: "<strong>J.J. Pfister Knitting Co.</strong>",
        est: "Established: 1889",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "HeinzFactory",
        lat:   37.8535336,
        long:   -122.286814,
        title: "<strong>H.J. Heinz Co.</strong>",
        est: "Established: 1927-1928",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "Shellmound",
        lat:   37.8676588,
        long:   -122.299885,
        title: "<strong>Shellmound</strong>",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "incin",
        lat:   37.8811212,
        long:   -122.306781,
        title: "<strong>Municipal Incinerator</strong>",
        est: "Established: 1909",
        photos: ['src="URL"', 'src="URL"']
        }
    ];

    var infowindow;

    function initMapW() {
        
        var mapCanvas = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                panControl: false,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: {lat: locations[4].lat, lng: locations[4].long}
            });
                
        for (var i = 0; i < locations.length; i++) { 
            createMarker(locations[i]);
        }   

        function createMarker(obj) {
            var markerImage = 'assets/images/marker_sm.png';
            var contentString = obj.title + "<br />" + obj.est;
            var marker = new google.maps.Marker({
                position: {lat: obj.lat, lng: obj.long},
                icon: markerImage,
                map: mapCanvas,
                text: contentString,
            }); 
            google.maps.event.addListener(marker, "click", function() {
                if (infowindow) infowindow.close();
                infowindow = new google.maps.InfoWindow({
                    content: this.text,
                    maxWidth: 400
                });
                infowindow.open(mapCanvas, marker);
            });
            return marker;
        }
    }    

    initMapW();



 