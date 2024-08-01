# TaskJS

![Express.js](https://img.shields.io/badge/Express.js-4.x-blue) ![Node.js](https://img.shields.io/badge/Node.js-20.x-green) ![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green) ![Mongoose](https://img.shields.io/badge/Mongoose-8.x-green) ![JWT](https://img.shields.io/badge/JWT-Authentication-yellow) ![REST API](https://img.shields.io/badge/REST-API-orange)

**TaskJS** is a RESTful API built with **Express.js** and **Node.js** that allows users to register accounts, log in, and manage personal tasks. The API uses **JSON Web Tokens (JWT)** for authentication and **MongoDB** for data storage via **Mongoose**.

## Features

- **User Registration and Authentication**: Enables user sign-up and login with JWT for secure access.
- **Task Management**: Full CRUD (Create, Read, Update, Delete) functionality for personal tasks.
- **Protected Routes**: Secure access to routes using JWT authentication.
- **MongoDB with Mongoose**: Simplified database interactions for managing MongoDB documents.
  
## Technologies Used

- **Node.js**: JavaScript runtime environment for the server.
- **Express.js**: Web application framework built on Node.js.
- **MongoDB**: NoSQL database to store users and tasks.
- **Mongoose**: ODM to facilitate MongoDB interactions.
- **JSON Web Tokens (JWT)**: Secure method for user authentication.
- **bcrypt.js**: Library for password hashing.

## Installation

Follow these steps to install and run the project locally:

1. **Clone the repository**:
```bash
git clone https://github.com/EmiliodDev/TaskJS.git
cd TaskJS
```

2. **Install the dependencies**:
```bash
npm install
```

3. **Set up environment variables**:

   Create a `.env` file in the root directory of the project with the following information:
```.env
MONGO_URI=<your-mongo-url>
JWT_SECRET=<your-jwt-secret>
``` 

4. **Start the server**:
```bash
node server/main.js
```

## Endpoints

| Method | URL | Action |
|--------|-----|--------|
|POST    |/register| register a user|
|POST| /login| logs in a user |
|POST|/tasks/:userId|creates a new task associated with the specified user|
|PUT|/tasks/:taskId| updates an existing task|
|GET|/tasks|retrieves all the user's tasks|
|DELETE | /tasks/:taskId| delete a specified task|

Go to:

- [Register](#register)
- [Login](#login)
- [Create a new task](#create-task)
- [Update a task](#update-task)
- [Get a list of tasks](#get-all-tasks)
- [Delete a task](#delete-task)

### **Register**

Register a new user with the credentials provided.

- **URL**

  `/register`

- **Method**

  `POST`

- **Request params**

  `none`

- **Request Body:**

```json
{
  "username": "example",
  "password": "password123",
  "email": "example@email.com"
}
```

- **Successful response**

  - Code: 201 (Created)
  - Response Body:

  ```json
  {
    "message": "user created"
  }
  ```

- **Error Response**
  - Code: 400 (Bad Request)
  - Response Body:
  ```json
  {
    "error": "User already exists"
  }
  ```
  - Code: 500 (Internal Server Error)
  - Response Body:
  ```json
  {
    "error": "Something went wrong"
  }
  ```

> Note: You can see an example usage in `examples/register.js`

### **Login**

Logs in a user with the provided credentials.

- **URL**

  `/login`

- **Method**

  `POST`

- **Request params**

  `none`

- **Request Body:**

```json
{
  "email": "example@example.com",
  "password": "password123"
}
```

- **Successful Response**
  - Code: 200 (OK)
  - Response Body:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
- **Error response**
  - Code: 401 (Unauthorized)
  - Response Body:
  ```json
  {
    "error": "Invalid username or password"
  }
  ```
  - Code: 500 (Internal Server Error)
  - Response Body:
  ```json
  {
    "error": "Something went wrong"
  }
  ```

> Note: You can see an example usage in `examples/login.js`

### **Create Task**

Creates a new task associated with the specified user.

- **URL**

  `/tasks/:userId`

- **Method**

  `POST`

- **URL Parameters**

  - `userId` - The ID of the user to associate the task with.

- **Headers**

  - `Authorization: Bearer <token>` - The access token obtained after logging in.

- **Request Body**

  - `title` (required): The title of the task.
  - `isCompleted`: Indicates whether the task is completed (default: `false`).
  - `description`: The description of the task.
  - `time`: The time associated with the task.
  - `date`: The date of the task.
  - `iisNotificationEnabled`: Indicates whether notifications are enabled for the task (default: `false`).
  - `repeatDays`: An array of days when the task is repeated.

- **Successful Response**

  - Code: 200 (OK)
  - Response Body:

  ```json
  {
    "message": "Task created",
    "task": {
      "_id": "task_id",
      "title": "Task Title",
      "isCompleted": false,
      "description": "Task Description",
      "time": "Task Time",
      "date": "Task Date",
      "isNotificationEnabled": false,
      "repeatDays": ["Monday", "Wednesday"],
      "user": "user_id",
      "createdAt": "2023-06-07T12:00:00Z",
      "updatedAt": "2023-06-07T12:00:00Z"
    }
  }
  ```

- **Error Response**
  - Code: 500 (Internal Server Error)
  - Response Body:
    ```json
    {
      "error": "Something went wrong"
    }
    ```

> Note: You can see an example usage in `examples/createTask.js`

### **Update Task**

Updates an existing task

- **URL**

  `/tasks/:taskId`

- **Method**

  `PUT`

- **URL Parameters**

  - `taskId` - The ID of the task to be updated.

- **Headers**

  - `Authorization: Bearer <token>` - The access token obtained after logging in.

- **Request Body**

  - `title` (required): The title of the task.
  - `isCompleted`: Indicates whether the task is completed (default: `false`).
  - `description`: The description of the task.
  - `time`: The time associated with the task.
  - `date`: The date of the task.
  - `iisNotificationEnabled`: Indicates whether notifications are enabled for the task (default: `false`).
  - `repeatDays`: An array of days when the task is repeated.

- **Successful Response**

  - Code: 200 (OK)
  - Response Body:

  ```json
  {
    "message": "Task updated",
    "task": {
      "_id": "task_id",
      "title": "Updated Task Title",
      "isCompleted": true,
      "description": "Updated Task Description",
      "time": "Updated Task Time",
      "date": "Updated Task Date",
      "isNotificationEnabled": true,
      "repeatDays": ["Monday", "Tuesday"],
      "user": "user_id",
      "createdAt": "2023-06-07T12:00:00Z",
      "updatedAt": "2023-06-07T12:30:00Z"
    }
  }
  ```

  - **Error Response**

    - Code: 404 (Not Found)
    - Response Body:

    ```json
    {
      "message": "Task not found"
    }
    ```

> Note: You can see an example usage in `examples/updateTask.js`

### **Get All Tasks**

Retrieves all the user's tasks

- **URL**

  `/tasks`

- **Method**

  `GET`

- **Headers**

  - `Authorization: Bearer <token>` - The access token obtained after logging in.

- **Successful Response**

  - Code: 200 (OK)
  - Response Body:

  ```json
  {
    "tasks": [
      {
        "_id": "task_id1",
        "title": "Task 1",
        "isCompleted": false,
        "description": "Task 1 description",
        "time": "09:00",
        "date": "2023-06-07",
        "isNotificationEnabled": true,
        "repeatDays": ["Monday", "Wednesday"],
        "user": "user_id",
        "createdAt": "2023-06-07T08:00:00Z",
        "updatedAt": "2023-06-07T09:30:00Z"
      },
      {
        "_id": "task_id2",
        "title": "Task 2",
        "isCompleted": true,
        "description": "Task 2 description",
        "time": "13:00",
        "date": "2023-06-08",
        "isNotificationEnabled": false,
        "repeatDays": [],
        "user": "user_id",
        "createdAt": "2023-06-07T10:00:00Z",
        "updatedAt": "2023-06-07T11:45:00Z"
      }
    ]
  }
  ```

- **Error Response**

  - Code: 500 (Internal Server Error)
  - Response Body:

  ```json
  {
    "error": "Something went wrong"
  }
  ```

> Note: You can see an example usage in `examples/getAllTasks.js`

### **Delete Task**

Delete a task.

- **URL**

  `/tasks/:taskId`

- **Method**

  `DELETE`

- **Headers**

  - `Authorization: Bearer <token>` - The access token obtained after logging in.

- **URL Parameters**

  - `taskId` - The ID of the task to delete.

- **Successful Response**

  - Code: 200 (OK)
  - Response Body:

  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

- **Error Response**

  - Code: 400 (Bad request)
  - Response Body:

  ```json
  {
    "message": "Task not found"
  }
  ```

  - Code: 500 (Internal Server Error)
  - Response Body:

  ```json
  {
    "error": "Something went wrong"
  }
  ```

> Note: You can see an example usage in `examples/deleteTask.js`

# License

Licensed under:

- MIT license ([LICENSE-MIT](LICENSE-MIT) or https://opensource.org/licenses/MIT)
