const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
  { title: '1984', author: 'George Orwell', ratings: 4.7 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
  { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

const ratedBooks = books.filter(books => books.ratings >4)

console.log(ratedBooks)

const mappedBooks = books.map(books => books.title)
console.log(mappedBooks)

const foundBooks = books.find(books=> books.title === '1984')
console.log(foundBooks)

const sortedBooks = books.sort((a,b) => b.ratings-a.ratings)
console.log(sortedBooks)

const bestBook = books.filter(books => books.ratings >= 5)
const [{title}] = bestBook
console.log(...[title])