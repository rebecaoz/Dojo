let message="This page says \nLoading weather report...";
let cookie= document.querySelector('.cookie');
let maximas= document.querySelectorAll('.max');
console.log(maximas);

//console.log(valor.value);
function deleteCookie(){
    cookie.remove();
}

function changeTemp(element){
    let valor= element.value;
    console.log(valor);
    if(valor=='F'){
        for(element of maximas){
            let maxima=element.innerText;
            maxima = maxima.substr(0, maxima.length - 1);
            console.log(maxima);
            element.innerText= ((maxima* 9/5) + 32)+'°';
        }
    }else{
        for(element of maximas){
            let maxima=element.innerText;
            maxima = maxima.substr(0, maxima.length - 1);
            console.log(maxima);
            element.innerText= ((maxima - 32) * 5/9).toFixed(0) +'°';
        }
    }
    
    
}

