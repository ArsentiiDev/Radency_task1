import { v4 as uuidv4 } from 'uuid';
import { addlToLocalStorage } from './localStorage';

export function addNote(name, category, icon, content) {
  const tableBody = document.getElementById("tbody");
  
    const now = new Date().toLocaleDateString().split(".").join("/");
    let dates = content.match(/([\d]+)([\-\./])([\d]+)([\-\./])([\d]+)/gm);
    if (!dates) dates = "no dates";
    const id = uuidv4();
    const newItem = `<tr class="d-flex ${category}" id="${id}">
    <td class="col-2 name">${icon}${name}</td>
    <td class="col-2">${now}</td>
    <td class="col-2 category">${category}</td>
    <td class="col-3 content">${content}</td>
    <td class="col-2">${dates}</td>
    <td class="ml-auto icons">
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash"></i>
            <i class="fas fa-archive"></i>
          </td>
    </tr>`
    tableBody.insertAdjacentHTML('afterbegin',newItem)
    addlToLocalStorage(name,now,category,content,dates,id)
  }
   