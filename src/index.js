import { createStore } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  return count;
};

const countStore = createStore(countModifier);
console.log(countStore.getState());
