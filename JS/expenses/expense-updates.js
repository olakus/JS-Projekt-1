"use strict";

import {
  incomesListContainer,
  expensesListContainer,
  incomesList,
  incomesSum,
} from "../main.js";
import { incomes, expenses, editIncomesList } from "./expense-actions.js";

export const deleteExpense = (e) => {
  e.preventDefault();
  const idToDelete = e.target.id;
  const itemToDeleteIndex = expenses.findIndex((el) => el.id === idToDelete);
  expenses.splice(itemToDeleteIndex, 1);

  renderExpensesList();
};

const renderUpdateInputs = (e) => {
  const id = e.target.id;
  const editingExpense = expenses.find((el) => el.id === id);
  const listElement = document.getElementById(id);
  const elementsToHide = document.getElementById(`list-element-wrapper-${id}`);
  elementsToHide.style.display = "none";

  const updateInputsWrapper = document.createElement("form");
  updateInputsWrapper.id = `update-${id}`;
  const nameInput = document.createElement("input");
  nameInput.id = `update-name-${id}`;
  nameInput.minLength = 3;
  nameInput.required = true;
  nameInput.value = editingExpense.name;

  const expenseInput = document.createElement("input");
  expenseInput.type = "number";
  expenseInput.id = `update-expense-${id}`;
  expenseInput.min = "0.01";
  expenseInput.step = "0.01";
  expenseInput.required = true;
  expenseInput.value = editingExpense.value;

  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.id = `update-save-${id}`;
  saveButton.type = "submit";
  updateInputsWrapper.addEventListener("submit", (event) => {
    event.preventDefault();
    editingExpense.name = nameInput.value;
    editingExpense.value = expenseInput.value;
    renderExpensesList();
  });

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.id = `update-cancel-${id}`;
  cancelButton.type = "button";
  cancelButton.addEventListener("click", () => {
    elementsToHide.style.display = "flex";
    updateInputsWrapper.remove();
  });

  updateInputsWrapper.appendChild(nameInput);
  updateInputsWrapper.appendChild(expenseInput);
  updateInputsWrapper.appendChild(saveButton);
  updateInputsWrapper.appendChild(cancelButton);

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

  const listElementWrapper = document.createElement("div");
  listElementWrapper.id = `list-element-wrapper-${expense.id}`;
  listElementWrapper.classList.add("expenses-list-element-wrapper");

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
  editButton.id = expense.id;
  editButton.innerText = "Edit";
  editButton.type = "button";
  editButton.addEventListener("click", renderUpdateInputs);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.id = expense.id;
  removeButton.innerText = "Delete";
  removeButton.addEventListener("click", deleteExpense);

  buttonsWrapper.appendChild(editButton);
  buttonsWrapper.appendChild(removeButton);

  listElementWrapper.appendChild(name);
  listElementWrapper.appendChild(value);
  listElementWrapper.appendChild(buttonsWrapper);

  listElement.appendChild(listElementWrapper);

  expensesListContainer.appendChild(listElement);

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
    return acc + Number(expense.value);
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

//-----------
// const deleteExpense = (e) => {
//   console.log(e.target.id);
//   const idToDelete = e.target.id;
//   const itemToDeleteIndex = expenses.findIndex((el) => el.id === idToDelete);
//   expenses.splice(itemToDeleteIndex, 1);
//   renderExpensesList();
// };
//-----------

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
