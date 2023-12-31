"use strict";

import {
  calculateBudgetValue,
  incomesListContainer,
  expensesListContainer,
  incomesSum,
  expensesSum,
} from "./main.js";
import { incomes, expenses } from "./actions.js";

export const deleteIncome = (e) => {
  e.preventDefault();
  const idToDelete = e.target.id;
  const itemToDeleteIndex = incomes.findIndex((el) => el.id === idToDelete);
  incomes.splice(itemToDeleteIndex, 1);

  renderIncomesList();
};

const renderUpdateIncomeInputs = (e) => {
  const id = e.target.id;
  const editingIncome = incomes.find((el) => el.id === id);
  const listElement = document.getElementById(id);
  const elementsToHide = document.getElementById(`list-element-wrapper-${id}`);
  elementsToHide.style.display = "none";

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
  saveButton.innerText = "Save";
  saveButton.id = `update-save-${id}`;
  saveButton.type = "submit";
  updateInputsWrapper.addEventListener("submit", (event) => {
    event.preventDefault();
    editingIncome.name = nameInput.value;
    editingIncome.value = incomeInput.value;
    renderIncomesList();
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
  updateInputsWrapper.appendChild(incomeInput);
  updateInputsWrapper.appendChild(saveButton);
  updateInputsWrapper.appendChild(cancelButton);

  listElement.appendChild(updateInputsWrapper);
};

const renderUpdateExpenseInputs = (e) => {
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
  editButton.id = income.id;
  editButton.innerText = "Edit";
  editButton.type = "button";
  editButton.addEventListener("click", renderUpdateIncomeInputs);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.id = income.id;
  removeButton.innerText = "Delete";
  removeButton.addEventListener("click", deleteIncome);

  buttonsWrapper.appendChild(editButton);
  buttonsWrapper.appendChild(removeButton);

  listElementWrapper.appendChild(name);
  listElementWrapper.appendChild(value);
  listElementWrapper.appendChild(buttonsWrapper);

  listElement.appendChild(listElementWrapper);

  incomesListContainer.appendChild(listElement);
};

const calculateIncomesSum = () => {
  const _incomesSum = incomes.reduce((acc, income) => {
    return acc + Number(income.value);
  }, 0);

  incomesSum.innerText = _incomesSum;
};

const calculateExpensesSum = () => {
  const _expensesSum = expenses.reduce((acc, expense) => {
    return acc + Number(expense.value);
  }, 0);
  expensesSum.innerText = _expensesSum;
};

export const renderIncomesList = () => {
  incomesListContainer.innerHTML = "";
  incomes.forEach((income) => {
    addIncomeToList(income);
  });
  calculateIncomesSum();
  calculateBudgetValue();
};

const deleteExpense = (e) => {
  const idToDelete = e.target.id;
  const itemToDeleteIndex = expenses.findIndex((el) => el.id === idToDelete);
  expenses.splice(itemToDeleteIndex, 1);
  renderExpensesList();
};

export const renderExpensesList = () => {
  expensesListContainer.innerHTML = "";
  expenses.forEach((expense) => {
    addExpenseToList(expense);
  });
  calculateExpensesSum();
  calculateBudgetValue();
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
  listElementWrapper.classList.add("expense-list-element-wrapper");

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
  editButton.addEventListener("click", renderUpdateExpenseInputs);

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
};
