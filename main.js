(function() {
    "use strict";


    window.onload = function() {
        var projectImgs = document.querySelectorAll(".projectImg");
        for (var i = 0; i < projectImgs.length; i++) {
            projectImgs[i].onmouseover=circleRadius;
            projectImgs[i].onmouseout=squareRadius;
        }
    };

    function circleRadius() {
        // console.log(this);
        this.style.borderRadius = "50%";
    }

    function squareRadius() {
        //console.log(this);
        this.style.borderRadius = "15%";
    }

}());