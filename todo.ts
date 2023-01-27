export class ToDo {
	title: string;
	description: string;
	dueDate: Date;
	priority: string;
	isComplete: boolean;

	constructor(
		title: string,
		description: string,
		dueDate: Date,
		priority: string
	) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;

		this.isComplete = false;
	}
}
