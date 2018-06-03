/*
var isGoing = false;
var color = isGoing ? "green" : "red";
console.log(color);

if (isGoing){
  console.log("It's green")
}
else {
  console.log("It's red")
}
//
var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

*/
/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */
/*
// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants ? eatsAnimals ? "omnivore" : "herbivore" : eatsAnimals ? "carnivore" : undefined;

console.log(category);
*/
/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */
/*
// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

// your code goes here
switch(education){
    case "no high school diploma":
        salary += 25636
        console.log("In 2015, a person with no high school diploma earned an average of $" + salary.toLocaleString("en-US") + "/year.")
        break;

    case "a high school diploma":
        salary += 35256
        console.log("In 2015, a person with a high school diploma earned an average of $" + salary.toLocaleString("en-US") + "/year.")
        break;

    case "an Associate's degree":
        salary += 41496
        console.log("In 2015, a person with an Associate's degree earned an average of $" + salary.toLocaleString("en-US") + "/year.")
        break;

    case "a Bachelor's degree":
        salary += 59124
        console.log("In 2015, a person with a Bachelor's degree earned an average of $" + salary.toLocaleString("en-US") + "/year.")
        break;

    case "a Master's degree":
        salary += 69732
        console.log("In 2015, a person with a Master's degree earned an average of $" + salary.toLocaleString("en-US") + "/year.")
        break;

    case "a Professional degree":
        salary += 89960
        console.log("In 2015, a person with a Professional degree earned an average of $" + salary.toLocaleString("en-US") + "/year.")
        break;

    case "a Doctoral degree":
        salary += 84396
        console.log("In 2015, a person with a Doctoral degree earned an average of $" + salary.toLocaleString("en-US") + "/year.")
        break;
}

*/
/*
 * Programming Quiz: JuliaJames (4-1)
*/
/*
var x = 1;

while (x <= 20) {
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
    if (x % (3 * 5) === 0){
        console.log("JuliaJames")
    }
    else if (x % 3 === 0){
        console.log("Julia")
    }
    else if (x % 5 === 0){
        console.log("James")
    }
    else {
        console.log(x)
    }
    x += 1
}
*/
/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".


var num = 99;

while (num > 0) {
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
    if (num > 2){
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }
    else if (num === 2){
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
    }
    else if (num === 1){
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }
    num -= 1
}

*/
/*
var todos = ['item 1','item 2','item 3']
function displayTodos() {
  console.log('My todos:', todos);
}
function addTodo() {
  todos.push('new todo');
  displayTodos();
}
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
*/
//plunker
/*
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
    }
};
*/
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
    }
};
//
var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos.
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // Case 1: If everything's true, make everyting false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      // Case 2: Otherwise, make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x)' + todo.todoText;
      } else {
        todoTextWithCompletion = '( )' + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
};
//
var x = [1,2,3];
x.forEach(function(n) {
  console.log(n)
});
