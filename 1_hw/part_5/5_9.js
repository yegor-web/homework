// Сумма свойств объекта
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
    return sum; 
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) );

// Подсчёт количества свойств объекта
function count(obj) {
    return Object.keys(obj).length;
  }

let user = {
  name: 'John',
  age: 30
};

alert( count(user) );