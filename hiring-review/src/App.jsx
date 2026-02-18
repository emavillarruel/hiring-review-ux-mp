import { useState, useEffect } from 'react'
import Login from './components/Login'
import OpportunityIntro from './components/OpportunityIntro'
import ProcessOverview from './components/ProcessOverview'
import TalentAcquisition from './components/TalentAcquisition'
import PortfolioReview from './components/PortfolioReview'
import Ejercicio from './components/Ejercicio'
import HiringManager from './components/HiringManager'
import Definicion from './components/Definicion'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userSession, setUserSession] = useState(null)
  const [currentSection, setCurrentSection] = useState('login') // 'login' | 'opportunity' | 'process-overview' | 'talent-acquisition' | 'portfolio-review' | 'ejercicio' | 'hiring-manager' | 'definicion'
  const [currentStepId, setCurrentStepId] = useState(null)

  // Verificar si hay sesión guardada al cargar la app
  useEffect(() => {
    const savedSession = localStorage.getItem('hiring-session')
    const savedSection = localStorage.getItem('hiring-current-section')

    if (savedSession) {
      try {
        const session = JSON.parse(savedSession)
        setIsAuthenticated(true)
        setUserSession(session)
        setCurrentSection(savedSection || 'opportunity')
      } catch (error) {
        console.error('Error al cargar sesión:', error)
        localStorage.removeItem('hiring-session')
        localStorage.removeItem('hiring-current-section')
      }
    }
  }, [])

  // Manejar login
  const handleLogin = ({ mode, userData }) => {
    const session = {
      mode,
      userData,
      loginTime: new Date().toISOString()
    }

    setUserSession(session)
    setIsAuthenticated(true)
    setCurrentSection('process-overview') // Después del login, ir directamente a "Sobre la búsqueda"

    // Guardar sesión y sección en localStorage
    localStorage.setItem('hiring-session', JSON.stringify(session))
    localStorage.setItem('hiring-current-section', 'process-overview')
  }

  // Navegar a la vista general del proceso (Tu proceso)
  const handleContinueToProcessOverview = () => {
    setCurrentSection('process-overview')
    localStorage.setItem('hiring-current-section', 'process-overview')
  }

  // Navegar a Talent Acquisition (step 1)
  const handleContinueToTalentAcquisition = () => {
    setCurrentSection('talent-acquisition')
    setCurrentStepId(1)
    localStorage.setItem('hiring-current-section', 'talent-acquisition')
    localStorage.setItem('hiring-current-step', '1')
  }

  // Navegar a Portfolio Review (step 2)
  const handleContinueToPortfolioReview = () => {
    setCurrentSection('portfolio-review')
    setCurrentStepId(2)
    localStorage.setItem('hiring-current-section', 'portfolio-review')
    localStorage.setItem('hiring-current-step', '2')
  }

  // Navegar a Ejercicio (step 3 - opcional)
  const handleContinueToEjercicio = () => {
    setCurrentSection('ejercicio')
    setCurrentStepId(3)
    localStorage.setItem('hiring-current-section', 'ejercicio')
    localStorage.setItem('hiring-current-step', '3')
  }

  // Navegar a Hiring Manager (step 4)
  const handleContinueToHiringManager = () => {
    setCurrentSection('hiring-manager')
    setCurrentStepId(4)
    localStorage.setItem('hiring-current-section', 'hiring-manager')
    localStorage.setItem('hiring-current-step', '4')
  }

  // Navegar a un paso específico (mapea stepId a la sección correcta)
  const handleNavigateToStep = (stepId) => {
    if (stepId === 0) {
      // Step 0: Tu proceso
      setCurrentSection('process-overview')
      setCurrentStepId(null)
      localStorage.setItem('hiring-current-section', 'process-overview')
    } else if (stepId === 1) {
      // Step 1: Talent Acquisition
      setCurrentSection('talent-acquisition')
      setCurrentStepId(1)
      localStorage.setItem('hiring-current-section', 'talent-acquisition')
      localStorage.setItem('hiring-current-step', '1')
    } else if (stepId === 2) {
      // Step 2: Portfolio Review
      setCurrentSection('portfolio-review')
      setCurrentStepId(2)
      localStorage.setItem('hiring-current-section', 'portfolio-review')
      localStorage.setItem('hiring-current-step', '2')
    } else if (stepId === 3) {
      // Step 3: Ejercicio (opcional)
      setCurrentSection('ejercicio')
      setCurrentStepId(3)
      localStorage.setItem('hiring-current-section', 'ejercicio')
      localStorage.setItem('hiring-current-step', '3')
    } else if (stepId === 4) {
      // Step 4: Hiring Manager
      setCurrentSection('hiring-manager')
      setCurrentStepId(4)
      localStorage.setItem('hiring-current-section', 'hiring-manager')
      localStorage.setItem('hiring-current-step', '4')
    } else if (stepId === 5) {
      // Step 5: Definición
      setCurrentSection('definicion')
      setCurrentStepId(5)
      localStorage.setItem('hiring-current-section', 'definicion')
      localStorage.setItem('hiring-current-step', '5')
    }
  }

  // Volver a la sección de opportunity
  const handleBackToOpportunity = () => {
    setCurrentSection('opportunity')
    localStorage.setItem('hiring-current-section', 'opportunity')
  }

  // Manejar logout
  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserSession(null)
    setCurrentSection('login')
    localStorage.removeItem('hiring-session')
    localStorage.removeItem('hiring-current-section')
    localStorage.removeItem('hiring-progress') // Limpiar progreso también
  }

  return (
    <div className="App">
      {currentSection === 'login' && (
        <Login onLogin={handleLogin} />
      )}

      {currentSection === 'opportunity' && isAuthenticated && (
        <OpportunityIntro
          userData={userSession.userData}
          mode={userSession.mode}
          onContinue={handleContinueToProcessOverview}
          onLogout={handleLogout}
          onStepSelect={handleNavigateToStep}
        />
      )}

      {currentSection === 'process-overview' && isAuthenticated && (
        <ProcessOverview
          userData={userSession.userData}
          onLogout={handleLogout}
          onContinue={handleContinueToTalentAcquisition}
          onStepSelect={handleNavigateToStep}
        />
      )}

      {currentSection === 'talent-acquisition' && isAuthenticated && (
        <TalentAcquisition
          userData={userSession.userData}
          onLogout={handleLogout}
          onStepSelect={handleNavigateToStep}
        />
      )}

      {currentSection === 'portfolio-review' && isAuthenticated && (
        <PortfolioReview
          userData={userSession.userData}
          onLogout={handleLogout}
          onStepSelect={handleNavigateToStep}
        />
      )}

      {currentSection === 'ejercicio' && isAuthenticated && (
        <Ejercicio
          userData={userSession.userData}
          onLogout={handleLogout}
          onStepSelect={handleNavigateToStep}
        />
      )}

      {currentSection === 'hiring-manager' && isAuthenticated && (
        <HiringManager
          userData={userSession.userData}
          onLogout={handleLogout}
          onStepSelect={handleNavigateToStep}
        />
      )}

      {currentSection === 'definicion' && isAuthenticated && (
        <Definicion
          userData={userSession.userData}
          onLogout={handleLogout}
          onStepSelect={handleNavigateToStep}
        />
      )}
    </div>
  )
}

export default App
