// 0 - Bajar repo, hacer hola mundo console.log

let hola = 'Hola mundo!!';
console.log(hola);

// 2 - Funciones:
// add(firstOperator, secondOperator),
// subtract(firstOperator, secondOperator),
// divide(firstOperator, secondOperator),
// multiply(firstOperator, secondOperator)

let uno = 1;
let dos = 2;

function add (firstOperator, secondOperator){
    return firstOperator + secondOperator;
}
function subtract (firstOperator, secondOperator){
    return firstOperator - secondOperator;
}
function divide (firstOperator, secondOperator){
    return firstOperator / secondOperator;
}
function multiply (firstOperator, secondOperator){
    return firstOperator * secondOperator;
}

console.log('El resultado add es:', add(uno,dos));
console.log('El resultado subtract es:', subtract(uno,dos));
console.log('El resultado divide es:', divide(uno,dos));
console.log('El resultado multiply es:', multiply(uno,dos));

// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶

let temperature1 = 9;
let temperature2 = 31;
let temperature3 = 30;
let isRainingT = true;
let isRainingF = false;

function dress(temperature,isRaining){
    let llueve = 'no llevar paraguas';
    let temperatura = 'usar lentes';
    if(llueve){
        llueve = 'llevar paraguas';
    }
    if (temperatura > 30){
        temperatura = 'ir de short';
    }
    if (temperatura < 10){
        temperatura = 'ir en auto';
    }
    return temperatura,isRaining;
}

console.log(dress(temperature1,isRainingT));

// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)

// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])

// 6 - Funcion
// finalCountDown(count)

// 7 - Funcion
// getGrade(score)
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S

// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the the new collection of articles

// 9 - Funcion
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})

// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
