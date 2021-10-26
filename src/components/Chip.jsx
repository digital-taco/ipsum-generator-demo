import React from 'react'
import styles from './Chip.module.css'

export default function Chip({ selected, label, index, onClick }) {
  return (
    <div
      onClick={onClick}
      className={styles.chip}
      is-selected={selected ? 'true' : undefined}
      role="checkbox"
      aria-checked={selected}
      aria-labelledby={`chk${index}-label`}
    >
      <label className={styles.label} id={`chk${index}-label`}>
        {label}
      </label>
    </div>
  )
}
