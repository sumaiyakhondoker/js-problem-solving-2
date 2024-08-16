const phones = [
    {name: 'samsung', price : 20000, camera : '12mp', color: 'black'},
    {name: 'xoami', price : 18000, camera : '12mp', color: 'black'},
    {name: 'oppo', price : 30000, camera : '12mp', color: 'black'},
    {name: 'Iphone', price : 100000, camera : '12mp', color: 'black'},
    {name: 'walton', price : 31000, camera : '12mp', color: 'black'},
    {name: 'HTC', price : 27000, camera : '12mp', color: 'black'},
];
function cheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
      if(phone.price < min.price){
        min = phone;
      }
    }
    return min;
}

const cheap = cheapestPhone(phones);
console.log("cheapest phone is : ", cheap)