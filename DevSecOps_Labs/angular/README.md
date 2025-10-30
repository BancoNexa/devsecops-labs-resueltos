
# Angular – Laboratorio DevSecOps

## 1) XSS por manipulación de DOM
- **Inseguro:** `innerHTML` con datos no confiables.
- **Seguro:** `DomSanitizer` + enlaces con `Renderer2`.

Archivos:
- `xss_INSEGURO.component.ts`
- `xss_SEGURO.component.ts`

## 2) Almacenamiento y exposición de tokens
- **Inseguro:** `localStorage` sin cifrado ni expiración.
- **Seguro:** servicio de tokens con expiración y rotación (simulado).

Archivos:
- `tokens_INSEGURO.ts`
- `tokens_SEGURO.ts`

## 3) Interceptor de autenticación
- **Inseguro:** requests sin encabezados seguros.
- **Seguro:** `HttpInterceptor` con `Authorization: Bearer` y control de expiración.

Archivos:
- `auth_interceptor_SEGUR0.ts` (seguro)
