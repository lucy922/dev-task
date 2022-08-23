import Button from "./ui/Button";
import "./styles/BillingInfo.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import parse from "date-fns/parse";
import Input from "./ui/Input";

const valid = require("card-validator");

const formSchema = yup.object().shape({
  cardName: yup.string().required("This field is required"),
  cardType: yup.string().required("This field is required"),
  cardDetails: yup
    .string()
    .test("test number", (value) => valid.number(value).isValid)
    .required("This field is required"),
  expiryDate: yup
    .string()
    .test("date number", (value) => valid.expirationDate(value).isValid)
    .required("this field is required"),
  cvv: yup
    .string()
    .test("cvv number", (value) => valid.cvv(value).isValid)
    .required("This field is required"),
});

function BillingInfo() {
  const [checkTab, setCheckTab] = useState("Next");
  const navigate = useNavigate();

  const handleClick = () => {
    setCheckTab("Pay");
    if (checkTab === "Pay") {
      navigate("/success");
    }
  };

  return (
    <div className="form">
      {checkTab === "Next" ? (
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
            setCheckTab("Pay");
          }}
        >
          {({ errors, touched, handleSubmit, values, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <div className="form-input">
                    <div className="label">
                      <label>Name of card</label>
                      <span className="asterisk">*</span>
                    </div>
                    <Input
                      type="text"
                      name="cardName"
                      onChange={handleChange}
                      value={values.cardName}
                      placeholder="Ahmed singh"
                      inputStyle="input--primary"
                      inputSize="input--medium"
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
                    <Input
                      type="text"
                      name="cardType"
                      onChange={handleChange}
                      value={values.cardType}
                      placeholder="Enter your name"
                      inputStyle="input--primary"
                      inputSize="input--medium"
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
                    <Input
                      type="text"
                      name="cardDetails"
                      onChange={handleChange}
                      value={values.cardDetails}
                      placeholder="000 222 444 333"
                      inputStyle="input--primary"
                      inputSize="input--medium"
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
                    <Input
                      type="text"
                      name="expiryDate"
                      onChange={handleChange}
                      value={values.expiryDate}
                      placeholder="mm/yy"
                      inputStyle="input--primary"
                      inputSize="input--medium"
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
                    <Input
                      type="text"
                      name="cvv"
                      onChange={handleChange}
                      value={values.cvv}
                      placeholder="123"
                      inputStyle="input--primary"
                      inputSize="input--medium"
                    />
                    {errors.cvv && touched.cvv ? (
                      <div className="error">{errors.cvv}</div>
                    ) : null}
                  </div>
                </div>

                <div className="btn-links">
                  <Button
                    type="button"
                    buttonStyle="btn--primary"
                    buttonSize="btn--medium"
                    onClick={handleSubmit}
                  >
                    {checkTab}
                  </Button>
                  <Button
                    type="button"
                    buttonStyle="btn--secondary"
                    buttonSize="btn--medium"
                  >
                    Cancel Payment
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      ) : (
        <>
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
          <div className="btn-links">
            <Button
              type="button"
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
              onClick={handleClick}
            >
              {checkTab}
            </Button>
            <Button
              type="button"
              buttonStyle="btn--secondary"
              buttonSize="btn--medium"
            >
              Cancel Payment
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default BillingInfo;
