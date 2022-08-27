class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = state;
		this.type = type;
	}

	fix = () => {
		if (this._state * 1.5 <= 100) {
			return (this._state *= 1.5);
		} else {
			return (this._state = 100);
		}
	};

	get state() {
		return this._state;
	}

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}
}

class Magazine extends PrintEditionItem {
	constructor(...restArgs) {
		super(...restArgs);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, ...restArgs) {
		super(...restArgs);
		this.author = author;
		this.type = "book";
	}
}
class FantasticBook extends Book {
	constructor(...restArgs) {
		super(...restArgs);
		this.type = "fantastic";
	}
}
class NovelBook extends Book {
	constructor(...restArgs) {
		super(...restArgs);
		this.type = "novel";
	}
}
class DetectiveBook extends Book {
	constructor(...restArgs) {
		super(...restArgs);
		this.type = "detective";
	}
}

class Library {
	constructor(name, books = []) {
		this.name = name;
		this.books = books;
	}

	addBook = (book) => this.books.push(book);

	findBookBy = (type, value) =>
		this.books.find((book) => book[type] === value) || null;

	giveBookByName = (bookName) => {
		const result = this.books.find((book) => book.name === bookName);
		if (result) {
			this.books = this.books.filter((book) => book.name !== bookName);
			return result;
		} else {
			return null;
		}
	};
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);

library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new PrintEditionItem("Типовой школьный журнал", 2019, 102));

//task3

class Student {
	constructor(name, gender, age, subjects = []) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.subjects = subjects;

	}

	exclude = (reason) => {
		delete this.subjects;
		this.excluded = reason;
	}

	addMark = (mark, subject) => {
		const result = this.subjects.find((item => item[subject]));

		if (!result) {
			this.subjects.push({
				[subject]: [mark],
			})
		} else if (mark < 0 || mark > 5) {
			return 'Ошибка, оценка должна быть числом от 1 до 5'
		} else if (result && mark > 0 || mark <= 5) {
			result[subject].push(mark)
		}
	}

	getAverageBySubject = (subject) => {
		const result = this.subjects.find((item => item[subject]))
		let avg = 0;

		if (!result) {
			return 'Несуществующий предмет'
		} else {
			avg = +(result[subject].reduce((total, mark) => total + mark, 0) / result[subject].length).toFixed(1);
		}
		return avg
	}

	getAverage = () => {
		let fullMarks = [];
		this.subjects.forEach((mark) => {
			fullMarks.push(Object.values(mark)[0])
		})

		fullMarks = fullMarks.flat();
		return +((fullMarks.reduce((total, mark) => total + mark, 0) / fullMarks.length).toFixed(2))
	}

}
const student = new Student('sgrs', 'male', '23')

student.addMark(3, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "history");
student.addMark(5, "history");
student.addMark(5, "filosofy");
student.addMark(5, "filosofy");



student.getAverage()
