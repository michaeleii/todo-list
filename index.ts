import { ToDo } from "./todo";
import { ToDoList } from "./todo-list";
const addButton = document.getElementById("addTaskBtn") as HTMLButtonElement;

const addToList = () => {
	const title = document.getElementById("title") as HTMLInputElement;
	const description = document.getElementById(
		"description"
	) as HTMLInputElement;
	const dueDate = document.getElementById("dueDate") as HTMLInputElement;

	const toDoList = new ToDoList();
	const toDo = new ToDo(
		title.value,
		description.value,
		dueDate.valueAsDate as Date
	);
	toDoList.addToDo(toDo);
	console.log(toDoList.getToDoList());
};
addButton.addEventListener("click", addToList);

const openModalBtns = document.querySelectorAll(
	".show-modal"
) as NodeListOf<HTMLButtonElement>;

const closeModalBtns = document.querySelectorAll(
	".close-modal"
) as NodeListOf<HTMLButtonElement>;

const modal = document.querySelector(".modal") as HTMLDivElement;

const overlay = document.querySelector(".overlay") as HTMLDivElement;

openModalBtns.forEach((btn: HTMLButtonElement) => {
	btn.addEventListener("click", () => {
		modal.classList.remove("hidden");
		overlay.classList.remove("hidden");
	});
});

closeModalBtns.forEach((btn: HTMLButtonElement) => {
	btn.addEventListener("click", () => {
		modal.classList.add("hidden");
		overlay.classList.add("hidden");
	});
});
