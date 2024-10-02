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
$ DB_CONNECTION = Connection
$ DB_USER = user
$ DB_PASSWORD = password
$ DB_CLUSTER = cluster
$ DB_NAME = name
```


## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
