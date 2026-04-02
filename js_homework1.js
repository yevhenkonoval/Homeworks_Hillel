console.log("number" + 3 + 3); // number33 (якщо в + є рядок, тоді все перетворюється в рядок (конкатенація))

console.log(null + 3); // 3 (null=0 0+3=3)

console.log(5 && "qwerty") // qwerty (перше значення правдиве, тому JS іде далі та повертає наступне значення тобто qwerty)

console.log(+"40" + +"2" + "hillel"); // 42hillel (унарний + перетворює рядок у число, число + рядок = конкатенація)

console.log("10" - 5 === 6); // false ("-" працює з числами, 10-5=5, 5 === 6 - строге порівняння тому false  )

console.log(true + false); // 1 (true = 1 false = 0  1+0 = 1)

console.log("4px" - 3); // NaN ("4px" - NaN, NaN - 3 = NaN)

console.log("4" - 3); // 1 ("-" працює з числами, 4-3 = 1)

console.log("6" + 3 ** 0); // 61 ( 3 ** 0 = 1 - будь яке число в степені 0 = 1, далі іде конкатенація )

console.log(12 / "6"); // 2 (перетворення операндів в числа, 12=12, "6"=6, 12 / 6 = 2)

console.log("10" + (5 === 6)); // 10false (спочатку (5 === 6) - строге порівння, тому false. Далі конкатенація )

console.log(null == ""); // false (null == undefined буде true, null == будь яке інше значення - false)

console.log(3 ** (9 / 3)); // 27 ( 9/3 = 3, 3**3 = 3*3*3=27)

console.log(!!"false" == !!"true"); // true (!!"false" = true, перше ! перетворює значення у буліан, друге ! в true. !!"true" = true )

console.log(0 || "0" && 1); // 1 ( "0" && 1 = 1, && - повертає останнє значення. 0 || 1 = 1 )
    
console.log((+null == false) < 1); // false (+null = 0, 0 == false -> true, 1 < 1 = false)

console.log((false && true) || true); // true ( false || true = true, && - повертає перше хибне занчення, || - перше правильне значення)

console.log(false && (false || true)); // false ( || - перше правильне значення = true, && - повертає перше хибне занчення = false && true = false )
 
console.log((+null == false) < 1 ** 5); // false ( 0 == false -> true, 1 < 1 = false)
