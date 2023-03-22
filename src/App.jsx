import { useState, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { TickerContext } from "./contexts/TickerContext";

function App() {
  const { checked, loading, ticker } = useContext(TickerContext);
  console.log(ticker);
  loading && <div>Loading...</div>;
  return (
    <>
      <div className={checked && "theme-dark"}>
        <section className="header">
          <Header />
        </section>
        <section className="container-fluid mt-5 " id="ticker-table">
          <table className="table table-borderless text-center w-100">
            <thead>
              <tr>
                <th>
                  <span className="pointer">#</span>
                </th>
                <th>
                  <span className="pointer">Name</span>
                </th>
                <th>
                  <span className="pointer">Last</span>
                </th>
                <th>
                  <span className="pointer">Buy / Sell Price</span>
                </th>
                <th>
                  <span className="pointer">Volume</span>
                </th>
                <th>
                  <span className="pointer">base unit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>1</td>
                <td>Bitcoin</td>
                <td>50006</td>
                <td>₹ 1,00,000 / ₹ 1,00,000</td>
                <td>5000</td>
                <td>btc</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Bitcoin</td>
                <td>50006</td>
                <td>₹ 1,00,000 / ₹ 1,00,000</td>
                <td>5000</td>
                <td>btc</td>
              </tr> */}
              {ticker &&
                ticker.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.last}</td>
                      <td>{`₹ ${item.buy} / ₹ ${item.sell}`}</td>
                      <td>{item.volume}</td>
                      <td>{item.base_unit}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default App;
