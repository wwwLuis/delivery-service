let total = 0;
let artikel;
let path = "/Bestellungen.json";
let bestellungenJson = [];
let check = true; 
let preisliste = []; 
let divright = document.getElementById("warenkorb"); 
let warenkorbbutton = document.getElementById("button1"); 



function warenkorb() {
  if (check == true) {
    for (let i = 0; i < 25; i++) {
      setTimeout(function() {
        document.getElementById("warenkorb").style.width = i + "%";
      }, i * 10);
    }
  
    setTimeout(function() {
      document.getElementById("Warenkorbbezeichnung").style.display ="block";
    }, 200);

    
}
}




function closeWarenkorb()
{
  document.getElementById("Warenkorbbezeichnung").style.display ="none"; 
    for (let i = 25; i >= 0; i--) {
      setTimeout(function() {
        document.getElementById("warenkorb").style.width = i + "%";
      }, (50 - i) * 10);
    }

  
}



function addBestellung(zutaten) {
  bestellungenJson.push(zutaten);
  localStorage.setItem("bestellungenJson", JSON.stringify(bestellungenJson));
}

function removeWarenkorb(itemId) {
  const index = bestellungenJson.findIndex(item => item.id === itemId);
  if (index !== -1) {
    bestellungenJson.splice(index, 1);
    preisliste.splice(index, 1);
    recalculateTotal();
    localStorage.setItem("bestellungenJson", JSON.stringify(bestellungenJson));
  }

  const elementToRemove = document.getElementById(itemId);
  if (elementToRemove) {
    elementToRemove.remove();
  }

}



function recalculateTotal() {
  total = 0;
  for (let i = 0; i < preisliste.length; i++) {
    total = total + preisliste[i]; 
  }
  const ausgabe = document.getElementById("ausgabe");
  ausgabe.innerHTML = total + "  " + "€";
}


function calculateBurger() {
  
  let zutatenburger = "";
  let gesamtpreis = 0; 
  let b = document.getElementsByClassName("burger");

  for (let index = 0; index < b.length; index++) {
    if (b[index].checked == true) {
      let price = parseFloat(b[index].getAttribute("value"));
      gesamtpreis = gesamtpreis + price; 

      let artikel = b[index].getAttribute("data-alt");
      zutatenburger = zutatenburger + artikel + ", ";
    }
  }
  preisliste.push(gesamtpreis);  
  total = total + gesamtpreis;
 
  const artikelausgabe = document.getElementsByClassName("atrikeleinkauf");
  
  const itemId = "div-" + Date.now();
  const neuerEintrag = document.createElement("div");
  neuerEintrag.setAttribute("id", itemId);
  neuerEintrag.setAttribute("class", "div");
  
  const heading = document.createElement("a");
  heading.setAttribute("class", "heading");
  heading.innerText = "Burger: ";
  neuerEintrag.appendChild(heading);

  const inhalt = document.createTextNode("  " + zutatenburger + " " +  " " + gesamtpreis  + "€" );
  neuerEintrag.appendChild(inhalt);

  const umbruch = document.createElement("br");
  neuerEintrag.appendChild(umbruch);

  const entfernen = document.createElement("button");
  const bild = document.createElement("img");
  entfernen.setAttribute("class", "entfernbutton");
  bild.setAttribute("src", "Bilder/mulleimer.png");
  bild.setAttribute("class", "entfernenBild");
  entfernen.appendChild(bild);
  neuerEintrag.appendChild(entfernen);

  artikelausgabe[0].appendChild(neuerEintrag);

  entfernen.addEventListener("click", function() {
    removeWarenkorb(itemId);
    
  });

  addBestellung({ id: itemId, "Burger": zutatenburger });
 
 

  const ausgabe = document.getElementById("ausgabe");
  ausgabe.innerHTML = total + "  " + "€";

  let uncheck = document.getElementsByClassName("burger");
  for (let i = 0; i < uncheck.length; i++) {
    uncheck[i].checked = false;
  }

  
}


function valiatePizza(){
  let b = document.getElementsByName("select-pizza");
  let test = false; 
  for (let index = 0; index < b.length; index++) {
    if(b[index].checked)
    {
       test = true; 
      
    }
  }
    if(test == false)
    {
      let errormessage = document.getElementById("errormessage"); 
      errormessage.style.display ="block"; 
      errormessage.style.color = "red";
    
      errormessage.innerText = "Bitte Wählen Sie Mindestens EINE Zutat aus"; 
    }else
    {
      calculatePizza(); 
      document.getElementById("errormessage").style.display ="none"; 
    }
  
}

function valiateBurger()
{
  let b = document.getElementsByName("select-Burger");
  let test = false; 
  for (let index = 0; index < b.length; index++) {
    if(b[index].checked)
    {
       test = true; 
      
    }
  }
    if(test == false)
    {
      let errormessage = document.getElementById("errormessageburger"); 
      errormessage.style.display ="block"; 
    
      errormessage.innerText = "Bitte Wählen Sie Mindestens EINE Zutat aus"; 
    }else
    {
      calculateBurger(); 
      document.getElementById("errormessageburger").style.display ="none"; 
    }
}


function valiateSushi()
{
  let b = document.getElementsByClassName("sushi");
  let test = false; 
  for (let index = 0; index < b.length; index++) {
    if(b[index].checked)
    {
       test = true; 
      
    }
  }
    if(test == false)
    {
      let errormessage = document.getElementById("errormessagesushi"); 
      errormessage.style.display ="block"; 
      errormessage.style.color = "red";

      errormessage.innerText = "Bitte Wählen Sie Mindestens EIN Produkt aus"; 
    }else
    {
      calculateSushi(); 
      document.getElementById("errormessagesushi").style.display ="none"; 
    }
}
//Pizza
function calculatePizza() {
  
  let zutatenpizza = "";
  let gesamtpreis = 0; 
  let b = document.getElementsByClassName("pizza");

  for (let index = 0; index < b.length; index++) {
    if (b[index].checked == true) {
      let price = parseFloat(b[index].getAttribute("value"));
      gesamtpreis = gesamtpreis + price; 

      let artikel = b[index].getAttribute("data-alt");
      zutatenpizza = zutatenpizza + artikel + ", ";
    }
  }
  preisliste.push(gesamtpreis);  
  total = total + gesamtpreis;
 
  const artikelausgabe = document.getElementsByClassName("atrikeleinkauf");
  
  const itemId = "div-" + Date.now();
  const neuerEintrag = document.createElement("div");
  neuerEintrag.setAttribute("id", itemId);
  neuerEintrag.setAttribute("class", "div");
  
  const heading = document.createElement("a");
  heading.setAttribute("class", "heading");
  heading.innerText = "Pizza: ";
  neuerEintrag.appendChild(heading);

  const inhalt = document.createTextNode("  " + zutatenpizza + " " +  " " + gesamtpreis  + "€" );
  neuerEintrag.appendChild(inhalt);

  const umbruch = document.createElement("br");
  neuerEintrag.appendChild(umbruch);

  const entfernen = document.createElement("button");
  const bild = document.createElement("img");
  entfernen.setAttribute("class", "entfernbutton");
  bild.setAttribute("src", "Bilder/mulleimer.png");
  bild.setAttribute("class", "entfernenBild");
  entfernen.appendChild(bild);
  neuerEintrag.appendChild(entfernen);

  artikelausgabe[0].appendChild(neuerEintrag);

  entfernen.addEventListener("click", function() {
    removeWarenkorb(itemId);
    
  });

  addBestellung({ id: itemId, "Pizza": zutatenpizza });
 

  const ausgabe = document.getElementById("ausgabe");
  ausgabe.innerHTML = total + "  " + "€";

  let uncheck = document.getElementsByClassName("pizza");
  for (let i = 0; i < uncheck.length; i++) {
    uncheck[i].checked = false;
  }

  
}
//Döner
function calculateDoner() {
  
  let zutatendoner = "";
  let gesamtpreis = 0; 
  let b = document.getElementsByClassName("doner");

  for (let index = 0; index < b.length; index++) {
    if (b[index].checked == true) {
      let price = parseFloat(b[index].getAttribute("value"));
      gesamtpreis = gesamtpreis + price; 

      let artikel = b[index].getAttribute("data-alt");
      zutatendoner = zutatendoner + artikel + ", ";
    }
  }
  preisliste.push(gesamtpreis);  
  total = total + gesamtpreis;
 
  const artikelausgabe = document.getElementsByClassName("atrikeleinkauf");
  
  const itemId = "div-" + Date.now();
  const neuerEintrag = document.createElement("div");
  neuerEintrag.setAttribute("id", itemId);
  neuerEintrag.setAttribute("class", "div");
  
  const heading = document.createElement("a");
  heading.setAttribute("class", "heading");
  heading.innerText = "Döner: ";
  neuerEintrag.appendChild(heading);

  const inhalt = document.createTextNode("  " + zutatendoner + " " +  " " + gesamtpreis  + "€" );
  neuerEintrag.appendChild(inhalt);

  const umbruch = document.createElement("br");
  neuerEintrag.appendChild(umbruch);

  const entfernen = document.createElement("button");
  const bild = document.createElement("img");
  entfernen.setAttribute("class", "entfernbutton");
  bild.setAttribute("src", "Bilder/mulleimer.png");
  bild.setAttribute("class", "entfernenBild");
  entfernen.appendChild(bild);
  neuerEintrag.appendChild(entfernen);

  artikelausgabe[0].appendChild(neuerEintrag);

  entfernen.addEventListener("click", function() {
    removeWarenkorb(itemId);
    
  });

  addBestellung({ id: itemId, "Döner": zutatendoner });


  const ausgabe = document.getElementById("ausgabe");
  ausgabe.innerHTML = total + "  " + "€";

  let uncheck = document.getElementsByClassName("doner");
  for (let i = 0; i < uncheck.length; i++) {
    uncheck[i].checked = false;
  }

  
}

function calculateSushi() {
  
  let zutatensushi = "";
  let gesamtpreis = 0; 
  let b = document.getElementsByClassName("sushi");

  for (let index = 0; index < b.length; index++) {
    if (b[index].checked == true) {
      let price = parseFloat(b[index].getAttribute("value"));
      gesamtpreis = gesamtpreis + price; 

      let artikel = b[index].getAttribute("data-alt");
      zutatensushi = zutatensushi + artikel + ", ";
    }
  }
  preisliste.push(gesamtpreis);  
  total = total + gesamtpreis;
 
  const artikelausgabe = document.getElementsByClassName("atrikeleinkauf");
  
  const itemId = "div-" + Date.now();
  const neuerEintrag = document.createElement("div");
  neuerEintrag.setAttribute("id", itemId);
  neuerEintrag.setAttribute("class", "div");
  
  const heading = document.createElement("a");
  heading.setAttribute("class", "heading");
  heading.innerText = "Sushi: ";
  neuerEintrag.appendChild(heading);

  const inhalt = document.createTextNode("  " + zutatensushi + " " +  " " + gesamtpreis  + "€" );
  neuerEintrag.appendChild(inhalt);

  const umbruch = document.createElement("br");
  neuerEintrag.appendChild(umbruch);

  const entfernen = document.createElement("button");
  const bild = document.createElement("img");
  entfernen.setAttribute("class", "entfernbutton");
  bild.setAttribute("src", "Bilder/mulleimer.png");
  bild.setAttribute("class", "entfernenBild");
  entfernen.appendChild(bild);
  neuerEintrag.appendChild(entfernen);

  artikelausgabe[0].appendChild(neuerEintrag);

  entfernen.addEventListener("click", function() {
    removeWarenkorb(itemId);
    
  });

  addBestellung({ id: itemId, "Sushi": zutatensushi });


  const ausgabe = document.getElementById("ausgabe");
  ausgabe.innerHTML = total + "  " + "€";

  let uncheck = document.getElementsByClassName("sushi");
  for (let i = 0; i < uncheck.length; i++) {
    uncheck[i].checked = false;
  }

  
}

function storage()
{
  const data = localStorage.getItem("bestellungenJson");
  if (data) {
    bestellungenJson = JSON.parse(data);
  
  }

}

function resetStorage() {
  bestellungenJson = [];
  localStorage.removeItem("bestellungenJson");
 
}

function sendToServer()
{
  fetch("/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bestellungenJson),
  })
  .then(function(response) {
    return response.text();
  })
  .catch(function(err) {
    console.log("Fehler bei response");
  });

  

}

function weiterleiten()
{
  window.open("Lieferdateien.html","_self"); 
}

function linkToLogin()
{
  window.open("Login.html","_self"); 
}

function valiateKaufen()
{
  if(total != 0)
  {
    weiterleiten(); 
  }
  
}

function getAdresse() {
  let felder = []; 
  let adresse = ""; 
  for(i = 1; i <  5; i++) {
    felder[i] = document.getElementById("feld"+i).value; 
    adresse = adresse + ", " + felder[i]; 
  }
  
  bestellungenJson.unshift({ "BestellID": "ID-" + Date.now() });
  addBestellung({"Adresse": adresse});
  

}


function valiate()
{
    let pflichtfelder = document.getElementsByName("pay"); 
    let ausgabe = document.getElementById("output");
    let payment = document.getElementsByClassName("radio"); 
    let main = document.getElementById("main"); 
    let end = document.getElementById("end");
      
   
   let isValid = true; 
    pflichtfelder.forEach(pflichtfelder => {
      if (pflichtfelder.value.trim() === '') {
        isValid = false;
      }
   });

   if(isValid){
  
      main.style.display = "none"; 
      end.style.display = "block"; 
  
      getAdresse(); 
      sendToServer(); 
      resetStorage(); 
      setTimeout(function() {
        window.open("/","_self"); ;
      },1000);
      
      

   }
   if(!isValid){
      ausgabe.innerHTML="Bitte alle Pflichtfelder (*) ausfüllen"
      ausgabe.style.color = "red"; 
   }



}

window.addEventListener("load", function() {
  storage();

});





