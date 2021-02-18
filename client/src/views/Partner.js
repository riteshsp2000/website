/* eslint-disable no-unused-vars */
import React from 'react';

import { Helmet } from 'react-helmet';

// Component
import Partners from '../components/partner/Partners';
import ContentBanner from '../components/shared/ContentBanner';

// Placeholder
import { PARTNER } from '../assets/placeholder/partner';

function Partner() {
  return (
    <>
      <Helmet>
        <title>TEDxNITRourkela | Partners</title>
        <meta name='title' content='TEDxNITRourkela | Partners' />
      </Helmet>

      {/* <Partners DATA={PARTNER.ZERO} /> */}
      {/* <Partners DATA={PARTNER.ONE} /> */}
      {/* <Partners DATA={PARTNER.TWO} /> */}
      {/* <Partners DATA={PARTNER.THREE} /> */}
      <Partners DATA={PARTNER.FOUR} />
      <ContentBanner DATA={PARTNER.CONTENT} wrapContainer />
    </>
  );
}

export default Partner;