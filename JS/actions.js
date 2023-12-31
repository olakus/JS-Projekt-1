"use strict";

import { incomeName, incomeValue, expenseName, expenseValue } from "./main.js";
import { renderIncomesList, renderExpensesList } from "./updates.js";

export let incomes = [];

export const addIncome = (e) => {
  e.preventDefault();

  const _income = {
    name: incomeName.value,
    value: Number(incomeValue.value),
    id: Math.random().toString(),
  };

  incomes.push(_income);
  renderIncomesList();

  incomeName.value = "";
  incomeValue.value = "";
};

export const editIncomesList = (e) => {
  e.preventDefault();
  const idToEdit = e.target.id.split("-")[2];
  const nameValue = document.getElementById(`update-name-${idToEdit}`).value;
  const incomeValue = document.getElementById(
    `update-income-${idToEdit}`
  ).value;
  if (nameValue && incomeValue) {
    incomes = incomes.map((income) => {
      if (income.id === idToEdit) {
        return {
          ...income,
          name: nameValue,
          value: Number(incomeValue),
        };
      }
      return income;
    });
    renderIncomesList();
  }
};

export let expenses = [];

export const addExpense = (e) => {
  e.preventDefault();
  const _expense = {
    name: expenseName.value,
    value: Number(expenseValue.value),
    id: Math.random().toString(),
  };
  expenses.push(_expense);
  renderExpensesList();
  expenseName.value = "";
  expenseValue.value = "";
};

export const editExpensesList = (e) => {
  e.preventDefault();
  const idToEdit = e.target.id.split("-")[2];
  const nameValue = document.getElementById(`update-name-${idToEdit}`).value;
  const expenseValue = document.getElementById(
    `update-expense-${idToEdit}`
  ).value;
  if (nameValue && expenseValue) {
    expenses = expenses.map((expense) => {
      if (expense.id === idToEdit) {
        return {
          ...expense,
          name: nameValue,
          value: Number(expenseValue),
        };
      }
      return expense;
    });

    renderExpensesList();
  }
};
