
# Flutter – Laboratorio DevSecOps

## 1) Almacenamiento de credenciales
- **Inseguro:** guarda contraseñas en texto plano en el sistema de archivos.
- **Seguro:** usa `flutter_secure_storage` y evita logs con datos sensibles.

Archivos:
- `credenciales_INSEGURO.dart`
- `credenciales_SEGURO.dart`

## 2) Validación de entradas
- **Inseguro:** acepta usuario/contraseña sin validar.
- **Seguro:** usa expresiones regulares y límites de longitud.

Archivos:
- `validacion_INSEGURO.dart`
- `validacion_SEGURO.dart`

## 3) Logs con datos sensibles
- **Inseguro:** imprime tokens/PII en logs.
- **Seguro:** ofusca/omite datos y usa niveles de log apropiados.

Archivos:
- `logs_INSEGURO.dart`
- `logs_SEGURO.dart`
