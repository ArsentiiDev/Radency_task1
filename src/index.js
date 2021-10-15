const submitBtn = document.getElementById("submit-btn");
const form = document.forms[0];
const tableBody = document.getElementById("tbody");
const sumList = document.querySelector(".sumList");
const todos = document.querySelector(".todos");
const filterSelect = document.getElementById('filter-select')

import './scss/styles.scss'
import {editBtnHandler, checkBtnHandler, archiveBtnHandler, trashBtnHandler} from './BtnHandlers'
import { addNote } from './addNote';
import { clearFields } from './utils';
//import { getFromLocalStorage } from './localStorage';


let categoryCount = 0;
export let archiveCount = 0;
const sumListItems = {};
export const archives = {}

const categories = {
  1: "Task",
  2: "Random Thought",
  3: "Idea",
  4: "Qoute",
};
const icons = {
  Task: `<i class="fas fa-tasks"></i>`,
  "Random Thought": `<i class="fas fa-brain"></i>`,
  Idea: `<i class="fas fa-lightbulb"></i>`,
  Qoute: `<i class="fas fa-quote-right"></i>`,
};

document.addEventListener("DOMContentLoaded", getFromLocalStorage);
filterSelect.addEventListener('click' , filterTodos)

function filterTodos(e){
  const todos = tableBody.childNodes
  switch (e.target.options[e.target.selectedIndex].text){
    case "All":{
      for(let i =0;i<todos.length-1;i++){
       todos[i].classList.remove('d-none')
       todos[i].classList.add('d-flex')
         
     }
      break;
    }
    case "Archived":{
      for(let i =0;i<todos.length-1;i++){
       
         if(!todos[i].classList.contains('archive'))
         {
           console.log('here')
          todos[i].classList.add('d-none')
         } else todos[i].classList.add('d-flex')
          
      }
      break;
    }
    case "Not Archived":{
      for(let i =0;i<todos.length-1;i++){
       
        if(!todos[i].classList.contains('archive'))
        {
          console.log('here')
         todos[i].classList.remove('d-none')
         todos[i].classList.add('d-flex')
        } else todos[i].classList.add('d-none')
         
     }
      break;
    }
  }

}


function getFromLocalStorage(){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  let listItems = todos.map(el=>{
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
    </tr>`
  })
  todos.forEach(el=>{
      addToSumList(el[2])
  })
  let archivesobj = JSON.parse(localStorage.getItem("archives"));
  console.log(sumListItems)
   tableBody.insertAdjacentHTML('afterbegin',listItems.join(''))
  for(let archive in archivesobj){
    console.log('archive1', archive)
    if(archive in sumListItems) {
      console.log('archive',archive)
      let target = sumList.getElementsByClassName(archive)[0]
      console.log('archive2',archive)
      target = target.getElementsByClassName('archiveCount')[0]
      target.innerHTML = archivesobj[archive]
    }
    else {
      addToSumList(archive)
      let archive = sumList.getElementsByClassName(archive)[0]
      let count = archive.getElementsByClassName('count')[0]
      archive = archive.getElementsByClassName('archiveCount')[0]
      archive.innerHTML = archivesobj[archive]
      count.innerHTML = 0
    
    }
  }
}


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const categoryName = categories.hasOwnProperty(form.elements.category.value)
    ? categories[form.elements.category.value]
    : "none";
  const icon = icons.hasOwnProperty(categoryName)
    ? icons[categoryName]
    : `<i class="fas fa-times"></i>`;
  addNote(
    form.elements.name.value,
    categoryName,
    icon,
    form.elements.content.value
  );
  addToSumList(categoryName);
  clearFields(form);
});



tableBody.addEventListener("click", (e) => {
  const item = e.target;
  if (item.classList[1] == "fa-archive") {
    archiveBtnHandler(e)
  } else if (item.classList[1] == "fa-trash") {
    trashBtnHandler(e)
  } else if (item.classList[1] == "fa-edit") {
    editBtnHandler(e);
  } else if (item.classList[1] == "fa-check") {
    checkBtnHandler(e);
  }
});


export function addToSumList(category) {
  if (sumList
    .getElementsByClassName(category)[0]) {
    let count = sumList
    .getElementsByClassName(category)[0]
    count = count
    .getElementsByClassName('count')[0]
      console.log(count)
      count.innerText = +count.innerText + 1;
    sumListItems[category] += 1;
  } else {
    if(category in sumListItems){
      sumListItems[category] = ++categoryCount;
      let count = sumList
      .getElementsByClassName(category)[0]
      count = count
      .getElementsByClassName('count')[0]
      count.innerText = categoryCount
    }
    else{
      categoryCount = 0
      sumListItems[category] = ++categoryCount
      const icon = icons.hasOwnProperty(category)
        ? icons[category]
        : `<i class="fas fa-times"></i>`;
      const newItem= `
          <tr class="d-flex px-3 ${category}">
          <td class="col-1">${icon}</td>
          <td class="col-4">${category}</td>
          <td class="col-2 count" >${1}</td>
          <td class="col-2 archiveCount">${0}</td>
          <td class="col-3"></td>
        </tr>`;
        sumList.insertAdjacentHTML('afterbegin',newItem)
    }
  }
}

