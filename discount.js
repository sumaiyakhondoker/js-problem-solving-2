// 0 to 100 tickets --price--> 100tk
// 101 - 200 -- price --> 90tk
// more than 200  -- price --> 70tk;
function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}
const total = discountedPrice(1000);
console.log(total);