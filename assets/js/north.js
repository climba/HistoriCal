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
    title: "<strong>Downtown Berkeley (center of Berkeley)</strong>",
    est: "Established: 1868",
    photos: ['assets/images/berk3.jpg', 'assets/images/berk2.jpg']
    },{
    // Founder Rock
    name: "founderRock",
    lat: 37.875333,
    long: -122.256882,
    title: "<strong>Founder Rock</strong>",
    est: "Established: 1860",
    photos: ["https://bit.ly/2rBSQ9N", "https://bit.ly/2wyQygD"],
    text: "On the corner of Hearst Avenue and Gayley Road, in Berkeley, California, lies the Founders' Rock, the spot where the 12 trustees of the College of California, the nascent University of California, Berkeley, stood on April 16, 1860, to dedicate the property they had just purchased."
    },{
    // UC Berkeley
    name: "greekTheater",
    lat: 37.873561,
    long: -122.254422,
    title: "<strong>Hearst Greek Theater</strong>",
    est: "Built: 1903",
    photos: ["https://bit.ly/2IuYlRk", "https://bit.ly/2IdKNpW"],
    text: "Built in 1903 on the site of a rough outdoor bowl already in use as an amphitheater since 1894. The project was championed by University of CA president Benjamin Ide Wheeler. The design of the theater is based directly on the ancient Greek theater of Epidaurus."
    
    },{
    name: "satherGate",
    lat: 37.869502,
    long: -122.259326,
    title: "<strong>Sather Gate</strong>",
    est: "Built: 1903",
    photos: ["https://bit.ly/2rBX3Ky", "https://bit.ly/2IbDbsc"],
    text:"Designed by John Galen Howard in the Classical Revival Beaux-Arts style, it was completed in 1910. Atop the gate are eight panels of bas-relief figures: four nude men representing the disciplines of law, letters, medicine, and mining, and four nude women representing the disciplines of agriculture, architecture, art, and electricity."        
    },
    // North Berkeley
    {
    name: "betaThetaPi",
    lat: 37.8757268,
    long: -122.257858,
    title: "<strong>Beta Theta Pi Chapter House</strong>",
    est: "Established: 1893",
    photos: ["https://bit.ly/2G6DfUj", "https://bit.ly/2KfNCaD"],
    text:"Beta Theta Pi was the fifth Greek-letter fraternity to make an appearance at the University of California. Its Omega chapter was established in Berkeley in 1879, but it wasn’t until 1893 that the chapter constructed its home at 2607 Hearst Avenue (then College Way), across the road from the campus, in the newly subdivided Daley’s Scenic Park tract."        
    },{
    name: "bennington",
    lat: 37.8758522,
    long: -122.259827,
    title: "<strong>Bennington Apartments</strong>",
    est: "Established: 1910",
    photos: ["https://bit.ly/2G9elTJ", "https://bit.ly/2wyZYIY"],
    text: "Around 1910, the Henrys formed W.W. Henry Investment Company and began buying properties along the avenue. They moved into 1805 Euclid but sometime after 1911, the creek behind the two houses was culverted, and in 1915 the houses were moved to the back and attached back-to-back to form a six-unit apartment building."        
    },{
    name: "gables",
    lat: 37.8763939,
    long: -122.259030,
    title: "<strong>North Gables</strong>",
    est: "Established: 1892",
    photos: ["https://bit.ly/2G7E0fT", "https://bit.ly/2jQB7Hx"],
    text: "This charming, turreted house, now divided into six apartments, was one of the earliest homes built in the Daley’s Scenic Park tract. The first improvement on the site was recorded in 1892, and by the following year it had more than doubled. "
    
    },{
    name: "keeler",
    lat: 37.8763939,
    long: -122.259030,
    title: "<strong>Charles Keeler House & Studio</strong>",
    est: "Established: 1895",
    photos: ["https://bit.ly/2IbyX3O", "https://bit.ly/2wwTgDt"],
    text: "The Keeler residence, built in 1895, was the first building on Highland Place, in the Daley’s Scenic Park tract just north of the University of California campus. "
    
    },{
    name: "weltevreden",
    lat: 37.8771081,
    long: -122.258276,
    title: "<strong>Weltevreden</strong>",
    est: "Established: 1896",
    photos: ["https://bit.ly/2wACQK3", "https://bit.ly/2G8S4FR"],
    text: "Built in 1896, it attracted much attention. In the Sunset magazine article Berkeley, the Beautiful (December 1906), writer Herman Whitaker described Weltevreden as “most beautiful of all” and the “premier residence of Berkeley.”"
    
    },{
    name: "bentley",
    lat: 37.877626, 
    long: -122.257435,
    title: "<strong></strong>",
    est: "Established: 1900",
    photos: ["https://bit.ly/2G8gFuh", "https://bit.ly/2IdKyv2"],
    text: "Built in 1900. Despite its simplicity, the house possesses several strong design features, including an overhanging gambrel roof open to extended eaves; a prominent front porch with a shed roof supported by open brackets; a three-sided window bay above the front porch; and numerous windows on all sides, often arranged in groups of three."
    
    },{
    name: "phiKappa",
    lat: 37.8766519, 
    long: -122.257213,
    title: "<strong>Phi Kappa Psi Chapter House</strong>",
    est: "Established: 1901",
    photos: ["https://bit.ly/2I8tiva", "https://bit.ly/2G7FbvP"],
    text: "Completed in September 1901, the Phi Kappa Psi house is an elegantly spare brown shingle. It the telltale marks of the First Bay Region Tradition—a style that emerged during the final decade of the 19th century led by Ernest Coxhead, Willis Polk, and Bernard Maybeck."
    
    },{
    name: "allanoke",
    lat: 37.8766024, 
    long: -122.258166,
    title: "<strong>Allanoke</strong>",
    est: "Established: 1905",
    photos: ["https://bit.ly/2If7lXs", "https://bit.ly/2rChmqu"],
    text: "When Berkeley boosters publicized the city circa 1905, they invariably pointed to the 1700 block of Le Roy Avenue as their shining example. Situated one block to the north of the U.C. campus, the short stretch between Le Conte Avenue and Ridge Road boasted two of Berkeley’s most opulent and ballyhooed residences: the Volney D. Moody house, known as “Weltevreden,” and the Allen G. Freeman house, “Allanoke.”"
    
    },{
    name: "cloyne",
    lat: 37.8761356, 
    long: -122.257988,
    title: "<strong>Cloyne Court Hotel</strong>",
    est: "Established: 1904",
    photos: ["https://bit.ly/2jPMAaf", "https://bit.ly/2KeqA3U"],
    text:"Completed in December 1904 and used for housing university faculty, visiting professors, and people waiting for their Northside homes to be completed. James and Margaret (Maggie) Pierce ran the hotel on these principles: “to give everyone what they want, set an attractive table and keep charges within reason."
    
    },{
    name: "maurer",
    lat: 37.876743, 
    long: -122.258875,
    title: "<strong>Oscar Maurer Studio</strong>",
    est: "Established: 1907",
    photos: ["https://bit.ly/2wADW8R", "https://bit.ly/2IchdRz"],
    text:"Designed by Bernard Maybeck and built in 1907, the studio foreshadows the architect’s eclectic design for his masterpiece, the First Church of Christ Scientist (1910). The elements assembled here include Mediterranean, Mission Revival, Neoclassical, and Modern."
    
    },{
    name: "hillside",
    lat: 37.8776261, 
    long: -122.257434,
    title: "<strong>Hillside Club Street Improvements</strong>",
    est: "Established: 1910",
    photos: ["https://bit.ly/2IbzB1e", "https://bit.ly/2I8HmFg"],
    text: "Comprising concrete street dividers, planted median strips, stairways, pillars, elevated sidewalks, and retaining walls, the system is invariably derided by opponents of the 1974 Landmarks Preservation Ordinance as “The Wall” and cited as an example of inappropriate designation."
    
    },{
    name: "marsh",
    lat: 37.8775837, 
    long: -122.257634,
    title: "<strong>Laura Belle Marsh Kluegel House</strong>",
    est: "Established: 1913",
    photos: ["https://bit.ly/2IccWhb", "https://bit.ly/2G7L8J8"],
    text:"Designed in 1911 as a duplex by the eclectic architect John Hudson Thomas. A student of John Galen Howard’s and Bernard Maybeck’s, Thomas drew inspiration for his idiosyncratic style from early 20th-century European and American avant-garde architecture, and especially from the Glasgow School (Charles Rennie Mackintosh), the Viennese Secession (Otto Wagner), and the Prairie School (Frank Lloyd Wright)."
    
    },{
    name: "phiDelta",
    lat: 37.875915, 
    long: -122.255972,
    title: "<strong>Phi Delta Theta Chapter House</strong>",
    est: "Established: 1914",
    photos: ["https://bit.ly/2G6xR3f", "https://bit.ly/2rAQW8A"],
    text:"The only non-university building left on the block. It is hemmed in and cut off from the rest of the community, and its once glorious views are reduced to glimpses from the top floor. Since 1988, the university has been pressing the city for an encroachment permit in order to build a pedestrian bridge across Hearst Avenue that would further isolate the landmark building, which is currently being restored."
    
    },{
    name: "thetaXiChapter",
    lat: 37.8769681, 
    long: -122.257457,
    title: "<strong>Theta Xi Chapter House</strong>",
    est: "Established: 1914",
    photos: ["https://bit.ly/2I7WUsB", "https://bit.ly/2rCAYf7"],
    text:"Perched above the oak-wooded canyon of Strawberry Creek, the building overlooks a sunken garden with a creekside amphitheater. Built in 1914 for Nu Chapter of the Theta Xi fraternity, the building faithfully mirrors the history of both Berkeley and the campus over the greater part of the 20th century. In fact, it can be said to be a microcosm of our city during each phase of its history over the past 95 years."
    
    },{
    name: "thornburg",
    lat: 37.8755065, 
    long: -122.265329,
    title: "<strong>Thornburg (Normandy) Village</strong>",
    est: "Established: 1926",
    photos: ["https://bit.ly/2wEJ77Q", "https://bit.ly/2IgOX0p"],
    text:"Located in a grove of trees almost at the edge of the university campus, on Spruce Street just above Hearst, this unique project is daily attracting interested spectators. Combining in its rural European style the influences of villages from the Scandinavian peninsula to the Mediterranean,"
    
    },{
    name: "harris",
    lat: 37.8747855, 
    long: -122.263627,
    title: "<strong>Joseph W. Harris House</strong>",
    est: "Established: 1937",
    photos: ["https://bit.ly/2jQNZNB", "https://bit.ly/2IeOL1I"],
    text:"Joseph W. Harris had a penchant for International Style architecture. In downtown Berkeley, several prominent civic and commercial buildings proudly display the Streamline Moderne and Zigzag Moderne marks. Residential architecture, however, was much less affected by the Moderne movement, and although some Deco-inspired apartment buildings are sprinkled around town, the Harris house is the only notable example of a Streamline Moderne single-family home."
    
    },{
    name: "capHiggins",
    lat: 37.875333,
    long: -122.256882,
    title: "<strong>Captain Higgins' Temperance Grocery</strong>",
    est: "Established: 1854",
    photos: ["https://bit.ly/2rDWpLR", "https://bit.ly/2Ke2w11"],
    text:"Regardless of errors in attribution and dating, this building is an important reminder of the early days of Berkeley. Captain Higgins’ Temperance Grocery Store is one of the oldest buildings remaining in Berkeley. On 17 June 1985, it was designated a City of Berkeley Landmark under the name Captain Bowen’s Inn."
    }

    ];
    var infowindow;

    function initMapN() {
        
        var mapCanvas = new google.maps.Map(document.getElementById('map'), {

                zoom: 15,
                panControl: false,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: {lat: locations[6].lat, lng: locations[6].long}

            });
                
        for (var i = 0; i < locations.length; i++) { 
            createMarker(locations[i]);
        }   

        function createMarker(obj) {
            var markerImage = 'assets/images/marker_sm.png';
            // var contentString = obj.title + "<br />" + obj.est;
            var contentString = '<img style="height:60px; padding-right:2px" src=' + obj.photos[0] + '>' + '<img height="60px"src=' + obj.photos[1] + '>' + "<br />" + obj.title + "<br />" + obj.est;
            
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
    
    document.getElementById( "home" ).onclick = function() {
        location.href = "index.html";
    };
    
    document.getElementById( "landmarks" ).onclick = function() {
        location.href = "landmarks.html";
    };

    document.getElementById( "browse" ).onclick = function() {
        location.href = "northside-berkeley.html";
    };

    document.getElementById( "tour" ).onclick = function() {
        location.href = "walking-tour.html";
    };

    document.getElementById( "contact" ).onclick = function() {
        location.href = "index.html";
    };
