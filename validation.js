function multiply(num1,num2){
    if(typeof num1 !== 'number'){
        return "please provide a number."
    }
    const mult = num1 * num2;
    return mult;
}
// const result = multiply(7,'seven');
// console.log(result)

function fullname(first, second){
    if(typeof first !== 'string'){
        return 'First name should be a string';
    }
    else if(typeof second !== 'string'){
        return 'Second name should be a string';
    }
    const full = first + " " + second;
    return full;
}

const full = fullname('rimi','simi');
// console.log(full)


function getPrice(product){
if(typeof product !== 'object'){
    return 'please provide an object.'
}
const price = product.price;
return price;
}
// const price = getPrice({name:'powder', price : 55, color: 'white'});
const price = getPrice(5)
// console.log(price)


function getSecond(numbers){
    if(Array.isArray(numbers) === false){
return 'please provide an array';
    }
   const second = numbers[1];
   return second;
}

const result = getSecond(5);
console.log(result)