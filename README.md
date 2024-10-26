# Todo App

A simple Todo application built with React and Vite, using DummyJSON as a backend API.

Live demo: [https://todo-app-pi-liard.vercel.app/](https://todo-app-pi-liard.vercel.app/)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-directory>
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
