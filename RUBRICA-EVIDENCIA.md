# Matriz de evidencia RA2

Esta matriz enlaza cada criterio con implementación observable y una comprobación reproducible. No sustituye la revisión visual del profesor.

| Criterio | Implementación | Evidencia reproducible |
|---|---|---|
| Estructura y navegabilidad | Seis páginas principales conectadas por `SiteHeader.astro` y `SiteFooter.astro`; `/galeria/` conserva compatibilidad. | `npm test` exige las seis rutas, Galería, 404, un `main`, un `h1` y enlaces internos resolubles. |
| Emulación dinámica | Menú móvil, filtros con URL, modales nativos, acordeones, mapa diferido, copia de dirección, reserva en tres estados e índice activo. | QA local: filtro compartible/recargable, modal con Escape y foco restaurado, errores por campo, resumen y confirmación demo. |
| HTML y Tailwind | Astro genera HTML semántico; Tailwind CSS 4 se integra mediante `@tailwindcss/vite`; componentes compartidos para layout, marca, iconos, navegación, hero e índice. | `npm run build` genera ocho salidas estáticas; `npm test` valida landmarks y requisitos estructurales. |
| Diseño responsivo | Grids mobile-first, navegación adaptativa, barra móvil con safe area, imágenes con espacio reservado y variantes WebP/AVIF. | QA local en 320, 390, 540, 768, 1024, 1440 y 1920 px: `scrollWidth <= innerWidth` en todos los tamaños. |
| UI/UX | Jerarquía editorial, paleta semántica, tipografías locales, foco visible, controles táctiles, movimiento reducido y contenido práctico para preparar la visita. | Navegador confirmó fuentes cargadas, reducción de movimiento, menú accesible, índice, FAQ y flujo completo de Reservas. |

## Comandos de aceptación

```bash
npm test
npm run dev
```

`npm test` ejecuta el build y `scripts/qa-roadmap.mjs`. La revisión de navegador sigue siendo obligatoria para interacciones y composición visual.
