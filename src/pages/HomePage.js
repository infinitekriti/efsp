import React, { Suspense ,lazy} from 'react'
import BaseLayout from '../layouts/baseLayout/BaseLayout'
import Header from '../components/globel/header/Header'
const LazyHome = lazy(() => import("../components/pageSpacific/home/Home"))
const HomePage = () => {
  return (
    <Suspense fallback="">
      <BaseLayout>
          <Header />
              <LazyHome />
      </BaseLayout>
    </Suspense>
  )
}

export default HomePage