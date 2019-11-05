//
var serverUrl = "https://shopping-lists-api.herokuapp.com";
var apiKey = "69847ae2d173f7ea582485a659a88883";
//
//
//
function getAllLists() {    //gibt Namen aller Listen zurück
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
  
        var lists = JSON.parse(this.responseText);
        showItemLists(lists);
      }
    };
    xhttp.open("GET", serverUrl + "/api/v1/lists/", true);
    xhttp.setRequestHeader('Authorization', apiKey);
    xhttp.send();
}
//
//
//
function getList(id) { //gibt ausgewählte Item-Liste aus
    storeListId(id);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
  
        var list = JSON.parse(this.responseText);
        addItemList(list);
      }
    };
    xhttp.open("GET", serverUrl + "/api/v1/lists/" + id, true);
    xhttp.send();
}
//
//
//
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
// 
//
//
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
/*
function updateItem() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Items").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("PUT", serverUrl + "/api/v1/lists/"+id+"/items/"+id , true);
    xhttp.send();
  }
*/
//
//
//
function addList(value) {       //legt neue Liste an
  var xhttp = new XMLHttpRequest();
  var jsonObject= {"name" : value };
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var list = JSON.parse(this.responseText);
      getList(list._id);
      getAllLists();          //lässt direkt neues DD-Menü anzeigen
    }
  };
  xhttp.open("POST", serverUrl + "/api/v1/lists/", true);
  xhttp.setRequestHeader('Content-type', 'application/json');
  xhttp.setRequestHeader('Authorization', apiKey);
  xhttp.send(JSON.stringify(jsonObject));
}
//
//  
//
function deleteList(id) {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getAllLists();        //lässt direkt neues DD-Menü anzeigen
    }
  };
  xhttp.open("DELETE", serverUrl + "/api/v1/lists/"+id, true);
  xhttp.setRequestHeader('Authorization', apiKey);
  xhttp.send();
}
//
// 
//set ID
function storeListId(id) {          //speichert ID im Programm
    localStorage.setItem('ListId', id);
  }
//get ID
  function loadListId() {
    return localStorage.getItem('ListId');
  }
//
//
//
  getAllLists();
