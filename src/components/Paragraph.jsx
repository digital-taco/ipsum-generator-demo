import React from 'react'
import styles from './Paragraph.module.css'
import Card from './Card'
import IconButton from './IconButton'

import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5'
import { HiOutlineClipboardCopy } from 'react-icons/hi'
import { VscClose } from 'react-icons/vsc'
import { copyText } from '../helpers'
import { useParagraphContext } from './ParagraphContext'
import { toast } from 'react-toastify'

export default function Paragraph({ index, children }) {
  const { addSentence, removeSentence, removeParagraph } = useParagraphContext()

  const handleCopyText = () => {
    copyText(children)
    toast('Copied!', {
      style: {
        background: 'rgb(93, 78, 233)',
        color: 'white',
      },
    })
  }

  return (
    <Card>
      <div className={styles.paragraph}>
        <div>
          <IconButton
            small
            Icon={IoAddOutline}
            onClick={() => addSentence(index)}
            title="Add Sentence"
          />
          <IconButton
            small
            Icon={IoRemoveOutline}
            onClick={() => removeSentence(index)}
            color="red"
            title="Remove Sentence"
          />
        </div>
        {children}
        <div>
          <IconButton
            small
            Icon={HiOutlineClipboardCopy}
            onClick={handleCopyText}
            color="#666"
            title="Copy to Clipboard"
          />
          <IconButton
            small
            Icon={VscClose}
            onClick={() => removeParagraph(index)}
            color="#666"
            title="Remove Paragraph"
          />
        </div>
      </div>
    </Card>
  )
}
