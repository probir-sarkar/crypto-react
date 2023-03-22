import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TickerContext = createContext();

export const TickerProvider = ({ children }) => {
  const [ticker, setTicker] = useState([]);
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://crypto-api-production.up.railway.app/api/ticker").then((res) => {
      setTicker(res.data);
      setLoading(false);
    });
  }, []);

  const value = { ticker, setTicker, checked, setChecked, loading };

  return <TickerContext.Provider value={value}>{children}</TickerContext.Provider>;
};
