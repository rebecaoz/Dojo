let likes=0;
let likesQuant= document.querySelector(".quantity");
//console.log(likesQuant);

function countLikes(){
    likes++;
    if(likes>1){
        likesQuant.innerText=likes+" likes";
    }else{
        likesQuant.innerText=likes+" like";
    }
    
}

