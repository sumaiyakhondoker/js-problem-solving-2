// chair --> 3cft;
// table --> 10 cft;
// bed --> 50cft;
function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood; 
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood  = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;




}

const wood  = woodQuantity(6,1,2);
console.log("wood needed : ", wood)