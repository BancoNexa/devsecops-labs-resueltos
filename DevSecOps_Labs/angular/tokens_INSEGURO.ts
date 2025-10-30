
// tokens_INSEGURO.ts
export class TokenServiceInseguro {
  // ❌ Almacena tokens en localStorage sin expiración
  setToken(token: string) { localStorage.setItem('token', token); }
  getToken(): string | null { return localStorage.getItem('token'); }
}
