import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import TaskPage from './pages/TaskPage.jsx';

// Definindo as rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/task',
    element: <TaskPage />,
  },
]);

// Renderizando o app com o provedor de rotas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
