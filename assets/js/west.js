// This javascript comes from a tutorial I used to get our 
// bootstrap page to play nice with google maps API
// The tutorial is located here https://bit.ly/2IzuNSR



    var locations = [
        {
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

    initMapW();

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
        location.href = "contact.html";
    };


 