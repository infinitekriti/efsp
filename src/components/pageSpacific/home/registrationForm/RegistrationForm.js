import "./RegistrationForm.scss";
import { Fragment, useState } from "react";
import Button from "../../../common/button/Button";
import UserDetails from "../userDetails/UserDetails";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phoneNumber: "",
    gender: "",
    message: "",
  });
  const [formData1, setFormData1] = useState({
    name: "",
    mail: "",
    phoneNumber: "",
    gender: "",
    message: "",
  });
  const [error, seterror] = useState(true);
  const [Loading, setLoading] = useState(true);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === "gender") {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSignup = () => {
    if (
      !formData.name ||
      !formData.mail ||
      !formData.phoneNumber ||
      !formData.gender ||
      !formData.message
    ) {
      alert("Please enter all the feilds");
      seterror(true);
      setLoading(false);
      return;
    }
    if (!isEmailValid(formData.mail)) {
      alert("Please enter a valid email address.");
      seterror(true);
      setLoading(false);
      return;
    }

    seterror(false);
    setLoading(false);
    setFormData1(formData);
    setFormData({
        name: "",
        mail: "",
        phoneNumber: "",
        gender: "",
        message:"",
      });
  };
  return (
    <Fragment>
      <section className="registMain paddingTb-2em">
        <div className="pageContainer">
          <div className="registTitle">
            <h1>Registration Form</h1>
          </div>
          <div className="registWrap">
            <div className="form">
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Name </label>
                  <input
                    type="text"
                    className="InputFeild"
                    id="name"
                    value={formData.name}
                    placeholder="jhon Deo"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="fromInput">
                  <label>Email</label>
                  <input
                    type="email"
                    id="mail"
                    value={formData.mail}
                    onChange={handleInputChange}
                    placeholder="eg : Joe@email.com"
                  />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Phone No.</label>
                  <input
                    type="tel"
                    className="InputFeild"
                    id="phoneNumber"
                    placeholder="9876543223"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    //   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>
                <div className="fromInput">
                  <label>Gender</label>
                  <select
                    name="Gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Password </label>
                  <input
                    type="password"
                    className="InputFeild"
                    id=""
                    placeholder=""
                  />
                </div>
                <div className="fromInput">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    id=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Messages</label>
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="fromInput" onClick={handleSignup}>
                <Button title="Signup" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1>User Details</h1>
      {Loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
      
        <ul>
          <li>
            <ul>
              <li>
                <h3>Name</h3>
              </li>
              <li>{formData1.name}</li>
            </ul>
            <ul>
              <li>
                <h3>Email</h3>
              </li>
              <li>{formData1.mail}</li>
            </ul>
            <ul>
              <li>
                <h3>PhoneNumber</h3>
              </li>
              <li>{formData1.phoneNumber}</li>
            </ul>
            <ul>
              <li>
                <h3>Gender</h3>
              </li>
              <li>{formData1.gender}</li>
            </ul>
            <ul>
              <li>
                <h3>Gender</h3>
              </li>
              <li>{formData1.message}</li>
            </ul>
          </li>
        </ul>
      )}
       <UserDetails />
    </Fragment>
  );
};

export default RegistrationForm;
