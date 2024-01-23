import React, { Suspense ,lazy} from 'react'
import BaseLayout from '../layouts/baseLayout/BaseLayout'
import Header from '../components/globel/header/Header'
import Footer from '../components/globel/footer/Footer'
const LazyLROListing = lazy(() => import("../components/pageSpacific/reports/lroReports/lroListing/LROListing"))
const LROReportsListingPage = () => {
  return (
    <Suspense fallback="">
      <BaseLayout>
          <Header />
          <LazyLROListing /> 
            <Footer />
      </BaseLayout>
    </Suspense>
  )
}

export default LROReportsListingPage