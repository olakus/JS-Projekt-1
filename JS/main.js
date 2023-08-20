"use strict";

import { addIncome, addExpense } from "./incomes/actions.js"; // dopisałam: addExpense

// INCOMES:
export const incomeName = document.getElementById("income-name");
export const incomeValue = document.getElementById("income-value");
export const incomesList = document.getElementById("incomes-list");

// EXPENSES (dopisałam):
export const expenseName = document.getElementById("expense-name");
export const expenseValue = document.getElementById("expense-value");
export const expensesList = document.getElementById("expenses-list");

// const addIncomeButton = document.getElementById("add-income-button");
export const incomesListContainer = document.getElementById(
  "incomes-list-container"
);

incomesList.addEventListener("submit", addIncome);
