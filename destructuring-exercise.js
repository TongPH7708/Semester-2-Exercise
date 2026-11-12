const student = {
    id: '101',
    name: 'John Doe',
    courses: ['Math', 'English', 'Science'],
    parents: {
        father: 'Mr. Doe',
        mother: 'Mrs. Doe'
    }
};

const {id, name, courses} = student
const {parents: {father, mother}} = student

console.log(id)
console.log(name)
console.log(courses)
console.log(father)
console.log(mother)

const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6];
const arr3 = [ ...arr1, ...arr2]
const arr4 = [...arr1]

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [one, two, three, four, five] = numbers
const [six, seven, eight, nine] = numbers
const firstHalf = [one, two, three, four, five]
const secondHalf = [six, seven, eight, nine]
console.log(firstHalf)
console.log(secondHalf)

const numbero = [1,2,3];
function sum (a, b, c){
    return a+ b+ c
}

console.log(sum(...numbero))