import React from 'react';
import { useMediaQuery } from 'react-responsive'

import Desktop from './tabela';
import Mobile from './tabelamob';

export default function Menu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <div>
      {isDesktopOrLaptop ? <Desktop /> : isMobile ? <Mobile/> : null }
    </div>

  )
}
