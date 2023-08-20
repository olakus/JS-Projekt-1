"use strict";

import { incomeName, incomeValue, incomesList } from "../main.js";
import { expenseName, expenseValue, expensesList } from "../main.js"; // dopisałam
import { addIncomeToList, addExpenseToList } from "./updates.js";

export let incomes = [];

export const addIncome = (e) => {
  e.preventDefault();

  const _income = {
    name: incomeName.value,
    value: Number(incomeValue.value),
    id: Math.random().toString,
  };

  incomes.push(_income);
  addIncomeToList(_income);
  // renderIncomesList();

  incomeName.value = "";
  incomeValue.value = "";
};

// EXPENSES (DOPISAŁAM)

export let expense = []; // expense czy expenses?

export const addExpense = (e) => {
  e.preventDefault();

  const _expense = {
    name: expenseName.value,
    value: Number(expenseName.value),
    id: Math.random().toString,
  };

  expense.push(_expense);
  addExpenseToList(_expense);
  // renderIncomesList();

  expenseName.value = "";
  expenseName.value = ""; // czemu jest to samo dwa razy?
};
