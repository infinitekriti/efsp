import React, { Fragment, useCallback, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./RegistrationComponentM.scss"
import RegistrationForm from './RegistrationForm/RegistrationForm';
import LroTopTitle from './lroTopTitle/LroTopTitle';
import LroLeftTabContent from './lroLeftTabContent/LroLeftTabContent';
import AddressForm from './AddressForm/AddressForm';
import EmployeeIDForm from './EmployeeIDForm/EmployeeIDForm';
import BankDetailsForm from './bankDetailsForm/BankDetailsForm';
import AffiliationInformation from './affiliationInformation/AffiliationInformation';
const tabData = [
  {
    id: 1,
    name: "LRO Registration Information",
  },
  {
    id: 2,
    name: "Address Information",
  },
  {
    id: 3,
    name: "Employer Identification Information",
  },
  {
    id: 4,
    name: "Bank Details",
  },
  {
    id: 5,
    name: "Afiliation",
  },
]
export default function RegistrationComponentM() {
  const [activeTab, setActiveTab] = useState(tabData[0]);
  const tabChangeHandler = (selectedTab) => {
    if (selectedTab?.id !== 1) {
      setActiveTab(selectedTab);
    }
   
  };
  const getProperComponent = useCallback(() => {
    if (activeTab?.id === 2) {
      return (
        <AddressForm
        newTabData={tabData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      );
    } else if (activeTab?.id === 3) {
      return (
      <EmployeeIDForm 
      newTabData={tabData}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      />
      );
    } else if (activeTab?.id === 4) {
      return (
        <BankDetailsForm 
        newTabData={tabData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      );
    } else if (activeTab?.id === 5) {
      return (
        <AffiliationInformation
        newTabData={tabData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      );
    } 
  }, [activeTab?.id]);

  return (
       <Fragment>
         <div className="lro-registration-main mt-5 mb-5">
              <Fragment>
                  <LroTopTitle />
              </Fragment>
              <Fragment>
              {activeTab?.id !== 1 &&
                 <ul className="lro-progress-steps">
                  {tabData.map((selectedTab, id) => {
                    return (
                      <li
                        key={selectedTab.id}
                        className={`${
                          activeTab.id === selectedTab.id
                            ? "lroreg-progress-step current"
                            : activeTab.id >= selectedTab.id
                            ? "lroreg-progress-step completed"
                            : "lroreg-progress-step upcoming"
                        }
                        `.trim()}
                        onClick={()=>
                          tabChangeHandler(selectedTab)}
                      >
                        <div className="lro-value">
                          <p>{selectedTab.name}</p></div>
                      </li>
                    );
                  })}
                </ul>
              }
                <Container>
                {activeTab?.id === 1 ?
                <div className="lro-components mb-5">
                  <RegistrationForm
                  newTabData={tabData}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  />
                  </div>:
                  <Row>
                     <Col sm={12} md={5} xl={6}>
                          <LroLeftTabContent />
                     </Col>
                     <Col sm={12} md={7} xl={6}>
                     <div className="lro-components mb-5">
                        {getProperComponent()}
                        </div>
                     </Col>
                  </Row>
                  }
                  </Container>
              </Fragment>
         </div>
       </Fragment>
  )
}
