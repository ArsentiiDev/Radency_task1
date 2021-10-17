import { addToSumList } from "./addSumList"
import { icons } from "./helpers/Const"

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

export function getFromLocalStorage() {
const tableBody = document.getElementById("tbody");

    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    let listItems = todos.map((el) => {
      const icon = icons.hasOwnProperty(el[2])
        ? icons[el[2]]
        : `<i class="fas fa-times"></i>`;
      return `<tr class="d-flex ${el[2]}" id="${el[5]}">
      <td class="col-2 name">${icon}${el[0]}</td>
      <td class="col-2">${el[1]}</td>
      <td class="col-2 category">${el[2]}</td>
      <td class="col-3 content">${el[3]}</td>
      <td class="col-2">${el[4]}</td>
      <td class="ml-auto icons">
              <i class="fas fa-edit"></i>
              <i class="fas fa-trash"></i>
              <i class="fas fa-archive"></i>
            </td>
      </tr>`;
    });
    todos.forEach((el) => {
      addToSumList(el[2]);
    });
    let archivesobj = JSON.parse(localStorage.getItem("archives"));
    tableBody.insertAdjacentHTML("afterbegin", listItems.join(""));
    for (let archive in archivesobj) {
      if (!archivesobj[archive] == 0) {
        if (archive in sumListItems) {
          console.log("archive", archive);
          let target = sumList.getElementsByClassName(archive)[0];
          console.log("archive2", archive);
          target = target.getElementsByClassName("archiveCount")[0];
          target.innerHTML = archivesobj[archive];
        } else {
          addToSumList(archive);
          let archive = sumList.getElementsByClassName(archive)[0];
          let count = archive.getElementsByClassName("count")[0];
          archive = archive.getElementsByClassName("archiveCount")[0];
          archive.innerHTML = archivesobj[archive];
          count.innerHTML = 0;
        }
      }
    }
  }
  