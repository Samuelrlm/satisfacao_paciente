import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import { MainPage } from "./pages/MainPage"
import NextPage from "./pages/NextPage"
import { GlobalStyle } from "./style/global"

function App() {

  return (
    <>
      <GlobalStyle/>
      <ToastContainer position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"/>
      <Router>
        <Routes>
          <Route path="/:atend" element={<MainPage/>} />
          <Route path="/next-page" element={<NextPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
