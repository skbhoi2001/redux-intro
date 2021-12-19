import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { store, todoStore } from "./Redux/store";

import App from "./App";
import { AppContextProvider } from "./Redux/AppContextProvider";
import { Provider } from "react-redux";
console.log(store.getState());
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={todoStore}>
      <AppContextProvider store={store}>
        <App />
      </AppContextProvider>
    </Provider>
  </StrictMode>,
  rootElement
);
