import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Crud/Form";
import List from "./components/List/List";
import CatEdit from "./components/UI_edit/CatEdit";
import ProdEdit from "./components/UI_edit/ProdEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Form />} />
        <Route path="/edit/cat" element={<CatEdit />} />
        <Route path="/edit/prod" element={<ProdEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
