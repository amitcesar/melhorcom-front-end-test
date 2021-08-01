import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PhoneList } from "./components/PhoneList";
import { PhoneForm } from "./components/PhoneForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={PhoneList} />
          <Route path="/phone/add" component={PhoneForm} />
          <Route path="/phone/:_id?" component={PhoneForm} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
