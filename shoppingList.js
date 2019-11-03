var input = document.getElementById("myInput");


document.getElementById("listSelect").addEventListener('change', function(event) {
  console.log(event.target.value); //// Get ID of list, if LISTSELECT changes
  getList(event.target.value);
});


//Checkbox
document.addEventListener('change', function (e) {

    if (e.target.name === 'checkItems') {
      if (e.target.checked) {
        e.target.parentNode.className = 'selected';
        setTimeout(function() {
          removeItem(e.target.id);        //löscht Item wenn angekreuzt nach 3 sek
        }, 3000);
      } else {
        e.target.parentNode.className = '';
      }
    }
});

function showItemLists(lists) {  //gibt ausgewählte Liste aus
 
  var id = loadListId();   // aktuelle Listen ID
  var select = document.getElementById("listSelect");
  var html = '';          //String
  lists.forEach(list => {  //speichert ID auch bei Refresh
    if (!id) {              // + Liste 1 laden
      id = list._id;
      storeListId(id);
    }
    var selected = id === list._id ? true : false;    //...und fügt Listenitems hinzu
    if (selected) {
      addItemList(list);
    }
    html += '<option selected="'+selected+'" value="'+list._id+'">'+list.name+'</option> ';
  });
  select.innerHTML = html;
}

function addItemList(list) {
  var div = document.getElementById("item-list");
  var html  = "";
  list.items.forEach(item => {
    html +=  '<label><input name="checkItems" id="'+item._id+'" type="checkbox" /><span class="checkbox-ghost"> </span>'+item.name+'</label>';
  });
  div.innerHTML = html;
}


// Execute a function when the user presses Enter on the keyboard
input.addEventListener("keydown", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.which == 13 || event.keyCode == 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    addItem(input.value);
  }
});
