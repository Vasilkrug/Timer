const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

//добавил функцию, которая добавляет 0 к число, которое меньше 10
const addZeroToNumber = (number) => number < 10 ? `0${number}` : number;

const createTimerAnimator = () => {
    return (seconds) => {
        const timerId = setInterval(() => {
            if (seconds === 0) {
                clearInterval(timerId);
            }
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor(seconds / 60 % 60);
            const sec = Math.floor(seconds % 60);

            timerEl.textContent = `${addZeroToNumber(hours)}:${addZeroToNumber(minutes)}:${addZeroToNumber(sec)}`;

            seconds--
        }, 1000)
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    // Очистите input так, чтобы в значении
    // оставались только числа

    inputEl.value = inputEl.value.replace(/[^\d.]/g, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);
    //Здесь можно добавить доп проверку на количество введенных секунд,
    // так как если секунд будет больше чем 86400 то получится немного нелогичное число в 25+ часов
    // и следовало бы ввести доп параметр 'дни', но к сожалению не могу уточнить точные условия задачи
    //не запускать таймер если пользователь ничего не ввел или введен 0
    if (!seconds) {
        inputEl.value = '';

        return;
    }

    animateTimer(seconds);

    inputEl.value = '';
});
