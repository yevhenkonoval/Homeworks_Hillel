function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
    
    for (let i = 0; i < count; i++) {
        let num = getRandomInt(100, 1000);
        console.log(num);

        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercent = (evenCount / count) * 100;
    let oddPercent = (oddCount / count) * 100;

    console.log("Кількість згенерованих чисел:", count);

    console.log("Парні числа" + " " + evenCount);
    console.log("Непарні числа" + " " + oddCount);

    console.log("Відсоток парних" + " " + evenPercent);
    console.log("Відсоток непарних" + " " + oddPercent);
}

checkProbabilityTheory(10);