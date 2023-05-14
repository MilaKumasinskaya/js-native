//примитивы
//number, string, boolean, null, undefined, NaN, Symbol, BigInt

//объекты
//object, array => данные
//function

//-более сложная структура
//-имеет свойства и методы
//-ссылочный тип данных


const user1 = {
    name: "Ann",
    age: 22,
    isStudent: false
}
// const user2 = user1
// user2.name = "Tor"
//  const user1Copy = {
//     name: user1.name,
//      age: user1.age,
//      isStudent: user1.isStudent
//  }
const user1Copy = {...user1} //спред оператор

user1Copy.name = "Alice"  //в user1 ничего не изменится

const users = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,

    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,

    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true,
    },
]
const users2 = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,

    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,

    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true,
    },
]
users.pop()
//делаем копию = вносим изменения в копию = используем копию с изменениями
const usersCopy = [...users]
usersCopy.pop()
console.log(users)
console.log(usersCopy)
console.log(usersCopy === users) //false

//C(R)UD
const newUser = {
    id: 5,
    name: "John",
    isStudent: true,
    isMarried: true
}
const addUsers = [...users, newUser] //добавили в массив новую сущность
// addUsers.push(newUsers)

const concatUsers = [...users, ...users2]
// users.concat(users2)

// const upd1Users = addUsers.map(user => (
//     if(user.name === "John"){
//         const copyUser = {...user}
//         copyUsers .isStudent = false
//
//         return copyUser
//     } else {
//         return user
//     }
// } )

const upd1Users = addUsers.map(user => user.name === "John" ? {...user, isStudent: false} : user)
console.log(upd1Users)
const upd2Users = upd1Users.map(user => ({...user, isMarried: true}))
console.log(upd2Users)

const deleteUsers = upd2Users.filter(user => user.id !==5)          //[] => true
console.log(deleteUsers)
console.log(upd2Users === deleteUsers)
console.log(upd2Users === upd1Users)
console.log({} === {})
console.log({} === {})
console.log({} === {})
