import { incomesListContainer } from "../main.js";
import { incomes } from "./actions.js";

const deleteIncome = (e) => {
  console.log(e.target.id);
  const idToDelete = e.target.id;
  const itemToDeleteIndex = incomes.findIndex((el) => el.id === idToDelete);
  incomes.splice(itemToDeleteIndex, 1);
  renderIncomesList();
};

export const addIncomeToList = (income) => {
  const listElement = document.createElement("li");
  listElement.classList.add(
    "flex",
    "flex--space-between",
    "budget__list__item"
  );
  listElement.id = income.id;

  const name = document.createElement("p");
  name.innerText = income.name;

  const value = document.createElement("p");
  value.innerText = income.value;

  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.classList.add(
    "budget__list__item__button",
    "budget__list__item__button--edit"
  );

  const editButton = document.createElement("button");
  editButton.innerText = "Edytuj";
  editButton.type = "button";

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.id = income.id; // CZY MOGE UŻYC TEN REMOVE BUTTON TEŻ W EXPENSES?
  removeButton.innerText = "Usuń";
  removeButton.addEventListener("click", deleteIncome);

  listElement.appendChild(name);
  listElement.appendChild(value);
  buttonsWrapper.appendChild(editButton);
  buttonsWrapper.appendChild(removeButton);
  listElement.appendChild(buttonsWrapper);
  incomesListContainer.appendChild(listElement);
};

const renderIncomesList = () => {
  incomesListContainer.innerHTML = "";
  incomes.forEach((income) => {
    addIncomeToList(income);
  });
};

// EXPENSES:

// DOPISAŁAM funkcję:
const deleteExpense = (e) => {
  console.log(e.target.id);
  const idToDelete = e.target.id;
  const itemToDeleteIndex = expenses.findIndex((el) => el.id === idToDelete);
  // jest też const itemToDeleteIndex dla incomes. czy może tak być?
  incomes.splice(itemToDeleteIndex, 1);
  renderExpensesList();
};

const renderExpensesList = () => {
  incomesListContainer.innerHTML = "";
  incomes.forEach((income) => {
    addIncomeToList(income);
  });
};

export const addExpenseToList = (expense) => {
  const listElement = document.createElement("li");
  listElement.classList.add(
    "flex",
    "flex--space-between",
    "budget__list__item"
  );
  listElement.id = expense.id;

  const name = document.createElement("p"); // jest inne const name w addIncomeToList
  name.innerText = expense.name;

  const value = document.createElement("p"); // jest inne const value w addIncomeToList
  value.innerText = expense.value;

  const buttonsWrapper = document.createElement("div"); // jest to samo co w addIncomeToList
  buttonsWrapper.classList.add(
    "budget__list__item__button",
    "budget__list__item__button--edit"
  );

  const editButton = document.createElement("button");
  editButton.innerText = "Edytuj";
  editButton.type = "button";

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.id = expense.id;
  removeButton.innerText = "Usuń";
  removeButton.addEventListener("click", deleteExpense);

  listElement.appendChild(name);
  listElement.appendChild(value);
  buttonsWrapper.appendChild(editButton);
  buttonsWrapper.appendChild(removeButton);
  listElement.appendChild(buttonsWrapper);
  incomesListContainer.appendChild(listElement);
};

// ------------------------

// INNA WERSJA KODU:
// incomesList.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const newIncome = {
//     title: incomeName.value,
//     amount: incomeValue.value,
//     id: Math.random(),
//   };

//   incomes.push(newIncome);
//   console.log(incomes);
//   const li = document.createElement("li");
//   li.classList.add("flex", "flex--space-between", "budget__list__item");
//   li.textContent = incomeName.value;
//   incomesListContainer.appendChild(li);
// });

// ROBOCZO SKOPIOWANY KOD HTML:
// <li class="flex flex--space-between budget__list__item">
// <p>Text input value <span>number input value</span> PLN</p>
// <div class="budget__list__item__buttons__wrapper">
//   <button
//     class="budget__list__item__button budget__list__item__button--edit"
//   >
//     Edit
//   </button>
//   <button
//     class="budget__list__item__button budget__list__item__button--delete"
//   >
//     Delete
//   </button>
// </div>
//   </li>
// ------------------------
