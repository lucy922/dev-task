import "./styles/Tabs.css";
import "./styles/PersonalInfo.css";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import BillingInfo from "./BillingInfo";
import ConfirmPayment from "./ConfirmPayment";

function Navbar() {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Complete your purchase</h3>
        <nav>
          <ul className="nav-links">
            <li
              className={activeTab === 1 ? "active" : ""}
              onClick={() => toggleTab(1)}
            >
              Personal Info
            </li>
            <li
              className={activeTab === 2 ? "active" : ""}
              onClick={() => toggleTab(2)}
            >
              Billing Info
            </li>
            <li
              className={activeTab === 3 ? "active" : ""}
              onClick={() => toggleTab(3)}
            >
              Confirm Payment
            </li>
          </ul>
        </nav>
        {activeTab === 1 && <PersonalInfo />}
        {activeTab === 2 && <BillingInfo />}
        {activeTab === 3 && <ConfirmPayment />}
      </div>
    </div>
  );
}

export default Navbar;
