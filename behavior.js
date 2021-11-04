document.addEventListener("DOMContentLoaded", function(event) {

    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function() {
        // write here
        var thumbnailElement = document.getElementById("smart_thumbnail");
        thumbnailElement.className;

        if ( thumbnailElement.className == "small") {
            // write here the code that will execute if the image is big
            thumbnailElement.className = "";
        }
        else if ( thumbnailElement.className == "") {
            thumbnailElement.className = "small";
    
        }


     });
    

});