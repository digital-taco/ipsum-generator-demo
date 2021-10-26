import React from 'react'
import { wordSets } from '@digital-taco/ipsum-generator'
import Chip from './Chip'
import { useWordSetsContext } from './WordSetsContext'

const labels = {
  lorem: 'Lorem Ipsum',
  starWars: 'Star Wars',
  slang2010s: 'Slang (2010s)',
  sandwiches: 'Sandwiches',
  metals: 'Metals',
  animals: 'Animals',
  greekMythology: 'Greek Mythology',
  lovecraft: 'Lovecraft',
  monsters: 'Monsters',
  sciFiFactions: 'Science Fiction Factions',
}

export default function ChipList() {
  const { selectedWordSets, toggleWordSet } = useWordSetsContext()
  const selectedKeys = Object.keys(selectedWordSets)
  return (
    <div style={{ display: 'grid', placeItems: 'center', marginTop: 20 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        {Object.keys(wordSets).map((key, index) => (
          <Chip
            key={key}
            label={labels[key]}
            index={index}
            onClick={() => toggleWordSet(key)}
            selected={selectedKeys.includes(key)}
          />
        ))}
      </div>
    </div>
  )
}
