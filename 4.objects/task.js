function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

const firstStudent = new Student('Vanessa', 'female', 25);
const secondStudent = new Student('Gregory', 'male', 36);
const thirtyStudent = new Student('Bob', 'male', 30);

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
	if (this.marks === undefined) {
		this.marks = [mark];
	} else {
		this.marks.push(mark);
	}
};

Student.prototype.addMarks = function (...mark) {
	if (this.marks === undefined) {
		this.marks = mark;
	} else {
		this.marks.push(...mark);
	}
};

Student.prototype.getAverage = function () {
		let result = this.marks.reduce((acc, mark) => acc + mark, 0);  
	return result / this.marks.length;
};

Student.prototype.exclude = function (reason) {
	delete this.subject && delete this.marks;
	this.excluded = reason;
};