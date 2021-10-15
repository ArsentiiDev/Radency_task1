
export function addlToLocalStorage(name,date,category,content,dates,id) {
    let todos 
    if(localStorage.getItem('todos') === null){
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    let item = [name,date,category,content,dates,id]
    todos.push(item)
    localStorage.setItem('todos',JSON.stringify(todos))
}

export function removefromLocalStorage(item){
    let todos 
    if(localStorage.getItem('todos') === null){
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    console.log(item.id)
    todos = todos.filter(el=>{
        return el[5] !== item.id 
    })
    console.log(todos)
    localStorage.setItem('todos',JSON.stringify(todos))
}