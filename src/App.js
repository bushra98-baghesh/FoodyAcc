import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<Protected />}>
            <Route element={<Dashboard />} path="/dashboard" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
