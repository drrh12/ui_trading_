import { createContext, useContext, useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const MarketContext = createContext();

export function MarketProvider({ children }) {
  const [marketData, setMarketData] = useState([]);
  const [wsClient, setWsClient] = useState(null);

  useEffect(() => {
    const client = new W3CWebSocket("wss://api-pub.bitfinex.com/ws/2");

    const pairs = [
      "tBTCUSD", // Bitcoin to USD
      "tBTCEUR", // Bitcoin to EUR
      "tETHUSD", // Ethereum to USD
      "tETHEUR", // Ethereum to EUR
      "tXRPUSD", // Ripple to USD
      "tLTCUSD", // Litecoin to USD
      "tADAUSD", // Cardano to USD
      "tDOTUSD", // Polkadot to USD
      "tSOLUSD", // Solana to USD
      "tDOGE:USD", // Dogecoin to USD
    ];

    client.onopen = () => {
      const subscribeMsg = {
        event: "subscribe",
        channel: "ticker",
        symbol: "tBTCUSD",
      };
      client.send(JSON.stringify(subscribeMsg));
    };

    client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      if (Array.isArray(data) && data[1] !== "hb") {
        const [
          bid,
          bidSize,
          ask,
          askSize,
          dailyChange,
          dailyChangePerc,
          lastPrice,
          volume,
        ] = data[1];

        const newData = {
          currency: "BTC",
          pair: "USD",
          bid: bid.toFixed(2),
          ask: ask.toFixed(2),
          volume: `${(volume / 1000).toFixed(2)}K`,
          change: dailyChangePerc.toFixed(2),
        };

        setMarketData((prevData) => {
          const existingIndex = prevData.findIndex(
            (item) =>
              item.currency === newData.currency && item.pair === newData.pair
          );

          if (existingIndex !== -1) {
            // Update the existing currency pair
            const updatedData = [...prevData];
            updatedData[existingIndex] = {
              ...updatedData[existingIndex],
              ...newData,
            };
            return updatedData;
          } else {
            // Add new currency pair
            return [...prevData, newData];
          }
        });
      }
    };

    setWsClient(client);

    return () => {
      if (client) {
        client.close();
      }
    };
  }, []);

  return (
    <MarketContext.Provider value={{ marketData }}>
      {children}
    </MarketContext.Provider>
  );
}

export function useMarket() {
  const context = useContext(MarketContext);
  if (!context) {
    throw new Error("useMarket must be used within a MarketProvider");
  }
  return context;
}
