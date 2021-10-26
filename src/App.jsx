import React from 'react'
import './App.css'
import AddParagraphButton from './components/AddParagraphButton'
import Header from './components/Header.jsx'
import TextDisplay from './components/TextDisplay.jsx'
import ParagraphProvider from './components/ParagraphContext'
import WordSetsProvider from './components/WordSetsContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ChipList from './components/ChipList'

function App() {
  return (
    <WordSetsProvider>
      <ParagraphProvider>
        <div className="App">
          <Header />
          <ChipList />
          <AddParagraphButton />
          <TextDisplay />

          <ToastContainer
            position="bottom-center"
            autoClose={2000}
            closeButton={false}
            draggable={false}
            hideProgressBar
          />
        </div>
      </ParagraphProvider>
    </WordSetsProvider>
  )
}

export default App
