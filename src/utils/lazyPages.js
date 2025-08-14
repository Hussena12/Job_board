import { lazy } from "react";

export const Jobs = lazy(() => import("../pages/Jobs"));
export const JobDetails = lazy(() => import("../pages/JobDetails"));
export const Login = lazy(() => import("../pages/Login"));
export const PostJob = lazy(() => import("../pages/PostJob"));
export const Register = lazy(() => import("../pages/Register"));
export const AboutUs = lazy(() => import("../pages/AboutUs"));
export const ContactUs = lazy(() => import("../pages/ContactUs"));
export const EditJob = lazy(() => import("../pages/EditJob"));
