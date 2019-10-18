
//gibt Liste zurück
function getlist() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Items").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "https://shopping-lists-api.herokuapp.com/api/v1/lists/5d9c7b9ee2d16f00178a5c6b", true);
    xhttp.send();
  }

//add
  function additem() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Items").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("POST", "https://shopping-lists-api.herokuapp.com/api/v1/lists/5d9c7b9ee2d16f00178a5c6b/items", true);
    xhttp.send();
  }

//remove item
function removeitem() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Items").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("DELETE", "https://shopping-lists-api.herokuapp.com/api/v1/lists/5d9c7b9ee2d16f00178a5c6b/items/ITEMID???", true);
    xhttp.send();
  }

  //update item
  function updateitem() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Items").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("PUT", "https://shopping-lists-api.herokuapp.com/api/v1/lists/5d9c7b9ee2d16f00178a5c6b/items/ITEMID???", true);
    xhttp.send();
  }