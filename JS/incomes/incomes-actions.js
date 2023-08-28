"use strict";

import {
  incomeName,
  incomeValue,
  incomesList,
  expenseName,
  expenseValue,
  expensesList,
} from "../main.js";
import { addIncomeToList, addExpenseToList } from "./incomes-updates.js";

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

// export let expenses = [];

// export const addExpense = (e) => {
//   e.preventDefault();

//   const _expense = {
//     name: expenseName.value,
//     value: Number(expenseValue.value),
//     id: Math.random().toString(),
//   };

//   expenses.push(_expense);
//   addExpenseToList(_expense);

//   expenseName.value = "";
//   expenseValue.value = "";
// };

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
  console.log(idToEdit, nameValue, incomeValue);
};
