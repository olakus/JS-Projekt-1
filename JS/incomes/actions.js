"use strict";

import { incomeName, incomeValue, incomesList } from "./main.js";

export let incomes = [];

export const addIncome = (e) => {
  e.preventDefault();

  const _income = {
    name: incomeName.value,
    value: Number(incomeValue.value),
    id: Math.random().toString,
  };

  incomes.push(_income);
  // addIncomeToList(_income);
  renderIncomesList();

  incomeName.value = "";
  incomeValue.value = "";
};

export const deleteIncome = (e) => {
  e.preventDefault();
  const idToDelete = e.target.id;
  incomes = incomes.filter((el) => el.id !== idToDelete);

  renderIncomesList();
};
