//verify token
function fetchProtectedContent() {
    let jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
        window.location.href = "/loginpage";
    }else
    {
      fetch("/protected", {
        method: "GET",
        headers: {
          "authorization": jwtToken
        }
      })
      .then(response => response.json())
      .then(data => {
        if(!data.valid){ 
          window.location.href = "/loginpage";
        }else{
          getData();
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }
  }

  function getData(){
    getOrders();
    getHistory();
  }
  
  //get the orders from json file and display them
  function getOrders(){
    let jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
        window.location.href = '/loginpage';
    }else
    {
      fetch("/getorders", {
        method: "GET",
        headers: {
          "authorization": jwtToken
        }
      })
      .then(response => response.json())
      .then(data => {
        let list = document.getElementById('orderlist');
        clear(list);
        for(let order of data.orderlist){
          let table = document.createElement('table');
          table.setAttribute('class','order');
          let tr = document.createElement('tr');
          let td = document.createElement('td');
          let cb = document.createElement('input');
          cb.setAttribute('type', 'checkbox');
          cb.setAttribute('class', 'checkbox');
          
          for(let segment of order){
            for(let key in segment){
              let value = segment[key];
              if(key=='BestellID'){
                table.setAttribute('id',value)
                cb.setAttribute('value', value);
              }
              let p = document.createElement('p');
              p.textContent=key+': '+value;
              td.appendChild(p);
            }
          }
          
          td.setAttribute('style','border: 1px solid black; width:35%')
          tr.appendChild(td);
          td = document.createElement('td');
          td.setAttribute('style','border: 1px solid black; width:5%')
          td.appendChild(cb);
          tr.appendChild(td);
          table.appendChild(tr);
          list.appendChild(table);

        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }
  }

//get the orderhistory from json file
function getHistory(){
    let jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
        window.location.href = '/loginpage';
    }else
    {
      fetch("/gethistory", {
        method: "GET",
        headers: {
          "authorization": jwtToken
        }
      })
      .then(response => response.json())
      .then(data => {
        let list = document.getElementById('orderhistory');
        clear(list);
        for(let order of data.orderhistory){
          let table = document.createElement('table');
          table.setAttribute('class','order');
          let tr = document.createElement('tr');
          let td = document.createElement('td');
          
          for(let segment of order){
            for(let key in segment){
              let value = segment[key];
              if(key=='BestellID'){
                table.setAttribute('id',value)
              }
              let p = document.createElement('p');
              p.textContent=key+': '+value;
              td.appendChild(p);
            }
          }
          
          td.setAttribute('style','border: 1px solid black; width:35%')
          tr.appendChild(td);
          table.appendChild(tr);
          list.appendChild(table);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }
  }

  //order processed
  function processed(){
    let checkboxes = document.getElementsByClassName('checkbox');
    let orderlist=[];
    for(let checkbox of checkboxes){
      if(checkbox.checked){
        orderlist.push(checkbox.value)
      }
    }
    fetch("/processed", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        'orderlist':orderlist
      })
    })
    .then(response => response.json())
    .then((data) => {
      getData();
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }
  
  //remove token
  function logout(){
    localStorage.removeItem('jwtToken');
    location.reload();
  }
  
  //clear div
  function clear(div){
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
  }

  //scroll up
  function scrollUp(){
    window.scrollTo(0,0)
  }