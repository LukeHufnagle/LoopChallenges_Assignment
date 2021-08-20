//Print odds 1-20
for(i=0;i<=20;i++){
    if(i % 2 != 0){
        console.log(i)
    }
    else{
        console.log(" ")
    }
}

//Decrease multiples of 3 100-0
for(i=100;i>=0;i--){
    if(i % 3 == 0){
        console.log(i)
    }
    else{
        console.log(" ")
    }
}

//Print the sequence 4,2.5,1,-0.5,-2,-3.5
var arr = [4,2.5,1,-0.5,-2,-3.5];

for(i=0;i<=arr.length;i++){
    console.log(arr[i]);
}

//Write code that will add all the values from 1-100 onto variable sum
total = 0;
for(i=0;i<=100;i++){
    total += i;
}
console.log(total);

//Write code that will multiply all the values from 1-12
total = 1;
for(i=1;i<=12; i++){
    total *= i;
}
console.log(total);
