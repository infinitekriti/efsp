import React, { Suspense, lazy } from "react";
import BaseLayout from "../layouts/baseLayout/BaseLayout";
import Header from "../components/globel/header/Header";
import Footer from "../components/globel/footer/Footer";
const LazyLro = lazy(() =>
  import(
    "../components/pageSpacific/LRORegistrationForm/RegistrationComponentM"
  )
);
const LRORegistrationPage = () => {
  return (
    <Suspense fallback="">
      <BaseLayout>
        <Header />
        <LazyLro />
        <Footer />
      </BaseLayout>
    </Suspense>
  );
};

export default LRORegistrationPage;
