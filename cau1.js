let numbers = [2, 4 ,1, 3, 7, 8, 9, 10, 5, 6];
let max1 = numbers[0];
let index1 = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max1) {
        max1 = numbers[i];
        index1 = i;
    }
}
numbers[index1] = 0;

let max2 = numbers[0];
let index2 = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max2) {
        max2 = numbers[i];
        index2 = i;
    }
}
numbers[index2] = 0;

let max3 = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max3) {
        max3 = numbers[i];
    }
}
alert("Điểm số lớn thứ 3 là: " + max3);
