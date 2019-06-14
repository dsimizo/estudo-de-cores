import React from 'react'

import chipStyles from './chip.module.scss'

const Chip = ({children}) => {
  // console.log('style', chipStyles[children].tooltiptext)
  return (
    <div className={chipStyles[children]}>
      {children}
      <span className={chipStyles.tooltiptext}>Tooltip text</span>
    </div>
  )
}

export default Chip;