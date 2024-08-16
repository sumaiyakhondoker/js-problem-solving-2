/**Task - 1
 * Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

/**
const heights2 = [167, 190, 120, 165, 137];
function getLowestNumber(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const result = getLowestNumber(heights2);
console.log(result)

 */


/**
 * Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

/**
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function getSmallestName(names){
    let smallest = names[0];
    for(const name of names){
       if(name.length < smallest.length){
        smallest = name;
       }
    }

    return smallest;
}

const result = getSmallestName(heights2);
console.log(result)

 */


/**
 * Task-3:
Your task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */
/**

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    
    const laptopPriceTotal = laptopPrice * laptopQuantity;
    const tabletPriceTotal = tabletPrice * tabletQuantity;
    const mobilePriceTotal = mobilePrice * mobileQuantity;
    const total = laptopPriceTotal + tabletPriceTotal + mobilePriceTotal;
    return total;
}

const total = calculateElectronicsBudget(5,4,3);
console.log("Total budget required : ",total);
 */

/**
 * Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

 */
/**

    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function findAveragePhonePrice(phones){
        let total = 0;
        const count = phones.length;
        for(const phone of phones){
            total = total + phone.price;
        }
        const avg = total / count;
        return avg;
    }

    const avg = findAveragePhonePrice(phones);
    console.log("the average price of phone is : ",avg);

 */


/**Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
     */

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    ];

    function getTotalSalary(employees){
        let totalSalary = 0;
        for(const employee of employees){
            const employeeStartingSalary = employee.starting;
            const totalIncrements = employee.experience * employee.increment; 
            employeeTotalSalary = employeeStartingSalary + totalIncrements;
            // console.log(employeeTotalSalary)
            totalSalary = totalSalary + employeeTotalSalary;
            
        }
        return totalSalary;
    }

    const totalSalary = getTotalSalary(employees);
    console.log("Total salary have to given : ",totalSalary)

    