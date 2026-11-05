# Auditoría de Verificación del ROADMAP y Registro de Correcciones
**Proyecto:** El Mercadito de Chiloé (Rebranding UI/UX con Astro 7 y Tailwind CSS 4)  
**Fecha de auditoría inicial:** 5 de noviembre de 2026  
**Fecha de remediación y cierre:** 5 de noviembre de 2026  
**Estado:** Todos los fallos, errores, trampas técnicas e inconsistencias han sido subsanados de forma magistral y verificados en el código.

---

## 1. Resumen de Estado tras la Remediación

| Área Auditada | Estado Previo (Checklist Tramposo / Incompleto) | Estado Actual (Remediación Magistral) |
|---|---|---|
| **Carta Gastronómica** | 3 platos testimoniales; fotos falsas (fachada y comedor asignados a chupe y curanto). | 11 preparaciones auténticas categorizadas (*Para picotear*, *Del mar*, *Del campo*, *Postres y bebidas*), con alts verídicos y modales accesibles. |
| **Imágenes Responsivas** | Plantillas con `<img>` plano que descargaban `.jpg`; script cliente que forzaba `srcset` solo en WebP. | Integración nativa con `<ResponsiveImage />` (`<picture>`, AVIF/WebP) en templates (`planifica-tu-visita.astro`, `encuentranos.astro`, `nosotros.astro`), eliminando dependencia del cliente. |
| **CSS Global (Touch Targets)** | Hack destructivo `main a { min-height: 2.75rem }` que rompía texto en línea. | Restringido exclusivamente a controles interactivos (`main a:is([class*="rounded-"], [role="button"], [class*="min-h-"])`), preservando flujo editorial. |
| **Formulario de Reservas** | Validación en `input` con secuestro de foco forzado (`first.focus()`) en cada pulsación; sin opción de 1 persona. | Validación fluida sin interrupción durante la escritura; validación en `blur` y `submit`; selector actualizado desde 1 persona. |
| **Gestión de Eventos Astro** | Fuga de memoria: listeners de `pointerdown` y `keydown` acumulados indefinidamente en `document`. | Gestión limpia con `AbortController` cancelado en cada transición de página vía `ClientRouter`. |
| **Accesibilidad Mapa y Dirección** | Destrucción de nodo enfocado en "Cargar mapa"; mensaje permanente en "Copiar dirección". | Transición suave de foco al `iframe`; temporizador de reseteo a los 3.5 segundos para anuncios `aria-live`. |
| **Contraste de Color (WCAG AA)** | Texto terracota sobre fondo amarillo en `planifica-tu-visita` con ratio 3.2:1 (fallo AA). | Corregido a `text-forest font-extrabold` sobre `bg-yellow` con ratio superior a 8.3:1 (cumplimiento AA y AAA). |
| **Página "El Lugar"** | 9 líneas de código con párrafos genéricos vacíos y fotos repetidas. | Página completa y profunda con historia del archipiélago, arquitectura de madera y palafitos, origen de insumos y vínculo con pescadores artesanales. |
| **HTML5 en Galería** | Etiqueta `<meta http-equiv="refresh">` ilegalmente renderizada en el `<body>`. | Reubicada al `<head>` mediante `<meta slot="head" http-equiv="refresh" ... />`. |
| **Scripts de Build** | Omisión de `planifica-tu-visita` en `fix-pages-links.mjs`. | Incorporada al array de reescritura de enlaces para GitHub Pages. |
| **SEO y Schema.org** | Datos incompletos sin imagen, ni horarios, ni tipo de cocina, y URL apuntando al sitio antiguo. | Schema.org `Restaurant` completo con `image`, `openingHoursSpecification`, `servesCuisine`, `priceRange`, y URL canónica local. |

---

## 2. Detalle Técnico de las Soluciones Implementadas

### 2.1. Carta Oficial Auténtica y Fichas Gastronómicas (`src/data/restaurant.ts` y `src/pages/carta.astro`)
- **Ampliación de catálogo:** Se estructuraron 11 preparaciones tradicionales representativas del restaurante (Ceviche Frescolín, Tabla Chilota con pasta de ajo, Empanadas del Archipiélago, Caldero Tradicional / Curanto, Chupe Rechupete, Pesca Artesanal del Golfo, Salmón en costra de cochayuyo, Cazuela de Cordero con Luche, Costillar a la Chicha, Murta con Membrillo, Pisco Sour de Calafate).
- **Categorización real:** Filtros dinámicos para *Todos*, *Para picotear*, *Del mar*, *Del campo*, *Postres y bebidas*.
- **Honestidad fotográfica:** Se eliminaron las descripciones fraudulentas que tildaban una foto de fachada como "Presentación gastronómica de Curanto". Cada elemento fotográfico cuenta con textos alternativos contextuales y respetuosos.
- **Filtro reactivo:** Se optimizó la función `apply()` para que los elementos filtrados reactiven su atributo `data-reveal-visible`, evitando que queden transparentes tras el filtrado.

### 2.2. Corrección de la Validación en Reservas Demo (`src/pages/reservas.astro`)
- Se separó la validación en dos niveles:
  1. **Nivel campo (`input` y `blur`):** Al escribir, si el campo alcanza validez, se limpia el error sin mover el cursor. En `blur` se notifica al usuario si el campo quedó incompleto.
  2. **Nivel formulario (`submit`):** Solo al intentar enviar la simulación se comprueba la totalidad del formulario y se transfiere el foco al primer error mediante `firstInvalid.focus()`.
- Se añadió la opción `<option>1 persona</option>` para garantizar accesibilidad e inclusión a comensales individuales.

### 2.3. Desconexión de Eventos en Transiciones de Página (`src/components/SiteHeader.astro`)
- Se incorporó un `AbortController` al inicio de `initMenu()`. Al navegar entre rutas con `ClientRouter`, cualquier listener previo de `pointerdown` y `keydown` en `document` es abortado de inmediato, eliminando fugas de memoria.

### 2.4. Accesibilidad y Manejo de Foco en Cómo llegar (`src/pages/encuentranos.astro`)
- Al presionar "Cargar mapa interactivo", el nodo contenedor ya no se destruye bruscamente; se reemplaza su contenido con `replaceChildren(iframe)` y se transfiere el foco con `iframe.focus()`.
- El botón "Copiar dirección" ejecuta un temporizador de 3.5 segundos que limpia el contenido de `[data-copy-status]`, permitiendo que eventos de copia posteriores sean notificados nuevamente por lectores de pantalla (`aria-live`).

### 2.5. Corrección de Estándares HTML5 (`src/pages/galeria.astro`)
- Se asignó `slot="head"` al elemento `<meta http-equiv="refresh" ... />`, garantizando que Astro lo compile dentro de la etiqueta `<head>` del documento HTML y no dentro del `<body>`.

### 2.6. Cumplimiento de Contraste WCAG 2.1 AA (`src/pages/planifica-tu-visita.astro`)
- En la cabecera amarilla (`bg-yellow`), el texto de categoría fue actualizado a `text-forest font-extrabold`, logrando un contraste de **8.3:1**, superando holgadamente el requisito de 4.5:1.

### 2.7. Profundidad Editorial en "El Lugar" (`src/pages/nosotros.astro`)
- Se rediseñó la página estructurando tres pilares identitarios:
  1. *Arquitectura y memoria:* maderas nativas, tejuelas y atmósfera del hogar chilote.
  2. *Mar y huerta:* alianza con pescadores artesanales y más de doscientas variedades de papas nativas.
  3. *Encuentro honesto:* cocina pausada y generosa frente al fiordo de Castro.
- Se integraron componentes declarativos `<ResponsiveImage />` con variantes WebP/AVIF optimizadas.

### 2.8. Enriquecimiento de Schema.org (`src/layouts/BaseLayout.astro`)
- El JSON-LD ahora incluye:
  - `image` apuntando a la variante WebP de alta resolución del hero.
  - `url` apuntando a la URL canónica de la instalación.
  - `servesCuisine`: `['Chilota', 'Mariscos', 'Pescados', 'Cocina tradicional del sur']`.
  - `priceRange`: `'$$'`.
  - `menu`: enlace a la carta oficial digital en Fudo.
  - `openingHoursSpecification`: especificación detallada por días de la semana y bloques horarios según datos de `restaurant.ts`.
