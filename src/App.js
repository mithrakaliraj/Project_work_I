import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import InterviewPage from "./components/InterviewPage";
import ResumePage from "./components/ResumePage";

// Clerk imports
import {
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

export default function App() {
  return (
    <Router>
      {/* Authenticated user area */}
      <SignedIn>
        <header className="p-4 flex justify-end">
          {/* Profile dropdown (logout, manage account) */}
          <UserButton afterSignOutUrl="/" />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </SignedIn>

      {/* Guest user area */}
      <SignedOut>
        <Routes>
          {/* Sign in / Sign up routes */}
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />

          {/* If they try to access a protected route, send them to sign-in */}
          <Route path="*" element={<RedirectToSignIn />} />
        </Routes>
      </SignedOut>
    </Router>
  );
}
