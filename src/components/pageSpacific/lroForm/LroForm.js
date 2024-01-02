import React, { Fragment } from "react";
import "./LroForm.scss";
import Button from "../../common/button/Button";
import PhoneInput from "react-phone-input-2";

const LroForm = () => {
  return (
    <Fragment>
      <section className="lroMain paddingTb-2em">
        <div className="pageContainer">
          <div className="lroTitle">
            <h1>Lro Form</h1>
          </div>
          <div className="lroWrap">
            <div className="form">
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Lb Number </label>
                  <select>
                    <option>Select</option>
                  </select>
                </div>
                <div className="fromInput">
                  <label>LRO Number </label>
                  <input
                    type="text"
                    className="InputFeild"
                    id="name"
                    placeholder="300"
                    readOnly
                  />
                </div>
                <div className="fromInput">
                  <label>LRO Name</label>
                  <input type="text" placeholder="jhon Deo" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Contact</label>
                  <input
                    type="text"
                    className="InputFeild"
                    placeholder="contact"
                  />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Address1</label>
                  <textarea rows="2" placeholder="address1" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Address2</label>
                  <textarea rows="2" placeholder="address1" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Address3</label>
                  <textarea rows="2" placeholder="address1" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>City</label>
                  <select>
                    <option>Select</option>
                  </select>
                </div>
                <div className="fromInput">
                  <label>State Code</label>
                  <select>
                    <option>Select</option>
                  </select>
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Zip1</label>
                  <input type="number" placeholder="123456" />
                </div>
                <div className="fromInput">
                  <label>Zip2</label>
                  <input type="number" placeholder="123456" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Fax</label>
                  <PhoneInput
                    name="phoneNumber"
                    type="text"
                    country={"us"}
                    enableAreaCodes={true}
                    onlyCountries={["us"]}
                    areaCodes={{ us: ["332"] }}
                    inputProps={{
                      country: "us",
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </div>
                <div className="fromInput">
                  <label>phoneNumber</label>
                  <PhoneInput
                    name="phoneNumber"
                    type="text"
                    country={"us"}
                    enableAreaCodes={true}
                    onlyCountries={["us"]}
                    areaCodes={{ us: ["332"] }}
                    inputProps={{
                      country: "us",
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Email</label>
                  <input type="email" placeholder="infinite@Alyx.com" />
                </div>
                <div className="fromInput">
                  <label>password</label>
                  <input type="password" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Bank Name</label>
                  <input type="text" placeholder="" />
                </div>
                <div className="fromInput">
                  <label>Account Number</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Account type</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Salut</label>
                  <select>
                    <option value="">select</option>
                  </select>
                </div>
                <div className="fromInput">
                  <label>ext</label>
                  <input type="number" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Affiliate</label>
                  <select>
                    <option value="">select</option>
                  </select>
                </div>
                <div className="fromInput">
                  <label>Target 1</label>
                  <select>
                    <option value="">select</option>
                  </select>
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>Target 2</label>
                  <select>
                    <option value="">select</option>
                  </select>
                </div>
                <div className="fromInput">
                  <label>Target 3</label>
                  <select>
                    <option value="">select</option>
                  </select>
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>ein</label>
                  <input type="text" placeholder="" />
                </div>
                <div className="fromInput">
                  <label>subordinateein</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>websitelink</label>
                  <input type="text" placeholder="" />
                </div>
                <div className="fromInput">
                  <label>abano</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>einextension</label>
                  <input type="text" placeholder="" />
                </div>
                <div className="fromInput">
                  <label>eftrcvd</label>
                  <input type="date" id="eftrcvd" name="eftrcvd" />
                </div>
              </div>
              <div className="formWrapIn">
                <div className="fromInput">
                  <label>
                    <input type="checkbox" id="super1" name="super1" />
                    super1
                  </label>
                </div>
                <div className="fromInput">
                  <label>
                    <input type="checkbox" id="super2" name="super2" />
                    super2
                  </label>
                </div>
                <div className="fromInput">
                  <label>
                    <input
                      type="checkbox"
                      id="fiscalagent"
                      name="fiscalagent"
                    />
                    fiscalagent
                  </label>
                </div>
              </div>

              <div className="fromInput">
                <Button title="Signup" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LroForm;
