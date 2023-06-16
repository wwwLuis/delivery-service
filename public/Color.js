//Beim klciken auf die Buttons wird die Farbe geändert, solange bis ein weitere Button aufgerufen wurde, 
let color1 = document.getElementById("tab1"); 

color1.addEventListener("click", function() {
    none();
    document.getElementById("tab1").style.backgroundColor ="#7d93a6";
    
    
}); 


let color2 = document.getElementById("tab2"); 
color2.addEventListener("click", function() {
    none();
    document.getElementById("tab2").style.backgroundColor ="#7d93a6"
}); 

let color3 = document.getElementById("tab3"); 
color3.addEventListener("click", function() {
    none();
    document.getElementById("tab3").style.backgroundColor ="#7d93a6"
}); 

let color4 = document.getElementById("tab4"); 
color4.addEventListener("click", function() {
    none();
    document.getElementById("tab4").style.backgroundColor ="#7d93a6"
}); 

let color5 = document.getElementById("default"); 
color5.addEventListener("click", function() {
    none();
    
}); 

//setzt die Farbe des Buttons wieder auf Standart
function none(){

    
    for (let index = 1; index < 5; index++) {
        document.getElementById("tab" + index).style.backgroundColor = "#ffffff"; 
       
        
    }

}
