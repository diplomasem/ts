console.log("ji")

let x = 5;

if (x > 0) {
    console.log("x is positive");
} else {
    console.log("x is non-positive");
}

let y = 5;

if (y > 0) {
    console.log("x is positive");
} else if (y < 0) {
    console.log("x is negative");
} else {
    console.log("x is zero");
}

let z = 5;

switch (z) {
    case 1:
        console.log("x is 1");
        break;
    case 2:
    case 3:
        console.log("x is 2 or 3");
        break;
    default:
        console.log("x is something else");
}

let a = 5;

while (a > 0) {
    console.log(a);
    a--;
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let arr = [1, 2, 3];

for (let i in arr) {
    console.log(arr[i]);
}

let arr1 = [1, 2, 3];

for (let i of arr1) {
    console.log(i);
}

function square(num: number): number {
    return num * num;
}

console.log(square(5)); // 25
console.log(square(10)); // 100



