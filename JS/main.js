"use strict";

import { addIncome } from "./incomes/actions.js";

// INCOMES:
export const incomeName = document.getElementById("income-name");
export const incomeValue = document.getElementById("income-value");
export const incomesList = document.getElementById("incomes-list");
const addIncomeButton = document.getElementById("add-income-button");
const incomesListContainer = document.getElementById("incomes-list-container");

addIncomeButton.addEventListener("click", addIncome);
