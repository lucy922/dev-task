import "./styles/PersonalInfo.css";
import Button from "./Button";
import * as yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import BillingInfo from "./BillingInfo";

const formSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),

  // CardName: yup.string().required(),
  // cardType: yup.string().required(),
  // cardDetails: yup.string().required(),
  // expiryDate: yup.date().required(),
  // cvv: yup.number().required().positive(),
});

function PersonalInfo(props) {
  // const navigate = useNavigate();
  return (
    <div className="form">
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={formSchema}
        onSubmit={() => {
          props.changeTab("tab2");
        }}
      >
        {({ errors, touched, handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <div className="form-input">
                <div className="label">
                  <label>Name</label>
                </div>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form-input">
                <div className="label">
                  <label>
                    Email Address<span className="asterisk">*</span>
                  </label>
                </div>
                <p className="paragrah">
                  The purchase receipt will be sent to this address
                </p>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Enter your Email"
                />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </div>
              <div className="form-input">
                <div className="label">
                  <label>Address 1</label>
                </div>
                <input type="text" placeholder="Enter your address" />
              </div>
              <div className="form-input">
                <div className="label">
                  <label>Address 2</label>
                </div>
                <input type="text" placeholder="Enter your address" />
              </div>
            </div>

            <div className="grid-container1">
              <div className="form-input">
                <div className="label">
                  <label>Local government</label>
                </div>
                <input type="text" placeholder="Enter your L.G" />
              </div>
              <div className="form-input">
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
            <div className="btn-links">
              <Button
                type="submit"
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
              >
                Next
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

export default PersonalInfo;
