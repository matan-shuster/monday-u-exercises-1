import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

test("renders learn react link", () => {
  render(
        <Provider store={store}>
          <App />
        </Provider>
  );
  const linkElement = screen.getByText("A good list");
  expect(linkElement).toBeInTheDocument();
});