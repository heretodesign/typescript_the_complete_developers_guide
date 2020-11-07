/**
 * Type Annotations: code we add to tell typescipt what tupe of valie a variable will refer to
 * --> We the developers tell typescript what to do.
 * 
 *  Type Inference: typescipt tries to figure out what type of value a variable refers to
 *
 */

const apples: number = 5;
let speed: string = 'fast';
let nothing: undefined = undefined;
let date: Date = new Date();
let hasName: boolean = true;

/**
 * Arrays
 */
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: numbers[] = [1, 2, 3, 4];

let truths: booleans[] = [true, true, false];

// Classes
class Car {}
let car: Car = new CaretPosition();

/**
 * Object Literals
 */

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

/**
 *  Function
 */
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

/**
 *  When to use Annotations
 * 
 *  1) Functions that returns the "any" type
 */
const json = "{"x": 10, "y": 73}"
const coordinates = JSON.parse(json)
