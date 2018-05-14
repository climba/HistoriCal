// This javascript comes from a tutorial I used to get our 
// bootstrap page to play nice with google maps API
// The tutorial is located here https://bit.ly/2IzuNSR


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
        {
            name: "capHiggins",
            lat:  37.875333,
            long: -122.256882,
            title: "<strong>Captain Higgins' Temperance Grocery</strong>",
            est: "Established: 1854",
            photos: ['src="URL"', 'src="URL"']
            },

    ];
    var infowindow;

    function initMapN() {
        
        var mapCanvas = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
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

    initMapN();

