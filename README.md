# React Testing Application
This project demonstrates modern testing techniques for React applications, focusing on both unit and functional testing. Using **Vitest** and **React Testing Library**, developers can ensure their UI components work as expected and remain robust against changes

## Why Testing?
Testing is essential in React development for validating functionality, catching bugs early, and supporting team confidence through safe refactoring. Good test coverage also helps in documenting component behavior and prevents defects from reaching users.

## Tools Used

- **Vitest**: A lightning-fast testing framework, compatible with Vite, which provides instant feedback for code changes.
- **React Testing Library**: Promotes testing components in a way that simulates real user interactions, focusing on behavior over implementation.

## Getting Started

Follow these steps to get the project running in VSCode:

### 1. Clone the Repository

```
git clone https://github.com/ashutoshverma23/ReactTest.git
cd ReactTest
```

### 2. Open the Project in VSCode

- Open Visual Studio Code.
- Go to “File” > “Open Folder…” and select the cloned `ReactTest` directory.

### 3. Install Dependencies
```
npm install
```
### 4. Run the Tests

To run the test suite with Vitest(script already created):
```
npm test
```

## About the Tests

- Tests are written using *React Testing Library*, ensuring components are tested the way users interact with them.
- **Vitest** provides a fast, zero-config experience well integrated with Vite projects.

## Example Test Snippet
```js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from './MyComponent';

test('renders button and responds to click', () => {
render(<MyComponent />);
const button = screen.getByRole('button');
userEvent.click(button);
expect(screen.getByText('Clicked!')).toBeInTheDocument();
});
```
<h2>Youtube Video Tutorial <img src="https://github.com/user-attachments/assets/c2224a32-9c31-4d4c-b4b9-20c5feff6135" alt="Video Icon" width="20" height="20" style="vertical-align: middle; margin-bottom: 0px;" /></h2>

[![Watch the video](https://img.youtube.com/vi/c7D7pR5eVXs/maxresdefault.jpg)](https://youtu.be/c7D7pR5eVXs)
