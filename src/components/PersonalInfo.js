import "./styles/PersonalInfo.css";
import Button from "./ui/Button";
import * as yup from "yup";
import { Formik } from "formik";
import Input from "./ui/Input";

const formSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

function PersonalInfo(props) {
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
                <Input
                  type="text"
                  placeholder="Enter your name"
                  inputStyle="input--primary"
                  inputSize="input--medium"
                />
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
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Enter your Email"
                  inputStyle="input--primary"
                  inputSize="input--medium"
                />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </div>
              <div className="form-input">
                <div className="label">
                  <label>Address 1</label>
                </div>
                <Input type="text" placeholder="Enter your address" />
              </div>
              <div className="form-input">
                <div className="label">
                  <label>Address 2</label>
                </div>
                <Input
                  type="text"
                  placeholder="Enter your address"
                  inputStyle="input--primary"
                  inputSize="input--medium"
                />
              </div>
            </div>

            <div className="grid-container1">
              <div className="form-input">
                <div className="label">
                  <label>Local government</label>
                </div>
                <Input
                  type="text"
                  placeholder="Enter your L.G"
                  inputStyle="input--primary"
                  inputSize="input--medium"
                />
              </div>
              <div className="form-input">
                <div className="label">
                  <label>State</label>
                </div>
                <div className="select">
                  <select>
                    <option className="placeholder">Enter your state</option>
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
