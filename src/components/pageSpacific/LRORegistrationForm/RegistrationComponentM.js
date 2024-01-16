import React, {useState , useCallback } from 'react'
import RegistrationForm from "./registrationForm/RegistrationForm"

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
    <div>
      
    </div>
  );
}
