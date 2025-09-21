import { lazy } from "react";

export const Jobs = lazy(() => import("../pages/Jobs"));
export const JobDetails = lazy(() => import("../pages/JobDetails"));
export const Login = lazy(() => import("../pages/Login"));
export const PostJob = lazy(() => import("../pages/PostJob"));
export const Register = lazy(() => import("../pages/Register"));
export const AboutUs = lazy(() => import("../pages/AboutUs"));
export const ContactUs = lazy(() => import("../pages/ContactUs"));
export const EditJob = lazy(() => import("../pages/EditJob"));

// components

export const ContactForm = lazy(() => import("@/components/ContactForm"));
export const Contact2Form = lazy(() => import("@/components/Contact2Form"));
export const SocialIcon = lazy(() => import("@/components/SocialIcon"));
export const SuccessContact = lazy(() => import("@/components/SuccessContact"));
export const JobList = lazy(() => import("@/components/JobList"));
