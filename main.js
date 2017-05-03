(function() {
    "use strict";


    window.onload = function() {
        var projectImgs = document.querySelectorAll(".projectImg");
        for (var i = 0; i < projectImgs.length; i++) {
            projectImgs[i].onmouseover=circleRadius;
            projectImgs[i].onmouseout=squareRadius;
        }

        initMap();
    };

    function circleRadius() {
        // console.log(this);
        this.style.borderRadius = "50%";
    }

    function squareRadius() {
        //console.log(this);
        this.style.borderRadius = "15%";
    }


    function initMap() {        
        var portland = {company: "SightLine Applications", lat: 45.523, lng: -122.677};
        var seattle = {company: "Bellhapp", lat: 47.606, lng: -122.332};
        var austin = {company: "NetSuite", lat: 30.267, lng: -97.743};
        var cities = [portland, seattle, austin];

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: seattle
        });

        cities.forEach(function(city) {
          //console.log(city);
          var contentString = "<h2>" + city.company + "</h2>";
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          var marker = new google.maps.Marker({
            position: city,
            map: map,
            title: city.company
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        });
      }

}());