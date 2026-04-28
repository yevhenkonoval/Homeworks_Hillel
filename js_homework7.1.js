var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];


let re = /@(gmail\.com|yahoo\.com)/;

console.log(arr[0].email, re.test(arr[0].email), arr[0].email.search(re));
console.log(arr[1].email, re.test(arr[1].email), arr[1].email.search(re));
console.log(arr[2].email, re.test(arr[2].email), arr[2].email.search(re));
