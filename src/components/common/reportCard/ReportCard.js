import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import "./ReportCard.scss"
const ReportCard = (props) => {
    const CardBody = props.children;
    const {className} = props
    return (
      <Fragment>
      <section className = {`reportCard-main mt-5 mb-5 ${className ? className : ""}`}>
        <Container>
          <div className="reportCard-inner">
              {CardBody}
          </div>
        </Container>
      </section>
     </Fragment>
  )
}

export default ReportCard
