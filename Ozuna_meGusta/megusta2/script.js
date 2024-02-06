
function countLikes(element){
    let likes= element.previousElementSibling.previousElementSibling.innerText;
    likes++;
    console.log(likes);
    
    if(likes>1){
        element.previousElementSibling.innerText="likes";
    }else{
        element.previousElementSibling.innerText="like";
    }
    
    element.previousElementSibling.previousElementSibling.innerText= likes;
    
}





