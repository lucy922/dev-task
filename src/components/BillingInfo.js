import Button from "./Button";
import "./styles/BillingInfo.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";

const formSchema = yup.object().shape({
  cardName: yup.string().required("This field is required"),
  cardType: yup.string().required("This field is required"),
  cardDetails: yup.string().required("This field is required"),
  expiryDate: yup.date().required("This field is required"),
  cvv: yup.number().required("This field is required").positive(),
});

function BillingInfo() {
  const [buttonText, setButtonText] = useState("Next");
  const navigate = useNavigate();

  const handleClick = () => {
    setButtonText("Pay");
    if (buttonText === "Pay") {
      navigate("/success");
    }
  };

  return (
    <div className="form">
      <Formik
        initialValues={{
          cardName: "",
          cardType: "",
          cardDetails: "",
          expiryDate: "",
          cvv: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit}>
            {buttonText === "Next" ? (
              <div>
                <div>
                  <div className="form-input">
                    <div className="label">
                      <label>Name of card</label>
                      <span className="asterisk">*</span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={values.cardName}
                      placeholder="Ahmed singh"
                    />
                    {errors.cardName && touched.cardName ? (
                      <div className="error">{errors.cardName}</div>
                    ) : null}
                  </div>
                  <div className="form-input">
                    <div className="label">
                      <label>Card type</label>
                      <span className="asterisk">*</span>
                    </div>
                    <input
                      type="text"
                      name="card-type"
                      onChange={handleChange}
                      value={values.cardType}
                      placeholder="Enter your name"
                    />
                    {errors.cardType && touched.cardType ? (
                      <div className="error">{errors.cardType}</div>
                    ) : null}
                  </div>
                </div>
                <div className="grid-container2">
                  <div className="form-input input">
                    <div className="label">
                      <label>Card details</label>
                      <span className="asterisk">*</span>
                    </div>
                    <input
                      type="text"
                      name="card-details"
                      onChange={handleChange}
                      value={values.cardDetails}
                      placeholder="000 222 444 333"
                    />
                    {errors.cardDetails && touched.cardDetails ? (
                      <div className="error">{errors.cardDetails}</div>
                    ) : null}
                  </div>
                  <div className="form-input">
                    <div className="label">
                      <label>Expiry date</label>
                      <span className="asterisk">*</span>
                    </div>
                    <input
                      type="text"
                      name="expiry-date"
                      onChange={handleChange}
                      value={values.expiryDate}
                      placeholder="mm/yy"
                    />
                    {errors.expiryDate && touched.expiryDate ? (
                      <div className="error">{errors.expiryDate}</div>
                    ) : null}
                  </div>
                  <div className="form-input">
                    <div className="label">
                      <label>CVV</label>
                      <span className="asterisk">*</span>
                    </div>
                    <input
                      type="text"
                      name="cvv"
                      onChange={handleChange}
                      value={values.cvv}
                      placeholder="123"
                    />
                    {errors.cvv && touched.cvv ? (
                      <div className="error">{errors.cvv}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : (
              <div className="item-card">
                <div className="card-header">
                  <div>Item Name</div>
                  <div>
                    <span>&#8358;</span> Price
                  </div>
                </div>
                <div className="card-container">
                  <div className="item-info">
                    <div className="card-info">
                      <span className="item-name">
                        Date science and reuseability
                      </span>
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
              </div>
            )}

            <div className="btn-links">
              <Button
                type="button"
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                onClick={handleClick}
              >
                {buttonText}
              </Button>
              <Button
                type="button"
                buttonStyle="btn--secondary"
                buttonSize="btn--medium"
              >
                Cancel Payment
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default BillingInfo;
