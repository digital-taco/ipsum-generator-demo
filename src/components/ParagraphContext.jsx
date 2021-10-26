import React, { useState, createContext, useContext, useEffect } from 'react'
import { useWordSetsContext } from './WordSetsContext'
import { ipsumGenerators } from '@digital-taco/ipsum-generator'

export const ParagraphContext = createContext()

export const useParagraphContext = () => useContext(ParagraphContext)

export default function ParagraphProvider({ children }) {
  const { selectedWordSets } = useWordSetsContext()
  const { paragraph, sentence } = ipsumGenerators(Object.values(selectedWordSets))

  const [paragraphs, setParagraphs] = useState([paragraph()])

  function addParagraph() {
    setParagraphs([...paragraphs, paragraph()])
  }

  function removeParagraph(index) {
    setParagraphs(paragraphs.slice(0, index).concat(paragraphs.slice(index + 1)))
  }

  function addSentence(index) {
    paragraphs[index] += ' ' + sentence()
    setParagraphs([...paragraphs])
  }

  function removeSentence(index) {
    const paragraph = paragraphs[index]
    const sentences = paragraph.split('. ')
    if (sentences.length < 2) return
    sentences.pop()
    paragraphs[index] = sentences.join('. ') + '.'
    setParagraphs([...paragraphs])
  }

  useEffect(() => {}, [])

  return (
    <ParagraphContext.Provider
      value={{ addParagraph, addSentence, removeParagraph, removeSentence, paragraphs }}
    >
      {children}
    </ParagraphContext.Provider>
  )
}
