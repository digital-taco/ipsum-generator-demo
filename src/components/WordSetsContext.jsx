import React, { useState, createContext, useContext } from 'react'
import { wordSets } from '@digital-taco/ipsum-generator'

export const WordSetsContext = createContext()

export const useWordSetsContext = () => useContext(WordSetsContext)

export default function ParagraphProvider({ children }) {
  const [selectedWordSets, setSelectedWordSets] = useState({ lorem: wordSets.lorem })

  const toggleWordSet = (wordSetId) => {
    setSelectedWordSets((currSelected) => {
      const newSelected = { ...currSelected }
      if (newSelected[wordSetId]) delete newSelected[wordSetId]
      else {
        newSelected[wordSetId] = wordSets[wordSetId]
      }
      return newSelected
    })
  }

  return (
    <WordSetsContext.Provider value={{ selectedWordSets, toggleWordSet }}>
      {children}
    </WordSetsContext.Provider>
  )
}
