import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Market from './pages/Market.tsx';
import User from './pages/User.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="/market" />,
      },
      {
        path: '/market',
        element: <Market />,
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ConfigProvider>,
);
