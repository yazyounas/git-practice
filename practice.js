/*
//const s = 'Hello, World!'
//console.log(s.split(', '))

// Arrays - varibale that hold multiple value 
//const numbers = new Array(1,2,3,4,5);
//console.log(numbers)

//push method add new element at the end of an array
//ushift method add new element at the start of an array
// pop methodf 

//obecjt literla 
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted : true
    }
    
];

//covert to jSON
//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

//For of loop
//for (let todo of todos) {
 //   console.log(todo.text);
//}
/*
// While Loop
 let i = 0;
 while (i <= 10) {
    console.log(`while Loop Number: ${i}`);
    i++;
 }
 */
/*
const todoCompleted = todos.filter((todo) => {
 return todo.isCompleted === true;
}).map((todo) =>{
    return todo.text;
})
console.log(todoCompleted);
*/
/*const x = 100;
if(x === 10) {
    console.log('x is 10')
} else {
    console.log('x is not 10')
}*/
/*
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

}
const person1 = new Person('john', 'Doe', '4-3-1980')
console.log(person1.dob.getFullYear())*/
// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}














