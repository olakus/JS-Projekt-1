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

export const editExpensesList = (e) => {
  e.preventDefault();
  const idToEdit = e.target.id.split("-")[2];
  const nameValue = document.getElementById(`update-name-${idToEdit}`).value;
  const expenseValue = document.getElementById(
    `update-expense-${idToEdit}`
  ).value;
  if (nameValue && expenseValue) {
    expense = expenses.map((expense) => {
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
  console.log(idToEdit, nameValue, expenseValue);
};
