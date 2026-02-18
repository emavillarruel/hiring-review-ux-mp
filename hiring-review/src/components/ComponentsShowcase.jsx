import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Momento from './Momento';
import StepSummary from './StepSummary';
import Tips from './Tips';
import Resultados from './Resultados';
import NextSteps from './NextSteps';
import JobDescriptionModal from './JobDescriptionModal';
import ScrollTransition from './ScrollTransition';
import hiringData from '../data/hiringProcess.json';
import { seniorUXDesignerJD } from '../data/jobDescriptions';
import { tipsData } from '../data/tipsData';
import videoSrc from '../assets/SEPA01.mp4';
import '../styles/ComponentsShowcase.css';

const ComponentsShowcase = () => {
  const steps = hiringData.steps;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="showcase-container">
      {/* Header */}
      <div className="showcase-header">
        <h1>📦 Catálogo de Componentes</h1>
        <p>Referencia de todos los componentes disponibles para las páginas del proceso de hiring</p>
        <div className="showcase-nav">
          <a href="#/" className="showcase-link">← Volver a la App</a>
          <span className="showcase-url">URL: <code>http://localhost:5173/#/components</code></span>
        </div>
      </div>

      {/* Navbar */}
      <div className="showcase-section">
        <div className="showcase-title">
          <h2>1. Navbar</h2>
          <div className="showcase-badge">Todas las páginas</div>
        </div>
        <p className="showcase-description">
          Barra de navegación superior con logo, navegación entre steps y botón de usuario.
        </p>
        <div className="showcase-code">
          <code>{`<Navbar
  userName="Emanuel Villarruel"
  onUserClick={handleUserClick}
  showNavigation={true}
  currentSection="process"
  steps={steps}
  currentStepId={2}
  onStepSelect={handleStepSelect}
  isOnVideoPage={false}
/>`}</code>
        </div>
        <div className="showcase-demo">
          <Navbar
            userName="Emanuel Villarruel"
            onUserClick={() => console.log('User clicked')}
            showNavigation={true}
            currentSection="process"
            steps={steps}
            currentStepId={2}
            onStepSelect={(id) => console.log('Step:', id)}
            isOnVideoPage={false}
          />
        </div>
      </div>

      {/* Hero */}
      <div className="showcase-section">
        <div className="showcase-title">
          <h2>2. Hero</h2>
          <div className="showcase-badge">Tu proceso, Talent Acquisition, Portfolio Review, Hiring Manager, Definición</div>
        </div>
        <p className="showcase-description">
          Sección hero con video de fondo, título, descripción y badges de información.
        </p>
        <div className="showcase-code">
          <code>{`<Hero
  title="Esta es la entrevista técnica"
  description="Presentarás tu portfolio"
  duration="60 min"
  participants="2 integrantes del equipo UX"
  videoSrc={videoSrc}
/>`}</code>
        </div>
        <div className="showcase-demo">
          <Hero
            title="Esta es la entrevista técnica donde evaluamos tu criterio"
            description="Presentarás tu portfolio"
            duration="60 min"
            participants="2 integrantes del equipo UX"
            videoSrc={videoSrc}
          />
        </div>
      </div>

      {/* Momento */}
      <div className="showcase-section">
        <div className="showcase-title">
          <h2>3. Momento (Job Description)</h2>
          <div className="showcase-badge">Tu proceso</div>
        </div>
        <p className="showcase-description">
          Componente de dos paneles para mostrar job description con badge, título, scope, descripción e imagen.
        </p>
        <div className="showcase-code">
          <code>{`<Momento
  badge="¿Qué perfil buscamos?"
  title="Senior UX Designer"
  scope="Scope: Cobranza de Créditos"
  description="Este rol es clave para transformar..."
  buttonText="Conocer responsabilidades"
  onButtonClick={handleOpenModal}
  onFavoriteClick={() => console.log('Favorito')}
/>`}</code>
        </div>
        <div className="showcase-demo">
          <Momento
            badge="¿Qué perfil buscamos?"
            title="Senior UX Designer"
            scope="Scope: Cobranza de Créditos"
            description="Este rol es clave para transformar necesidades reales de personas usuarias en soluciones simples, efectivas y de alta calidad."
            buttonText="Conocer responsabilidades y expectativas"
            onButtonClick={handleOpenModal}
            onFavoriteClick={() => console.log('Favorito clickeado')}
          />
        </div>
      </div>

      {/* Job Description Modal */}
      <div className="showcase-section">
        <div className="showcase-title">
          <h2>4. JobDescriptionModal</h2>
          <div className="showcase-badge">Con Momento</div>
        </div>
        <p className="showcase-description">
          Modal con fondo amarillo que muestra las secciones del job description.
        </p>
        <div className="showcase-code">
          <code>{`<JobDescriptionModal
  isOpen={isModalOpen}
  onClose={handleCloseModal}
  sections={seniorUXDesignerJD.sections}
/>`}</code>
        </div>
      </div>

      <JobDescriptionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        sections={seniorUXDesignerJD.sections}
      />

      {/* StepSummary */}
      <div className="showcase-section">
        <div className="showcase-title">
          <h2>5. StepSummary</h2>
          <div className="showcase-badge">Talent Acquisition, Portfolio Review, Hiring Manager</div>
        </div>
        <p className="showcase-description">
          Card con información resumida de duración y participantes del step.
        </p>
        <div className="showcase-code">
          <code>{`<StepSummary
  duration="45-60 min"
  participants="Reclutador/a de Talent Acquisition"
/>`}</code>
        </div>
        <div className="showcase-demo">
          <StepSummary
            duration="45-60 min"
            participants="Reclutador/a de Talent Acquisition"
          />
        </div>
      </div>

      {/* Tips */}
      <div className="showcase-section">
        <div className="showcase-title">
          <h2>6. Tips (Acordeón)</h2>
          <div className="showcase-badge">Portfolio Review, Hiring Manager</div>
        </div>
        <p className="showcase-description">
          Sección de tips con acordeón expandible. Soporta listas con bullets y párrafos de texto.
        </p>
        <div className="showcase-code">
          <code>{`<Tips items={tipsData.items} />`}</code>
        </div>
        <div className="showcase-demo">
          <Tips items={tipsData.items} />
        </div>
      </div>

      {/* Resultados */}
      <div className="showcase-section">
        <div className="showcase-title">
          <h2>7. Resultados</h2>
          <div className="showcase-badge">Definición</div>
        </div>
        <p className="showcase-description">
          Sección con dos tarjetas mostrando los posibles resultados: Oferta laboral y Feedback constructivo.
        </p>
        <div className="showcase-code">
          <code>{`<Resultados />`}</code>
        </div>
        <div className="showcase-demo">
          <Resultados />
        </div>
      </div>

      {/* NextSteps */}
      <div className="showcase-section">
        <div className="showcase-title">
          <h2>8. NextSteps</h2>
          <div className="showcase-badge">Talent Acquisition, Portfolio Review, Hiring Manager, Definición</div>
        </div>
        <p className="showcase-description">
          Contenedor con fondo oscuro que muestra próximos pasos y botón de continuación. Soporta dos variantes: default (con emoji) y success (sin emoji, para página final).
        </p>
        <div className="showcase-code">
          <code>{`// Variante default (con botón)
<NextSteps
  nextStepsText="Presentarás tu portfolio de proyectos..."
  buttonText="Continuar a Portfolio Review →"
  onContinue={() => console.log('Continue')}
/>

// Variante success (sin botón)
<NextSteps
  nextStepsText="¡Felicitaciones! Has completado el proceso"
  showButton={false}
  variant="success"
/>`}</code>
        </div>
        <div className="showcase-demo">
          <div style={{ marginBottom: '40px' }}>
            <h4 style={{ marginBottom: '16px', color: '#666' }}>Variante Default:</h4>
            <NextSteps
              nextStepsText="Presentarás tu portfolio de proyectos más relevantes y conversaremos sobre tus decisiones de diseño."
              buttonText="Continuar a Portfolio Review →"
              onContinue={() => console.log('Continuar clickeado')}
            />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', color: '#666' }}>Variante Success:</h4>
            <NextSteps
              nextStepsText="¡Felicitaciones! Has completado exitosamente todas las etapas del proceso de selección."
              showButton={false}
              variant="success"
            />
          </div>
        </div>
      </div>

      {/* ScrollTransition */}
      <div className="showcase-section">
        <div className="showcase-title">
          <h2>9. ScrollTransition</h2>
          <div className="showcase-badge">Wrapper - Todas las páginas</div>
        </div>
        <p className="showcase-description">
          Wrapper para agregar animaciones al hacer scroll. Tipos: fade, fade-up, fade-down, fade-left, fade-right, scale, zoom, slide-up.
        </p>
        <div className="showcase-code">
          <code>{`<ScrollTransition animation="fade-up" duration={0.8} delay={0.1}>
  <div>Tu contenido aquí</div>
</ScrollTransition>`}</code>
        </div>
      </div>

      {/* Resumen de páginas */}
      <div className="showcase-section showcase-summary">
        <h2>📄 Componentes por página</h2>

        <div className="page-summary">
          <h3>1. Login</h3>
          <ul>
            <li>Login (componente propio)</li>
          </ul>
        </div>

        <div className="page-summary">
          <h3>2. Video Introducción (OpportunityIntro)</h3>
          <ul>
            <li>Video player</li>
            <li>Navbar</li>
          </ul>
        </div>

        <div className="page-summary">
          <h3>3. Tu proceso (ProcessOverview)</h3>
          <ul>
            <li>✅ Navbar</li>
            <li>✅ Hero</li>
            <li>✅ Momento (Job Description)</li>
            <li>✅ JobDescriptionModal</li>
            <li>✅ ScrollTransition</li>
          </ul>
        </div>

        <div className="page-summary">
          <h3>4. Talent Acquisition</h3>
          <ul>
            <li>✅ Navbar</li>
            <li>✅ Hero</li>
            <li>✅ StepSummary</li>
            <li>✅ Tips (opcional)</li>
            <li>✅ NextSteps</li>
            <li>✅ ScrollTransition</li>
          </ul>
        </div>

        <div className="page-summary">
          <h3>5. Portfolio Review</h3>
          <ul>
            <li>✅ Navbar</li>
            <li>✅ Hero</li>
            <li>✅ StepSummary</li>
            <li>✅ Tips</li>
            <li>✅ NextSteps</li>
            <li>✅ ScrollTransition</li>
          </ul>
        </div>

        <div className="page-summary">
          <h3>6. Ejercicio ⚡ (opcional)</h3>
          <ul>
            <li>✅ Navbar</li>
            <li>✅ Hero</li>
            <li>✅ Tips</li>
            <li>✅ NextSteps</li>
            <li>✅ ScrollTransition</li>
            <li>✅ Cards de ejercicios (custom)</li>
            <li>✅ Optional notice banner</li>
          </ul>
        </div>

        <div className="page-summary">
          <h3>7. Hiring Manager</h3>
          <ul>
            <li>✅ Navbar</li>
            <li>✅ Hero</li>
            <li>✅ StepSummary</li>
            <li>✅ Tips (opcional)</li>
            <li>✅ NextSteps</li>
            <li>✅ ScrollTransition</li>
          </ul>
        </div>

        <div className="page-summary">
          <h3>8. Definición</h3>
          <ul>
            <li>✅ Navbar</li>
            <li>✅ Hero</li>
            <li>✅ Resultados</li>
            <li>✅ NextSteps (variant success)</li>
            <li>✅ ScrollTransition</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComponentsShowcase;
