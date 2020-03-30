// you can write js here

console.log('exo-5');

let input = 'Lorem ipsum dolor sit amet.';
let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
    // console.log(input.charAt(i));
    // console.log(vowels.indexOf(input.charAt(i)));
    for (let j = 0; j < vowels.length; j++) {
        if (input.charAt(i) === vowels[j]) {
            // let addresultArray = //
            resultArray.push(input.charAt(i));
        }
    }
}
console.log(resultArray.join('').toUpperCase());