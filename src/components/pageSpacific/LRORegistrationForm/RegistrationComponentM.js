import React, { Fragment, useCallback, useState } from 'react'
import { Container } from 'react-bootstrap'
import "./RegistrationComponentM.scss"
import RegistrationForm from './RegistrationForm/RegistrationForm';
import LroTopTitle from './lroTopTitle/LroTopTitle';
const tabData = [
  {
    id: 1,
    name: "Registration Details",
  },
  {
    id: 2,
    name: "Address Information",
  },
  {
    id: 3,
    name: "Employee Identification Information",
  },
  {
    id: 4,
    name: "Bank Details",
  },
  {
    id: 5,
    name: "Afiliation Details",
  },
]
export default function RegistrationComponentM() {
  const [activeTab, setActiveTab] = useState(tabData[0]);
  const tabChangeHandler = (selectedTab) => {
    setActiveTab(selectedTab);
  };
  const getProperComponent = useCallback(() => {
    if (activeTab?.id === 1) {
      return (
        <RegistrationForm
        newTabData={tabData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      );
    } else if (activeTab?.id === 2) {
      return (
        <p>44</p>
      );
    } else if (activeTab?.id === 3) {
      return (
        <p>fgdfg</p>
      );
    } else if (activeTab?.id === 4) {
      return (
        <p>fgdfg</p>
      );
    } else if (activeTab?.id === 5) {
      return (
        <p>fgdfg</p>
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
                        {selectedTab.name}
                      </li>
                    );
                  })}
                </ul>
                <Container>
                <div className="lro-components">
                      {getProperComponent()}
                  </div>
                </Container>
              </Fragment>
         </div>
       </Fragment>
  )
}



