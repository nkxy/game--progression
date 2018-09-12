# Video Game Progression API

## Install JSON Server

To install and learn how to use JSON Server:
https://github.com/typicode/json-server

## Run JSON Server

`> json-server --watch db.json`

Once the server is running, you try it out at:
http://localhost:3000

## REST Endpoints

### GET /platforms

Get an array of Platforms

Response:

```json
[
  {
    "id": number,
    "name": string
  }
]
```

### GET /languages

Get an array of Languages

Response:

```json
[
  {
    "id": number,
    "name": string,
    "code": string
  }
]
```

### GET /games?platformId={platformId}&name_like={name}&isComplete={isComplete}&_sort={column}

Get an array of games

Response:

```json
[
  {
    "id": number,
    "dateCreated": string,
    "name": string,
    "image": string,
    "platformId": number,
    "priority": number,
    "numberOfHoursPlayed": number,
    "numberOfHoursToComplete": number,
    "isComplete": boolean
  }
]
```

### POST /games

Add a game

Request Body:

```json
{
  "id": number,
  "dateCreated": string,
  "name": string,
  "image": string,
  "platformId": number,
  "priority": number,
  "numberOfHoursPlayed": number,
  "numberOfHoursToComplete": number,
  "isComplete": boolean
}
```

### PUT /games/{id}

Update a game

Request Body:

```json
{
  "id": number,
  "dateCreated": string,
  "name": string,
  "image": string,
  "platformId": number,
  "priority": number,
  "numberOfHoursPlayed": number,
  "numberOfHoursToComplete": number,
  "isComplete": boolean
}
```

### DELETE /games/{id}

Delete a game

Response: `{}`

### GET /profile

Get the current user’s profile

Response:

```json
[
  {
    "id": number,
    "firstName": string,
    "lastName": string,
    "image": string,
    "languageId": number,
    "averageNumberOfHoursPerDay": number
  }
]
```

### PUT /profile

Update the user’s profile

Request Body:

```json
{
  "id": number,
  "firstName": string,
  "lastName": string,
  "image": string,
  "languageId": number,
  "averageNumberOfHoursPerDay": number
}
```