/**
 * Functions Annotation
 */

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // return null
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const forecast = {
  date: new date(),
  weather: 'sunny'
}

const logWeather = ({data, weather}: { date: Date, weather: string}) {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather);