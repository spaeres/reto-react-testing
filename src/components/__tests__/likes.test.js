import Like from "../likes";
import { render, screen, fireEvent } from "@testing-library/react";

// Reto implementado:

// 1. Que por defecto, el componente muestra en el párrafo el valor "Likes: 0".
test("Defaults to 0 likes", () => {
  render(<Like />);
  expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

// 2. Que cuando se hace clic en el botón Like, el número de likes se incremente en uno.
test("Likes increments when clicked", () => {
  render(<Like />);
  fireEvent.click(screen.getByText("Like"));
  expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});

// 3. Que cuando se hace clic en el botón Dislike el número de likes se decrementa en uno.
test("Likes decrements when clicked", () => {
  render(<Like />);
  fireEvent.click(screen.getByText("Like"));
  fireEvent.click(screen.getByText("Dislike"));
  expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});
