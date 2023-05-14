let students = [
    {
        name: 'Bob',
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
        name: 'Pavel',
        age: 30,
        isMarried: true,
        scores: 100,
    }
];

//C => [..., newStudent]
//R => map (obj => JSX elements)
//U => map (conditional mapping: obj => updObj)
//D => filter
const getName = st => st.name
const getNames = (array) => {
    const result = new Array()
    const getName = st => st.name
    for (let i=0; i<array.length; i++) {
        const newValue = getName(array[i])
        result[i] = newValue
    }
    return result
}
const getScores =(array) => {
    const result = new Array()
    const getStScores = st => st.scores
    for (let i=0; i<array.length; i++) {
        const newValue = getStScores(array[i])
        result[i] = newValue
    }
    return result
}
const sMap = (array, func) => {
    const result = []
    for (let i=0; i<array.length; i++) {
        const newValue = func(array[i])
        result[i] = newValue
    }
    return result
}
console.log(students.map(getName))
console.log(sMap(students, getName))
function sFilter (func) {
    const result = []
    for (let i=0; i<this.length; i++) {
        if(func(this[i]) === true){
            result.push(this[i])
        }
    }
    return result
}
Array.prototype.sFilter = sFilter


console.log(students.sFilter( st => st.scores >= 100))
console.log(students.filter(st => st.scores >= 100))

const sPop = (array) => {
    let lastElement = array[array.length-1]
    array.length = array.length-1

    return lastElement
}
console.log(sPop(students))
console.log(students.length)
console.log(students[students.length-1])

const arr =[1, 2, 3, 4]

const sJoin = (array, s) => {
    let result = array[0]
    for (let i = 1; i < array.length; i++){
        result += (s + array[i]);
    }
    return result;
}
console.log(sJoin(arr, ' '))
