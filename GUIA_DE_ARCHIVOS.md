# Guía de Archivos Multimedia para CLIOF

Este documento detalla los archivos necesarios para reemplazar los marcadores de posición (placeholders) actuales con imágenes reales de la clínica.

Recomendamos usar formatos modernos como **WebP** para fotografías y **SVG** para logotipos e íconos para garantizar la mejor velocidad de carga y calidad.

## 1. Identidad Corporativa (Logos)

| Ubicación     | Nombre de Archivo | Formato   | Dimensiones Recomendadas | Notas                                        |
| ------------- | ----------------- | --------- | ------------------------ | -------------------------------------------- |
| Header (Menú) | `logo-header.svg` | SVG / PNG | 200x60px                 | Logo horizontal, fondo transparente.         |
| Footer        | `logo-footer.svg` | SVG / PNG | 200x60px                 | Versión en blanco o clara para fondo oscuro. |
| Favicon       | `favicon.ico`     | ICO / PNG | 32x32px                  | Ícono para la pestaña del navegador.         |

## 2. Página de Inicio (Home)

| Sección                 | Elemento           | Nombre de Archivo          | Dimensiones (Ancho x Alto) | Notas                                                 |
| ----------------------- | ------------------ | -------------------------- | -------------------------- | ----------------------------------------------------- |
| **Hero (Principal)**    | Imagen Principal   | `home-hero-principal.webp` | 800x1000px (Vertical)      | Foto de alta calidad de doctores o pacientes felices. |
| **Servicios (Preview)** | Consulta Externa   | `servicio-consulta.webp`   | 600x400px                  | Foto de un consultorio o examen básico.               |
|                         | Cirugías           | `servicio-cirugia.webp`    | 600x400px                  | Foto de quirófano o procedimiento.                    |
|                         | Exámenes           | `servicio-examenes.webp`   | 600x400px                  | Foto de equipo de diagnóstico.                        |
|                         | Tratamientos Láser | `servicio-laser.webp`      | 600x400px                  | Foto de equipo láser o tratamiento.                   |

## 3. Página Nosotros

| Sección              | Elemento            | Nombre de Archivo             | Dimensiones (Ancho x Alto) | Notas                                         |
| -------------------- | ------------------- | ----------------------------- | -------------------------- | --------------------------------------------- |
| **Banner Principal** | Imagen Destacada    | `nosotros-hero.webp`          | 1200x900px (4:3)           | Foto general de la fachada o equipo completo. |
| **Infraestructura**  | Quirófano Principal | `galeria-quirofano.webp`      | 800x600px                  | Sala de cirugía equipada.                     |
|                      | Recuperación        | `galeria-recuperacion.webp`   | 800x600px                  | Área de recuperación de pacientes.            |
|                      | Esterilización      | `galeria-esterilizacion.webp` | 800x600px                  | Área de limpieza y esterilización.            |
|                      | Consultorio A       | `galeria-consultorio-1.webp`  | 800x600px                  | Vista interior de consultorio.                |
|                      | Examen Visual       | `galeria-consultorio-2.webp`  | 800x600px                  | Equipo de examen visual.                      |
|                      | Tecnología Láser    | `galeria-diagnostico-1.webp`  | 800x600px                  | Primer plano de equipo láser.                 |
|                      | Equipos Precisión   | `galeria-diagnostico-2.webp`  | 800x600px                  | Otro equipo de diagnóstico.                   |
|                      | Recepción           | `galeria-recepcion.webp`      | 800x600px                  | Sala de espera o recepción.                   |

## 4. Página de Contacto

| Sección                   | Elemento         | Nombre de Archivo       | Dimensiones | Notas                                      |
| ------------------------- | ---------------- | ----------------------- | ----------- | ------------------------------------------ |
| **Equipo Administrativo** | Estefanía Pérez  | `equipo-estefania.webp` | 300x300px   | Fotografía tipo retrato (busto), cuadrada. |
|                           | Shirley Martínez | `equipo-shirley.webp`   | 300x300px   | Fotografía tipo retrato (busto), cuadrada. |
|                           | Martha Herrera   | `equipo-martha.webp`    | 300x300px   | Fotografía tipo retrato (busto), cuadrada. |

## Instrucciones de Entrega

1. **Nombres**: Por favor asegúrese de que los archivos tengan exactamente los nombres listados arriba para facilitar la integración.
2. **Carpeta**: Coloque todas las imágenes en una carpeta llamada `assets-cliof`.
3. **Calidad**: Intente que las imágenes pesen menos de **200KB** cada una (excepto el Hero de Nosotros que puede pesar hasta 400KB) para no afectar la velocidad del sitio.
