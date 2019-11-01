//gibt Liste zurück

var serverUrl = "https://shopping-lists-api.herokuapp.com";
var apiKey = "69847ae2d173f7ea582485a659a88883";

/*
GET /api/v1/lists
Authorization: <API Key>
*/
function getAllLists() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
  
        var lists = JSON.parse(this.responseText);
        showItemLists(lists);
        // document.getElementById("Items").innerHTML = antwort._id; //.name //.items
      }
    };
    xhttp.open("GET", serverUrl + "/api/v1/lists/", true);
    xhttp.setRequestHeader('Authorization', apiKey);
    xhttp.send();
}


function getList(id) {
    storeListId(id);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
  
        var list = JSON.parse(this.responseText);
        addItemList(list);
        // document.getElementById("Items").innerHTML = antwort._id; //.name //.items
      }
    };
    xhttp.open("GET", serverUrl + "/api/v1/lists/" + id, true);
    xhttp.send();
}
 
//add
/*
POST /api/v1/lists/<listid>/items
Content-Type: application/json

{ "name": "" }
*/
function addItem(value) {
    var id = loadListId();
    var xhttp = new XMLHttpRequest();
    var jsonObject= {"name" : value };
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var list = JSON.parse(this.responseText);
        addItemList(list);
      }
    };
    xhttp.open("POST", serverUrl + "/api/v1/lists/"+id+"/items", true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(jsonObject));
  }
  
//remove item
function removeItem(id) {
    var listId = loadListId();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var list = JSON.parse(this.responseText);
        addItemList(list);
      }
    };
    xhttp.open("DELETE", serverUrl + "/api/v1/lists/"+listId+"/items/"+id , true);
    xhttp.send();
  }

  
//update item
function updateItem(value) {
  var listId = loadListId();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var list = JSON.parse(this.responseText);
      addItemList(list);
      }
    };
    xhttp.open("PUT", serverUrl + "/api/v1/lists/"+listId+"/items/"+id, true);
    xhttp.send();
  }
  
  
function storeListId(id) {
    localStorage.setItem('ListId', id);
  }
  
  function loadListId() {
    return localStorage.getItem('ListId');
  }

  getAllLists();
  