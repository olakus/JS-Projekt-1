"use strict";

import {
  incomes,
  expenses,
  addIncome,
  addExpense,
} from "./incomes/incomes-actions.js"; // dopisałam: addExpense

export const incomeName = document.getElementById("income-name");
export const incomeValue = document.getElementById("income-value");
export const incomesList = document.getElementById("incomes-list");
export const incomesSum = document.getElementById("incomes-sum");
export const expensesList = document.getElementById("expenses-list");
export const expensesSum = document.getElementById("expenses-sum");
export const expenseName = document.getElementById("expense-name");
export const expenseValue = document.getElementById("expense-value");
const addIncomeButton = document.getElementById("add-income-button");
const addExpenseButton = document.getElementById("add-expense-button");
const budgetText = document.getElementById("budget-text");
const budgetValue = document.getElementById("budget-value");

export const incomesListContainer = document.getElementById(
  "incomes-list-container"
);

incomesList.addEventListener("submit", addIncome);

export const expensesListContainer = document.getElementById(
  "expenses-list-container"
);

expensesList.addEventListener("submit", addExpense);

export const calculateBudgetValue = () => {
  const income = incomes.reduce((acc, income) => {
    return acc + Number(income.value);
  }, 0);

  const expense = expenses.reduce((acc, expense) => {
    return acc + Number(expense.value);
  }, 0);

  if (expense > income) {
    budgetText.innerText = `You spent too much, you are in the minus by ${
      expense - income
    } PLN`;
  } else if (income > expense) {
    budgetText.innerText = `You can still spend ${income - expense} PLN`;
  } else {
    budgetText.innerText = `Income and expenses are equal`;
  }
};

// export const calculateBudgetValue = () => {
//   const expense = Number(expensesSum.innerText);
//   const income = Number(incomesSum.innerText);
//   if (expense > income) {
//     budgetText.innerText = `You spent too much, you are in the minus by ${
//       expense - income
//     } PLN`;
//   } else if (income > expense) {
//     budgetText.innerText = `You can still spend ${income - expense} PLN`;
//   } else {
//     budgetText.innerText = `Income and expenses are equal`;
//   }
// };

// Gdy odkomentuję ten kod, to psuje się sumowanie Incomes i Expenses:

// const calculateBudgetValue = () => {
//   const totalBalance = calculateIncomesSum.reduce((acc, income) => {
//     return acc + Number(income.value);
//   }, 0);

//   incomesSum.innerText = _incomesSum;
// };

// const renderbudgetValue = () => {
//   incomesListContainer.innerHTML = "";
//   incomes.forEach((income) => {
//     addIncomeToList(income);
//   });
//   calculateTotalBalance();
// };
