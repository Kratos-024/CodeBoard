import { useEffect, useState } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { LeaderBoardPage } from "./pages/LeaderBoardPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
            element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />}
          ></Route>
          <Route path="/leaderBoard" element={<LeaderBoardPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
