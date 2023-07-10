function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    fetch("/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username':username,
        'password':password
      })
    })
    .then(response => response.json())
    .then((data) => {
      if (data) {
        let token = data.token;
        localStorage.setItem('jwtToken', token);
        window.location.href = "/orders";
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }