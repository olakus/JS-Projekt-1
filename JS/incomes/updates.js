"use strict";

import {
  incomesListContainer,
  expensesListContainer,
  incomesList,
  incomesSum,
} from "../main.js";
import { incomes, expenses, editIncomesList } from "./actions.js";

export const deleteIncome = (e) => {
  e.preventDefault();
  const idToDelete = e.target.id;
  const itemToDeleteIndex = incomes.findIndex((el) => el.id === idToDelete);
  incomes.splice(itemToDeleteIndex, 1);

  renderIncomesList();
};

// const editIncome = (e) => {
//   const id = e.target.id;
// };

const renderUpdateInputs = (e) => {
  const id = e.target.id;
  const editingIncome = incomes.find((el) => el.id === id);
  const listElement = document.getElementById(id);
  const elementsToHide = document.getElementById(`list-element-wrapper-${id}`);
  elementsToHide.style.display = "none";

  // const listElementWrapper = document.createElement("div");
  // listElementWrapper.classList.add("income-list-element-wrapper");

  const updateInputsWrapper = document.createElement("form");
  updateInputsWrapper.id = `update-${id}`;

  const nameInput = document.createElement("input");
  nameInput.id = `update-name-${id}`;
  nameInput.minLength = 3;
  nameInput.required = true;
  nameInput.value = editingIncome.name;

  const incomeInput = document.createElement("input");
  incomeInput.type = "number";
  incomeInput.id = `update-income-${id}`;
  incomeInput.min = "0.01";
  incomeInput.step = "0.01";
  incomeInput.required = true;
  incomeInput.value = editingIncome.value;

  const saveButton = document.createElement("button");
  saveButton.innerText = "SAVE";
  saveButton.id = `update-save-${id}`;
  saveButton.type = "submit";
  updateInputsWrapper.addEventListener("submit", (event) => {
    event.preventDefault();
    editingIncome.name = nameInput.value;
    editingIncome.value = incomeInput.value;
    renderIncomesList();
  });

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "CANCEL";
  cancelButton.id = `update-cancel-${id}`;
  cancelButton.type = "button";
  cancelButton.addEventListener("click", () => {
    elementsToHide.style.display = "flex";
    updateInputsWrapper.remove();
  });

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
  listElementWrapper.id = `list-element-wrapper-${income.id}`;
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
  editButton.addEventListener("click", renderUpdateInputs);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.id = income.id; // CZY MOGE UŻYC TEN REMOVE BUTTON TEŻ W EXPENSES? odp: TAK
  removeButton.innerText = "Usuń";
  removeButton.addEventListener("click", deleteIncome);

  // listElement.appendChild(name);
  // listElement.appendChild(value);
  buttonsWrapper.appendChild(editButton);
  buttonsWrapper.appendChild(removeButton);
  // listElement.appendChild(buttonsWrapper);

  listElementWrapper.appendChild(name);
  listElementWrapper.appendChild(value);
  listElementWrapper.appendChild(buttonsWrapper);

  listElement.appendChild(listElementWrapper);

  incomesListContainer.appendChild(listElement);
  // cancelButton.addEventListener("click", cancelEditInputs);
  // saveButton.addEventListener("click", editIncomesList);

  calculateIncomesSum();
};

const cancelEditInputs = (e) => {
  e.preventDefault();

  const id = e.target.id.split("-")[2];
  const listElement = document.getElementById(id);
  const updateElement = document.getElementById(`update-${id}`);
  listElement.removeChild(updateElement);
};

const calculateIncomesSum = () => {
  const _incomesSum = incomes.reduce((acc, income) => {
    return acc + Number(income.value);
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
