import {archiveCount,archives} from './index'
import { removefromLocalStorage } from './localStorage';
import { icons,categories } from './helpers/Const';
import { addToSumList } from './addSumList';

export function editBtnHandler(e) {
    let item = e.target.parentElement.parentElement;
    let arr = [].concat(...item.children).map((el, index) => {
      if (el.classList.contains("name"))
        return `<td class="col-2 name">
          <input class="col-4" type="text" value="${el.innerText}"/></td>`;
      else if (el.classList.contains("category"))
        return `<td class="col-2 category">
              <select  name="category" class="form-select" aria-label="category-task">
              <option selected>Choose category</option>
              <option value="1">Task</option>
              <option value="2">Random Thought</option>
              <option value="3">Idea</option>
              <option value="4">Quote</option>
            </select>
              </td>`;
      else if (el.classList.contains("content")) {
        return `<td class="col-3 content" >
                  <textarea type="text" >${el.innerText}</textarea>
              </td>`;
      } else if (el.classList.contains("icons"))
        return `<td class="ml-auto">
                  <i class="fas fa-check"></i>
                  <i class="fas fa-trash"></i>
                  <i class="fas fa-archive"></i>
                </td>`;
      else return `<td class="col-2"></td>`;
    });
    item.innerHTML = arr.join("");

  }

  export function checkBtnHandler(e) {
    const now = new Date().toLocaleDateString().split(".").join("/");
    let item = e.target.parentElement.parentElement;
    const categoryName = categories.hasOwnProperty(
      item.children[2].firstElementChild.value
    )
      ? categories[item.children[2].firstElementChild.value]
      : "none";
    let dates = item.children[3].firstElementChild.value.match(
      /([\d]+)([\-\./])([\d]+)([\-\./])([\d]+)/gm
    );
    let arr = [].concat(...item.children).map((el, index) => {
      if (el.classList.contains("name")) {
        const icon = icons.hasOwnProperty(categoryName)
          ? icons[categoryName]
          : `<i class="fas fa-times"></i>`;
        return `<td class="col-2 name">${icon + el.firstElementChild.value}</td>`;
      } else if (index == 1) {
        return `
              <td class="col-2">${now}</td>
              `;
      } else if (el.classList.contains("category")) {
        return `
              <td class="col-2 category">${categoryName}</td>
              `;
      } else if (el.classList.contains("content")) {
        return `
              <td class="col-3 content">${el.firstElementChild.value}</td>
              `;
      } else if (index == 4) {
        return `
              <td class="col-2">${dates}</td>
              `;
      } else {
        return `
              <td class="ml-auto icons">
              <i class="fas fa-edit"></i>
              <i class="fas fa-trash"></i>
              <i class="fas fa-archive"></i>
            </td>
            `;
      }
    });
    addToSumList(categoryName)
    item.innerHTML = arr.join("");
  }

 export  function archiveBtnHandler(e){
    const sumList = document.querySelector(".sumList");
    let item = e.target.parentElement.parentElement;
    item.classList.toggle("archive")
    item.classList.toggle('table-danger')
    const sumItem = sumList.getElementsByClassName(item.children[2].innerText)[0]
    let archiveCount = sumItem.getElementsByClassName('archiveCount')[0]
    let count = sumItem.getElementsByClassName('count')[0]
    if(item.classList.contains('archive')){
      count.innerHTML = +count.innerHTML - 1
    archiveCount.innerHTML = ++archiveCount.innerHTML;
    } else {
      count.innerHTML = +count.innerHTML + 1
      archiveCount.innerHTML = --archiveCount.innerHTML;
    }
    
    archives[item.children[2].innerText] = archiveCount.innerHTML
    console.log(archives)
    localStorage.setItem('archives',JSON.stringify(archives))
}

export function trashBtnHandler(e){
    const tableBody = document.getElementById("tbody");
    let item = e.target.parentElement.parentElement;
    let selected = document.getElementById(item.id);
    const sumList = document.querySelector(".sumList");
    const sumItem = sumList.getElementsByClassName(item.children[2].innerText)[0]
    removefromLocalStorage(selected)
    if(item.classList.contains('archive')){
      archives[item.children[2].innerText]--
      let archiveCount = sumItem.getElementsByClassName('archiveCount')[0]
      archiveCount.innerHTML = --archiveCount.innerHTML;
    } else {
      let count = sumItem.getElementsByClassName('count')[0]
      count.innerHTML = --count.innerHTML;
    }
    localStorage.setItem('archives',JSON.stringify(archives))

    tableBody.removeChild(selected)
}