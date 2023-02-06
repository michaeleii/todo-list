import { ToDo } from "./todo";
import { ToDoList } from "./todo-list";
const addButton = document.getElementById("addTaskBtn") as HTMLButtonElement;
const modal = document.querySelector(".modal") as HTMLDivElement;
const overlay = document.querySelector(".overlay") as HTMLDivElement;
const toDoList = new ToDoList();
const openModalBtns = document.querySelector(
	".show-modal"
) as HTMLButtonElement;

const closeModalBtns = document.querySelector(
	".close-modal"
) as HTMLButtonElement;

const addToList = () => {
	const title = document.getElementById("title") as HTMLInputElement;
	const description = document.getElementById(
		"description"
	) as HTMLInputElement;
	const dueDate = document.getElementById("dueDate") as HTMLInputElement;

	const toDo = new ToDo(
		title.value,
		description.value,
		dueDate.valueAsDate as Date
	);
	toDoList.addToDo(toDo);
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
	updateToDoListContainer();
};
addButton.addEventListener("click", addToList);

openModalBtns.addEventListener("click", () => {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
});

closeModalBtns.addEventListener("click", () => {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
});

const updateToDoListContainer = () => {
	const toDoListContainer = document.querySelector(
		".todo-items"
	) as HTMLDivElement;
	toDoListContainer.innerHTML = toDoList
		.getToDoList()
		.map((toDo) => {
			return `<button class="todo">${toDo.title}</button>`;
		})
		.join("");
};
