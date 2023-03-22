import { useState, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Logo from "../assets/HODLINFO.png";
import TelegramIcon from "../assets/telegram.png";
import "./Header.css";
import { TickerContext } from "../contexts/TickerContext";
import Timer from "./Timer";

const Header = () => {
  const { checked, setChecked } = useContext(TickerContext);
  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="container-fluid px-5 pt-5">
        <div className="row">
          <div className="col">
            <img src={Logo} className="img-fluid logo" alt="HODLINFO" />
          </div>
          <div className="col d-flex justify-content-center">
            <div className="btn-group px-2">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="header-button">
                  INR
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">INR</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="btn-group px-2">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="header-button">
                  BTC
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">BTC</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="btn-group px-2">
              <button className="header-button">BUY BTC</button>
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            {/* btn with telegram logo and text inside */}
            <Timer />
            <button type="button" className="header-telegram-button me-4">
              <img src={TelegramIcon} className="img-fluid" width="20" height="20" />
              <span className="ms-2">Connect Telegram</span>
            </button>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                onChange={handleToggle}
                checked={checked}
              />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
