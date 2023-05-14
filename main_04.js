const td_1 = 'qw-34'
const td_2 = 'qw-35'

const todoList = [
    {
        id: td_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: td_2,
        title: 'What to buy',
        filter: 'all',
    }
]
// ассоциативный массив, в качестве ключа можем использовать название переменной в []
const tasks = {
    [td_1]: [
        {id: 1, title: 'HTML', isDone: false},
        {id: 2, title: 'CSS', isDone: false},
        {id: 3, title: 'JS/TS', isDone: false},
    ],
    [td_2]: [
        {id: 4, title: 'bread', isDone: false},
        {id: 5, title: 'milk', isDone: false},
        {id: 6, title: 'sugar', isDone: false},
    ],
}
console.log(tasks[td_1])
console.log(tasks[td_1].filter(t => t.id !== 2))
console.log([...tasks[td_1], {id: 10, title: 'New task', isDone: false}])
const addTodoList = (title) => {
    const td_id = 'kf-75'
    const newTodo = {
        id: td_id,
        title: title,
        filter: 'all'
    }
    const updatedTodos = [...todoList, newTodo]
    console.log(updatedTodos)

    const copyTasks = {...tasks, [td_id]: []}
    console.log(copyTasks)
}

addTodoList('What I want')

// reduce: array => acc value

const array = [2,3,4,6,7]

const  result = array.reduce((acc, el) => acc + el, 0)

// 0, 2 => 2
// 2, 3 => 5
// 5, 4 => 9
// 9, 6 => 15
// 15, 7 => 22
// => 22
console.log(result)

const  max = array.reduce((acc, el) => acc >= el ? acc : el)
console.log(max)
// 2, 3 => 3