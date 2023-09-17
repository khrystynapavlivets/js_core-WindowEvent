/*
Завдання 1.
Необхідно реалізувати наступний функціонал як на відео taskList, а саме:

при кліку кнопку Додати додававляти нове завдання в список завдань
якщо при добавлянні поле пусте має вивести повідомлення у модальному вікні про попередження: “Пусте поле не можна добавити”
в списку завдань при кліку на чекбокс завдання має видалятися зі списку
якщо залишилося 1не завдання то його не можна видалити
якщо захочемо видалити то має вивести повідомлення у модальному вікні про попередження: “Останній таск зі списку Ви не можете видалити”
------------------------------------------------------------------------------------------
*/
const addTaskButton = document.querySelector(".addTaskButton");
const newTaskInput = document.querySelector(".newTaskInput");
const taskList = document.querySelector(".taskList");
const warningModal = document.querySelector(".warning");
const closeButton = document.querySelector(".fa-x");
const textWarning = document.createElement("p");
warningModal.insertBefore(textWarning, closeButton);

addTaskButton.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") {
    warningModal.style.display = "block";
    textWarning.textContent = "Пусте поле не можна добавити";
  } else {
    const newTask = document.createElement("li");
    newTask.innerHTML = `<input type="checkbox">${taskText}`;
    taskList.appendChild(newTask);
    newTaskInput.value = "";
  }
  closeButton.addEventListener("click", () => {
    warningModal.style.display = "none";
  });
});

taskList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "INPUT") {
    const taskCount = taskList.getElementsByTagName("li").length;
    if (taskCount === 1) {
      warningModal.style.display = "block";
      textWarning.textContent = "Останній таск зі списку видалити не можна";
      target.checked = false;
    } else {
      const li = target.parentNode;
      li.remove();
    }
  }
});
