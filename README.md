# Course Allocation System

A modern, full-stack application for managing and generating teacher-course schedules. Built with a React frontend and a Django REST API backend.

## Features

- **Automated Scheduling**: Intelligent algorithm to match teachers with courses based on qualification, department, and preferences.
- **Teacher Management**: Full CRUD operations for managing teacher profiles and credit hour limits.
- **Course Management**: Manage courses, credit hours, and minimum qualification requirements.
- **Dashboard Statistics**: Visual summary of total teachers, courses, and allocated hours.
- **Export Options**: Download generated schedules as Excel or PDF files.
- **Persistent Storage**: All allocations and data are stored in a PostgreSQL database.

## Tech Stack

- **Frontend**: React.js, Styled Components, Axios
- **Backend**: Django, Django REST Framework
- **Database**: PostgreSQL
- **Exports**: jsPDF, XLSX

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [Python](https://www.python.org/) (v3.10+)
- [PostgreSQL](https://www.postgresql.org/)

### 1. Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Create a `.env` file based on `.env.example` and add your database credentials.
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. (Optional) Seed the database with sample data:
   ```bash
   python manage.py seed_data
   ```
6. Start the server:
   ```bash
   python manage.py runserver
   ```

### 2. Frontend Setup

1. In the root directory, install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## License

This project is licensed under the MIT License.
