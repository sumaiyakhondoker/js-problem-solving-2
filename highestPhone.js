const phones = [
    {name: 'samsung', price : 20000, camera : '12mp', color: 'black'},
    {name: 'xoami', price : 18000, camera : '12mp', color: 'black'},
    {name: 'oppo', price : 30000, camera : '12mp', color: 'black'},
    {name: 'Iphone', price : 100000, camera : '12mp', color: 'black'},
    {name: 'walton', price : 31000, camera : '12mp', color: 'black'},
    {name: 'HTC', price : 27000, camera : '12mp', color: 'black'},
];
function getHighestPhone(phones){
    let highest = phones[0];
    for(const phone of phones){
        if(phone.price > highest.price){
            highest = phone;
        }
    }
    return highest;
}

const highest = getHighestPhone(phones);
console.log("Highest phone is : ",highest);