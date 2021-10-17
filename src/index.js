import React from 'react';
import ReactDOM from 'react-dom';
//component file
import TodoContainer from "./components/TodoContainer"
// Lo StrictMode serve per essere avvisati di warning e errori vari,
// serve sostanzialmente solo in fase di sviluppo
ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>, document.getElementById("root"))

if (module.hot) {
  module.hot.accept();
}