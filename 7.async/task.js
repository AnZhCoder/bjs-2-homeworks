class AlarmClock {
    constructor(alarmCollection = [], timerId = null) {
        this.alarmCollection = alarmCollection;
        this.timerId = timerId;
    }

    addClock = (time, callback, id) => {
        if (!id) {
            throw new Error("Не передан параметр id");
        }

        if (this.alarmCollection.some((item) => item.id === id)) {
            console.error("Будильник с таким id уже существует");
        } else {
            this.alarmCollection.push({ id, time, callback });
        }
    };

    removeClock = (id) => {
        if (
            (this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id))
        ) {
            return true;
        } else {
            return false;
        }
    };

    getCurrentFormattedTime = () => {
        const newDate = new Date();

        return `${newDate.getHours()}:${newDate.getMinutes()}`.toString();
    };

    start = () => {
        function checkClock(allCalls) {
            allCalls = this.alarmCollection;
            const currentDate = new Date();
            const currentHours = currentDate.getHours().toString();
            const currentMinutes = currentDate.getMinutes().toString().padStart(2, '0');
            const currentTime = `${currentHours}:${currentMinutes}`;
            const resultSearch = allCalls.find((item) => item.time === currentTime);

            if (resultSearch) {
                return resultSearch.callback;
            };

            if (!this.timerId) {
                this.timerId = setInterval(() => {
                    allCalls.forEach(element => {
                        checkClock(element)
                    });
                }, 0);
            }
        }

    };

    stop = () => {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    };

    printAlarms = () => {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`)
        this.alarmCollection.forEach((element => console.log(`Будильник № ${element.id} заведен на ${element.time}`)))
    };

    clearAlarms = () => {
        clearInterval(this.timerId);
        this.alarmCollection = [];
    };
}