import Header from "./components/UI/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bookmarked from "./components/pages/Bookmarked";
import Movies from "./components/pages/Movies";
import Tvseries from "./components/pages/Tvseries";
import Home from "./components/pages/Home";
import AxiosProvider from "./components/hooks/AxiosProvider";
import SearchProvider from "./components/UI/Search/SearchProvider";
import styles from "./App.module.scss";
function App() {
  return (
    <AxiosProvider>
      <SearchProvider>
      
        <div className={styles.App}>
            <Header />
            <div className={styles.content}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/tvseries" element={<Tvseries />} />
                <Route path="/bookmarked" element={<Bookmarked />} />
              </Routes>
            </div>
          </div>
      </SearchProvider>
    </AxiosProvider>
  );
}

export default App;
