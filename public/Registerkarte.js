//RegisterKarte erzeugen




//löscht beim Laden der Seite alle Divs bis auf das Start div
function openCity()
{

let tab, tab1, tab2, tab3, tab4; 
tab = document.getElementById("Pizza"); 
tab.style.display = "none"; 

tab1 = document.getElementById("Burger"); 
tab1.style.display = "none"; 

tab2 = document.getElementById("Döner"); 
tab2.style.display = "none"; 

tab3 = document.getElementById("Sushi"); 
tab3.style.display = "none"; 


}

//Wird aufgerufen um alle Divs zu löschen 
function deleteDivs()
{

let tab, tab1, tab2, tab3, tab4; 
tab = document.getElementById("Pizza"); 
tab.style.display = "none"; 

tab1 = document.getElementById("Burger"); 
tab1.style.display = "none"; 

tab2 = document.getElementById("Döner"); 
tab2.style.display = "none"; 

tab3 = document.getElementById("Sushi"); 
tab3.style.display = "none"; 

tab4 = document.getElementById("Start"); 
tab4.style.display = "none"; 

}


//Wenn der Button mit der entsrpechenden Attribbut gedrückt wird das Div auf visible gesetzt
function view(name)
{
    deleteDivs();
    document.getElementById(name).style.display = "block"; 
    
    

}



addEventListener("load",openCity);
window.addEventListener('load', function() {
    var meinDiv = document.getElementById('default');
    meinDiv.style.display = 'block'; // Div anzeigen
});





