import "./styles/PersonalInfo.css";
import Button from "./Button";

function PersonalInfo() {
  return (
    <div className="container">
      <div className="card">
        <form className="form">
          <div>
            <div className="input">
              <div className="label">
                <label>Name</label>
              </div>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input">
              <div className="label">
                <label>
                  Email Address<span className="asterisk">*</span>
                </label>
              </div>
              <p className="paragrah">
                The purchase receipt will be sent to this address
              </p>
              <input type="text" placeholder="Enter your Email" />
            </div>
            <div className="input">
              <div className="label">
                <label>Address 1</label>
              </div>
              <input type="text" placeholder="Enter your address" />
            </div>
            <div className="input">
              <div className="label">
                <label>Address 2</label>
              </div>
              <input type="text" placeholder="Enter your address" />
            </div>
          </div>

          <div className="grid-container1">
            <div className="input">
              <div className="label">
                <label>Local government</label>
              </div>
              <input type="text" placeholder="Enter your L.G" />
            </div>
            <div className="input">
              <div className="label">
                <label>State</label>
              </div>
              <div className="select">
                <select>
                  <option>Enter your state</option>
                  <option className="select-items">Lagos state</option>{" "}
                  <option className="select-items">Cross river state</option>
                  <option className="select-items">Akwa ibom state</option>
                  <option className="select-items">Kogi state</option>
                  <option className="select-items">Abeokuta</option>
                </select>
              </div>
            </div>
          </div>
          <Button />
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
