import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import ReportCard from '../../../../common/reportCard/ReportCard'

export default function LROListing() {
  return (
    <ReportCard >
       <div className="lro-listing">
          <h5 className="mb-3 fw-bold">LRO Reports/Labels</h5>
           <Form.Group className="mb-3">
                <Form.Label>Phase</Form.Label>
                <Form.Select
                  name="phase"
                >
                  <option value="">Select Phase</option>
                  <option value="1">1</option>
                </Form.Select>
            </Form.Group> 
            <Row>
               <Col> 
               <Form.Group className="mb-3">
                    <Form.Label>Affiliation</Form.Label>
                    <Form.Select
                      name="phase"
                    >
                      <option value="">Select Affiliation</option>
                      <option value="1">1</option>
                    </Form.Select>
                </Form.Group> 
               </Col>
               <Col>
               <Form.Group className="mb-3">
                    <Form.Label>Target</Form.Label>
                    <Form.Select
                      name="target"
                    >
                      <option value="">Select Target</option>
                      <option value="1">1</option>
                    </Form.Select>
                </Form.Group> 
               </Col>
            </Row>
       </div>
    </ReportCard>
  )
}
