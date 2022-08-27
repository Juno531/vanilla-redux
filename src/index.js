import { createStore } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const reducer = () => {
  return "hello";
};

const store = createStore(reducer);
