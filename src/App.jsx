import './App.css'

import RouterApp from './routes/RouterApp'
import Header from './components/Header'

import Footer from './components/Footer'

import { BrowserRouter } from "react-router-dom";

import '../src/assets/foto-internabus.jpg'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header-fixed">
          <Header />
        </div>

        <div className="pages">
          <RouterApp />
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}