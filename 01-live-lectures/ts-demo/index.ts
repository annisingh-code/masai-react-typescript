let username: string = "Anish";
let age: number = 22;
let isDeveloper: boolean = true;
let city: string = "Ahmedabad";
console.log(username, age, isDeveloper, city);

// “Give me a string → I promise to return a string”
function greet(name: string): string {
  return "Hello " + name;
}

let message = greet(username);
console.log(message);

//Intentional mistake to check
// greet(10);

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(5, 7));

let a = "anish";
let b = "singh";
let result = add(6, 6);

let user: {
  name: string;
  age: number;
  isActive: boolean;
  city: string;
} = {
  name: "Anish",
  age: 22,
  isActive: true,
  city: "Ahmedabad",
};

user.age = 23;
// user.age = "twenty"; mistake ts will detect and show error
console.log(user.name);

type Product = {
  id: number;
  title: string;
  price: number;
};

let product: Product = {
  id: 2,
  title: "javascript",
  price: 200,
};

let product2: Product = {
  id: 2,
  title: "MongoDb",
  price: 200,
};

// Inference and explicit type check ;

let number = 100;

// number =  "Ansih"; it will throw error this is Inference type check

// explicit check;

let num: number = 100;

// AutoCompletion

type User = {
  name: string;
  age: number;
};

let user_details: User = {
  name: "Anish",
  age: 23,
};

// Refactoring

/**
 * calculate the tax based on users income or salary
 * @param salary the users yearly income or salary
 * @return 30% of tax deduction
 */
function calculate(salary: number) {
  return salary * 30;
}
console.log(calculate(5));

// TypScript  function usage with object

type myUser = {
  name: string;
  age: number;
};

const newUser: myUser = {
  name: "Anish",
  age: 23,
};

function showProfile(newUser: myUser) {
  console.log(user.name);
}
//Array tuples enums;
let fruits: string[] = ["apple", "mango", "grapes", 4];

// tuples  Order matter darling ;
let array: [string, number] = ["anish", 26];
// Error
let array_a: [string, number] = ["anish", 26, "singh"];
let array_b: [string, number, string] = ["anish", 26, "singh"];

// labels for constant
enum Direction {
  up,
  down,
  left,
  right,
}

const move: Direction = Direction.up;

enum Status {
  Success = "success",
  Failure = "failure",
}

const data: Status = Status.Success;

// unions

let id: string | number | boolean;
id = "abc";
id = 123;
id = true;

// Intersections
// use interface when you want to use object and classes
// because in advance javascript you can extend classes using interface
interface Name {
  name: string;
}
interface Age {
  age: string | number;
}
const Person1: Name & Age = {
  name: "Anish",
  age: "Twenty-five",
};
//use type  when you are combining unions primitives or tuples

// Add  example of unknown and any here ;

// 1. Type Narrowing
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else console.log("Your ID is: ", id);
}
printId("abc");

// 2. Type Guard

function isString(val: unknown): val is string {
  return typeof val === "string";
}
function logValue(val: unknown) {
  if (isString(val)) {
    console.log(val.toUpperCase());
  } else {
    console.log("Not a string ");
  }
}
