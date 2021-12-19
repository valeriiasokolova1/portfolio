const flowers = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];
// flowers[2]
console.log(flowers);

let total = 0;
let totalEven = 0;
let totalOdd = 0;
for (let i = 0; i < flowers.length ; i++) {
    // console.log(flowers[i]);
    // flowers[i] % 2 == 0
    if (flowers[i] % 2 == 0) {
      totalEven = totalEven + flowers[i];
    } else {
      totalOdd = totalOdd + flowers[i];
    }
    total = total + flowers[i];

}
console.log(totalEven, '+' , totalOdd, '=', total);
