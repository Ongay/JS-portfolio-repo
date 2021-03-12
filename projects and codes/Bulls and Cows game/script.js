var numbers = [];               // Пустой массив сгенерированных случайных чисел
var attempts = 0;               // Количество попыток

generateNumbers();
// alert(numbers.join(' '));
// guessNumber();

function generateNumbers() {    // Генерируем случайные числа
    var num;
    var min = 1;
    var max = 9;

    for (var i = 0; i < 4; i++) {       // В массиве 4 случайных числа
        num = parseInt(Math.random() * (max - min) + min);         // Генерируем случайное число 
        if (i == 0) {                   // Первое сгенерированное число добавляем в массив, так как он и без проверки уникальный
            numbers[0] = num;
            continue;
        }
        while (numbers.indexOf(num) != -1) {        // Остальные числа проверяем на уникальность. Если сгенерированное число есть в массиве, то .indexOf(num) покажет его индекс в массиве numbers. А если нет, то покажет -1
            num = parseInt(Math.random() * (max - min) + min);      // Генерируем сило, пока не будет уникальной
        }
        numbers.push(num);              // Как только число будет уникальной цикл закончиться, и это число добавляем в массив numbers
    }
    return numbers;                 // После завершения и получения всех 4 цифр, возвращаем значение массива numbers
}

function guessNumber() {            // Юзер угадывает загаданные 4 числа

    var playerNum = prompt('Введите 4 числа от 0 до 10. -1 для выхода из игры', 0);     // Юзер вводит 4 числа
    var gameIsRunning = true;       // Игра запущена

    while (gameIsRunning) {         // Цикл будет повторяться, пока значение переменной gameIsRunning = true

        if (parseInt(playerNum) == -1) {    // Если юзер ввел -1 игра останавливается
            gameIsRunning = false;
        }
        else if (isNaN(parseInt(playerNum)) || playerNum == 0 || playerNum.substring(4) != '') {            // Иначе если юзер ввел Не число, или 0, или больше 4 цифр, то выводит ошибку
            playerNum = prompt('Некорректный ввод. Введите 4 числа от 0 до 10. -1 для выхода из игры', 0);
        }
        else {
            var answer = checkNumber(playerNum);            // Если 4 цифры введены, то проверяем их с загаданными числами

            if (answer[0]) {                                // Если answe[0]==true, то выводим, что юзер побудил и заканчиваем игру
                alert('Вы победили! ' + attempts + ' попыток было сделано.');
                gameIsRunning = false;
            }
            else {                                          // Иначе показываем количество быков и коров, и количество попыток
                playerNum = prompt('Быки: ' + answer[1] + '. Коровы: ' + answer[2] + '. Попыток сделано: ' + attempts);
            }
        }
    }
}

function checkNumber(myResult) {            // Проверяем цифры юзера и загаданными
    attempts++;                             // Сразу же прибавляем количество попыток

    var answer = [false, 0, 0];             // массив содержащий ответы. Изначально [0] = false, [1] = количество быков, [2] = количество коров

    var ranks = myResult.split('');         // Приводим загаданную строку в массив

    for (var i = 0; i < ranks.length; i++) {        // В цикле обходим все загаданные числа. Мы уже привели в массив, и теперь проверяем по индексно
        if (parseInt(ranks[i]) == numbers[i]) {         // Если расположение загаданного числа совпадает с расположением в numbers
            answer[1]++;                    // Увеличиваем количество быкоа на 1
        }
        else if (numbers.indexOf(parseInt(ranks[i])) != -1) {       // Если расположение не совпадает, но число присутствует в массиве
            answer[2]++;                    // Увеличиваем количество коров
        }
    }
    if (answer[1] == 4) {                   // Если количество быков достигает 4
        answer[0] = true;                   // Меняем значение [0] на true
    }
    return answer;                          // Возвращаем значение answer
}

// document.querySelector('#gameStart').onclick = guessNumber();