import { useEffect } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { LeaderBoardPage } from "./pages/LeaderBoardPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { AccountAuth } from "./components/AccountAuth";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { PublicRoutes } from "./routes/PublicRoutes";
import { Provider, useSelector } from "react-redux";
import { persistor, store, type RootState } from "./app/store/store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Loader";

function RouteHandling() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes>
              <HomePage />
            </PublicRoutes>
          }
        />
        <Route path="/leaderBoard" element={<LeaderBoardPage />} />
        <Route
          path="/create-acc"
          element={
            <PublicRoutes>
              <AccountAuth />
            </PublicRoutes>
          }
        />
        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function DarkModeHandler() {
  const darkMode = useSelector((state: RootState) => state.user.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return null;
}

function AppContent() {
  return (
    <>
      <DarkModeHandler />
      <RouteHandling />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
}

export default App;
