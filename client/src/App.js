import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Crud/Form";
import List from "./components/List/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
