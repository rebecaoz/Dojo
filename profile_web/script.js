let nombre= document.querySelector('.name');
let conectionsCount= document.querySelector('.conectionCount');
conectionsCount.innerText= document.querySelectorAll('.requests .friends-container .friends').length;
let urConections= document.querySelector('.ur-conections .friends-container');
let urConectionsCount= document.querySelector('.urConectionCount');
urConectionsCount.innerText= document.querySelectorAll('.ur-conections .friends-container .friends').length;
let quantity=conectionsCount.innerText;
let urQuantity=urConectionsCount.innerText;
//console.log(urConections.lastChild);


function editName(){
    nombre.innerText='John Doe';
}


function rejectFriend(element){
    //console.log(quantity);
    element.parentNode.remove();
    quantity--;
    conectionsCount.innerText=quantity;
}

function acceptFriend(element){
    let elemento= element.parentNode;
    elemento.lastChild.previousSibling.remove();
    urConections.innerHTML+='<div class="friends">'+element.parentNode.innerHTML+'</div>';
    element.parentNode.remove();
    quantity--;
    urQuantity++;
    conectionsCount.innerText=quantity;
    urConectionsCount.innerText= urQuantity;
    urConections.lastChild.lastChild.previousSibling.remove();
}



