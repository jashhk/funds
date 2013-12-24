define([
    'jquery',
    'async!https://maps.googleapis.com/maps/api/js?v=3&libraries=places&key=AIzaSyB0tiqOnPJCvVjUDDHaGgqxZbWoa0Rgftg&sensor=false'
], function ($) {
    var mapDiv = document.getElementById('map-canvas'),
        pyrmont = new google.maps.LatLng(22.396428, 114.10949700000003),
        mapOptions = {
            center: pyrmont,
            zoom: 11,
            // mapTypeId: google.maps.MapTypeId.ROADMAP,
            // navigationControl: true,
            // navigationControlOptions: {
            //     style: google.maps.NavigationControlStyle.SMALL
            // }
        },
        map = new google.maps.Map(mapDiv,
            mapOptions),
        request = {
            location: pyrmont,
            radius: '500',
            keyword: 'Tai'
        },
        infowindow = new google.maps.InfoWindow(),
        service = new google.maps.places.PlacesService(map),
        geocoder = new google.maps.Geocoder();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
        });
    }

    function codeAddress() {
        var address = "Hong Kong";
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                // var marker = new google.maps.Marker({
                //     map: map,
                //     position: results[0].geometry.location
                // });
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    }

    // codeAddress();

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);
            }
        }

    }
    service.nearbySearch(request, callback);
});
