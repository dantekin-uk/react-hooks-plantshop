# Plantsy - Admin Plant Shop

Plantsy is a React application designed for the administrative side of a plant store. It allows users to manage their plant inventory by viewing existing plants, adding new ones, marking items as sold out, and searching through the collection.

## Demo

![Demo GIF](./demo.gif)

## Features

- **View Inventory**: Automatically fetches and displays all plants from the backend on page load.
- **Add New Plants**: Submit a form to add new plants to the store. Data is persisted to the backend via a POST request.
- **Manage Stock**: Toggle the stock status of any plant between "In Stock" and "Out of Stock" (local state).
- **Search & Filter**: Real-time filtering of plants by name as you type in the search bar.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Hooks**: Utilizes `useState` for local state management and `useEffect` for data fetching.
- **JSON Server**: Provides a mock REST API for backend data persistence.
- **Vite**: Modern frontend build tool for a fast development experience.

## Setup & Installation

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/dantekin-uk/react-hooks-plantshop
   ```
2. Navigate to the project directory:
   ```bash
   cd react-hooks-plantshop
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
1. **Start the Backend Server**:
   ```bash
   npm run server
   ```
   This runs the JSON server on `http://localhost:6001`.

2. **Start the Frontend Development Server**:
   In a new terminal, run:
   ```bash
   npm run dev
   ```
   Open the provided URL (usually `http://localhost:5173`) in your browser.

## API Endpoints

The base URL for the backend is `http://localhost:6001`.

- `GET /plants`: Retrieves all plants.
- `POST /plants`: Creates a new plant. Requires a JSON body with `name`, `image`, and `price`.

## Testing

To run the included test suite:
```bash
npm run test
```

---
*Developed as part of the Phase 2 Code Challenge.*
