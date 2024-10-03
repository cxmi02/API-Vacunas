# **Microservices vaccines**

This API allows you to manage and query information about children, grouped by municipality, and to detail whether they have received a vaccine. It also includes the functionality to calculate the average age of children in a specific municipality.

## Content Table

- [**Microservices vaccines**](#microservices-vaccines)
  - [Content Table](#content-table)
  - [Functionalities](#functionalities)
  - [Project Configuration](#project-configuration)
  - [Running the App](#running-the-app)
  - [Gitflow Branching Strategy](#gitflow-branching-strategy)
  - [Participant](#participant)
  - [License](#license)


## Functionalities

* Add children.
* Add vaccines.
* List children.
* Calculate the average age of children in a municipality.
* List available vaccines.

**Technologies Used**
* **Angular:** Creating dynamic and single-page web applications
* **NestJS:** Framework for building scalable and maintainable microservices.
* **TypeScript:** Programming language that provides static typing and advanced development features.
* **MongoDB:** NoSQL database for document storage.
* **Confluence:** Platform for team documentation and collaboration.


## Project Configuration

To run the project locally, clone the repository and set up the necessary environment variables for the database.

```bash
# Clone the repository
$ git clone https://github.com/cxmi02/API-Vacunas.git
$ cd API-Vacunas

# Install the necessary dependencies
$ npm install

# Copy the .env.example
$ cp .env.example .env

# Edit the .env file
$ DB_CONNECTION= your connection
$ DB_USER= your user
$ DB_PASSWORD= your password
$ DB_CLUSTER= your host
$ DB_NAME= your database name
$ PORT= 3000
```

## Running the App

```bash
# development
$ npm run start

# watch mode and Run Docker
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Gitflow Branching Strategy

This project follows the Gitflow strategy, a robust model for software development. Here is how the branches are organized and their purpose:

* `main:` Main branch with stable code for production. 
* `dev:` Development branch with the latest features before production. 
* `feat/NameTask:` Branch of tasks with functionalities, identified by to the task name.

The work is integrated into the 'dev' branch for integration testing. Once 'dev' is stable and ready to be released, it is merged into 'main'.

If you want to contribute to the project, create a new branch from 'dev' using the appropriate prefix (feat/NameTask). After finishing your work and testing, open a Pull Request towards 'dev'.

## Participant

María Camila Sepúlveda Giraldo - Software Developer.

* **GitHub:** [cxmi02](https://github.com/cxmi02)
* **Instagram:** [@k_amila2002](https://www.instagram.com/k_amila2002/)
* **Email:** sepulveda.giraldo.camila@gmail.com

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
