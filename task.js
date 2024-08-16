function thingsQuantity(shirtQuantity, pantQuantity, shoeQuantity){
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    const shirtTotalPrice = shirtQuantity * perShirtPrice;
    const pantTotalPrice = pantQuantity * perPantPrice;
    const shoeTotalPrice = shoeQuantity * perShoePrice;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    return totalPrice; 
}

const price = thingsQuantity(5,5,5);
console.log("Total amount : ", price);









