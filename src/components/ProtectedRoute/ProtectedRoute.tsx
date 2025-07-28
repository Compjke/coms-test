import { Navigate, Outlet } from 'react-router';
import { ROUTES } from '@/app/routes/routes';

const isAuth = true; // временно

export default function ProtectedRoute() {
  return isAuth ? <Outlet /> : <Navigate to={ROUTES.AUTH_LOGIN} />;
}