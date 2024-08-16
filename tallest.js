const heights = [65,75,80,60,69,78,62,66];
function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
       if(num > max){
        max = num;
       }
    }
    return max;

}
const max = getMax(heights);
console.log("max value is : ",max);