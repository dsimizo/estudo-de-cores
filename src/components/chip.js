import React from 'react'
import { CustomPicker } from 'react-color'

import chipStyles from './chip.module.scss'

const Chip = ({children, hex, hsl, rgb, hexColor, hslColor, textColor, border}) => {
  // console.log(children)
  const style = {
    backgroundColor: hex,
    color: textColor,
    border: border === "" ? 'none' : border
  }

  return (
    <div className={chipStyles.chip}
      style={style}
    >
      {children}
      <span
        className={chipStyles.tooltiptext}
        style={style}
      >
        <strong>hex:</strong> {`${hexColor}`.toUpperCase()}<br/>
        <strong>RGB:</strong> {`${rgb.r} ${rgb.g} ${rgb.b}`}
      </span>
      
    </div>
  )
}

export default CustomPicker(Chip)