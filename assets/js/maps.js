// This javascript comes from a tutorial I used to get our 
// bootstrap page to play nice with google maps API
// The tutorial is located here https://bit.ly/2IzuNSR


$(function () {

    var locations = [
        // Berkeley Center
        {
        name: "Berkeley Center",
        lat:  37.8715926,
        long: -122.272747,
        title: "<strong>Berkeley Center</strong>",
        est: "Established: 1868",
        photos: ['src="URL"', 'src="URL"']
        },{
        // Founder Rock
        name: "founderRock",
        lat: 37.875333,
        long: -122.256882,
        title: "<strong>Founder Rock</strong>",
        est: "Established: 1860",
        photos: ['src="URL"', 'src="URL"']
        },{
        // UC Berkeley
        name: "greekTheater",
        lat: 37.873561,
        long: -122.254422,
        title: "<strong>Greek Theater</strong>",
        est: "Built: 1903",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "slatherGate",
        lat: 37.869502,
        long: -122.259326,
        title: "<strong>Slather Gate</strong>",
        est: "Built: 1903",
        photos: ['src="URL"', 'src="URL"']
        },
        // North Berkeley
        {
        name: "betaThetaPi",
        lat: 37.8757268,
        long: -122.257858,
        title: "<strong>Beta Theta Pi Chapter House</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "bennington",
        lat: 37.8758522,
        long: -122.259827,
        title: "<strong>Bennington Apartments</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "gables",
        lat: 37.8763939,
        long: -122.259030,
        title: "<strong>North Gables</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "keeler",
        lat: 37.8763939,
        long: -122.259030,
        title: "<strong>Charles Keeler House & Studio</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "weltevreden",
        lat: 37.8771081,
        long: -122.258276,
        title: "<strong>Weltevreden</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "bentley",
        lat: 37.8776261, 
        long: -122.257434,
        title: "<strong></strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "phiKappa",
        lat: 37.8766519, 
        long: -122.257213,
        title: "<strong>Phi Kappa Psi Chapter House</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "allanoke",
        lat: 37.8766024, 
        long: -122.258166,
        title: "<strong>Allanoke</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "cloyne",
        lat: 37.8761356, 
        long: -122.257988,
        title: "<strong>Cloyne Court Hotel</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "maurer",
        lat: 37.876743, 
        long: -122.258875,
        title: "<strong>Oscar Maurer Studio</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "hillside",
        lat: 37.8776261, 
        long: -122.257434,
        title: "<strong>Hillside Club Street Improvements</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "marsh",
        lat: 37.8775837, 
        long: -122.257634,
        title: "<strong>Laura Belle Marsh Kluegel House</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "phiDelta",
        lat: 37.875915, 
        long: -122.255972,
        title: "<strong>Phi Delta Theta Chapter House</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "thetaXiChapter",
        lat: 37.8769681, 
        long: -122.257457,
        title: "<strong>Theta Xi Chapter House</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "thornburg",
        lat: 37.8755065, 
        long: -122.265329,
        title: "<strong>Thornburg (Normandy) Village</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },{
        name: "harris",
        lat: 37.8747855, 
        long: -122.263627,
        title: "<strong>Joseph W. Harris House</strong>",
        est: "Established: ",
        photos: ['src="URL"', 'src="URL"']
        },
        // West Berkeley
        {
        // West Berkeley
        name: "capHiggins",
        lat:  37.875333,
        long: -122.256882,
        title: "<strong>Captain Higgins' Temperance Grocery</strong>",
        est: "Established: 1854",
        photos: ['src="URL"', 'src="URL"']
        },{
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

    $.getJSON("test.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    });   

    function initMap() {
        
        var mapCanvas = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                panControl: false,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: {lat: locations[0].lat, lng: locations[0].long}
            });          
                
            for (var i = 0; i < locations.length; i++) {  
                var markerImage = 'assets/images/marker_sm.png';
                var contentString = locations[i].title + "<br />" + locations[i].est;
                var infowindow = new google.maps.InfoWindow({content: contentString, maxWidth: 400});
                var marker = new google.maps.Marker({
                    position: {lat: locations[i].lat, lng: locations[i].long},
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