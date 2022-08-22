import "./styles/Success.css";
import image from "../assets/images/check.png";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <div className="card-body">
      <div className="image-div">
        <img src={image} alt="thumbnail" />
      </div>
      <h3>Complete your purchase</h3>
      <p className="paragraph">
        Please check your email for details concerning this transaction
      </p>
      <div className="link">
        <Link to="/">Return Home</Link>
      </div>
    </div>
  );
}

export default Modal;
