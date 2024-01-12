import React, { Suspense ,lazy} from 'react'
import BaseLayout from '../layouts/baseLayout/BaseLayout'
import Header from '../components/globel/header/Header'
const LazyLro = lazy(() => import("../components/pageSpacific/LRORegistrationForm/RegistrationComponentM"))
const LRORegistrationPage = () => {
  return (
    <Suspense fallback="">
      <BaseLayout>
          <Header />
              <LazyLro />
      </BaseLayout>
    </Suspense>
  )
}

export default LRORegistrationPage