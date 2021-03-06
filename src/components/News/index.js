import React from 'react';
import { useMediaQuery } from 'react-responsive'

import Desktop from './news';
import Mobile from './newsmob';

export default function Menu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1228px)'
  })
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <div>
      {isDesktopOrLaptop ? <Desktop /> : isMobile ? <Mobile/> : null }
    </div>

  )
}
