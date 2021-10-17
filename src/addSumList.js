import {  sumListItems } from ".";
import { icons } from "./helpers/Const";


export function addToSumList(category) {
    const sumList = document.querySelector(".sumList");
    let categoryCount = 0;

    if (sumList.getElementsByClassName(category)[0]) {
      let count = sumList.getElementsByClassName(category)[0];
      count = count.getElementsByClassName("count")[0];
      console.log(count);
      count.innerText = +count.innerText + 1;
      sumListItems[category] += 1;
    } else {
      if (category in sumListItems) {
        sumListItems[category] = ++categoryCount;
        let count = sumList.getElementsByClassName(category)[0];
        count = count.getElementsByClassName("count")[0];
        count.innerText = categoryCount;
      } else {
        categoryCount = 0;
        sumListItems[category] = ++categoryCount;
        const icon = icons.hasOwnProperty(category)
          ? icons[category]
          : `<i class="fas fa-times"></i>`;
        const newItem = `
            <tr class="d-flex px-3 ${category}">
            <td class="col-1">${icon}</td>
            <td class="col-4">${category}</td>
            <td class="col-2 count" >${1}</td>
            <td class="col-2 archiveCount">${0}</td>
            <td class="col-3"></td>
          </tr>`;
        sumList.insertAdjacentHTML("afterbegin", newItem);
      }
    }
  }