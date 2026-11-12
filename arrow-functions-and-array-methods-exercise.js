const numbers = [1,2,3,4,5]
//Question 1
const numbersSquared = numbers.map(num => num * num)
console.log(numbersSquared)
//Question 2
const numbersGreaterThan2 = numbers.filter(num => num >2)
console.log(numbersGreaterThan2)
//Question 3
numbers.forEach( number => console.log(number))
//Question 4
const numberThree = numbers.find ( number => number % 3 === 0)
console.log (numberThree)
//Question 5
const numberGreaterThanTwo = numbers.filter(num => num > 2)
const numberGreaterThanTwoSquared = numberGreaterThanTwo.map(num => num * num)
console.log(numberGreaterThanTwoSquared)