(function() {
    "use strict";


    window.onload = function() {
        var projectImgs = document.querySelectorAll(".projectImg");
        for (var i = 0; i < projectImgs.length; i++) {
            projectImgs[i].onmouseover=circleRadius;
            projectImgs[i].onmouseout=squareRadius;
        }
        getGithubInfo();
        getDate();
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

    function getGithubInfo() {
        var ajaxPromise = new AjaxGetPromise("https://api.github.com/users/" + "soichit" + "?access_token=ac1a95ee0e39ea4e4e83b9d4304c1b2e2354fe4e");
        //var ajaxPromise = new AjaxGetPromise("dates.php");
        ajaxPromise
            .then(JSON.parse)
            .then(gotGithubInfo)
            .catch(ajaxError);
    }

    function gotGithubInfo(obj) {
        console.log(obj);
        document.getElementById("githubBio").innerHTML = obj.bio;
        document.getElementById("githubLocation").innerHTML = obj.location;
    }

    function getDate() {
        var ajaxPromise = new AjaxGetPromise("dates.php?date=latest");
        //var ajaxPromise = new AjaxGetPromise("dates.php");
        ajaxPromise
            .then(gotDate)
            .catch(ajaxError);
    }

    function gotDate(response) {
        //console.log(response);
        document.getElementById("updatedDate").innerHTML = response;
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

    // handles errors with the AJAXErrors
    function ajaxError(errorMessage, responseCode) {
        if (typeof(responseCode) !== undefined) {
            errorMessage = "Server Responded with Status " + responseCode + "\n" + errorMessage;
        }
        //console.log("Error: " + errorMessage);
    }



}());