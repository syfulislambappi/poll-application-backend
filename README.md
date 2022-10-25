<div align="right">
  <img src="https://img.shields.io/badge/Completion-100%25-blue.svg" />
</div>

# Poll Application Backend

# Features

- Anyone can create poll.
- Anyone can see poll.
- Anyone can vote in the poll.
- Anyone can add unlimited vote and option.

```
-------------------------------------------------------------------------
Application Route
-------------------------------------------------------------------------
[Method]  [Route]                          [Description]
GET       /api/v1/poll                     Fetch all polls from database
POST      /api/v1/poll/create              Create a new poll
GET       /api/v1/poll/:pollId             Fetch poll by pollId
PATCH     /api/v1/poll/:pollId             Update poll vote value
```

# Technologies

- [`NodeJS`](https://nodejs.org/en/)
- [`Express`](https://expressjs.com/)
- [`Morgan`](https://www.npmjs.com/package/morgan)
- [`Cors`](https://www.npmjs.com/package/cors)

Check [`package.json`](https://github.com/syfulislambappi/poll-application-backend/blob/main/package.json) file for more information.

# Getting Started

Follow the instructions below to set up the environment and run this project on your local machine.

1. Clone this repository.

```bash
# Clone repository
$ git clone git@github.com:syfulislambappi/poll-application-backend.git
```

2. Install dependencies via NPM or Yarn

```bash
# Install dependencies via npm
$ npm install
$ cd application
$ npm install
$ cd ..

# Install dependencies via yarn
$ yarn install
$ cd application
$ yarn install
$ cd ..
```

3. Run the server.

```bash
# Run server
$ yarn dev
```
