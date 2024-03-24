# Playwright Basics Repository
<div align="center">
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code>
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/25181517/37cb517e-d059-4cc0-8124-1a72b663167c" alt="Playwright" title="Playwright"/></code>
</div>
This repository contains simple playwright tests. The tests contain basic playwright testing concepts and were created for the purpose of learning this technology.
## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Setup](#setup)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

This repository houses automated tests implemented with Playwright, an open-source Node.js library for automating browsers. Playwright offers a powerful set of features for automating web interactions across different browsers, making it an excellent choice for testing web applications.

## Project Structure

The project is structured as follows:

- **fixtures**: Contains any pre-defined data or states that are used across multiple tests.
- **node_modules**: Contains the dependencies required for running Playwright tests. (This directory is usually generated by npm or yarn and is listed in the .gitignore file.)
- **page-objects**: Contains Page Object Model (POM) classes that represent web pages and their elements. This promotes reusability and maintainability of tests.
- **tests**: Contains the actual test scripts written using Playwright to interact with the web application.

## Setup

To set up the project and run the tests locally, follow these steps:

1. Clone this repository to your local machine.
   ```sh
   git clone https://github.com/lukasveselovsky/Playwright_basics.git
   ```
2. Navigate to the project directory.
   ```sh
   cd Playwright_basics
   ```
3. Install dependencies.
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

## Usage

Once the project is set up, you can run the tests using the following command:

```sh
npm test
```
or
```sh
yarn test
```

This command will execute all the tests defined in the `tests` directory. You can also specify a specific test file or pattern to run.

## Contributing

Contributions to this project are welcome! If you find any issues or would like to add new features or tests, please feel free to open an issue or submit a pull request. 

## Contact

If you have any questions or suggestions regarding this project, feel free to contact the project owner at [lukas.veselovsky1@gmail.com](mailto:lukas.veselovsky1@gmail.com).

## License

This project is licensed under the [MIT License].
