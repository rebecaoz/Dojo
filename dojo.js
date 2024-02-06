//print 1-255
function print1(){
    for(var i=0;i<=255;i++){
        console.log(i);
    }
}
//print1();

//print odd 1000
function printOdd(){
    for(var i=0;i<=1000;i++){
        if(i%2!=0){
            console.log(i);
        } 
    }
}
//printOdd();

//sum odd 500
var sum=0;
function sumOdd(){
    for(i=0;i<=500;i++){
        if(i%2!=0){
            sum+=i;
        } 
    }
    console.log(sum);
}
//sumOdd();

//Recorrer un arreglo
var arreglo=[2,3,5,7,11,13];

const recorrerArray= arr=> arr.forEach(element => {
    console.log(element);
});

//recorrerArray(arreglo);

//Find max
function findMax(arr){
    var aux=0;
    arr.forEach(element=>{
        if(element>aux){
            aux=element;
        }
    })
    console.log(aux);
}

//findMax(arreglo);


//Find Average


function average(arr){
    var suma=0;
    var contador=0;
    arr.forEach(element=>{
        suma+=element;
        contador++;
    })
    console.log(suma/contador);
}

//average(arreglo);
var msg="codingdojo"
for(var x=0;x<msg.length-2;x+=2){
    for(var i= msg.length;i>(msg.length-1);i-=2){
        console.log(i);
    }
}
