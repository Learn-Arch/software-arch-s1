import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Login = lazy(() => import('auth/Login'));
const Register = lazy(() => import('auth/Register'));
const Profile = lazy(() => import('profile/Profile'));
const Cards = lazy(() => import('cards/Card'));

function AppRoutes({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/signin"
          element={
            !isLoggedIn ? (
              <Login setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !isLoggedIn ? (
              <Register setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <div className="content">
                <Profile />
                <Cards />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes; 