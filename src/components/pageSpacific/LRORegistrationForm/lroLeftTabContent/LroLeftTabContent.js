
import "./LroLeftTabContent.scss"
import circleCheck from "../../../../assets/images/svgIcons/circle-check.svg"
const LroLeftTabContent = () => {
  return (
    <div className="lro-left-content">
        <h3>Your Account Access</h3>
        <p>To start using the services, please fill and set your<br/> account details</p>
        <div className="mt-4 d-flex flex-column gap-4">
            <div className="lro-conent-main">
                <img src={circleCheck} alt="circle" />
                <p>ed ut perspiciatis unde omnis iste <b>natus<br/> error sit voluptate.</b></p>
            </div>
            <div className="lro-conent-main">
                <img src={circleCheck} alt="circle" />
                <p><b>doloremque</b> laudantium, totam rem aperiam,<br/> eaque ipsa quae.</p>
            </div>
            <div className="lro-conent-main">
                <img src={circleCheck} alt="circle" />
                <p> omnis <b>iste natus</b> error sit voluptatem <br/> accusantium doloremque</p>
            </div>
        </div>
    </div>
  )
}

export default LroLeftTabContent