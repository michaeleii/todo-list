import { ToDo } from "./todo";
import { ToDoList } from "./todo-list";
const addButton = document.getElementById("addButton") as HTMLButtonElement;

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
