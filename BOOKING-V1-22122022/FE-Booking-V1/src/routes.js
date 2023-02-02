import HomePage from "./pages/HomePage/HomePage";
import RoomPage from "./pages/RoomPage/RoomPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import UserPage from "./pages/UserPage/UserPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import Detail from "./pages/Detail/Detail.jsx";
import Myprofile from "./pages/Myprofile/Myprofile";
import React from "react";

let routes = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/roomPage",
    element: <RoomPage />,
  },
  {
    id: 3,
    path: "/bookingPage",
    element: <BookingPage />,
  },
  {
    id: 4,
    path: "/loginPage",
    element: <LoginPage />,
  },
  {
    id: 5,
    path: "/registerPage",
    element: <RegisterPage />,
  },
  {
    id: 6,
    path: "/resetPasswordPage",
    element: <ResetPasswordPage />,
  },
  {
    id: 7,
    path: "/userPage/:id",
    element: <UserPage />,
  },
  {
    id: 8,
    path: "/notFoundPage",
    element: <NotFoundPage />,
  },
  {
    id: 9,
    path: "/forgotPasswordPage",
    element: <ForgotPasswordPage />,
  },
  {
    id: 10,
    path: "/detailpage/:id",
    element: <Detail />,
  },
  {
    id: 11,
    path: "/myprofile",
    element: <Myprofile />,
  },
];
export default routes;
