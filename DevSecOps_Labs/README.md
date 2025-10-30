
# DevSecOps Labs (Flutter + Angular + GitHub Actions)

Este paquete contiene ejercicios prácticos para un taller técnico DevSecOps en un banco digital (AWS + GitHub).
Cada ejercicio incluye **código inseguro** y su **versión corregida**, más instrucciones de evaluación.

## Contenido
- `flutter/` — Ejercicios de exposición de datos, validación y logs.
- `angular/` — Ejercicios de XSS, manejo de DOM y autenticación.
- `.github/workflows/security.yml` — Pipeline de seguridad (SAST + dependencias) para GitHub Actions.

## Objetivo
1) Identificar vulnerabilidades en el código.
2) Proponer y aplicar correcciones seguras.
3) Automatizar controles de seguridad en CI/CD.

## Cómo usar
1. Crea un repositorio nuevo en GitHub y sube estas carpetas/archivos.
2. Revisa los archivos `*_INSEGURO.*` y corrígelos con base en su par `*_SEGURO.*`.
3. Activa GitHub Actions. Verifica que `security.yml` ejecute análisis (CodeQL y dependencias).
4. (Opcional) Integra Snyk u otra herramienta de dependencia según tu licencia/entorno.

> Nota: Los ejemplos son didácticos y no representan una app completa. Ajusta a tu entorno Flutter/Angular real.
