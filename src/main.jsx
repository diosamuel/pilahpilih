// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './App'
import Barang from './Barang'
import Deteksi from './Deteksi'
import Canvas from './Canvas'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="barang" element={<Barang />} />
        <Route path="deteksi" element={<Deteksi />} />
        <Route path="canvas" element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)