const disha = 56;
const salman = 96;
if(disha > salman){
    console.log("disha will eat the strawberry");

}
else{
    console.log("salman will eat the strawberry");
}

// inside a function 
function getMax(num1,num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getMax(56,96);
const max2 = getMax(98,49);
const ultimateMax = getMax(max1,max2);
console.log("Max of two is: ",ultimateMax)