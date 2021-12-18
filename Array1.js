const todos = [
	{ id: 3, content: 'HTML', completed: false },
	{ id: 2, content: 'CSS', completed: true },
	{ id: 1, content: 'Javascript', completed: false },
];

const render = (todos) => {
	let result = [];
	todos.map((elem, index, arr) => {
		const id = elem.id;
		const content = elem.content;
		const completed = elem.completed;
		const checked = completed === true ? 'checked' : '';
		const htmlCode =
			`<li id= ${id}></li><label><input type="checkbox" ${checked}>${content}</label>` +
			'\n';
		result += htmlCode;
	});
	return result;
	// console.log(htmlCode);
};
console.log(render(todos));
