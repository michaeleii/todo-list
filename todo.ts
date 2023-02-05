export class ToDo {
	title: string;
	description: string;
	dueDate: Date;
	isComplete: boolean;

	constructor(title: string, description: string, dueDate: Date) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.isComplete = false;
	}
}
