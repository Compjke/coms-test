// AppRouter.tsx
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import { HomePage } from '@/pages/public/home/HomePage';
import AuthLayout from '@/shared/ui/layouts/AuthLayout/AuthLayout';
import MainLayout from '@/shared/ui/layouts/MainLayout/MainLayout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { ROUTES } from './routes';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public & Private pages with MainLayout */}
        <Route element={<MainLayout />}>
          {/* Public */}
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT_US} element={<div>About Us</div>} />
          <Route path={ROUTES.CATALOG} element={<div>Catalog</div>} />
          <Route path={ROUTES.PRIVACY_POLICY} element={<div>Privacy Policy</div>} />
          <Route path={ROUTES.TERMS_OF_SERVICE} element={<div>Terms of Service</div>} />
          <Route path={ROUTES.CONTACTS_AND_SUPPORT} element={<div>Contacts & Support</div>} />
          <Route path={ROUTES.INFO} element={<div>Info</div>} />

          {/* Private (protected) */}
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.PERSONAL_CABINET} element={<div>Personal Cabinet</div>}>
              <Route index element={<Navigate to={ROUTES.PERSONAL_CABINET_MAIN_INFO} replace />} />
              <Route path={ROUTES.PERSONAL_CABINET_MAIN_INFO} element={<div>Main Info</div>} />
              <Route path={ROUTES.PERSONAL_CABINET_MAIN_INFO_EDIT} element={<div>Edit Main Info</div>} />
              <Route path={ROUTES.PERSONAL_CABINET_ABOUT_ME} element={<div>About Me</div>} />
              <Route path={ROUTES.PERSONAL_CABINET_ABOUT_ME_EDIT} element={<div>Edit About Me</div>} />
              <Route path={ROUTES.PERSONAL_CABINET_ADDRESS} element={<div>Address</div>} />
              <Route path={ROUTES.PERSONAL_CABINET_ADDRESS_EDIT} element={<div>Edit Address</div>} />
              <Route path={ROUTES.PERSONAL_CABINET_OCCUPATION} element={<div>Occupation</div>} />
              <Route path={ROUTES.PERSONAL_CABINET_OCCUPATION_EDIT} element={<div>Edit Occupation</div>} />
              <Route path={ROUTES.PERSONAL_CABINET_ACCOUNT_SETTINGS} element={<div>Account Settings</div>} />
              <Route path={ROUTES.PERSONAL_CABINET_ACCOUNT_SETTINGS_EDIT} element={<div>Edit Account Settings</div>} />
            </Route>
            <Route path={ROUTES.MY_APPLICATIONS} element={<div>My Applications</div>} />
          </Route>
        </Route>

        {/* Auth pages with AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.AUTH_LOGIN} element={<div>Login</div>} />
          <Route path={ROUTES.AUTH_REGISTER} element={<div>Register</div>} />
          <Route path={ROUTES.AUTH_RESET_PASSWORD} element={<div>Reset Password</div>} />
          <Route path={ROUTES.AUTH_NEW_PASSWORD} element={<div>New Password</div>} />
          <Route path={ROUTES.AUTH_EMAIL_CONFIRMATION} element={<div>Email Confirmation</div>} />
          <Route path={ROUTES.AUTH_PASSWORD_CHANGE} element={<div>Password Change</div>} />
          <Route path={ROUTES.AUTH_EMAIL_CHANGE} element={<div>Email Change</div>} />
          <Route path={ROUTES.AUTH_EMAIL_CANCELLATION} element={<div>Email Change Cancellation</div>} />
          <Route path={ROUTES.AUTH_DELETE_ACCOUNT} element={<div>Delete Account</div>} />
          <Route path={ROUTES.LOGIN_CALLBACK} element={<div>Login Callback</div>} />
          <Route path={ROUTES.LOGOUT_CALLBACK} element={<div>Logout Callback</div>} />
        </Route>

        {/* 404 */}
        <Route path={ROUTES.NOT_FOUND} element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
