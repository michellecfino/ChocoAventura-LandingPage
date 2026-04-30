import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  Smartphone, 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Mic, 
  Wallet, 
  Star,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react'
import './App.css'

import { 
  trackStartPlanning, 
  trackActivitySwipe, 
  trackGroupCreated 
} from './utils/analytics'

// Imágenes de prueba
import heroMockup from './assets/hero_mockup.png'
import comuna13 from './assets/comuna_13.png'
import coffeeFarm from './assets/coffee_farm.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <span className="logo-icon"></span>
          <span className="logo-text">ChocoAventura</span>
        </div>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#features">Características</a>
          <a href="#swipe">Cómo funciona</a>
          <a href="#demo">Demo</a>
          <button className="btn-primary" onClick={trackStartPlanning}>Empezar mi viaje</button>
        </div>
        
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  )
}

const Hero = () => (
  <section className="hero section-padding">
    <div className="container hero-grid">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-text"
      >
        <span className="badge">Dile adiós al drama en grupo ✈️</span>
        <h1>Planea tus viajes grupales <span className="text-highlight">sin complicaciones.</span></h1>
        <p>La app de viajes colaborativa donde todos tienen voz. Desliza, subasta y deja que nuestra IA encuentre el itinerario perfecto para tu parche.</p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={trackStartPlanning}>
            Empezar aventura grupal <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hero-image"
      >
        <div className="mockup-container">
          <img src={heroMockup} alt="ChocoAventuras App Mockup" className="app-mockup" />
          <div className="floating-card c1">
            <Users size={16} /> 4 Amigos activos
          </div>
          <div className="floating-card c2">
            <CheckCircle2 size={16} /> ¡Destino encontrado!
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

const SwipeExperience = () => (
  <section id="swipe" className="swipe-section section-padding">
    <div className="container">
      <div className="section-header center">
        <span className="badge">La Experiencia</span>
        <h2>Descubre deslizando</h2>
        <p>Como Tinder, pero para viajar. Encuentra actividades que a todos les gusten en segundos.</p>
      </div>
      
      <div className="swipe-visual">
        <div className="phone-frame">
          <div className="swipe-cards-demo">
            <div className="card-placeholder">
              <img src={comuna13} alt="Comuna 13" />
              <div className="card-info">
                <h3>Graffititour Comuna 13</h3>
                <div className="rating"><Star size={14} fill="#708238" color="#708238" /> 4.9 (2k+)</div>
              </div>
            </div>
            <div className="swipe-indicator left">
              <div className="arrow-circle"><ArrowRight style={{ transform: 'rotate(180deg)' }} /></div>
              <span>Nop</span>
            </div>
            <div className="swipe-indicator right">
              <div className="arrow-circle"><ArrowRight /></div>
              <span>¡Me encanta!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const SmartAuction = () => (
  <section id="features" className="auction-section section-padding">
    <div className="container">
      <div className="feature-card-main">
        <div className="feature-icon-box">
          <TrendingUp size={40} color="#708238" />
        </div>
        <div className="feature-content">
          <h2>Función Principal - Subasta Inteligente</h2>
          <p>Nuestro Sistema de Subasta Inteligente usa IA para analizar el presupuesto, gustos y horarios del grupo para encontrar el consenso perfecto. Se acabaron los debates infinitos en WhatsApp.</p>
          <ul className="feature-list">
            <li><CheckCircle2 size={18} color="#708238" /> Optimización de presupuesto con IA</li>
            <li><CheckCircle2 size={18} color="#708238" /> Seguimiento de consenso en tiempo real</li>
            <li><CheckCircle2 size={18} color="#708238" /> División de gastos justa y equitativa</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

const VoiceAssistant = () => (
  <section className="voice-section section-padding">
    <div className="container voice-container">
      <div className="voice-text">
        <h2>Planeación Manos Libres</h2>
        <p>Solo di "Hola Choco" para añadir gastos, revisar el itinerario o actualizar al grupo. Nuestro asistente de voz mantiene tus ojos en el camino y tus manos en la aventura.</p>
      </div>
      <div className="voice-visual">
        <div className="voice-waves">
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ 
                height: [20, 60, 30, 80, 20],
                opacity: [0.3, 1, 0.5, 1, 0.3]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                delay: i * 0.2
              }}
              className="wave-bar"
            />
          ))}
        </div>
        <div className="howdy-tag">"Hola Choco, ¿cuál es nuestro presupuesto?"</div>
      </div>
    </div>
  </section>
)

const SocialProof = () => (
  <section className="social-section section-padding">
    <div className="container">
      <div className="section-header">
        <h2>Lo que dicen los viajeros</h2>
      </div>
      <div className="reviews-grid">
        {[1, 2, 3].map((i) => (
          <div key={i} className="review-card">
            <div className="review-image">
              <img src={comuna13} alt="Actividad" />
            </div>
            <div className="review-content">
              <h3>Graffititour Comuna 13</h3>
              <div className="rating">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#708238" color="#708238" />)}
              </div>
              <p>"¡El sistema de deslizar hizo que fuera muy fácil ponernos de acuerdo! Fue lo mejor de nuestro viaje a Medellín."</p>
              <div className="reviewer">- Marco y su parche</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const InteractiveDemo = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Graffititour Comuna 13', image: comuna13, rating: '4.9' },
    { id: 2, title: 'Experiencia Finca Cafetera', image: coffeeFarm, rating: '4.8' },
    { id: 3, title: 'Día de Sol en Guatapé', image: comuna13, rating: '4.9' },
  ])

  const removeCard = (id, direction) => {
    const card = cards.find(c => c.id === id)
    if (card) {
      trackActivitySwipe(card.title, direction)
    }
    
    setCards((prev) => prev.filter(card => card.id !== id))
    if (cards.length === 1) {
      trackGroupCreated('demo-group-123', 4)
      
      setTimeout(() => setCards([
        { id: 4, title: 'Graffititour Comuna 13', image: comuna13, rating: '4.9' },
        { id: 5, title: 'Experiencia Finca Cafetera', image: coffeeFarm, rating: '4.8' },
      ]), 1000)
    }
  }

  return (
    <section id="demo" className="demo-section section-padding">
      <div className="container">
        <div className="section-header center">
          <h2>Pruébalo tú mismo</h2>
          <p>Desliza las tarjetas para ver cómo ChocoAventura encuentra tu plan ideal.</p>
        </div>
        
        <div className="demo-widget">
          <div className="cards-stack">
            <AnimatePresence>
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => {
                    if (info.offset.x > 100) removeCard(card.id, 'right')
                    if (info.offset.x < -100) removeCard(card.id, 'left')
                  }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ 
                    scale: 1 - (cards.length - 1 - index) * 0.05,
                    opacity: 1,
                    y: (cards.length - 1 - index) * -10
                  }}
                  exit={{ x: 500, opacity: 0, rotate: 20 }}
                  className="demo-card"
                  style={{ zIndex: index }}
                >
                  <img src={card.image} alt={card.title} />
                  <div className="demo-card-content">
                    <h3>{card.title}</h3>
                    <div className="rating"><Star size={14} fill="#708238" color="#708238" /> {card.rating}</div>
                  </div>
                  <div className="swipe-hints">
                    <span className="hint nope">Nop</span>
                    <span className="hint like">Me gusta</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SwipeExperience />
      <SmartAuction />
      <VoiceAssistant />
      <SocialProof />
      <InteractiveDemo />
      
      <footer className="footer section-padding">
        <div className="container">
          <div className="footer-cta">
            <h2>¿Listo para tu próxima aventura?</h2>
            <button
            onClick={trackStartPlanning}
            className="btn-primary">Empezar aventura grupal</button>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 ChocoAventuras. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App