var add = document.getElementById('add');
var removeAll = document.getElementById('removeall');
var list = document.getElementById('list');

//remove All TODO

removeAll.onclick = function(){
    list.innerHTML = '';
}

//adding a neew list element

add.onclick = function(){
    addLis(list);
    document.getElementById('userinput').Value = '';
    document.getElementById('userinput').focus();
}

function addLis(targetUl){
    var inputText = document.getElementById('userinput').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement('button');

  if(inputText !== ''){
      removeButton.className = 'btn btn-xs btn-danger';
      removeButton.innerHTML = ' &times ';
      removeButton.setAttributes('onclick' ,'removeMe(this)');
    
      li.appendChild(textNode);
      li.appendChild(removeButton);
      targetUl.appendChild(li);                                 
  }else{
    alert("Please Enter A TODO");
}
}
function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
} 
