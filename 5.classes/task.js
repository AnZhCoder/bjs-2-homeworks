class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = state;
		this.type = type;
	}

	fix() {
		if (this._state * 1.5 <= 100) {
			return (this._state *= 1.5);
		} else {
			return (this._state = 100);
		}
	}

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

	addBook(book) {
		return this.books.push(book);
	}

	findBookBy(type, value) {
		return this.books.find((book) => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		const result = this.books.find((book) => book.name === bookName);
		if (result) {
			this.books = this.books.filter((book) => book.name !== bookName);
			return result;
		} else {
			return null;
		}
	}
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

	exclude(reason) {
		delete this.subjects;
		this.excluded = reason;
	}

	addJournal(journal) {
		return this.subjects.push(journal);
	}

	addMark(value, discip) {
		const result = this.subjects.find((item) => item.subject === discip);
		if (!result) {
			return "Несуществующий предмет";
		} else if (value < 0 || value > 5) {
			return "Ошибка, оценка должна быть числом от 1 до 5";
		} else {
			result.mark.push(value);
		}
	}

	getAverageBySubject(discip) {
		const result = this.subjects.find((item) => item.subject === discip);
		if (!result) {
			return "Несуществующий предмет";
		} else {
			const avg = +(
				result.mark.reduce((total, mark) => total + mark, 0) /
				result.mark.length
			).toFixed(1);
			return `Средний балл по предмету ${discip} ${avg}`;
		}
	}

	getAverage() {
		const mark = this.subjects.map((item) => item.mark);
		const fullMark = [].concat(...mark);
		const avg = +(
			fullMark.reduce((total, item) => total + item, 0) / fullMark.length
		).toFixed(2);
		return `Средний балл по всем предметам - ${avg}`;
	}
}

const student = new Student("sgrs", "male", "23");

class Journal {
	constructor(subject, mark = []) {
		this.subject = subject;
		this.mark = mark;
	}
}

student.addJournal(new Journal("Algebra", []));
student.addJournal(new Journal("Geometry", []));
student.addMark(3, "Algebra");
student.addMark(3, "Algebra");
student.addMark(5, "Algebra");
student.addMark(2, "Geometry");
student.addMark(2, "Geometry");
student.getAverageBySubject("Algebra");
console.log(student.getAverage());
student.getAverage();
console.log(student.subjects);
