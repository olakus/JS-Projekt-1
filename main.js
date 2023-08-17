"use strict";

const incomeName = document.getElementById("income-name");
const incomeValue = document.getElementById("income-value");
const addIncomeButton = document.getElementById("add-income-button");
const incomesList = document.getElementById("incomes-list");

// let expenses = 0;
// let balance = 0;

const incomes = [];

const addIncome = (e) => {
  e.preventDefault();
};

// ------------------------

incomesList.addEventListener("submit", (event) => {
  event.preventDefault();
  const newIncome = {
    title: incomeName.value,
    amount: incomeValue.value,
    id: Math.random(),
  };

  incomes.push(newIncome);
  console.log(incomes);
  // console.log(incomeTitleElement.value, incomeValue.value, );
});
