import React, { Fragment } from 'react'
import "./LroForm.scss"
import Button from '../../common/button/Button'

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
                  <input
                    type="text"
                    className="InputFeild"
                    id="name"
                    placeholder="30000"
                    readOnly
                  />
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
                  <input
                    type="text"
                    placeholder="jhon Deo"
                  />
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
                  <label>State Code</label>
                  <input
                    type="number"
                    placeholder="123456"
                  />
                </div>
                <div className="fromInput">
                  <label>City</label>
                 <select>
                    <option>Select</option>
                    <option>New york</option>
                    <option>Bostan</option>
                 </select>
                </div>
            </div>
            <div className="formWrapIn">
                <div className="fromInput">
                  <label>Zip1</label>
                  <input
                    type="number"
                    placeholder="123456"
                  />
                </div>
                <div className="fromInput">
                  <label>Zip2</label>
                  <input
                    type="number"
                    placeholder="123456"
                  />
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
  )
}

export default LroForm