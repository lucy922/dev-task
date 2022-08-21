import Button from "./Button";
import "./styles/BillingInfo.css";

function Billing() {
  return (
    <div className="container">
      <div className="card">
        <form>
          <div>
            <div className="input">
              <div className="label">
                <label>Name of card</label>
                <span className="asterisk">*</span>
              </div>
              <input type="text" placeholder="Ahmed singh" />
            </div>
            <div className="input">
              <div className="label">
                <label>Card type</label>
                <span className="asterisk">*</span>
              </div>
              <input type="text" placeholder="Enter your name" />
            </div>
          </div>
          <div className="grid-container2">
            <div className="input">
              <div className="label">
                <label>Card details</label>
                <span className="asterisk">*</span>
              </div>
              <input type="text" placeholder="000 222 444 333" />
            </div>
            <div className="input">
              <div className="label">
                <label>Expiry date</label>
                <span className="asterisk">*</span>
              </div>
              <input type="text" placeholder="mm/yy" />
            </div>
            <div className="input">
              <div className="label">
                <label>CVV</label>
                <span className="asterisk">*</span>
              </div>
              <input type="text" placeholder="123" />
            </div>
          </div>
          <div className="item-card">
            <div className="card-header">
              <div>Item Name</div>
              <div>
                <span>&#8358;</span> Price
              </div>
            </div>
            <div className="item-info">
              <div className="card-info">
                <span className="item-name">Date science and reuseability</span>
                <span>50,000.00</span>
              </div>
              <div className="card-info">
                <span className="item-name">Shipping</span>
                <span>0.00</span>
              </div>
            </div>

            <div className="total-info">
              <div className="total-price">
                <span className="total">Total</span>
                <span className="price">50,000.00</span>
              </div>
            </div>
          </div>
          <Button />
        </form>
      </div>
    </div>
  );
}

export default Billing;
