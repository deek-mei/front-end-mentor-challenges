import qr from "./assets/image-qr-code.png"
import './App.css'

function App() {

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100&display=swap" rel="stylesheet" />

      </head>
      <div className="App">
        <div className="card">
          <img src={qr} alt="qr-code"></img>
          <h1>Improve your front-end skills by building projects</h1>
          <p>Scan the QR code to visit FrontEnd Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </>
  )
}

export default App
