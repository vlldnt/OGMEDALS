window.onload = function() {
    animateContinent();
}

function animateContinent(){
    var continentElements = document.querySelectorAll('.continent');

    continentElements.forEach(function(skill) {
        var endValue = parseInt(skill.textContent);
        var duration = 1800;
        var increment = endValue / (duration / 10);
        var current = 0;

        var timer = setInterval(function() { 
            if(current >= endValue) {
                clearInterval(timer);
            } else {
                current += increment; 
                skill.textContent = Math.round(current) + "%";
            }
        }, 10);
    });
}


function showeu() {
    var div = document.querySelector(".topeurope");
        div.classList.remove("hidden");
        div.classList.add("visible");
        };
function hideeu() {
    var div = document.querySelector(".topeurope"); 
        div.classList.remove("visible");
        div.classList.add("hidden");
        };
document.getElementById("eu").addEventListener("mouseover", showeu)
document.getElementById("eu").addEventListener("mouseout", hideeu)
document.getElementById("TopEU").addEventListener("mouseover", showeu)
document.getElementById("TopEU").addEventListener("mouseout", hideeu)




function showas() {
    var div = document.querySelector(".topasia");
         div.classList.remove("hidden");
        div.classList.add("visible");
        };
function hideas() {
    var div = document.querySelector(".topasia"); 
        div.classList.remove("visible");
        div.classList.add("hidden");
        };
document.getElementById("as").addEventListener("mouseover", showas)
document.getElementById("as").addEventListener("mouseout", hideas)
document.getElementById("TopAS").addEventListener("mouseover", showas)
document.getElementById("TopAS").addEventListener("mouseout", hideas)




function showam() {
    var div = document.querySelector(".topamerica");
         div.classList.remove("hidden");
        div.classList.add("visible");
        };
function hideam() {
    var div = document.querySelector(".topamerica"); 
        div.classList.remove("visible");
        div.classList.add("hidden");
        };
document.getElementById("am").addEventListener("mouseover", showam)
document.getElementById("am").addEventListener("mouseout", hideam)
document.getElementById("TopAM").addEventListener("mouseover", showam)
document.getElementById("TopAM").addEventListener("mouseout", hideam)




function showoc() {
    var div = document.querySelector(".topoceania");
         div.classList.remove("hidden");
        div.classList.add("visible");
        };
function hideoc() {
    var div = document.querySelector(".topoceania"); 
        div.classList.remove("visible");
        div.classList.add("hidden");
        };
document.getElementById("oc").addEventListener("mouseover", showoc)
document.getElementById("oc").addEventListener("mouseout", hideoc)
document.getElementById("TopOC").addEventListener("mouseover", showoc)
document.getElementById("TopOC").addEventListener("mouseout", hideoc)





function showaf() {
    var div = document.querySelector(".topafrica");
         div.classList.remove("hidden");
        div.classList.add("visible");
        };
function hideaf() {
    var div = document.querySelector(".topafrica"); 
        div.classList.remove("visible");
        div.classList.add("hidden");
        };
document.getElementById("af").addEventListener("mouseover", showaf)
document.getElementById("af").addEventListener("mouseout", hideaf)
document.getElementById("TopAF").addEventListener("mouseover", showaf)
document.getElementById("TopAF").addEventListener("mouseout", hideaf)

document.getElementById("imagebutton").addEventListener("mouseover", showaf)
document.getElementById("imagebutton").addEventListener("mouseout", hideaf)
document.getElementById("imagebutton").addEventListener("mouseover", showeu)
document.getElementById("imagebutton").addEventListener("mouseout", hideeu)
document.getElementById("imagebutton").addEventListener("mouseover", showas)
document.getElementById("imagebutton").addEventListener("mouseout", hideas)
document.getElementById("imagebutton").addEventListener("mouseover", showoc)
document.getElementById("imagebutton").addEventListener("mouseout", hideoc)
document.getElementById("imagebutton").addEventListener("mouseover", showam)
document.getElementById("imagebutton").addEventListener("mouseout", hideam)
