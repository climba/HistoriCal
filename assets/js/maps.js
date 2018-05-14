// This javascript comes from a tutorial I used to get our 
// bootstrap page to play nice with google maps API
// The tutorial is located here https://bit.ly/2IzuNSR



    var locations = [
        // Berkeley Center
        {
        name: "Springer Gateway",
        lat: 37.871754,
        long: -122.265188,
        title: "<strong>Springer Memorial Gateway</strong>",
        est: "Established: 1964",
        photos: ["assets/images/springer2.jpg", "assets/images/springer3.jpg"]
        },{
        name: "Berkeley Center",
        lat: 37.8715926,
        long: -122.272747,
        title: "<strong>Berkeley Center</strong>",
        est: "Established: 1868",
        photos: ['assets/images/berk3.jpg', 'assets/images/berk2.jpg']
        },{
        // Founder Rock
        name: "founderRock",
        lat: 37.875333,
        long: -122.256882,
        title: "<strong>Founder Rock</strong>",
        est: "Established: 1860",
        photos: ["https://bit.ly/2rBSQ9N", "https://bit.ly/2wyQygD"]
        },{
        // UC Berkeley
        name: "greekTheater",
        lat: 37.873561,
        long: -122.254422,
        title: "<strong>Greek Theater</strong>",
        est: "Built: 1903",
        photos: ["https://bit.ly/2IuYlRk", "https://bit.ly/2IdKNpW"]
        },{
        name: "satherGate",
        lat: 37.869502,
        long: -122.259326,
        title: "<strong>Sather Gate</strong>",
        est: "Built: 1903",
        photos: ["https://bit.ly/2rBX3Ky", "https://bit.ly/2IbDbsc"]
        },
        // North Berkeley
        {
        name: "betaThetaPi",
        lat: 37.8757268,
        long: -122.257858,
        title: "<strong>Beta Theta Pi Chapter House</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2G6DfUj", "https://bit.ly/2KfNCaD"]
        },{
        name: "bennington",
        lat: 37.8758522,
        long: -122.259827,
        title: "<strong>Bennington Apartments</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2G9elTJ", "https://bit.ly/2wyZYIY"]
        },{
        name: "gables",
        lat: 37.8763939,
        long: -122.259030,
        title: "<strong>North Gables</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2G7E0fT", "https://bit.ly/2jQB7Hx"]
        },{
        name: "keeler",
        lat: 37.8763939,
        long: -122.259030,
        title: "<strong>Charles Keeler House & Studio</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2IbyX3O", "https://bit.ly/2wwTgDt"]
        },{
        name: "weltevreden",
        lat: 37.8771081,
        long: -122.258276,
        title: "<strong>Weltevreden</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2wACQK3", "https://bit.ly/2G8S4FR"]
        },{
        name: "bentley",
        lat: 37.8776261, 
        long: -122.257434,
        title: "<strong></strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2G8gFuh", "https://bit.ly/2IdKyv2"]
        },{
        name: "phiKappa",
        lat: 37.8766519, 
        long: -122.257213,
        title: "<strong>Phi Kappa Psi Chapter House</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2I8tiva", "https://bit.ly/2G7FbvP"]
        },{
        name: "allanoke",
        lat: 37.8766024, 
        long: -122.258166,
        title: "<strong>Allanoke</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2If7lXs", "https://bit.ly/2rChmqu"]
        },{
        name: "cloyne",
        lat: 37.8761356, 
        long: -122.257988,
        title: "<strong>Cloyne Court Hotel</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2jPMAaf", "https://bit.ly/2KeqA3U"]
        },{
        name: "maurer",
        lat: 37.876743, 
        long: -122.258875,
        title: "<strong>Oscar Maurer Studio</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2wADW8R", "https://bit.ly/2IchdRz"]
        },{
        name: "hillside",
        lat: 37.8776261, 
        long: -122.257434,
        title: "<strong>Hillside Club Street Improvements</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2IbzB1e", "https://bit.ly/2I8HmFg"]
        },{
        name: "marsh",
        lat: 37.8775837, 
        long: -122.257634,
        title: "<strong>Laura Belle Marsh Kluegel House</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2IccWhb", "https://bit.ly/2G7L8J8"]
        },{
        name: "phiDelta",
        lat: 37.875915, 
        long: -122.255972,
        title: "<strong>Phi Delta Theta Chapter House</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2G6xR3f", "https://bit.ly/2rAQW8A"]
        },{
        name: "thetaXiChapter",
        lat: 37.8769681, 
        long: -122.257457,
        title: "<strong>Theta Xi Chapter House</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2I7WUsB", "https://bit.ly/2rCAYf7"]
        },{
        name: "thornburg",
        lat: 37.8755065, 
        long: -122.265329,
        title: "<strong>Thornburg (Normandy) Village</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2wEJ77Q", "https://bit.ly/2IgOX0p"]
        },{
        name: "harris",
        lat: 37.8747855, 
        long: -122.263627,
        title: "<strong>Joseph W. Harris House</strong>",
        est: "Established: TBA",
        photos: ["https://bit.ly/2jQNZNB", "https://bit.ly/2IeOL1I"]
        },
        {
        // West Berkeley
        name: "capHiggins",
        lat: 37.875333,
        long: -122.256882,
        title: "<strong>Captain Higgins' Temperance Grocery</strong>",
        est: "1854",
        photos: ["https://bit.ly/2rDWpLR", "https://bit.ly/2Ke2w11"]
        },{
        name: "heywood",
        lat: 37.8698334 ,
        long: -122.299789,
        title: "<strong>Charles W. Heywood House</strong>",
        est: "1878",
        photos: ["https://bit.ly/2wAyVwP", "https://bit.ly/2KTowiQ"]
        },{
        name: "episcopal",
        lat:  37.8702404,
        long: -122.294695,
        title: "<strong>Church of the Good Shepard, Episcopal</strong>",
        est: "1878",
        photos: ["https://bit.ly/2IeQSm7", "https://bit.ly/2KbW2zV"]
        },{
        name: "Westminister",
        lat:  37.869583,
        long: -122.295679,
        title: "<strong>Westminister Presbyterian Church</strong>",
        est: "1879",
        photos: ["https://bit.ly/2rCOIX3", "https://bit.ly/2IBjgSI"]
        },{
        name: "Young",
        lat:  37.8697214,
        long: -122.3002765,
        title: "<strong>Young-Ghego House</strong>",
        est: "1877",
        photos: ["https://bit.ly/2rEvpvA", "https://bit.ly/2KWdXvK"]
        },{
        name: "Workmen",
        lat:  37.8699157,
        long: -122.298548,
        title: "<strong>Workmen's Cottages</strong>",
        est: "1878-1880",
        photos: ["https://bit.ly/2IcohlD", "https://bit.ly/2KgtHbE"]
        },{
        name: "sundermann",
        lat:  37.8686208,
        long: -122.295913,
        title: "<strong>Suendermann Plumbing Co.</strong>",
        est: "Late 1870 to Early 1880s (estimate)",
        photos: ["https://bit.ly/2rD3E7y", "https://bit.ly/2KUQxXv"] 
        },{
        name: "calnk",
        lat:  37.8769143,
        long: -122.303089,
        title: "<strong>California Ink Co.</strong>",
        est: "1891",
        photos: ["https://bit.ly/2Kimisy", "https://bit.ly/2KVx9cJ"]
        },{
        name: "macaroni",
        lat:  37.8645603,
        long: -122.297508,
        title: "<strong>West Berkeley Macaroni Factory</strong>",
        est: "1914",
        photos: ["https://bit.ly/2rAXLXP", "https://bit.ly/2rGAnbA"]
        },{
        name: "manasse",
        lat:  37.8782533,
        long: -122.303431,
        title: "<strong>Manasse-Block Tanning Co.</strong>",
        est: "1905",
        photos: ["https://bit.ly/2rHGeyb", "https://bit.ly/2Id4w9b"]
        },{
        name: "Kawneer",
        lat:  37.8592829,
        long: -122.292325,
        title: "<strong>Kawneer Manufacturing Co.</strong>",
        est: "1913",
        photos: ["https://bit.ly/2Ib9h7c", "https://bit.ly/2rAwiX0"]
        },{
        name: "Pfister",
        lat:  37.8586362,
        long: -122.292364,
        title: "<strong>J.J. Pfister Knitting Co.</strong>",
        est: "1889",
        photos: ["https://bit.ly/2IasFkX", "https://bit.ly/2Ii5PDK"]
        },{
        name: "HeinzFactory",
        lat:  37.8535336,
        long: -122.286814,
        title: "<strong>H.J. Heinz Co.</strong>",
        est: "1927-1928",
        photos: ["https://bit.ly/2IgLVJz", "https://bit.ly/2wxlfTn"]
        },{
        name: "Shellmound",
        lat:  37.8676588,
        long: -122.299885,
        title: "<strong>Shellmound</strong>",
        photos: ["https://bit.ly/2KeAR00", "https://bit.ly/2rD3E7y"]
        },{
        name: "incin",
        lat:  37.8811212,
        long: -122.306781,
        title: "<strong>Municipal Incinerator</strong>",
        est: "1909",
        photos: ["https://bit.ly/2KhyE3X", "https://bit.ly/2KSmiQS"]   
        }
    ];

    // $.getJSON("test.json", function(json) {
    //     console.log(json); // this will show the info it in firebug console
    // });   

 
 
var mapCanvas, infoWindow;

function initMap() {
    
    mapCanvas = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: {lat: locations[0].lat, lng: locations[0].long}
        });          
        infoWindow = new google.maps.InfoWindow;


    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        var userimg = 'assets/images/user-location.png';
        
        var userLoc = new google.maps.Marker({
            icon: userimg,
            position: pos,
            map: mapCanvas,

        }); 
        // mapCanvas.setCenter(pos);
        // mapCanvas.setZoom(16);
        }, function() {
            console.log("hi from callb " + pos);
            // mapCanvas.setCenter(pos);
            // mapCanvas.setZoom(16);
            handleLocationError(true, infoWindow, mapCanvas.getCenter());
        }); 
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, mapCanvas.getCenter());
    }


        for (var i = 0; i < locations.length; i++) {  
        var markerImage = 'assets/images/marker_sm.png';
        var contentString = '<img style="height:60px; padding-right:2px" src=' + locations[i].photos[0] + '>' + '<img height="60px"src=' + locations[i].photos[1] + '>' + "<br />" + locations[i].title + "<br />" + locations[i].est;
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


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}


                






        var image1 = locations[3].photos[0];
        var image2 = $("#photo2");

        $("#title1").html(locations[0].title);
        $("#est1").html(locations[0].est);
        $("#photo1").attr("src=", locations[3].photos[0]);

        $("#title2").html(locations[2].title);
        $("#est2").html(locations[2].est);
        image2.append(locations[3].photos[0]);

        console.log(locations[3].name);
        console.log(locations[3].photos[0]);
    

        initMap();

      