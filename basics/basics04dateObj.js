//dates

let myDate = new Date()
console.log(myDate.toString());


let myCreateDate = new Date(2023, 0 ,23)
console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date(2023, 0 , 23, 5, 4)
console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate = new Date()

newDate.toLocaleString('default',{
    weekday: "long"
} )
console.log(newDate);
