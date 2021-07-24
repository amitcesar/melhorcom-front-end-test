import "./App.css";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { PhonesList } from "./components/PhonesList.js";
function App() {
  return (
    <div className="App">
      <Header />
      <PhonesList />
      <Footer />
    </div>
  );
}

export default App;
