"use strict";

import {
  incomeName,
  incomeValue,
  incomesList,
  expenseName,
  expenseValue,
  expensesList,
} from "../main.js";
import { addIncomeToList, addExpenseToList } from "./updates.js";

// EXPENSES (DOPISAŁAM)

export let expenses = [];

export const addExpense = (e) => {
  e.preventDefault();

  const _expense = {
    name: expenseName.value,
    value: Number(expenseValue.value),
    id: Math.random().toString(),
  };

  expenses.push(_expense);
  addExpenseToList(_expense);

  expenseName.value = "";
  expenseValue.value = "";
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

    renderExpensesList();
  }
  console.log(idToEdit, nameValue, incomeValue);
};
