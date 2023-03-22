import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainPage from "./Pages/MainPage"
import { GlobalStyle } from "./Styles/global"

function App() {

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:dataInicial/:dataFinal" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
