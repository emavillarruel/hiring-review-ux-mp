# Hiring Review - UX Mercado Pago

## Descripción

Plataforma interactiva que muestra el proceso de entrevistas para candidatos del equipo de UX de Mercado Pago.

Este proyecto proporciona visibilidad y claridad sobre cada etapa del proceso de selección, explicando qué esperar y cómo prepararse para cada entrevista.

## Tecnologías

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de desarrollo rápido
- **ESLint** - Linter para mantener calidad de código

## Instalación

```bash
# Instalar dependencias
npm install
```

## Ejecución

```bash
# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

### URLs Disponibles

- **App Principal**: `http://localhost:5173/`
- **Catálogo de Componentes**: `http://localhost:5173/#/components`

El catálogo de componentes es una página de referencia con todos los componentes disponibles, ejemplos de código y demos visuales para consultar durante el desarrollo.

## Funcionalidades

### 🔐 Sistema de Autenticación
- **Modo Candidato**: Acceso personalizado con email para seguir tu progreso
- **Modo Vista Previa**: Exploración del proceso sin autenticación

### 📊 Proceso de 6 Etapas

**0. Sobre la búsqueda** - Información de la posición y el equipo
   - Video de bienvenida del equipo
   - Descripción detallada del puesto (Senior UX Designer - Cobranza)
   - Contexto del rol y responsabilidades
   - Modal con job description completo

**1. Talent Acquisition** - Primera entrevista de fit cultural
   - Conversación sobre experiencia y motivación
   - Alineación de expectativas
   - Cultura y valores de Mercado Pago
   - Duración: 45-60 min

**2. Portfolio Review** - Presentación técnica de portfolio
   - Presentación de proyectos destacados (30 min)
   - Proceso de diseño y decisiones
   - Habilidades técnicas y metodología
   - Tips interactivos con acordeón

**3. Ejercicio ⚡ (Opcional)** - Ejercicio práctico asíncrono
   - Solo para algunos candidatos según el perfil
   - Dos opciones de ejercicio:
     - **Product Design (end-to-end)**: Framing, priorización, UX thinking
     - **Craft Track**: Visual, motion, systems, componentes
   - Timeframe: 3-5 días para completarlo
   - Descarga de PDF con ejercicio desde la plataforma
   - Banner informativo con diseño Andes Message

**4. Hiring Manager** - Entrevista final con tu futuro manager
   - Visión del equipo y proyectos
   - Fit con el rol y equipo
   - Autonomía y ownership
   - Duración: 45-60 min

**5. Definición** - Comunicación del resultado
   - Tarjetas de resultados posibles (Oferta / Feedback)
   - Feedback del proceso
   - Oferta o cierre del proceso
   - Tiempo de respuesta: 3-5 días hábiles

### ✨ Características
- Progreso persistente (localStorage en modo candidato)
- Navegación interactiva entre etapas
- Información detallada de cada paso
- Diseño responsive y accesible
- UI/UX alineada con el design system de Mercado Pago

## Arquitectura de Componentes

### 🧩 Componentes Reutilizables

Cada etapa del proceso utiliza componentes modulares y reutilizables:

#### Componentes Principales
- **Navbar** - Navegación superior con usuario y menú de steps
- **Hero** - Sección hero con video de fondo, título, descripción y badges
- **Momento** - Panel dual con job description, badge con gradiente, título, scope e imagen
- **StepSummary** - Card con información de duración y participantes
- **Tips** - Acordeón expandible con bullets y texto (whatToExpect, howToPrepare, tips)
- **Resultados** - Tarjetas de posibles outcomes (oferta/feedback)
- **NextSteps** - Contenedor con próximos pasos y botón de continuación
- **ScrollTransition** - Wrapper para animaciones en scroll (fade, fade-up, scale, etc.)

#### Componentes Específicos
- **ExerciseCard** - Cards de ejercicios con estilo momento-detail (dark theme + glassmorphism)
- **OptionalNotice** - Banner informativo con diseño Andes Message System
- **JobDescriptionModal** - Modal con fondo amarillo para mostrar JD completo

#### Visualización de Componentes
Todos los componentes están documentados en el catálogo: `http://localhost:5173/#/components`

### 📋 Template Base de Steps

Todas las etapas siguen esta estructura consistente:

```jsx
<StepTemplate>
  <Navbar />
  <VideoBackground /> {/* Opcional */}
  <HeroSection>
    <Badges /> {/* Duración, participantes */}
    <Title />
  </HeroSection>
  <ScrollContent>
    <InfoCard /> {/* Descripción principal */}
    <TipsSection>
      <TipCard title="Qué esperar" />
      <TipCard title="Cómo prepararte" />
    </TipsSection>
  </ScrollContent>
  <StepsOverview /> {/* Navegación flotante */}
</StepTemplate>
```

## Estructura del Proyecto

```
hiring-review/
├── src/
│   ├── components/
│   │   ├── Login.jsx                    # Pantalla de autenticación
│   │   ├── OpportunityIntro.jsx         # Video de introducción
│   │   ├── ProcessOverview.jsx          # Paso 0: Sobre la búsqueda
│   │   ├── TalentAcquisition.jsx        # Paso 1: Entrevista TA
│   │   ├── PortfolioReview.jsx          # Paso 2: Portfolio Review
│   │   ├── Ejercicio.jsx                # Paso 3: Ejercicio (opcional)
│   │   ├── HiringManager.jsx            # Paso 4: Hiring Manager
│   │   ├── Definicion.jsx               # Paso 5: Definición
│   │   ├── ComponentsShowcase.jsx       # Catálogo de componentes
│   │   ├── Navbar.jsx                   # Navegación superior
│   │   ├── Hero.jsx                     # Hero con video y badges
│   │   ├── Momento.jsx                  # Panel dual con JD
│   │   ├── StepSummary.jsx              # Card de duración/participantes
│   │   ├── Tips.jsx                     # Acordeón de tips
│   │   ├── Resultados.jsx               # Cards de outcomes
│   │   ├── NextSteps.jsx                # Próximos pasos + botón
│   │   ├── ScrollTransition.jsx         # Wrapper de animaciones
│   │   └── JobDescriptionModal.jsx      # Modal de JD
│   ├── data/
│   │   ├── hiringProcess.json           # Contenido completo del proceso
│   │   ├── jobDescriptions.js           # Job descriptions estructurados
│   │   └── tipsData.js                  # Datos de tips reutilizables
│   ├── styles/
│   │   ├── Login.css
│   │   ├── ProcessOverview.css
│   │   ├── TalentAcquisition.css
│   │   ├── PortfolioReview.css
│   │   ├── Ejercicio.css                # Estilos del paso opcional
│   │   ├── HiringManager.css
│   │   ├── Definicion.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── Momento.css                  # Panel dual con gradientes
│   │   ├── StepSummary.css
│   │   ├── Tips.css
│   │   ├── Resultados.css
│   │   ├── NextSteps.css                # Consolidado (antes duplicado)
│   │   ├── ScrollTransition.css
│   │   └── ComponentsShowcase.css
│   ├── assets/
│   │   ├── SEPA01.mp4                   # Video principal
│   │   ├── asterisk-v2.svg              # Icono de badge
│   │   ├── heart-v2.svg                 # Icono de favorito
│   │   ├── ESP-VOS-UXChallenge-DIS-002.pdf        # Ejercicio Product Design
│   │   └── ESP-UXChallenge-TechPathCMDIS-001.pdf  # Ejercicio Craft Track
│   ├── App.jsx                          # Componente raíz con routing
│   ├── App.css                          # Estilos globales
│   ├── index.css                        # Reset y tipografías
│   └── main.jsx                         # Punto de entrada
├── referencias/                         # Diseños y documentos de referencia
└── index.html                           # HTML base
```

## Flujo de Navegación

```
Login → Sobre la búsqueda (Step 0) → Proceso (Steps 1-5)
        - Video de equipo           ↓
        - Job Description           1. Talent Acquisition (45-60 min)
        - Contexto del rol          ↓
                                    2. Portfolio Review (60 min)
                                    ↓
                                    3. Ejercicio ⚡ (Opcional, 3-5 días)
                                       - Product Design o
                                       - Craft Track
                                    ↓
                                    4. Hiring Manager (45-60 min)
                                    ↓
                                    5. Definición (3-5 días)
                                       - Oferta o
                                       - Feedback
```

### Estados del Candidato

- **Modo Candidato**: Progreso real persistido en localStorage
- **Modo Preview**: Navegación libre sin persistencia

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera build optimizado para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta ESLint

## Cambios Recientes

### ✅ Implementado

#### Componentes y Sistema de Diseño
- ✅ Componente **NextSteps** con dos variantes (default y success)
- ✅ Consolidación de estilos NextSteps (eliminada duplicación en 4 archivos CSS)
- ✅ Botón de continuación con estilos desde Figma (fondo blanco, bordes redondeados)
- ✅ Layout vertical para NextSteps (texto y botón alineados en columna)
- ✅ Catálogo de componentes actualizado en `/components`

#### Nueva Funcionalidad: Ejercicio Opcional
- ✅ Paso 3 "Ejercicio" (opcional) agregado al proceso
- ✅ Banner **OptionalNotice** con diseño Andes Message System
  - Fondo azul claro (#E8F2FF)
  - Icono circular azul (#009EE3)
  - Tipografía Inter con feature settings
- ✅ Cards de ejercicios con estilo **momento-detail**
  - Fondo dark (#282834)
  - Glassmorphism en badges y elementos
  - Sección "Se valida" con checkmarks verdes
  - Timeframe con icono de reloj
- ✅ Botones de descarga para PDFs de ejercicios
  - Product Design (end-to-end)
  - Craft Track (Visual/Motion/Systems)
- ✅ Reorganización de IDs de steps (3→4, 4→5)

#### Navegación y Flujo
- ✅ Login redirige directamente a "Sobre la búsqueda" (ProcessOverview)
- ✅ Navegación secuencial actualizada en todos los componentes
- ✅ Textos de botones actualizados para reflejar paso opcional

#### Datos
- ✅ `hiringProcess.json` actualizado con estructura completa del ejercicio
- ✅ Metadata del proceso: 6 pasos, 2-4 semanas de duración
- ✅ Ejercicios con validates, timeframes y rutas de descarga

### 📋 Integración con Figma

El proyecto utiliza diseños del Figma de Mercado Pago:
- Componente NextSteps: `node-id=33-1044`
- Componente OptionalNotice (Andes Message): `node-id=90-5546`
- Sistema de diseño Andes aplicado consistentemente

## Roadmap / Próximos Pasos

- [ ] Integración con backend para persistencia real
- [ ] Sistema de notificaciones por email
- [ ] Dashboard para recruiters
- [ ] Analytics de progreso de candidatos
- [ ] Versionado de ejercicios
- [ ] Sistema de feedback estructurado

## Licencia

Mercado Pago - Equipo UX
