import { useState } from 'react'
import './App.css'

import { Header, What, Features, Possibilities, Blog, Footer } from './containers';
import { Brand, CTA, Feature, Navbar, Article } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
