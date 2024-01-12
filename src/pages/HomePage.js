import React, { Suspense ,lazy} from 'react'
import BaseLayout from '../layouts/baseLayout/BaseLayout'
import Header from '../components/globel/header/Header'
import Footer from '../components/globel/footer/Footer'
const LazyHome = lazy(() => import("../components/pageSpacific/home/Home"))
const HomePage = () => {
  return (
    <Suspense fallback="">
      <BaseLayout>
          <Header />
              <LazyHome />
            <Footer />
      </BaseLayout>
    </Suspense>
  )
}

export default HomePage