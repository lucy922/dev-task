import "./styles/Modal.css";
import image from "./asset/images/image.png";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <div className="card-holder">
      <div className="card card-body">
        <div className="image-div">
          <img src={image} alt="thumbnail" />
        </div>
        <h3>Complete your purchase</h3>
        <p>Please check your email for details concerning this transaction</p>
        <div className="link">
          <Link to="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
