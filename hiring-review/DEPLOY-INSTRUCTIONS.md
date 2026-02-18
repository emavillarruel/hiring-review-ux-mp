# Instrucciones para Desplegar el Sitio

## Estado Actual
✅ Build de producción completado (dist/)
✅ Commit creado con todos los cambios
✅ Repositorio remoto configurado: https://github.com/emavillarruel/hiring-review-ux-mp.git

❌ Push bloqueado por autenticación SSH

## Opción Recomendada: GitHub Desktop (Más Fácil)

1. **Descarga GitHub Desktop** (si no lo tienes):
   - https://desktop.github.com/

2. **Abre GitHub Desktop** y:
   - File → Add Local Repository
   - Selecciona esta carpeta: `/Users/evillarruel/claudeCode/hiring-review`

3. **Publica el repositorio**:
   - GitHub Desktop detectará los cambios y el commit
   - Haz clic en "Push origin" o "Publish branch"
   - Se abrirá el navegador para autenticarte si es necesario

## Opción Alternativa: Terminal con HTTPS

Si prefieres usar terminal, ejecuta estos comandos:

```bash
cd /Users/evillarruel/claudeCode/hiring-review

# Cambiar a HTTPS (más fácil de autenticar)
git remote set-url origin https://github.com/emavillarruel/hiring-review-ux-mp.git

# Hacer push (te pedirá usuario y contraseña)
git push -u origin main
```

**Nota**: Si GitHub te pide contraseña, necesitas crear un **Personal Access Token**:
1. Ve a: https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Selecciona: `repo` (acceso completo a repositorios)
4. Copia el token
5. Úsalo como contraseña cuando hagas `git push`

## Después del Push: Desplegar en Vercel

1. **Ve a Vercel**: https://vercel.com

2. **Importa el proyecto**:
   - "Add New..." → "Project"
   - "Import Git Repository"
   - Selecciona: `emavillarruel/hiring-review-ux-mp`

3. **Configura el proyecto**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy**:
   - Haz clic en "Deploy"
   - Vercel generará una URL (ej: https://hiring-review-ux-mp.vercel.app)

5. **Comparte con los directores**:
   - URL del sitio: [la que genere Vercel]
   - URL del flujograma: https://www.figma.com/online-whiteboard/create-diagram/b701d32c-9a7d-4be9-a76d-0014a0cbdfc1

## ¿Necesitas Ayuda?

Si tienes problemas con la autenticación o el despliegue, avísame y te ayudo.
