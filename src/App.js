import Cards from "./components/Cards";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Details from "./components/Details"

function App() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Cards/>}/>
            <Route path="/add movie" element={<AddMovie/>}/>
            <Route path="/movie details/:id" element={<Details/>}/>  
        </Routes>
    </div>
  );
}

export default App;
