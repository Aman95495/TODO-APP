# TODO Server

## Introduction

This TODO Server is a simple web application designed to manage a list of tasks. It provides functionality for creating, updating, deleting, and retrieving TODO items. The server is built using Express.js and uses a JSON file to store data. The frontend is created using HTML, CSS, and JavaScript, allowing users to interact with the server through a web interface.

## Features

- **Add a new TODO item**: Users can create new tasks with a title, description, and completion status.
- **Display all TODO items**: Users can view all existing tasks.
- **Retrieve a single TODO item by ID**: Users can find a specific task by its ID.
- **Update a TODO item**: Users can modify the title, description, and completion status of an existing task.
- **Delete a TODO item**: Users can remove a task by its ID.

## Project Structure

- `index.html`: The main HTML file containing the structure and layout of the web interface.
- `script.js`: The JavaScript file containing functions to interact with the server API and update the DOM.
- `style.css`: The CSS file for styling the web interface.
- `todo_final.js`: The Node.js server file using Express.js to handle API requests.
- `todo.json`: The JSON file used for storing TODO items.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Aman95495/TODOSERVER.git
   cd TODOSERVER
   ```

2. Install the necessary dependencies:
   ```sh
   npm install
   ```

### Running the Server

1. Start the server:
   ```sh
   node todo_final.js
   ```

2. Open your web browser and navigate to `http://localhost:3000`.

## Usage

### Add a New TODO Item

1. Fill in the "Title" and "Description" fields.
2. Select the completion status (True or False).
3. Click the "ADD NEW TODO" button.
4. A message will appear confirming that the item was added successfully.

### Display All TODO Items

1. Click the "DISPLAY ALL TODO" button.
2. A table will appear displaying all the TODO items with their ID, Title, Description, and Completion status.

### Retrieve a Single TODO Item by ID

1. Enter the ID of the TODO item in the "ID TO FIND" field.
2. Click the "RETRIEVE ONE ITEM" button.
3. The details of the TODO item will be displayed if found, or a message will appear if the ID is not found.

### Update a TODO Item

1. Enter the ID of the TODO item to update in the "ID TO UPDATE" field.
2. Fill in the new "Title" and "Description" fields.
3. Select the new completion status (True or False).
4. Click the "UPDATE" button.
5. A message will appear confirming that the item was updated successfully.

### Delete a TODO Item

1. Enter the ID of the TODO item to delete in the "ID TO DELETE" field.
2. Click the "DELETE" button.
3. A message will appear confirming that the item was deleted successfully or that the ID was not found.

## API Endpoints

- `GET /todos`: Retrieve all TODO items.
- `GET /todos/:id`: Retrieve a single TODO item by ID.
- `POST /todos`: Create a new TODO item.
- `PUT /todos/:id`: Update an existing TODO item.
- `DELETE /todos/:id`: Delete a TODO item by ID.

## License

This project is licensed under the MIT License.

