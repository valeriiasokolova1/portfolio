let trafficLightColor = 'red';

if (trafficLightColor == 'green') {
    console.log('GO');
} else if (trafficLightColor == 'red') {
    console.log('STOP');
} else {
    console.log('what???');
}

for (let i = 0; i <= 10 ; i++) {
  console.log(i);
}

for (const a of ['aaa','bbb','ccc','ddd']) {
  console.log(a);
}

// console.log(10 % 2, 2 % 3);

function isEven(num) {
    return num % 2 == 0;
}



for (let i = 1; i <= 10; i++) {
     if (isEven(i) == true) {
     // if (num % 2 == 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

// "the same"
function sum(a, b) {
    return a + b;
}

const sum1 = (a, b) => {
    return a + b;
};
const sum2 = (a, b) => a + b;
// ---

console.log(sum(2, 400));

let s = 0;

for (let i = 0; i < 3; i++) {
    s = s + i;
}

console.log(s);
