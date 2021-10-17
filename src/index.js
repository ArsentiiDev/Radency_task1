const submitBtn = document.getElementById("submit-btn");
const form = document.forms[0];
const tableBody = document.getElementById("tbody");
const sumList = document.querySelector(".sumList");
const todos = document.querySelector(".todos");
const filterSelect = document.getElementById("filter-select");

import "./scss/styles.scss";
import {
  editBtnHandler,
  checkBtnHandler,
  archiveBtnHandler,
  trashBtnHandler,
} from "./BtnHandlers";
import { addNote } from "./addNote";
import { clearFields } from "./utils";
import { categories, icons } from "./helpers/Const";
import { getFromLocalStorage } from "./localStorage";
import { addToSumList } from "./addSumList";


export let archiveCount = 0;
export const sumListItems = {};
export const archives = {};

document.addEventListener("DOMContentLoaded", getFromLocalStorage);
filterSelect.addEventListener("click", filterTodos);

tableBody.addEventListener("click", (e) => {
  const item = e.target;
  if (item.classList[1] == "fa-archive") {
    archiveBtnHandler(e);
  } else if (item.classList[1] == "fa-trash") {
    trashBtnHandler(e);
  } else if (item.classList[1] == "fa-edit") {
    editBtnHandler(e);
  } else if (item.classList[1] == "fa-check") {
    checkBtnHandler(e);
  }
});

function filterTodos(e) {
  const todos = tableBody.childNodes;
  switch (e.target.options[e.target.selectedIndex].text) {
    case "All": {
      for (let i = 0; i < todos.length - 1; i++) {
        todos[i].classList.remove("d-none");
        todos[i].classList.add("d-flex");
      }
      break;
    }
    case "Archived": {
      for (let i = 0; i < todos.length - 1; i++) {
        if (!todos[i].classList.contains("archive")) {
          console.log("here");
          todos[i].classList.add("d-none");
        } else todos[i].classList.add("d-flex");
      }
      break;
    }
    case "Not Archived": {
      for (let i = 0; i < todos.length - 1; i++) {
        if (!todos[i].classList.contains("archive")) {
          console.log("here");
          todos[i].classList.remove("d-none");
          todos[i].classList.add("d-flex");
        } else todos[i].classList.add("d-none");
      }
      break;
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




