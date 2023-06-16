

function valiate()
{
    let pflichtfelder = document.getElementsByName("pay"); 
    let ausgabe = document.getElementById("output");
    let payment = document.getElementsByClassName("radio"); 
    let main = document.getElementById("main"); 
    let end = document.getElementById("end");
   
  
    
    for( index = 0; index < pflichtfelder.length; index++)   
    {
       
    if(pflichtfelder[index].value === '')
     {  
        let str = "Bitte alle Pflichtfelder (*) ausfüllen";
        ausgabe.innerHTML = str;
       

     }
     else if(payment[0].checked === false && payment[1].checked === false )
     {  
        let str = "Bitte alle Pflichtfelder (*) ausfüllen";
        ausgabe.innerHTML = str;
      
     }
     else{
        let str = " ";
        ausgabe.innerHTML = str;
        main.style.display = "none";
        end.style.display = "block";
        


     }

    }


       



     

    
}