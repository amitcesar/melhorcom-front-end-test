import "./App.css";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

import { MainContent } from "./components/MainContent.js";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
