import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page", () => {
  render(<App />);
  const homePageElement = screen.getByText(/Home/i);
  expect(homePageElement).toBeInTheDocument();
});

test("renders register page", () => {
  render(<App />);
  const registerPageElement = screen.getByText(/Register/i);
  expect(registerPageElement).toBeInTheDocument();
});

test("renders login page", () => {
  render(<App />);
  const loginPageElement = screen.getByText(/Login/i);
  expect(loginPageElement).toBeInTheDocument();
});

test("renders user profile page", () => {
  render(<App />);
  const userProfileElement = screen.getByText(/User Profile/i);
  expect(userProfileElement).toBeInTheDocument(); // Changed the text to "User Profile"
});

test("renders multi-step form page", () => {
  render(<App />);
  const multiStepFormElement = screen.getByText(/Personal Information/i);
  expect(multiStepFormElement).toBeInTheDocument();
});

test("renders 404 page", () => {
  render(<App />);
  const notFoundPageElement = screen.getByText(/404 Not Found/i);
  expect(notFoundPageElement).toBeInTheDocument();
});
