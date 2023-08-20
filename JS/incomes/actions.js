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

export let incomes = [];

export const addIncome = (e) => {
  e.preventDefault();

  const _income = {
    name: incomeName.value,
    value: Number(incomeValue.value),
    id: Math.random().toString(),
  };

  incomes.push(_income);
  addIncomeToList(_income);

  incomeName.value = "";
  incomeValue.value = "";
};

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
