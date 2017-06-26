for(var i = 1; i < 101; i++){
var li = document.createElement('li');
li.textContent = i + '回目';
document.getElementById('list').appendChild(li);
}

document.getElementById('form').onsubmit = function(){
window.alert(document.getELementById('form').word.value);
  return false;
};
