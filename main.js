
// SZUKANIE ZADAŃ

const search = document.querySelector('.finder input')
const searchUl = document.querySelector('.finder ul')
const searchLiElements = document.querySelectorAll('.finder li')

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase()
    let tasks = [... searchLiElements]

    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
    //console.log(tasks)
    searchUl.textContent=""
    tasks.forEach(li => searchUl.appendChild(li))
}

search.addEventListener('input', searchTask)

//  DODAWANIE ZADAŃ

const addBtn = document.querySelector('.tasks button')
const addInput = document.querySelector('.tasks input')
const ulTasks = document.querySelector('.tasks ul')

const addTask = (e) => {
    e.preventDefault()
    const titleTask = addInput.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.innerHTML = titleTask + ' <button>Zrobione!</button>'
    ulTasks.appendChild(task)
    console.log("Gotowe!")
    addInput.value=""

    actPlus ()
}
addBtn.addEventListener('click', addTask)

// DODAWANIE Z LISTY

const buttonsAdd = document.querySelectorAll('.finder button')

const addFromList = (e) => {
    let text = e.target.parentNode.textContent.replace('Dodaj do listy ','')
    // text =text.replace('Dodaj do listy ','')
    // console.log(text)
    const task = document.createElement('li');
    task.innerHTML = text + '<button>Zrobione!</button>'
    ulTasks.appendChild(task)
    console.log("Gotowe!")
    
    actPlus ()
}

buttonsAdd.forEach(button => button.addEventListener('click', addFromList))

// LICZNIK ZADAŃ

let count = 0
const span = document.querySelector('span')
//span.textContent = count

// FAJKOWANIE ZADAŃ

let buttonsRemove = [...document.querySelectorAll('.tasks ul button')]

const remove = (e) => {
   
    console.log(e.target.parentNode)
    e.target.parentNode.style.textDecoration = 'line-through'
    e.target.remove()
    //e.target.parentNode.textContent.replace('Zrobione!','')
    
    actMin()
}

buttonsRemove.forEach(button => button.addEventListener('click', remove))

// AKTUALIZOWANIE DANYCH

const actPlus = function () {
    buttonsRemove = [...document.querySelectorAll('.tasks ul button')]
    buttonsRemove.forEach(button => button.addEventListener('click', remove))
    span.textContent = ++count
}

const actMin = function () {
    buttonsRemove = [...document.querySelectorAll('.tasks ul button')]
    span.textContent = --count
}