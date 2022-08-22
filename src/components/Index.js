import "./styles/Index.css";
import "./styles/PersonalInfo.css";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import BillingInfo from "./BillingInfo";
import ConfirmPayment from "./ConfirmPayment";

function Index() {
  const [activeTab, setActiveTab] = useState("tab1");

  const toggleTab = (text) => {
    setActiveTab(text);
  };

  return (
    <div>
      <h3>Complete your purchase</h3>
      <nav>
        <ul className="nav-links">
          <li className={activeTab === "tab1" ? "active" : ""}>
            Personal Info
          </li>
          <li className={activeTab === "tab2" ? "active" : ""}>Billing Info</li>
          <li className={activeTab === "tab3" ? "active" : ""}>
            Confirm Payment
          </li>
        </ul>
      </nav>
      {activeTab === "tab1" && <PersonalInfo changeTab={toggleTab} />}
      {activeTab === "tab2" && <BillingInfo />}
      {activeTab === "tab3" && <ConfirmPayment />}
    </div>
  );
}

export default Index;
