import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card img="https://i.etsystatic.com/8835185/r/il/657b78/736963546/il_570xN.736963546_g5ze.jpg"
          title="Card Title"
          message="Some quick example text to build on the card and make up the bulk of the card's content."/>
      <Card img=""
          title="Special title treatment"
          message="With supporting text below as a natural lead-in to additional content"/>
  </React.StrictMode>,
)
