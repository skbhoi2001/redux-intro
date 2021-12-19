import { createStore } from "redux";
import { reducer, secondReducer } from "./reducer";

export const store = createStore(reducer);
export const todoStore = createStore(secondReducer);
