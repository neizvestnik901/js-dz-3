// //Задача 1

let number = (prompt("Введите число:"));

if (number > 0) {
    for (let i = 1; i <= number; i++) {
        if (i === 1) {
            console.log("1 banana");
        } else {
            console.log(i + " bananas");
        }
    }
}

//Задача 2

let n = prompt("Введите сколько раз сработает цикл");

if (!isNaN(n) && n !== null) {
    let evenSum = 0;

    for (let i = 2; i <= number; i += 2) {
        evenSum += i;
    }

    console.log('Сумма четных чисел ' + evenSum);
}

//Задача 3

let text = prompt("Введите число:");

if (!isNaN(text) && text != 0) {
    text + text;

    let exponent = prompt("Введите степень:");

    if (isNaN(exponent) || exponent == 0) {
        exponent = 2;
    } else {
        exponent + exponent;
    }

    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= text;
    }

    alert("Результат: " + result);
}





