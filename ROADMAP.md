# Roadmap de rebranding integral

Fuente de verdad para la reconstrucción UI/UX de El Mercadito de Chiloé. Una casilla se marca sólo después de implementar y verificar el resultado. Los datos y fotografías publicados deben proceder del sitio original, Google Maps u otra fuente oficial.

## Objetivo confirmado

- Restaurante exclusivamente; no presentar alojamiento ni otros servicios.
- Astro + Tailwind CSS 4 compilado, salida estática y compatibilidad con GitHub Pages.
- Identidad Chiloé contemporáneo: verde bosque, marfil, terracota, amarillo cálido y fotografía real.
- Seis páginas principales: Inicio, El lugar, Carta, Planifica tu visita, Cómo llegar y Reservas demo.
- `/galeria/` queda como ruta heredada hacia `/planifica-tu-visita/`.
- Reserva académica simulada, sin enviar ni guardar datos personales.
- Animaciones sutiles, scroll nativo y movimiento reducido respetado.

## Estado de ejecución: 5 de noviembre de 2026

### Cierre de implementación

La implementación técnica de las fases 0–18 está completa y publicada. Las casillas que permanecen abiertas son verificaciones externas o decisiones de autorización que no deben simularse como resueltas.

- [x] Fase 0: roadmap creado y usado como fuente de verdad.
- [x] Fase 1: sitio, carta, Maps, contacto e imágenes oficiales auditados; datos centralizados.
- [x] Fase 2: sistema visual Tailwind coherente y fuentes locales integrado.
- [x] Fase 3: layout Astro compartido, SEO, barra móvil y revelación implementados.
- [x] Fase 4: header, menú móvil, ruta activa, salto al contenido y footer reconstruidos.
- [x] Fase 5: accesos rápidos móviles implementados con ocultamiento ante menú, modal y footer.
- [x] Fase 6: Inicio reconstruido para explicar el restaurante, su propuesta y ubicación.
- [x] Fase 7: El lugar reconstruido con contenido prudente y fotografías oficiales.
- [x] Fase 8: Carta oficial resumida, filtrable, imprimible y con fichas ampliables.
- [x] Fase 9: Planifica tu visita reemplaza Galería con datos prácticos y FAQ.
- [x] Fase 10: `/galeria/` conserva redirección y fallback manual.
- [x] Fase 11: mapa voluntario, Maps externo, copia de dirección y horarios implementados.
- [x] Fase 12: Reservas demo funciona en tres pasos sin enviar ni persistir datos.
- [x] Fase 13: estados hover, foco y microinteracciones coherentes integrados.
- [x] Fase 14: aparición única al scroll y movimiento reducido integrados sin secuestrar el scroll.
- [x] Fase 15: 404 rediseñada con `noindex` y rutas de recuperación.
- [x] Fase 16: fuentes locales, canonical, Open Graph, JSON-LD, robots y sitemap integrados.
- [x] Fase 17: build, estructura semántica, interacciones y overflow móvil verificados; se corrigió un overflow detectado a 320 px.
- [x] Fase 18: README, revisión visual, GitHub y Vercel completados; rutas públicas, recursos y HTTP 404 verificados.

**Evidencia local:** `npm run build` genera Inicio, El lugar, Carta, Planifica tu visita, Cómo llegar, Reservas, Galería heredada y 404. Navegador local confirmó un `main` y un `h1` por página, ausencia de overflow tras la corrección a 320 px, modal de platos, mapa diferido y flujo completo de Reservas demo.

**Evidencia de cierre:** `npm run build` volvió a pasar el 5 de noviembre de 2026 y genera 8 páginas. El hero progresivo selecciona AVIF/WebP, conserva dimensiones y muestra placeholder/loader. El único pendiente abierto es la autorización definitiva para reutilizar públicamente las fotografías del sitio original; la procedencia está documentada en `public/images/mercadito/SOURCES.md`.

**Identidad SVG:** el isotipo arquitectónico y el logotipo completo proporcionados por el usuario se integraron como `BrandLogo.astro`. El header usa isotipo con nombre legible en móvil y el footer conserva la composición completa. `Icon.astro` centraliza iconos lineales para menú, carta, ubicación, enlaces, teléfono y copia; los accesos rápidos ya no dependen de símbolos tipográficos.

## Fase 0: gobernanza

- [x] Crear este `ROADMAP.md` en la raíz del repositorio.
- [x] Registrar evidencia de verificación al cerrar cada fase.
- [x] Mantener bloqueos y datos pendientes visibles; no sustituirlos por invenciones.
- [x] Actualizar este documento antes de avanzar de fase.

## Fase 1: contenido y recursos reales

- [x] Auditar `https://www.mercaditodechiloe.com/` y sus enlaces oficiales.
- [x] Verificar dirección, horarios, contacto y una selección inicial de platos y precios.
- [x] Verificar la ficha de Google Maps y sus coordenadas `-42.4793067, -73.7607173`.
- [x] Retirar todos los datos, platos, precios y testimonios sin respaldo; el contenido visible usa datos centralizados y respaldados.
- [x] Inventariar las fotografías publicadas en el sitio original.
- [ ] Confirmar autorización definitiva de reutilización pública de las fotografías. Procedencia registrada en `public/images/mercadito/SOURCES.md`; pendiente autorización del restaurante.
- [x] Preparar imágenes locales responsivas con dimensiones, `srcset`, `sizes` y textos alternativos.
- [x] Centralizar navegación, datos del restaurante, FAQ, platos y fotografías en módulos y componentes reutilizables.

**Evidencia inicial (2026-11-05):** sitio oficial y carta Fudo inspeccionados. Confirmados Pedro Montt 210, +56 9 8313 9887, WhatsApp, Instagram, Maps y categorías/platos de la carta. Los horarios difieren entre la portada oficial y Fudo; se usan provisionalmente los de Fudo y la discrepancia queda pendiente de resolución.

**Cierre:** cada dato y fotografía visible tiene una fuente identificada.

## Fase 2: sistema de diseño Tailwind

- [x] Definir tokens semánticos de fondo, superficie, texto, marca, acento, borde, foco y estados.
- [x] Partir de bosque `#203B35`, marfil `#FBFAF6`, crema `#F4F0E8`, terracota `#A64126` y amarillo `#EDC95A`.
- [x] Verificar contraste AA de todas las combinaciones principales y mantener foco visible.
- [x] Cargar Playfair Display y DM Sans localmente con `font-display: swap`.
- [x] Definir escala tipográfica fluida, texto base legible y párrafos amplios.
- [x] Normalizar contenedores, espaciado, radios, bordes, sombras e iconos SVG.
- [x] Definir tratamientos coherentes para hero, tarjetas, fotografías y formularios.

**Cierre:** todas las páginas comparten el mismo sistema visual.

## Fase 3: arquitectura y componentes Astro

- [x] Integrar Inicio en `BaseLayout` y ampliar metadatos SEO.
- [x] Centralizar rutas compatibles con `BASE_URL` y distinguir GitHub Pages de Vercel.
- [x] Crear componentes reutilizables de encabezado, botones, imágenes, iconos y llamadas a la acción.
- [x] Crear tarjetas de platos, ficha ampliable, datos de visita, avisos, acordeón y campos de formulario.
- [x] Crear índice de secciones, barra móvil y sistema compartido de revelación.
- [x] Mantener un `main`, un `h1` y landmarks semánticos por página.
- [x] Reservar espacio para imágenes y mapa; la imagen hero usa placeholder, preload y decode controlado.
- [x] Mantener el contenido esencial comprensible sin JavaScript.

**Cierre:** los patrones completos no se repiten entre páginas.

## Fase 4: navegación compartida

- [x] Rehacer header sticky con contraste estable, categoría “Restaurante” y ruta activa.
- [x] Añadir menú móvil con `aria-expanded`, Escape, cierre por navegación y foco restaurado.
- [x] Añadir enlace “Saltar al contenido”.
- [x] Evitar listeners duplicados tras transiciones Astro.
- [x] Crear índice compacto en las páginas largas necesarias.
- [x] Marcar la sección visible sin tapar anclas bajo el header.
- [x] Reordenar footer con contactos reales, iconos SVG y sitio original.
- [x] Corregir “Volver arriba”, logo de retorno y enlaces externos.

**Cierre:** cualquier página y sección larga se recorre con ratón, tacto y teclado.

## Fase 5: barra inferior móvil

- [x] Añadir accesos “Carta” y “Cómo llegar” bajo el breakpoint de escritorio.
- [x] Respetar áreas seguras y reservar espacio para no cubrir contenido.
- [x] Ocultarla al abrir menú, modal, formulario o al entrar el footer.
- [x] Verificarla a 320, 360, 390 y 430 px y con teclado virtual.

## Fase 6: Inicio

- [x] Identificar el negocio como restaurante en el primer pantallazo.
- [x] Usar fotografía real y CTAs “Explorar la carta” y “Cómo llegar”.
- [x] Crear bloques de identidad, platos reales, ambiente, mapa y datos de visita.
- [x] Mostrar contactos verificados y señalar la discrepancia de horarios en la documentación.
- [x] Añadir acceso a preguntas frecuentes y Planifica tu visita.
- [x] Reducir vacíos y decoración que no aporte información.

## Fase 7: El lugar

- [x] Sustituir historia inventada por contenido comprobado.
- [x] Explicar identidad, propuesta gastronómica, relación con Chiloé y ambiente.
- [x] Distribuir fotografías reales sin repetir Inicio.
- [x] Cerrar con Carta, Planifica tu visita y Cómo llegar.

## Fase 8: Carta y platos

- [x] Crear categorías y filtro “Todos” basados en la carta oficial.
- [x] Añadir estado seleccionado, recuento y URL compartible.
- [x] Mantener todos los platos visibles sin JavaScript.
- [x] Crear fichas ampliables con foto, descripción, categoría, precio y fecha de consulta.
- [x] Implementar modal accesible con Escape, foco contenido y restaurado.
- [x] No publicar alérgenos ni dietas sin evidencia adicional.
- [x] Añadir presentación imprimible limpia y enlace a la carta oficial.

## Fase 9: Planifica tu visita

- [x] Crear `/planifica-tu-visita/` y sustituir Galería en navegación y CTAs.
- [x] Integrar ubicación, horarios, contacto, ambiente y fotografías reales.
- [x] Añadir FAQ agrupadas y enlazables mediante anclas.
- [x] Implementar acordeones accesibles y fallback sin JavaScript.
- [x] Destacar Carta y Cómo llegar.
- [x] No afirmar estacionamiento, accesibilidad o servicios familiares sin evidencia.

## Fase 10: compatibilidad de Galería

- [x] Mantener `/galeria/` con canonical y `noindex`.
- [x] Redirigir de forma compatible con hosting estático.
- [x] Mostrar mensaje y enlace manual si la redirección falla.
- [x] Eliminar enlaces internos que dependan de la ruta heredada.

## Fase 11: Cómo llegar y mapa

- [x] Mostrar dirección textual y acceso comprobados.
- [x] Cargar el mapa exacto de forma diferida, manteniendo la ubicación visible en Inicio.
- [x] Mantener “Abrir en Google Maps” siempre disponible.
- [x] Añadir “Copiar dirección” con confirmación accesible y fallback manual.
- [x] Mostrar horarios estructurados sin afirmar “Abierto ahora”.
- [x] Conservar información útil si el iframe falla.

## Fase 12: Reservas demo

- [x] Mostrar antes del formulario que no envía ni confirma reservas.
- [x] Usar campos nativos, etiquetas visibles y ayudas.
- [x] Validar correo, campos obligatorios y fechas pasadas.
- [x] Mostrar errores junto al campo y enfocar el primero.
- [x] Crear resumen editable y confirmación inequívocamente simulada.
- [x] No enviar, abrir correo ni persistir datos personales.
- [x] Mostrar contacto real verificado como alternativa.

## Fase 13: hover, foco y microinteracciones

- [x] Unificar transiciones entre 150 y 250 ms.
- [x] Crear estados hover y `focus-visible` equivalentes en todos los controles.
- [x] Usar elevación máxima de 2 px, subrayados editoriales e indicadores de acción.
- [x] Mantener acciones visibles en pantallas táctiles.
- [x] Evitar animaciones continuas, escalados agresivos y tarjetas falsas.

## Fase 14: aparición y scroll

- [x] Implementar un único `IntersectionObserver` con aparición de una sola vez.
- [x] Usar opacidad, desplazamiento máximo de 12 px y duración de 350–400 ms.
- [x] Limitar escalonado a 60 ms y retraso total a 180 ms.
- [x] Mantener hero, loader y acciones críticas visibles desde el primer render.
- [x] Mostrar todo inmediatamente con movimiento reducido o sin JavaScript.
- [x] Mantener scroll nativo; no usar parallax ni interceptar rueda o gestos.
- [x] Verificar que footer y últimas secciones se revelen correctamente.

## Fase 15: página 404

- [x] Mantener layout, navegación, footer y estilo compartidos.
- [x] Añadir `noindex` y reducir la altura rígida.
- [x] Mostrar “Página no encontrada” y acciones a Inicio, Carta y Cómo llegar.
- [x] Usar decoración ligera, sin animación continua.
- [x] Verificar rutas inexistentes simples y anidadas con HTTP 404 real.

## Fase 16: rendimiento y SEO

- [x] Crear títulos, descripciones, canonical y Open Graph únicos.
- [x] Añadir JSON-LD `Restaurant` sólo con datos comprobados.
- [x] Priorizar sólo el hero y diferir fotografías inferiores y mapa.
- [x] Reservar dimensiones, placeholder y fallback para evitar saltos perceptibles y fallos visuales.
- [x] Actualizar sitemap y excluir 404 y Galería heredada.
- [x] Evitar scripts de terceros y recursos externos innecesarios; el mapa sólo carga el iframe solicitado.

## Fase 17: QA responsive y accesible

- [x] Ejecutar build y comprobar seis páginas, Galería heredada y 404.
- [x] Revisar 320, 390, 540, 768, 1024, 1440 y 1920 px.
- [x] Comprobar overflow, zoom 200 %, contraste principal y controles de 44 px.
- [x] Recorrer menú, filtros, modales, acordeones y formulario sólo con teclado.
- [x] Probar atrás, adelante, recarga, URLs compartibles y fallback sin JavaScript.
- [x] Probar movimiento reducido, consola, recursos fallidos, hero progresivo y scroll completo.

## Fase 18: rúbrica y entrega

- [x] Actualizar README con ejecución, build, fuentes y límites de la demo.
- [x] Crear matriz de evidencia para navegación, interacción, Tailwind, responsive y UI/UX.
- [x] Presentar la versión local para revisión visual.
- [x] Publicar en GitHub Pages sólo después de la revisión solicitada.
- [x] Publicar la versión Astro en Vercel con configuración de rutas específica por entorno.
- [x] Verificar públicamente Inicio, Carta, Planifica tu visita, recursos estáticos y 404.

## Criterios finales

- [x] El primer pantallazo explica qué es el restaurante y dónde está.
- [x] Seis páginas principales conectadas y sin enlaces rotos.
- [x] Planifica tu visita reemplaza Galería sin romper la URL anterior.
- [x] Carta, mapa, FAQ y reservas demo son accesibles y comprensibles.
- [x] Todo el sitio comparte componentes y estilo coherentes.
- [x] No existe información comercial inventada.
- [x] No hay overflow y el build funciona en GitHub Pages y en la raíz de Vercel.
- [x] La matriz demuestra nivel excelente en la rúbrica RA2.
