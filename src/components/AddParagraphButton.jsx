import React from 'react'
import { IoAddOutline } from 'react-icons/io5'
import Button from './Button'
import { useParagraphContext } from './ParagraphContext'

export default function AddParagraphButton() {
  const { addParagraph } = useParagraphContext()
  return (
    <div style={{ display: 'grid', placeItems: 'center', margin: '16px 0' }}>
      <Button onClick={addParagraph}>
        <IoAddOutline size="16px" />
        Paragraph
      </Button>
    </div>
  )
}
