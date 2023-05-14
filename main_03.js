// если произойдёт "то-то", выполни "это"
// "то-то" = событие
// "это" = функция
// callback => методы массивов, setTimeout & setInterval, обработка событий в браузере
// обработка событий в браузере => обработчик, слушатель, подписчик
// handler, listener, subscriber
// событие => создание объекта, который содержит сведения о событии (объект): event/ev/e =>
// handler(event)
// event => объект стандартного вида для каждого типа события


const sm = document.getElementById("small")

const handler1 = (e) => {
    e.stopPropagation()
    alert('Click')
}

sm.onclick = handler1
sm.onclick = null

const handler2 = () => {
    alert('Yo')
}

sm.onclick = handler2
sm.onclick = handler1
sm.onclick = null

sm.addEventListener('click', handler1)
sm.addEventListener('click', handler2)
// sm.addEventListener('click', () => alert('Hey'))
const handler3 = () => alert('Hey')
sm.addEventListener('click', handler3)

sm.removeEventListener('click', handler1)
sm.removeEventListener('click', handler2)
sm.removeEventListener('click', handler3)

const handler4 = (e) => console.log(e.currentTarget)
// sm.addEventListener('click', handler4)

const md = document.getElementById('medium')
const bg = document.getElementById('big')

// md.addEventListener('click', handler1)
// bg.addEventListener('click', handler2)

// sm.addEventListener('click', (e)=> {
//     e.stopPropagation()
//     if(e.currentTarget.id === 'small') {
//         alert('yo')
//     }
// })
sm.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        alert(e.target.id)
    }
})

const a = document.getElementById('a')
a.addEventListener('click', (e)=>{
    e.preventDefault()
    alert('ha-ha')
})