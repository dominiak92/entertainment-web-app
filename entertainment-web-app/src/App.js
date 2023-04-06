import Header from "./components/UI/Header";
import SearchBar from "./components/UI/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bookmarked from "./components/pages/Bookmarked";
import Movies from "./components/pages/Movies";
import Tvseries from "./components/pages/Tvseries";
import Home from "./components/pages/Home";
import AxiosProvider from "./components/hooks/AxiosProvider";
function App() {
  return (
    <AxiosProvider>
      <div className="App">
        <Header />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<Tvseries />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
        </Routes>
      </div>
    </AxiosProvider>
  );
}

export default App;
