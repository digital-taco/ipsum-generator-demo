import React from 'react'
import Title from './Title'
import Button from './Button'
import IconButton from './IconButton'
import styles from './Header.module.css'
import { VscGithub } from 'react-icons/vsc'
import { useParagraphContext } from './ParagraphContext'
import { copyText } from '../helpers'
import { toast } from 'react-toastify'

export default function Header() {
  const { paragraphs } = useParagraphContext()

  function copyAll() {
    const text = paragraphs.join('\n\n')
    copyText(text)
    toast('Copied!', {
      style: {
        background: 'rgb(93, 78, 233)',
        color: 'white',
      },
    })
  }

  return (
    <div className={styles.header}>
      <Title />
      <div className={styles.actions}>
        <Button emphasis="high" onClick={copyAll}>
          copy all
        </Button>
        <IconButton
          Icon={VscGithub}
          href="https://github.com/digital-taco/ipsum-generator"
          target="_blank"
        />
      </div>
    </div>
  )
}
