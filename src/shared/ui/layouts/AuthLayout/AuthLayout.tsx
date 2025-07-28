import { Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <h1>Auth</h1>
      <Outlet />
    </div>
  );
}
