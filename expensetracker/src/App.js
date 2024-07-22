import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomExpenses from "./components/IncomExpenses";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomExpenses />
      </div>
    </div>
  );
}

export default App;
