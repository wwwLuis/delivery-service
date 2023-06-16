
 
 let total = 0; 
 let artikel; 

 



 function calculateBurger()
 {
    
  

   let artikelausgabe = document.getElementsByClassName("atrikeleinkauf");          /*Gibt ein Array mit allen Elementen die den Klassenamen ausgabe haben*/
   for(i = 0; i < artikelausgabe.length; i++)
   {
      const absatz = document.createElement("br"); 
      const burgerdiv = document.createElement("a");
      burgerdiv.setAttribute("id","detailsH"); 
      const inhalth1 = document.createTextNode("Burger"); 
      burgerdiv.appendChild(inhalth1); 
      artikelausgabe[i].appendChild(absatz); 
      artikelausgabe[i].appendChild(burgerdiv); 
    
   }
 

   let b = document.getElementsByClassName("burger");  

   for( index = 0; index < b.length; index++){
   

      if(b[index].checked == true)
      {
         let price =  parseFloat(b[index].getAttribute("value"));   
         total = total + price; 

         let artikel = b[index].getAttribute("alt"); 
        
       
         
          
            
            let artikelausgabe = document.getElementsByClassName("atrikeleinkauf");          /*Gibt ein Array mit allen Elementen die den Klassenamen ausgabe haben*/
           for(i = 0; i < artikelausgabe.length; i++)
           {
            const neuerEintrag =  document.createElement("a"); 
            const inhalt = document.createTextNode(artikel + ", " + " "); 
            neuerEintrag.appendChild(inhalt); 
            artikelausgabe[i].appendChild(neuerEintrag); 
            
           }

           
      
        
                 
      }
     
   }
     
     let ausgabe = document.getElementsByClassName("ausgabe");          /*Gibt ein Array mit allen Elementen die den Klassenamen ausgabe haben*/
           for(i = 0; i < ausgabe.length; i++)
           {
            ausgabe[i].innerHTML = total +  "  " + "€"; 
           }


      let uncheck = document.getElementsByClassName("burger"); 
         for(i = 0; i < uncheck.length; i++)
         {
          uncheck[i].checked = false; 
         }
   


    
   
 }


 

 function calculatePizza()
 {
    

   let artikelausgabe = document.getElementsByClassName("atrikeleinkauf");          /*Gibt ein Array mit allen Elementen die den Klassenamen ausgabe haben*/
   for(i = 0; i < artikelausgabe.length; i++)
   {
      const absatz = document.createElement("br"); 
      const burgerdiv = document.createElement("a");
      burgerdiv.setAttribute("id","detailsH"); 
      const inhalth1 = document.createTextNode("Pizza"); 
      burgerdiv.appendChild(inhalth1); 
      artikelausgabe[i].appendChild(absatz); 
      artikelausgabe[i].appendChild(burgerdiv); 
    
   }
 

   let b = document.getElementsByClassName("pizza");  

   for( index = 0; index < b.length; index++){
   

      if(b[index].checked == true)
      {
         let price =  parseFloat(b[index].getAttribute("value"));   
         total = total + price; 

         let artikel = b[index].getAttribute("alt"); 
        
       
         
          
            
            let artikelausgabe = document.getElementsByClassName("atrikeleinkauf");          /*Gibt ein Array mit allen Elementen die den Klassenamen ausgabe haben*/
           for(i = 0; i < artikelausgabe.length; i++)
           {
            const neuerEintrag =  document.createElement("a"); 
            const inhalt = document.createTextNode(artikel + ", " + " "); 
            neuerEintrag.appendChild(inhalt); 
            artikelausgabe[i].appendChild(neuerEintrag); 
            
           }
      
        
                 
      }
     
   }
     
     let ausgabe = document.getElementsByClassName("ausgabe");          /*Gibt ein Array mit allen Elementen die den Klassenamen ausgabe haben*/
           for(i = 0; i < ausgabe.length; i++)
           {
            ausgabe[i].innerHTML = total +  "  " + "€"; 
           }

           let uncheck = document.getElementsByClassName("pizza"); 
           for(i = 0; i < uncheck.length; i++)
           {
            uncheck[i].checked = false; 
           }


   

 }


 function calculateDoner()
 {
    

   let artikelausgabe = document.getElementsByClassName("atrikeleinkauf");          /*Gibt ein Array mit allen Elementen die den Klassenamen ausgabe haben*/
   for(i = 0; i < artikelausgabe.length; i++)
   {
      const absatz = document.createElement("br"); 
      const burgerdiv = document.createElement("a");
      burgerdiv.setAttribute("id","detailsH"); 
      const inhalth1 = document.createTextNode("Döner"); 
      burgerdiv.appendChild(inhalth1); 
      artikelausgabe[i].appendChild(absatz); 
      artikelausgabe[i].appendChild(burgerdiv); 
    
   }
 

   let b = document.getElementsByClassName("doner");  

   for( index = 0; index < b.length; index++){
   

      if(b[index].checked == true)
      {
         let price =  parseFloat(b[index].getAttribute("value"));   
         total = total + price; 

         let artikel = b[index].getAttribute("alt"); 
        
       
         
          
            
            let artikelausgabe = document.getElementsByClassName("atrikeleinkauf");          /*Gibt ein Array mit allen Elementen die den Klassenamen ausgabe haben*/
           for(i = 0; i < artikelausgabe.length; i++)
           {
            const neuerEintrag =  document.createElement("a"); 
            const inhalt = document.createTextNode(artikel + ", " + " "); 
            neuerEintrag.appendChild(inhalt); 
            artikelausgabe[i].appendChild(neuerEintrag); 
            
           }
      
        
                 
      }
     
   }
     
     let ausgabe = document.getElementsByClassName("ausgabe");          /*Gibt ein Array mit allen Elementen die den Klassenamen ausgabe haben*/
           for(i = 0; i < ausgabe.length; i++)
           {
            ausgabe[i].innerHTML = total +  "  " + "€"; 
           }

           let uncheck = document.getElementsByClassName("doner"); 
           for(i = 0; i < uncheck.length; i++)
           {
            uncheck[i].checked = false; 
           }


   

 }

 function calculateSushi()
 {
    

   let artikelausgabe = document.getElementsByClassName("atrikeleinkauf");          /*Gibt ein Array mit allen Elementen die den Klassenamen ausgabe haben*/
   for(i = 0; i < artikelausgabe.length; i++)
   {
      const absatz = document.createElement("br"); 
      const burgerdiv = document.createElement("a");
      burgerdiv.setAttribute("id","detailsH"); 
      const inhalth1 = document.createTextNode("Sushi"); 
      burgerdiv.appendChild(inhalth1); 
      artikelausgabe[i].appendChild(absatz); 
      artikelausgabe[i].appendChild(burgerdiv); 
    
   }
 

   let b = document.getElementsByClassName("sushi");  

   for( index = 0; index < b.length; index++){
   

      if(b[index].checked == true)
      {
         let price =  parseFloat(b[index].getAttribute("value"));   
         total = total + price; 

         let artikel = b[index].getAttribute("alt"); 
        
       
         
          
            
            let artikelausgabe = document.getElementsByClassName("atrikeleinkauf");          /*Gibt ein Array mit allen Elementen die den Klassenamen ausgabe haben*/
           for(i = 0; i < artikelausgabe.length; i++)
           {
            const neuerEintrag =  document.createElement("a"); 
            const inhalt = document.createTextNode(artikel + ", " + " "); 
            neuerEintrag.appendChild(inhalt); 
            artikelausgabe[i].appendChild(neuerEintrag); 
            
           }
      
        
                 
      }
     
   }
     
     let ausgabe = document.getElementsByClassName("ausgabe");          /*Gibt ein Array mit allen Elementen die den Klassenamen ausgabe haben*/
           for(i = 0; i < ausgabe.length; i++)
           {
            ausgabe[i].innerHTML = total +  "  " + "€"; 
           }

           let uncheck = document.getElementsByClassName("sushi"); 
           for(i = 0; i < uncheck.length; i++)
           {
            uncheck[i].checked = false; 
           }



 }

 



 


