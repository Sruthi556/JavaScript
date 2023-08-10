const boolean=true

if(!boolean)
{
    console.log("Condition Satisfied")
}
else{
    console.log("Condition Not Satisified")
}




//while(true)
//{
    //console.log("I am inside Loop")
//}
i=0
while(i>10){
    i++
    console.log(i)
}

do{
    i++
}while(i>10);
console.log(i)


for(let k=0;k<10;k++){
    console.log(k)
}


console.log("*********************************")
let n=0
for(let j=1;j<100;j++)
{
    if(j%2==0 && j%5==0){
        n++
        console.log(j)
        if(n==3)
        break
    }
}