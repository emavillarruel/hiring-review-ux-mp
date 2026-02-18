import { useState } from 'react'
import Navbar from './components/Navbar'
import StepSummary from './components/StepSummary'
import Hero from './components/Hero'
import Momento from './components/Momento'
import JobDescriptionModal from './components/JobDescriptionModal'
import ScrollTransition from './components/ScrollTransition'
import Tips from './components/Tips'
import Resultados from './components/Resultados'
import hiringData from './data/hiringProcess.json'
import { seniorUXDesignerJD } from './data/jobDescriptions'
import { tipsData } from './data/tipsData'
import videoSrc from './assets/SEPA01.mp4'
import './App.css'

function NavbarTest() {
  const steps = hiringData.steps
  const currentStepId = 2
  const currentStep = steps.find(step => step.id === currentStepId)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleStepSelect = (stepId) => {
    console.log('Step seleccionado:', stepId)
  }

  const handleUserClick = () => {
    console.log('Usuario clickeado')
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'white',
      padding: '16px' 
    }}>
      <Navbar
        userName="Emanuel Villarruel"
        onUserClick={handleUserClick}
        showNavigation={true}
        currentSection="process"
        steps={steps}
        currentStepId={2}
        onStepSelect={handleStepSelect}
        isOnVideoPage={false}
      />

      <ScrollTransition animation="fade" duration={1}>
        <Hero
          title={currentStep?.whatIsThis || currentStep?.description}
          description={currentStep?.description}
          duration={currentStep?.duration}
          participants={currentStep?.whoWillBeThere?.[0]}
          videoSrc={videoSrc}
        />
      </ScrollTransition>

      <ScrollTransition animation="fade-up" duration={0.8} delay={0.1}>
        <div style={{ marginTop: '16px', marginBottom: '16px' }}>
          <Momento
            badge="¿Qué perfil buscamos?"
            title="Senior UX Designer"
            scope="Scope: Cobranza de Créditos"
            description="Este rol es clave para transformar necesidades reales de personas usuarias en soluciones simples, efectivas y de alta calidad, en un contexto de alta complejidad, sensibilidad y regulación."
            buttonText="Conocer responsabilidades y expectativas"
            onButtonClick={handleOpenModal}
            onFavoriteClick={() => console.log('Favorito clickeado')}
          />
        </div>
      </ScrollTransition>

      <JobDescriptionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        sections={seniorUXDesignerJD.sections}
      />

      <ScrollTransition animation="fade-up" duration={0.8} delay={0.2}>
        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <StepSummary
            duration="45-60 min"
            participants="Reclutador/a de Talent Acquisition"
          />
        </div>
      </ScrollTransition>

      <ScrollTransition animation="fade-up" duration={0.8} delay={0.1}>
        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Tips items={tipsData.items} />
        </div>
      </ScrollTransition>

      <ScrollTransition animation="fade-up" duration={0.8} delay={0.1}>
        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Resultados />
        </div>
      </ScrollTransition>

      {/* Secciones demo con diferentes animaciones */}
      <ScrollTransition animation="scale" duration={0.8}>
        <div style={{
          marginTop: '40px',
          marginBottom: '40px',
          padding: '60px 40px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: '700' }}>
            ✨ Transiciones al Scroll
          </h2>
          <p style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Cada sección aparece con una animación diferente cuando entras al viewport. Haz scroll para ver el efecto.
          </p>
        </div>
      </ScrollTransition>

      <ScrollTransition animation="fade-left" duration={0.8}>
        <div style={{
          marginTop: '40px',
          marginBottom: '40px',
          padding: '60px 40px',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: '700' }}>
            👈 Fade Left
          </h2>
          <p style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Esta sección entra desde la derecha con un fade suave
          </p>
        </div>
      </ScrollTransition>

      <ScrollTransition animation="fade-right" duration={0.8}>
        <div style={{
          marginTop: '40px',
          marginBottom: '40px',
          padding: '60px 40px',
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: '700' }}>
            👉 Fade Right
          </h2>
          <p style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Esta sección entra desde la izquierda con un fade suave
          </p>
        </div>
      </ScrollTransition>

      <ScrollTransition animation="zoom" duration={1}>
        <div style={{
          marginTop: '40px',
          marginBottom: '40px',
          padding: '60px 40px',
          background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: '700' }}>
            🔍 Zoom In
          </h2>
          <p style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Esta sección hace zoom desde grande a tamaño normal
          </p>
        </div>
      </ScrollTransition>

      <ScrollTransition animation="fade-up" duration={0.8}>
        <div style={{
          maxWidth: '800px',
          margin: '40px auto',
          padding: '40px',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
        }}>
          <h1 style={{ fontSize: '32px', marginBottom: '16px', color: '#282834' }}>
            🎨 Test del Navbar
          </h1>
        <p style={{ fontSize: '16px', lineHeight: '24px', color: '#666', marginBottom: '12px' }}>
          Esta es una página de prueba para visualizar el componente Navbar de forma aislada.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '24px', color: '#666' }}>
          El navbar está implementado arriba con dos estados:
        </p>

        <div style={{
          marginTop: '32px',
          padding: '20px',
          background: '#f4f5f9',
          borderRadius: '12px',
          borderLeft: '4px solid #667eea'
        }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px', color: '#282834' }}>
            Estado Islas (Collapsed)
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              ✓ Logo grande de Mercado Pago con fondo amarillo
            </li>
            <li style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              ✓ Botón de navegación con glassmorphism
            </li>
            <li style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              ✓ Botón de usuario
            </li>
            <li style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              ✓ Efectos de hover suaves
            </li>
          </ul>
        </div>

        <div style={{
          marginTop: '20px',
          padding: '20px',
          background: '#f4f5f9',
          borderRadius: '12px',
          borderLeft: '4px solid #667eea'
        }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px', color: '#282834' }}>
            Estado Expandida (Panel Completo)
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              ✓ Haz clic en "Entrevista 2" para ver el panel expandido
            </li>
            <li style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              ✓ Overlay oscuro con blur de fondo
            </li>
            <li style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              ✓ Panel blanco que se desliza desde arriba
            </li>
            <li style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              ✓ Lista completa de las 5 etapas del proceso
            </li>
            <li style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              ✓ Cierra con el botón X o presiona ESC
            </li>
          </ul>
        </div>
        </div>
      </ScrollTransition>
    </div>
  )
}

export default NavbarTest
