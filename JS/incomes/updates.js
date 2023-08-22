"use strict";

import {
  incomesListContainer,
  expensesListContainer,
  editForm,
  incomesList,
  incomesSum,
} from "../main.js";
import { incomes, expenses } from "./actions.js";

export const deleteIncome = (e) => {
  e.preventDefault();
  const idToDelete = e.target.id;
  const itemToDeleteIndex = incomes.findIndex((el) => el.id === idToDelete);
  incomes.splice(itemToDeleteIndex, 1);

  renderIncomesList();
};

const editIncome = (e) => {
  editForm.style.display = "flex";
  const id = e.target.id;
};

const renderUpdateInputs = (e) => {
  const id = e.target.id;
  const listElement = document.getElementById(id);

  // const listElementWrapper = document.createElement("div");
  // listElementWrapper.classList.add("income-list-element-wrapper");

  const updateInputsWrapper = document.createElement("div");
  updateInputsWrapper.id = `update-${id}`;

  const nameInput = document.createElement("input");
  nameInput.id = `update-name-${id}`;

  const incomeInput = document.createElement("input");
  incomeInput.id = `update-income-${id}`;

  const saveButton = document.createElement("button");
  saveButton.innerText = "SAVE";
  saveButton.id = `update-save-${id}`;

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "CANCEL";
  cancelButton.id = `update-cancel-${id}`;

  updateInputsWrapper.appendChild(nameInput);
  updateInputsWrapper.appendChild(incomeInput);
  updateInputsWrapper.appendChild(saveButton);
  updateInputsWrapper.appendChild(cancelButton);

  // listElementWrapper.appendChild(updateInputsWrapper);
  listElement.appendChild(updateInputsWrapper);
};

export const addIncomeToList = (income) => {
  const listElement = document.createElement("li");
  listElement.classList.add(
    "flex",
    "flex--space-between",
    "budget__list__item"
  );
  listElement.id = income.id;

  const listElementWrapper = document.createElement("div");
  listElementWrapper.classList.add("income-list-element-wrapper");

  const name = document.createElement("p");
  name.innerText = income.name;

  const value = document.createElement("p");
  value.innerText = income.value + " PLN";

  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.classList.add(
    "budget__list__item__button",
    "budget__list__item__button--edit"
  );

  const editButton = document.createElement("button");
  editButton.id = income.id; // dopisałam JP
  editButton.innerText = "Edytuj";
  editButton.type = "button";
  editButton.addEventListener("click", editIncome); // to bylo wcześniej
  editButton.addEventListener("click", renderUpdateInputs);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.id = income.id; // CZY MOGE UŻYC TEN REMOVE BUTTON TEŻ W EXPENSES? odp: TAK
  removeButton.innerText = "Usuń";
  removeButton.addEventListener("click", deleteIncome);

  listElement.appendChild(name);
  listElement.appendChild(value);
  buttonsWrapper.appendChild(editButton);
  buttonsWrapper.appendChild(removeButton);
  listElement.appendChild(buttonsWrapper);
  incomesList.appendChild(listElement);
  // incomesListContainer.appendChild(listElement);

  listElementWrapper.appendChild(name);
  listElementWrapper.appendChild(value);
  listElementWrapper.appendChild(buttonsWrapper);

  listElement.appendChild(listElementWrapper);

  calculateIncomesSum();
};

const calculateIncomesSum = () => {
  const _incomesSum = incomes.reduce((acc, income) => {
    return acc + income.value;
  }, 0);

  incomesSum.innerText = _incomesSum;
};

const renderIncomesList = () => {
  incomesListContainer.innerHTML = "";
  incomes.forEach((income) => {
    addIncomeToList(income);
  });
  calculateIncomesSum();
};

// EXPENSES:

// DOPISAŁAM funkcję:
const deleteExpense = (e) => {
  console.log(e.target.id);
  const idToDelete = e.target.id;
  const itemToDeleteIndex = expenses.findIndex((el) => el.id === idToDelete);
  // jest też const itemToDeleteIndex dla incomes. czy może tak być? odp: TAK
  expenses.splice(itemToDeleteIndex, 1);
  renderExpensesList();
};

const renderExpensesList = () => {
  expensesListContainer.innerHTML = "";
  expenses.forEach((expense) => {
    addExpenseToList(expense);
  });
};

export const addExpenseToList = (expense) => {
  const listElement = document.createElement("li");
  listElement.classList.add(
    "flex",
    "flex--space-between",
    "budget__list__item"
  );
  listElement.id = expense.id;

  const name = document.createElement("p");
  name.innerText = expense.name;

  const value = document.createElement("p");
  value.innerText = expense.value + " PLN";

  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.classList.add(
    "budget__list__item__button",
    "budget__list__item__button--edit"
  );

  const editButton = document.createElement("button");
  editButton.innerText = "Edytuj";
  editButton.type = "button";

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.id = expense.id;
  removeButton.innerText = "Usuń";
  removeButton.addEventListener("click", deleteExpense);

  listElement.appendChild(name);
  listElement.appendChild(value);
  buttonsWrapper.appendChild(editButton);
  buttonsWrapper.appendChild(removeButton);
  listElement.appendChild(buttonsWrapper);
  expensesListContainer.appendChild(listElement);
};

// ------------------------

// INNA WERSJA KODU:
// incomesList.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const newIncome = {
//     title: incomeName.value,
//     amount: incomeValue.value,
//     id: Math.random(),
//   };

//   incomes.push(newIncome);
//   console.log(incomes);
//   const li = document.createElement("li");
//   li.classList.add("flex", "flex--space-between", "budget__list__item");
//   li.textContent = incomeName.value;
//   incomesListContainer.appendChild(li);
// });

// ROBOCZO SKOPIOWANY KOD HTML:
// <li class="flex flex--space-between budget__list__item">
// <p>Text input value <span>number input value</span> PLN</p>
// <div class="budget__list__item__buttons__wrapper">
//   <button
//     class="budget__list__item__button budget__list__item__button--edit"
//   >
//     Edit
//   </button>
//   <button
//     class="budget__list__item__button budget__list__item__button--delete"
//   >
//     Delete
//   </button>
// </div>
//   </li>
// ------------------------
