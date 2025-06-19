import { useEffect, useState } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { LeaderBoardPage } from "./pages/LeaderBoardPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { AccountAuth } from "./components/AccountAuth";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { PublicRoutes } from "./routes/PublicRoutes";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoutes>
                <HomePage darkMode={darkMode} setDarkMode={setDarkMode} />
              </PublicRoutes>
            }
          ></Route>
          <Route path="/leaderBoard" element={<LeaderBoardPage />}></Route>
          <Route
            path="/create-acc"
            element={
              <PublicRoutes>
                <AccountAuth />
              </PublicRoutes>
            }
          ></Route>

          <Route
            path="/Profile"
            element={
              <ProtectedRoute>
                <ProfilePage darkMode={darkMode} setDarkMode={setDarkMode} />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
