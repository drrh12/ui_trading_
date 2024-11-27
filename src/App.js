import logo from "./logo.svg";
import "./App.css";
import TradingLayout from "./components/TradingLayout";
import { MarketProvider } from "./context/MarketContext";

function App() {
  return (
    <>
      <MarketProvider>
        <TradingLayout />
      </MarketProvider>
    </>
  );
}

export default App;
