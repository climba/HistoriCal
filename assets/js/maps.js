// This javascript comes from a tutorial I used to get our 
// bootstrap page to play nice with google maps API
// The tutorial is located here https://bit.ly/2IzuNSR



var locations = [
    // Berkeley Center
    {
    name: "SpringerGateway",
    lat: 37.871754,
    long: -122.265188,
    title: "<strong>Springer Memorial Gateway</strong>",
    est: "Established: 1964",
    photos: ["assets/images/springer2.jpg", "assets/images/springer3.jpg"]
    },{
    name: "BerkeleyCenter",
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
    photos: ["https://bit.ly/2rBSQ9N", "https://bit.ly/2wyQygD"],
    text: "On the corner of Hearst Avenue and Gayley Road, in Berkeley, California, lies the Founders' Rock, the spot where the 12 trustees of the College of California, the nascent University of California, Berkeley, stood on April 16, 1860, to dedicate the property they had just purchased."
    },{
    // UC Berkeley
    name: "greekTheater",
    lat: 37.873561,
    long: -122.254422,
    title: "<strong>Greek Theater</strong>",
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
    
    },
    {
    // West Berkeley
    name: "capHiggins",
    lat: 37.875333,
    long: -122.256882,
    title: "<strong>Captain Higgins' Temperance Grocery</strong>",
    est: "Established: 1854",
    photos: ["https://bit.ly/2rDWpLR", "https://bit.ly/2Ke2w11"],
    text:"Regardless of errors in attribution and dating, this building is an important reminder of the early days of Berkeley. Captain Higgins’ Temperance Grocery Store is one of the oldest buildings remaining in Berkeley. On 17 June 1985, it was designated a City of Berkeley Landmark under the name Captain Bowen’s Inn."
    
    },{
    name: "heywood",
    lat: 37.8698334 ,
    long: -122.299789,
    title: "<strong>Charles W. Heywood House</strong>",
    est: "Established: 1878",
    photos: ["https://bit.ly/2wAyVwP", "https://bit.ly/2KTowiQ"],
    text:"An exceptionally fine and rare local example of a spacious Italianate Victorian, this house was built in 1878 for Charles Warren Heywood third son of pioneer lumberman Zimri Brewer Heywood, who established Berkeley—s first lumber yard and built Berkeley’s first wharf."
    
    },{
    name: "episcopal",
    lat:  37.8702404,
    long: -122.294695,
    title: "<strong>Church of the Good Shepard, Episcopal</strong>",
    est: "Established: 1878",
    photos: ["https://bit.ly/2IeQSm7", "https://bit.ly/2KbW2zV"],
    text:"It is the oldest church building standing in Berkeley. This small church boasts no fewer than ten stained-glass windows—two large and eight small ones. The pseudo-Gothic buttresses “supporting” the tower and the chapel are hollow wooden boxes. The eighty-foot tower contains a thousand-pound Blymer bell. Until 1894, the latter fulfilled the double function of church bell and fire alarm."
    
    },{
    name: "Westminister",
    lat:  37.869583,
    long: -122.295679,
    title: "<strong>Westminister Presbyterian Church</strong>",
    est: "Established: 1879",
    photos: ["https://bit.ly/2rCOIX3", "https://bit.ly/2IBjgSI"],
    text:"Westminster Presbyterian Church was the third landmark designated by the City of Berkeley. The church is the second oldest standing in town, having been built in 1879—a year after the neighboring Church of the Good Shepherd, Episcopal went up."
    
    },{
    name: "Young",
    lat:  37.8697214,
    long: -122.3002765,
    title: "<strong>Young-Ghego House</strong>",
    est: "Established: 1877",
    photos: ["https://bit.ly/2rEvpvA", "https://bit.ly/2KWdXvK"],
    text:"The Young-Ghego House is the last pioneer building on the 1800 block of Fourth Street. The building’s notable features are the tall paired sash windows topped with ornate bracketing, a shallow hipped roof with a flat apex, and diagonally clipped eave corners"
    
    },{
    name: "Workmen",
    lat:  37.8699157,
    long: -122.298548,
    title: "<strong>Workmen's Cottages</strong>",
    est: "Established: 1878-1880",
    photos: ["https://bit.ly/2IcohlD", "https://bit.ly/2KgtHbE"],
    text: "The 800 block of Delaware Street is the location of the first settlement in Berkeley that grew into a true community. In the 19th century, Delaware Street connected Jacob’s Landing (1853) with Bowen’s Inn (1854) on the old Contra Costa Road (now San Pablo Avenue). The block is a city historic district, and the pioneer feeling of the streetscape remains somewhat intact."
    
    },{
    name: "sundermann",
    lat:  37.8686208,
    long: -122.295913,
    title: "<strong>Suendermann Plumbing Co.</strong>",
    est: "Late 1870 to Early 1880s (estimate)",
    photos: ["https://bit.ly/2rD3E7y", "https://bit.ly/2KUQxXv"],
    text:"Only three 19th century commercial buildings are still standing on busy University Avenue. 844 and 982 University Avenue are physically intact examples of what was, in the 1880s, a common commercial style. Tall display windows for lighting the interior of the business reflected a technical advance of pane-glass making in the mid-nineteenth century. Surrounding these large windows were carved wood moldings and brackets typical of the Victorian era."
    
    },{
    name: "calnk",
    lat:  37.8769143,
    long: -122.303089,
    title: "<strong>California Ink Co.</strong>",
    est: "Established: 1891",
    photos: ["https://bit.ly/2Kimisy", "https://bit.ly/2KVx9cJ"],
    text: "During the first 75 years of the 20th century, West Berkeley was the location of many manufacturing plants that produced diverse products from vegetable oil to ink, and from huge hydraulic pumps to tanned hides. On the blocks bounded by Camelia, Gilman, Fourth, and Fifth streets, there were about twenty buildings dating from 1906 to 1978. The sprawling factory included manufacturing buildings, laboratories, storage tanks, and offices."
    
    },{
    name: "macaroni",
    lat:  37.8645603,
    long: -122.297508,
    title: "<strong>West Berkeley Macaroni Factory</strong>",
    est: "Established: 1914",
    photos: ["https://bit.ly/2rAXLXP", "https://bit.ly/2rGAnbA"],
    text:"A hundred years ago, a sizable population of refugees fleeing the 1906 San Francisco Earthquake and Fire made the East Bay its permanent home. Among the new arrivals were many Italian families a good number of whom settled in West Berkeley. The West Berkeley Macaroni Factory, a two-story building with a false front, channel siding, and rows of windows on the front and side façades that was equipped with the latest machinery."
    
    },{
    name: "manasse",
    lat:  37.8782533,
    long: -122.303431,
    title: "<strong>Manasse-Block Tanning Co.</strong>",
    est: "Established: 1905",
    photos: ["https://bit.ly/2rHGeyb", "https://bit.ly/2Id4w9b"],
    text:"The history of Bay Area industry parallels that of immigration. In the East Bay, the economy was largely built by first- and second-generation immigrants who had settled in the West, bringing with them specialized skills from points east, often Europe. Such was the case in the founding of the Manasse-Block Tanning Company which employed at the start some twenty-five or thirty men."
    
    },{
    name: "Kawneer",
    lat:  37.8592829,
    long: -122.292325,
    title: "<strong>Kawneer Manufacturing Co.</strong>",
    est: "Established: 1913",
    photos: ["https://bit.ly/2Ib9h7c", "https://bit.ly/2rAwiX0"],
    text:"The building embodies the highest qualities of industrial architecture of its day, with form intensely following function. The twenty saw-toothed banks of clerestory windows stretching the entire length of the brick structure are early precursors to the glass-curtain architecture that has come to dominate the modern cityscape, while the glass-and-metal office building at the Dwight Way end embodies the company’s products of the mid-20th century."
    
    },{
    name: "Pfister",
    lat:  37.8586362,
    long: -122.292364,
    title: "<strong>J.J. Pfister Knitting Co.</strong>",
    est: "Established: 1889",
    photos: ["https://bit.ly/2IasFkX", "https://bit.ly/2Ii5PDK"],
    text:"For seven decades spanning the period from the 1880s to the 1950s, San Francisco was an important hub in the American knitting industry. In 1877, Pfister obtained three hand-operated knitting machines and began manufacturing knitwear on a small scale with the help of two assistants."
    
    },{
    name: "HeinzFactory",
    lat:  37.8535336,
    long: -122.286814,
    title: "<strong>H.J. Heinz Co.</strong>",
    est: "Established: 1927-1928",
    photos: ["https://bit.ly/2IgLVJz", "https://bit.ly/2wxlfTn"],
    text:"Located on the northwest corner of San Pablo and Ashby avenues, the two-block-long building is a distinctive feature on the San Pablo Avenue streetscape. With its elegant Mediterranean-style façade, the building looks like an impressive high school or college from the exterior, but behind the nicely detailed façade was once a real industrial manufacturing building engaged in the production of 28 of the H.J. Heinz company’s famous “57 Varieties.”"
    
    },{
    name: "Shellmound",
    lat:  37.8676588,
    long: -122.299885,
    title: "<strong>Shellmound</strong>",
    est: "Established: 1924", 
    photos: ["https://bit.ly/2KeAR00", "https://bit.ly/2rD3E7y"],
    text:"The Berkeley Shellmound is the earliest inhabited location in the Bay Area. Archaeologists have recovered large numbers of tools and ornaments from the mound, and 95 human burials. Most of the artifacts are stored in the catacombs of U.C. The above-ground part shellmound was leveled and paved over. But much of the below-ground part remains intact today, extending up to twenty feet down in some parts, under parking lots, streets, railroad tracks, and buildings."
    
    },{
    name: "incin",
    lat:  37.8811212,
    long: -122.306781,
    title: "<strong>Municipal Incinerator</strong>",
    est: "Established: 1909",
    photos: ["https://bit.ly/2KhyE3X", "https://bit.ly/2KSmiQS"], 
    text:"A municipal incinerator was considered the best “modern” method of disposing of garbage. In 1909 one was constructed but after one trial burn it was discovered that did not operate properly, and it was shut down. In 1914, a new incinerator was constructed. The building is unusual because of its ornamental use of concrete and curved Mission Revival–style roof line. It is a distinctive industrial structure, without windows, and marks the location of the city’s northwest boundary."
    
    }
];

  

 
 
var mapCanvas, infoWindow;
var userLat, userLng;
var userLoc = {
    lat: userLat,
    lng: userLng
}







function initMap() {
    
    mapCanvas = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: {lat: locations[0].lat, lng: locations[0].long}
    });          
    infoWindow = new google.maps.InfoWindow;


    // Adding all landmark markers & attached infowindows
    for (var i = 0; i < locations.length; i++) {  
        var markerImage = 'assets/images/marker_sm.png';
        var contentString = '<img style="height:60px; padding-right:2px" src=' + locations[i].photos[0] + '>' + 
                            '<img height="60px"src=' + locations[i].photos[1] + '>' + "<br />" + locations[i].title + 
                            "<br />" + locations[i].est + "<br />" + '<a class="readMore" href="landmarks.html#'+ locations[i].name +'">Read More</a>';
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
        }) (infowindow, marker);        
    }

    // Getting user location
    $.getJSON('https://ipapi.co/8.8.8.8/json/', function(data){
        userLat = data.latitude;
        userLng = data.longitude;
        console.log(data.latitude);
        console.log(data.longitude);
    });


    // Adding marker at user location
    var userImg = 'assets/images/user-location.png';
    var userMarker = new google.maps.Marker({
        icon: userImg,
        position: userLoc,
        map: mapCanvas

    }); 

    mapCanvas.setCenter(userLoc);
    mapCanvas.setZoom(15);
    
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

document.getElementById( "home" ).onclick = function() {
    location.href = "index.html";
};

document.getElementById( "landmarks" ).onclick = function() {
    location.href = "landmarks.html";
};
document.getElementById( "browse" ).onclick = function() {
    location.href = "browse-by-map.html";
};
document.getElementById( "tour" ).onclick = function() {
    location.href = "index.html";
};
document.getElementById( "contact" ).onclick = function() {
    location.href = "index.html";
};


                






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

      