// Ajouter un événement mouseover à l'image avec l'ID "imagebutton"
document.getElementById("imagebutton").addEventListener("mouseover", function() {
    var div = document.querySelector(".topafrica"); // Sélectionner la div avec la classe "topafrica"
    
    // Appliquer la classe pour rendre la div visible
    div.classList.remove("hidden");
    div.classList.add("visible");
});

// Ajouter un événement mouseout pour cacher la div lorsque la souris quitte l'image
document.getElementById("imagebutton").addEventListener("mouseout", function() {
    var div = document.querySelector(".topafrica"); // Sélectionner la div avec la classe "topafrica"
    
    // Appliquer la classe pour cacher la div
    div.classList.remove("visible");
    div.classList.add("hidden");
});