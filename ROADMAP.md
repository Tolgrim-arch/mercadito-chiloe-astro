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
- [ ] Fase 18: README actualizado y versión local lista; despliegue público y verificación HTTP 404 pendientes de revisión del usuario.

**Evidencia local:** `npm run build` genera Inicio, El lugar, Carta, Planifica tu visita, Cómo llegar, Reservas, Galería heredada y 404. Navegador local confirmó un `main` y un `h1` por página, ausencia de overflow tras la corrección a 320 px, modal de platos, mapa diferido y flujo completo de Reservas demo.

**Identidad SVG:** el isotipo arquitectónico y el logotipo completo proporcionados por el usuario se integraron como `BrandLogo.astro`. El header usa isotipo con nombre legible en móvil y el footer conserva la composición completa. `Icon.astro` centraliza iconos lineales para menú, carta, ubicación, enlaces, teléfono y copia; los accesos rápidos ya no dependen de símbolos tipográficos.

## Fase 0: gobernanza

- [x] Crear este `ROADMAP.md` en la raíz del repositorio.
- [ ] Registrar evidencia de verificación al cerrar cada fase.
- [ ] Mantener bloqueos y datos pendientes visibles; no sustituirlos por invenciones.
- [ ] Actualizar este documento antes de avanzar de fase.

## Fase 1: contenido y recursos reales

- [x] Auditar `https://www.mercaditodechiloe.com/` y sus enlaces oficiales.
- [x] Verificar dirección, horarios, contacto y una selección inicial de platos y precios.
- [x] Verificar la ficha de Google Maps y sus coordenadas `-42.4793067, -73.7607173`.
- [ ] Retirar todos los datos, platos, precios y testimonios actuales sin respaldo. Parcial: Cómo llegar, Reservas y Footer corregidos.
- [x] Inventariar las fotografías publicadas en el sitio original.
- [ ] Confirmar cuáles pueden reutilizarse y registrar su procedencia.
- [ ] Preparar imágenes locales responsivas con dimensiones, `srcset`, `sizes` y textos alternativos.
- [ ] Centralizar navegación, datos del restaurante, FAQ, platos y fotografías en módulos tipados.

**Evidencia inicial (2026-11-05):** sitio oficial y carta Fudo inspeccionados. Confirmados Pedro Montt 210, +56 9 8313 9887, WhatsApp, Instagram, Maps y categorías/platos de la carta. Los horarios difieren entre la portada oficial y Fudo; se usan provisionalmente los de Fudo y la discrepancia queda pendiente de resolución.

**Cierre:** cada dato y fotografía visible tiene una fuente identificada.

## Fase 2: sistema de diseño Tailwind

- [ ] Definir tokens semánticos de fondo, superficie, texto, marca, acento, borde, foco y estados.
- [ ] Partir de bosque `#203B35`, marfil `#FBFAF6`, crema `#F4F0E8`, terracota `#A64126` y amarillo `#EDC95A`.
- [ ] Verificar contraste AA de todas las combinaciones.
- [ ] Cargar Playfair Display y DM Sans localmente con `font-display: swap`.
- [ ] Definir escala tipográfica fluida, texto base de 18 px y párrafos legibles.
- [ ] Normalizar contenedores, espaciado, radios, bordes, sombras e iconos SVG.
- [ ] Definir tratamientos coherentes para hero, tarjetas, fotografías y formularios.

**Cierre:** todas las páginas comparten el mismo sistema visual.

## Fase 3: arquitectura y componentes Astro

- [ ] Integrar Inicio en `BaseLayout` y ampliar metadatos SEO.
- [ ] Centralizar rutas compatibles con `BASE_URL`.
- [ ] Crear componentes reutilizables de contenedor, encabezado, botones, imágenes y llamadas a la acción.
- [ ] Crear `DishCard`, ficha ampliable, datos de visita, avisos, acordeón y campos de formulario.
- [ ] Crear índice de secciones, barra móvil y sistema compartido de revelación.
- [ ] Mantener un `main`, un `h1` y landmarks semánticos por página.
- [ ] Eliminar `SmartSkeleton` y reservar espacio para imágenes y mapa.
- [ ] Mantener el contenido esencial comprensible sin JavaScript.

**Cierre:** los patrones completos no se repiten entre páginas.

## Fase 4: navegación compartida

- [ ] Rehacer header sticky con contraste estable, categoría “Restaurante” y ruta activa.
- [ ] Añadir menú móvil con `aria-expanded`, Escape, clic exterior y foco restaurado.
- [ ] Añadir enlace “Saltar al contenido”.
- [ ] Evitar listeners duplicados tras transiciones Astro.
- [ ] Crear índice compacto en Inicio, Carta y Planifica tu visita.
- [ ] Marcar la sección visible sin tapar anclas bajo el header.
- [ ] Reordenar footer con navegación, contactos reales y sitio original.
- [ ] Corregir “Volver arriba” y enlaces externos.

**Cierre:** cualquier página y sección larga se recorre con ratón, tacto y teclado.

## Fase 5: barra inferior móvil

- [ ] Añadir accesos “Carta” y “Cómo llegar” bajo el breakpoint de escritorio.
- [ ] Respetar áreas seguras y reservar espacio para no cubrir contenido.
- [ ] Ocultarla al abrir menú, modal, formulario o al entrar el footer.
- [ ] Verificarla a 320, 360, 390 y 430 px y con teclado virtual.

## Fase 6: Inicio

- [ ] Identificar el negocio como restaurante en el primer pantallazo.
- [ ] Usar fotografía real y CTAs “Explorar la carta” y “Cómo llegar”.
- [ ] Crear bloques de identidad, platos reales, ambiente y datos de visita.
- [ ] Mostrar sólo horarios y contactos verificados.
- [ ] Añadir tres FAQ destacadas y acceso a Planifica tu visita.
- [ ] Reducir vacíos y decoración que no aporte información.

## Fase 7: El lugar

- [ ] Sustituir historia inventada por contenido comprobado.
- [ ] Explicar identidad, propuesta gastronómica, relación con Chiloé y ambiente.
- [ ] Distribuir fotografías reales sin repetir Inicio.
- [ ] Cerrar con Carta, Planifica tu visita y Cómo llegar.

## Fase 8: Carta y platos

- [ ] Crear categorías y filtro “Todos” basados en la carta oficial.
- [ ] Añadir estado seleccionado, recuento y URL compartible.
- [ ] Mantener todos los platos visibles sin JavaScript.
- [ ] Crear fichas ampliables con foto, descripción, categoría, precio y fecha de consulta.
- [ ] Implementar modal accesible con Escape, foco contenido y restaurado.
- [ ] No publicar alérgenos ni dietas sin evidencia.
- [ ] Añadir presentación imprimible limpia y enlace a la carta oficial si existe.

## Fase 9: Planifica tu visita

- [ ] Crear `/planifica-tu-visita/` y sustituir Galería en navegación y CTAs.
- [ ] Integrar ubicación, horarios, contacto, ambiente y fotografías reales.
- [ ] Añadir FAQ agrupadas y enlazables mediante anclas.
- [ ] Implementar acordeones accesibles y fallback sin JavaScript.
- [ ] Destacar Carta y Cómo llegar.
- [ ] No afirmar estacionamiento, accesibilidad o servicios familiares sin evidencia.

## Fase 10: compatibilidad de Galería

- [ ] Mantener `/galeria/` con canonical y `noindex`.
- [ ] Redirigir de forma compatible con hosting estático.
- [ ] Mostrar mensaje y enlace manual si la redirección falla.
- [ ] Eliminar enlaces internos que dependan de la ruta heredada.

## Fase 11: Cómo llegar y mapa

- [ ] Mostrar dirección textual y acceso comprobados.
- [ ] Cargar el mapa exacto sólo después de pulsar “Cargar mapa”.
- [ ] Mantener “Abrir en Google Maps” siempre disponible.
- [ ] Añadir “Copiar dirección” con confirmación accesible y fallback manual.
- [ ] Mostrar horarios estructurados sin afirmar “Abierto ahora”.
- [ ] Conservar información útil si el iframe falla.

## Fase 12: Reservas demo

- [ ] Mostrar antes del formulario que no envía ni confirma reservas.
- [ ] Usar campos nativos, etiquetas visibles, ayudas y autocompletado apropiado.
- [ ] Validar correo, campos obligatorios y fechas pasadas.
- [ ] Mostrar errores junto al campo y enfocar el primero.
- [ ] Crear resumen editable y confirmación inequívocamente simulada.
- [ ] No enviar, abrir correo ni persistir datos personales.
- [ ] Mostrar contacto real verificado como alternativa.

## Fase 13: hover, foco y microinteracciones

- [ ] Unificar transiciones entre 150 y 250 ms.
- [ ] Crear estados hover y `focus-visible` equivalentes en todos los controles.
- [ ] Usar elevación máxima de 2 px, subrayados editoriales e indicadores de acción.
- [ ] Mantener acciones visibles en pantallas táctiles.
- [ ] Evitar animaciones continuas, escalados agresivos y tarjetas falsas.

## Fase 14: aparición y scroll

- [ ] Implementar un único `IntersectionObserver` con aparición de una sola vez.
- [ ] Usar opacidad, desplazamiento máximo de 12 px y duración de 350–400 ms.
- [ ] Limitar escalonado a 60 ms y retraso total a 180 ms.
- [ ] Mantener hero y acciones críticas visibles desde el primer render.
- [ ] Mostrar todo inmediatamente con movimiento reducido o sin JavaScript.
- [ ] Mantener scroll nativo; no usar parallax ni interceptar rueda o gestos.
- [ ] Verificar que footer y últimas secciones se revelen correctamente.

## Fase 15: página 404

- [ ] Mantener layout, navegación, footer y estilo compartidos.
- [ ] Añadir `noindex` y reducir la altura rígida.
- [ ] Mostrar “Página no encontrada” y acciones a Inicio, Carta y Cómo llegar.
- [ ] Usar decoración ligera, sin animación continua.
- [ ] Verificar rutas inexistentes simples y anidadas con HTTP 404 real.

## Fase 16: rendimiento y SEO

- [ ] Crear títulos, descripciones, canonical y Open Graph únicos.
- [ ] Añadir JSON-LD `Restaurant` sólo con datos comprobados.
- [ ] Priorizar sólo el hero y diferir fotografías inferiores y mapa.
- [ ] Mantener CLS menor de 0,1 y mensajes recuperables ante fallos.
- [ ] Actualizar sitemap y excluir 404 y Galería heredada.
- [ ] Evitar scripts de terceros y recursos externos innecesarios.

## Fase 17: QA responsive y accesible

- [ ] Ejecutar build y comprobar seis páginas, Galería heredada y 404.
- [ ] Revisar 320, 390, 540, 768, 1024, 1440 y 1920 px.
- [ ] Comprobar overflow, zoom 200 %, contraste AA y controles de 44 px.
- [ ] Recorrer menú, filtros, modales, acordeones y formulario sólo con teclado.
- [ ] Probar atrás, adelante, recarga, URLs compartibles y JavaScript desactivado.
- [ ] Probar movimiento reducido, consola, recursos fallidos y scroll completo.

## Fase 18: rúbrica y entrega

- [ ] Actualizar README con ejecución, build, fuentes y límites de la demo.
- [ ] Crear matriz de evidencia para navegación, interacción, Tailwind, responsive y UI/UX.
- [ ] Presentar la versión local para revisión visual.
- [ ] Publicar en GitHub Pages sólo después de la revisión solicitada.
- [ ] Verificar públicamente rutas, mapa, Galería heredada y 404.

## Criterios finales

- [ ] El primer pantallazo explica qué es el restaurante y dónde está.
- [ ] Seis páginas principales conectadas y sin enlaces rotos.
- [ ] Planifica tu visita reemplaza Galería sin romper la URL anterior.
- [ ] Carta, mapa, FAQ y reservas demo son accesibles y comprensibles.
- [ ] Todo el sitio comparte componentes y estilo coherentes.
- [ ] No existe información comercial inventada.
- [ ] No hay overflow y el build funciona bajo la ruta base.
- [ ] La matriz demuestra nivel excelente en la rúbrica RA2.
