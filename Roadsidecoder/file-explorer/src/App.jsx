import { useState } from 'react';
import explorer from './data/folderData';
import './App.css'
import Folder from './components/Folder';

function App() {
  return (
    <>
      <Folder explorer={explorer} />
    </>
  )
}

export default App
