import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/scrollUp/ScrollToTop";
import { Header } from "./components/header/index";
import { Footer } from "./components/footer/index";
import { Home } from "./pages/home/index";
import { Menu } from "./pages/menu/index";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { NotFoundPage } from "./pages/notFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
