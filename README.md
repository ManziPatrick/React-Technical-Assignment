# Todo App

A simple Todo application built with React and Vite, using DummyJSON as a backend API.

Live demo: [https://todo-app-assign.vercel.app/](https://todo-app-assign.vercel.app/)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ManziPatrick/React-Technical-Assignment.git
cd React-Technical-Assignment
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add:

```plaintext
REACT_APP_API_BASE_URL=https://dummyjson.com
```

### 4. Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

### screenshots of CRUD
## To add todo
![image](https://github.com/user-attachments/assets/bb90687f-c7f4-4cf4-a5e1-70ee4f0f771c)
## To update the status is just to click status 
![image](https://github.com/user-attachments/assets/4080e3e9-75d5-4ac5-9990-595b9f2c65fd)
## To delete the ticket  click on three dots and delete
![image](https://github.com/user-attachments/assets/36161e45-ea85-4345-b045-b0b99b426d06)
## To get all the tickets 
![image](https://github.com/user-attachments/assets/7644b3a2-1846-4751-8204-969a8600fe52)



### Localhost

The application will be available at `http://localhost:5173`

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Testing

The project uses Jest for testing. Here are the available test commands:

### Run all tests

```bash
npm test
# or
yarn test
```

### Watch mode (for development)

```bash
npm run test:watch
# or
yarn test:watch
```

### Generate test coverage report

```bash
npm run test:coverage
# or
yarn test:coverage
```

## Code Quality

Run the linter to check for code style issues:

```bash
npm run lint
# or
yarn lint
```



## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)

## Deployment

This project is deployed on Vercel. To deploy your own instance:

1. Create a Vercel account if you haven't already
2. Connect your repository to Vercel
3. Configure the environment variables in Vercel dashboard
4. Deploy!

The application will automatically deploy when changes are pushed to the main branch.
