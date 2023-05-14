const name1 = ['Bob', 'Alex', 'Donald']
console.log(name1.sort())
//1. сортирует строки из "коробки", т.е. бкз доп параметров

const name2 = ['Donald', 'aLEX', 'Alex', 'alex', 'игорь', 'Юрий']
console.log(name2.sort())
//2. сортирует строки типа по алфавиту (unicode)

console.log(name1)
//3. работает мутабельно(сортирует массив на месте)

console.log(name1.sort() === name1)  // true
//4. возвращает ссылку на исходный массив

const numbers = [1000, 8957, 4, -1, -4, 22]
console.log(numbers.sort())
//5. для остальных случаев необходимо передать функцию сравнения (callback)

// const compareFunc = (a, b) => { //по возрастанию
// // > 0 надо переставить
//     // <= 0 порядок не меняем
//     if (a > b) {
//         return 999
//     }else{
//         return -1
//     }
// }

const compareFunc = (a, b) => a - b
console.log(numbers.sort(compareFunc))
//6. функция сравнения должна возвращать число большее или меньшее 0

console.log(numbers.reverse())
//7. вместе с sort часто пишут reverse

let students = [
    {
        name: 'bob',
        age: 25,
        isMarried: true,
        scores: 85,
    },
    {
        name: 'Viktor',
        age: 15,
        isMarried: false,
        scores: 35,
    },
    {
        name: 'Lena',
        age: 19,
        isMarried: true,
        scores: 67,
    },
    {
        name: 'PAVEL',
        age: 30,
        isMarried: true,
        scores: 100,
    }
];

const sortByName = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
    } else {
        return -1
    }
}
console.log(students.sort(sortByName))
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
//8. сортировка массива объектов по строковым значениям

console.log(students.sort((a, b) => a.age - b.age))
//9. сортировка массива объектов по числовым значениям

// bubble sort
const nums = [23, 45, 12, 11, 99, 34]
for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true;
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            // let temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
        }
    } if (isSorted) break;
}
console.log(nums)


