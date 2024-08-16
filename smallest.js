const heights = [65,75,80,60,69,78,62,66,45];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const min = getMin(heights);
console.log("Min value is : ", min);