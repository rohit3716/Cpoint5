# Grocery Inventory App

This is a basic web application for managing grocery inventory. The application is built using MySQL, Node.js, Express.js, and React.js.

## Setup

1. **Database Setup**

   - Open MySQL Workbench.
   - Create a schema named `grocery`.
   - Inside the `grocery` schema, create a table named `grocery_table` with the following attributes:
     - `id` (INT, Auto Increment)
     - `name` (VARCHAR)
     - `quantity` (INT)

2. **Backend Setup**

   - Navigate to the `server` directory using the command line:
     ```bash
     cd server
     ```
   - Create a `.env` file based on the provided `.env.sample.js` and fill in the appropriate database credentials.

   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the server:
     ```bash
     nodemon index.js
     ```

3. **Client Setup**

   - Navigate to the `client` directory using the command line:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the client:
     ```bash
     npm run dev
     ```

4. **Access the App**

   - Open your browser and go to [http://localhost:5173](http://localhost:5173) to access the application.

5. **API Endpoints**

   - **Create Item**: 
     - Endpoint: `/api/post`
     - Method: POST
     - Description: Create a new grocery item.

   - **Get All Items**: 
     - Endpoint: `/api/get`
     - Method: GET
     - Description: Retrieve all grocery items.

   - **Update Item**: 
     - Endpoint: `/api/update/:id`
     - Method: PUT
     - Description: Update the details of a specific grocery item.

   - **Delete Item**: 
     - Endpoint: `/api/delete/:id`
     - Method: DELETE
     - Description: Delete a specific grocery item.

## Features

- **Create Item**: Add a new grocery item to the inventory.
- **Edit Item**: Modify the details of an existing grocery item.
- **Delete Item**: Remove a grocery item from the inventory.


