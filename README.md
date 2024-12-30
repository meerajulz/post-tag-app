# Hashtag Suggestion Post App

## Description

This application allows users to write posts and utilize hashtags that are validated against a predefined list of suggestions. As users type, the app dynamically checks the text for hashtags and provides visual feedback by styling recognized hashtags differently from unrecognized ones. This helps ensure users are tagging their posts accurately and effectively.

## Features

- **Real-time Hashtag Suggestions**: As you type, the app suggests hashtags from a predefined list that match the text you've entered.

- **Hashtag Validation**: Hashtags are styled differently based on whether they are recognized, providing immediate visual feedback.

- **Responsive UI**: Designed to work seamlessly across different devices, providing a consistent user experience.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (which comes with [npm](http://npmjs.com/)) installed on your computer.

### Installing

To get the development environment running:

1. Clone the repository:

   ```sh
   git clone https://github.com/meerajulz/post-tag-app.git
   ```

2. Navigate to the project directory:

```sh
  cd hashtag-suggestion-app`
```

3. Install project dependencies:

```sh
  npm install
```

4.Start the development server

```sh
  npm start
```

5. Run the tests using the following command

```sh
  npm test
```

6. Run coverage tests using the following command

```sh
  npm test -- --coverage
```

This will run the app in the development mode. Open http://localhost:3000 to view it in the browser.

## Built With

- **[React](https://reactjs.org/)** - The web framework used for building user interfaces.

- **[Styled-Components](https://styled-components.com/)** - For styling React components using enhanced CSS.

- **[Node.js](https://nodejs.org/)** - The server environment that runs JavaScript on the server side.

- **[Jest](https://jestjs.io/)** - A delightful JavaScript Testing Framework with a focus on simplicity.

- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Builds on top of DOM Testing Library by adding APIs for working with React components.

## Authors

Juliana Leon **[gitHub meerajulz](https://github.com/meerajulz/)**

License
This project is licensed under the MIT License
