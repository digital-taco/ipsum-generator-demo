/* eslint-disable react/prop-types */
import React from 'react'
import styles from './Button.module.css'

export default function Button({ emphasis = 'low', small, color, iconButton, href, ...props }) {
  const El = href ? 'a' : 'button'
  return (
    <El
      href={href}
      {...props}
      small={small ? '' : undefined}
      className={`${styles.button} ${iconButton ? styles.iconButton : ''}`}
      emphasis={emphasis}
      style={{ color }}
    />
  )
}
