const parseCount = (value) => {
    let resultParse = Number.parseInt(value);

    if (Number.isNaN(resultParse)) {
        const error = new Error("Невалидное значение");
        throw error;
    }

    return resultParse;
};

const validateCount = (value) => {
    try {
        parseCount(value);
    } catch (error) {
        return error;
    }

    return parseCount(value);
};


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        const customError = new Error(
            "Треугольник с такими сторонами не существует"
        );

        if (a + b <= c || a + c <= b || b + c <= a) {
            throw customError;
        }
    }

    getPerimeter() { return this.a + this.b + this.c };

    getArea() {
        const p = (this.a + this.b + this.c) / 2;
        const area = Math.pow(p * (p - this.a) * (p - this.b) * (p - this.c), 0.5);
        return Number(area.toFixed(3));
    };
}

const getTriangle = (a, b, c) => {

    try {
        return new Triangle(a, b, c);
    } catch (customError) {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует",
        };
    }
};


