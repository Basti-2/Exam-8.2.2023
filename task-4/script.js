`use strict`

document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();
    let firstName = document.getElementById("fname").value;

    console.log("First name: " firstName);
    
    let lastName = document.getElementById("lame").value;
   

    console.log("Last name: " lastName);

  });
  