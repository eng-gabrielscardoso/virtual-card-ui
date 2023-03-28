<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Linux-E34F26?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
  <img src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</div>

# Virtual Card UI

> A simple virtual business card to improve your network and reachability.

## Table of content

- [Virtual Card UI](#virtual-card-ui)
  - [Table of content](#table-of-content)
  - [Installation](#installation)
    - [Local](#local)
    - [Docker](#docker)
  - [Licence](#licence)
  - [Author](#author)

## Installation

### Local

If you want to run locally you must install the necessary SDK: NodeJS (or NVM) version 16^, Visual Studio Code (or your preferred IDE) and a browser like Chrome or Firefox. You also have to install a QR Code reader in you device to test all the features.

1. Clone the repository in your machine with the following command:
```bash
git clone https://github.com/eng-gabrielscardoso/virtual-card-ui.git
```
2. Copy the `.env.example` file as `.env` and fill with the correct values. Setup the application with the following command:
> With NPM
```bash
npm i
```
> With yarn
```bash
yarn
```
3. Run the application with the following command:
> With NPM
```bash
npm run dev
```
> With yarn
```bash
yarn dev
```
4. If you want to test the application in production mode, run the following command:
> With NPM
```bash
npm run build && npm run preview
```
> With yarn
```bash
yarn build && yarn preview
```

### Docker

If you don't want to install any SDK you could run with the Docker and Docker Compose.

1. Clone the repository in your machine with the following command:
```bash
git clone https://github.com/eng-gabrielscardoso/virtual-card-ui.git
```
2. Setup the container with the following command:
```bash
docker-compose up -d
```
3. Run the container in development mode with the following command:
```bash
docker-compose exec app npm run dev
```
4. Run the container in production mode with the following command:
```bash
docker-compose exec app npm run build && docker-compose exec app npm run preview
```

## Licence

This project is licensed under the [MIT Licence](LICENSE.md). See more information about [here](https://opensource.org/license/mit/)

## Author

- Gabriel Santos Cardoso - [eng.gabrielscardoso@gmail.com](mailto:eng.gabrielscardoso@gmail.com)

[🆙 Back to top](#virtual-card-ui)
