"use strict";

import {
  incomesListContainer,
  expensesListContainer,
  editForm,
  incomesList,
  incomesSum,
} from "../main.js";
import {
  incomes,
  expenses,
  editIncomesList,
  editExpensesList,
} from "./actions.js";

export const deleteExpense = (e) => {
  e.preventDefault();
  const idToDelete = e.target.id;
  const itemToDeleteIndex = expenses.findIndex((el) => el.id === idToDelete);
  expenses.splice(itemToDeleteIndex, 1);

  renderExpensesList();
};

const editExpense = (e) => {
  editForm.style.display = "flex";
  const id = e.target.id;
};

const renderUpdateInputs = (e) => {
  const id = e.target.id;
  const listElement = document.getElementById(id);

  const updateInputsWrapper = document.createElement("div");
  updateInputsWrapper.id = `update-${id}`;

  const nameInput = document.createElement("input");
  nameInput.id = `update-name-${id}`;

  const expenseInput = document.createElement("input");
  expenseInput.type = "number";
  expenseInput.id = `update-expense-${id}`;

  const saveButton = document.createElement("button");
  saveButton.innerText = "SAVE";
  saveButton.id = `update-save-${id}`;

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "CANCEL";
  cancelButton.id = `update-cancel-${id}`;

  updateInputsWrapper.appendChild(nameInput);
  updateInputsWrapper.appendChild(expenseInput);
  updateInputsWrapper.appendChild(saveButton);
  updateInputsWrapper.appendChild(cancelButton);

  // listElementWrapper.appendChild(updateInputsWrapper);
  listElement.appendChild(updateInputsWrapper);
};

export const addExpenseToList = (expense) => {
  const listElement = document.createElement("li");
  listElement.classList.add(
    "flex",
    "flex--space-between",
    "budget__list__item"
  );
  listElement.id = expense.id;

  // const listElementWrapper = document.createElement("div");
  // listElementWrapper.classList.add("expenses-list-element-wrapper");

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
  editButton.id = expense.id; // dopisałam JP
  editButton.innerText = "Edytuj";
  editButton.type = "button";
  editButton.addEventListener("click", editExpense); // to bylo wcześniej
  editButton.addEventListener("click", renderUpdateInputs);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.id = expense.id; // CZY MOGE UŻYC TEN REMOVE BUTTON TEŻ W EXPENSES? odp: TAK
  removeButton.innerText = "Usuń";
  removeButton.addEventListener("click", deleteExpense);

  listElement.appendChild(name);
  listElement.appendChild(value);
  buttonsWrapper.appendChild(editButton);
  buttonsWrapper.appendChild(removeButton);
  listElement.appendChild(buttonsWrapper);
  expensesListContainer.appendChild(listElement);

  // listElementWrapper.appendChild(name);
  // listElementWrapper.appendChild(value);
  // listElementWrapper.appendChild(buttonsWrapper);

  // listElement.appendChild(listElementWrapper);

  // cancelButton.addEventListener("click", cancelEditInputs);
  // saveButton.addEventListener("click", editExpensesList);

  calculateExpensesSum();
};

const cancelEditInputs = (e) => {
  e.preventDefault();

  const id = e.target.id.split("-")[2];
  const listElement = document.getElementById(id);
  const updateElement = document.getElementById(`update-${id}`);
  listElement.removeChild(updateElement);
};

const calculateExpensesSum = () => {
  const _expensesSum = expenses.reduce((acc, expense) => {
    return acc + expense.value;
  }, 0);

  expensesSum.innerText = _expensesSum;
};

const renderExpensesList = () => {
  expensesListContainer.innerHTML = "";
  expenses.forEach((expense) => {
    addExpenseToList(expense);
  });
  calculateExpensesSum();
};

// EXPENSES:

// DOPISAŁAM funkcję:
const deleteExpense = (e) => {
  console.log(e.target.id);
  const idToDelete = e.target.id;
  const itemToDeleteIndex = expenses.findIndex((el) => el.id === idToDelete);
  expenses.splice(itemToDeleteIndex, 1);
  renderExpensesList();
};

// const renderExpensesList = () => {
//   expensesListContainer.innerHTML = "";
//   expenses.forEach((expense) => {
//     addExpenseToList(expense);
//   });
// };

// export const addExpenseToList = (expense) => {
//   const listElement = document.createElement("li");
//   listElement.classList.add(
//     "flex",
//     "flex--space-between",
//     "budget__list__item"
//   );
//   listElement.id = expense.id;

//   const name = document.createElement("p");
//   name.innerText = expense.name;

//   const value = document.createElement("p");
//   value.innerText = expense.value + " PLN";

//   const buttonsWrapper = document.createElement("div");
//   buttonsWrapper.classList.add(
//     "budget__list__item__button",
//     "budget__list__item__button--edit"
//   );

//   const editButton = document.createElement("button");
//   editButton.innerText = "Edytuj";
//   editButton.type = "button";

//   const removeButton = document.createElement("button");
//   removeButton.type = "button";
//   removeButton.id = expense.id;
//   removeButton.innerText = "Usuń";
//   removeButton.addEventListener("click", deleteExpense);

//   listElement.appendChild(name);
//   listElement.appendChild(value);
//   buttonsWrapper.appendChild(editButton);
//   buttonsWrapper.appendChild(removeButton);
//   listElement.appendChild(buttonsWrapper);
//   expensesListContainer.appendChild(listElement);
// };
