import { ToDo } from "./todo";

export class ToDoList {
	toDos: ToDo[] = [];
	constructor() {
		this.toDos = [];
	}
	addToDo(toDo: ToDo) {
		this.toDos.push(toDo);
	}
	removeToDo(toDo: ToDo) {
		this.toDos = this.toDos.filter((item) => item !== toDo);
	}
	getToDoList() {
		return this.toDos;
	}
}
