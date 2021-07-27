import "./App.css";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

import { MainContent } from "./components/MainContent.js";
import { PhoneForm } from "./components/PhoneForm";
function App() {
  return (
    <div className="App">
      <Header />
      <PhoneForm />
      <Footer />
    </div>
  );
}

export default App;
