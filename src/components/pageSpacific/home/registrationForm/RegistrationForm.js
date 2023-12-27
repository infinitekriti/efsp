import "./RegistrationForm.scss"
import Button from "../../../common/button/Button"


const RegistrationForm = () => {
  return (
    <section className="registMain paddingTb-2em">
        <div className="pageContainer">
            <div className="registTitle">
                <h1>Registration Form</h1>
            </div>
            <div className="registWrap">
                <form>
                    <div className="formWrapIn">
                        <div className="fromInput">
                            <label>Name </label>
                            <input type="text" className="" placeholder="Name" />
                        </div>
                        <div className="fromInput">
                            <label>Email</label>
                            <input type="Email" className="" placeholder="Email" />
                        </div>
                    </div>
                    <div className="formWrapIn">
                        <div className="fromInput">
                            <label>Phone No.</label>
                            <input type="number" className="" placeholder="Mobile" />
                        </div>
                        <div className="fromInput">
                            <label>Gender</label>
                            <select>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                <div className="formWrapIn">
                    <div className="fromInput">
                    <label>Messages</label>
                    <textarea rows="5" placeholder="Your Message" />
                    </div>
                </div>
                
                <div className="fromInput">
                <Button title="Send Message" />
                </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default RegistrationForm