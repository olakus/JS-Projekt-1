const addIncomeToList = (income) => {
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

  const removeButton = document.createElement("button");
  removeButton.id = income.id;
  removeButton.innerText = "Usuń";

  listElement.appendChild(name);
  listElement.appendChild(value);
  buttonsWrapper.appendChild(editButton);
  buttonsWrapper.appendChild(removeButton);
  listElement.appendChild(buttonsWrapper);
  incomesList.appendChild(listElement);
};

removeButton.addEventListener("click", deleteIncome);

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
