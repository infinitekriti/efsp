import React, { Suspense ,lazy} from 'react'
import BaseLayout from '../layouts/baseLayout/BaseLayout'
import Header from '../components/globel/header/Header'
const LazyLro = lazy(() => import("../components/pageSpacific/lroForm/LroForm"))
const LroPage = () => {
  return (
    <Suspense fallback="">
      <BaseLayout>
          <Header />
              <LazyLro />
      </BaseLayout>
    </Suspense>
  )
}

export default LroPage