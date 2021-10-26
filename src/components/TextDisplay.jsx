import React from 'react'
import styles from './TextDisplay.module.css'
import Paragraph from './Paragraph'
import { useParagraphContext } from './ParagraphContext'

export default function TextDisplay() {
  const { paragraphs } = useParagraphContext()
  return (
    <div className={styles.textDisplay}>
      {paragraphs.map((paragraph, index) => (
        <Paragraph key={paragraph} index={index}>
          {paragraph}
        </Paragraph>
      ))}
    </div>
  )
}
