
 



 function calculate()
 {
    
    let total = 0
     for(let index = 1; index <= 18; index++){
     
  
        if((document.getElementById("burger"+index).checked) == true)
        {
           let price =  parseFloat(document.getElementById("burger"+index ).getAttribute("value"));   
           total = total + price; 
           document.getElementById("ausgabe").innerHTML = total + "€"; 
           
        }
     }


 
 
 }
