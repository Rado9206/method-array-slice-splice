const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2 = numbers.slice(0, 2)
console.log(`%cnumbers2:`, 'color:lime')
console.log(numbers2)

console.log(`   `)
console.log(`%cnumbers3:`, 'color:lime')
const numbers3 = numbers.slice(-3)
console.log(numbers3)

console.log(`   `)
console.log(`%ccolors:`, 'color:lime')
const randomStuff = colors.splice(-2)
console.log(colors) 

console.log(`   `)
console.log(`%crandomStuff:`, 'color:lime')
console.log(randomStuff)

console.log(`   `)
console.log(`%ccars:`, 'color:lime')
const newCars = cars.splice(2, 4, 'test')
console.log(cars)

console.log(`   `)
console.log(`%cnewCars:`, 'color:lime')
console.log(newCars)