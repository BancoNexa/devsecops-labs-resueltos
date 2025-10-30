
// tokens_SEGURO.ts
interface TokenPayload { token: string; exp: number /* unix epoch seconds */ }

export class TokenServiceSeguro {
  private key = 'session_token';
  setTokenSecure(token: string, ttlSeconds: number) {
    const payload: TokenPayload = { token, exp: Math.floor(Date.now()/1000) + ttlSeconds };
    sessionStorage.setItem(this.key, btoa(JSON.stringify(payload))); // simulado
  }
  getTokenSecure(): string | null {
    const raw = sessionStorage.getItem(this.key);
    if (!raw) return null;
    try {
      const payload: TokenPayload = JSON.parse(atob(raw));
      if (payload.exp < Math.floor(Date.now()/1000)) {
        sessionStorage.removeItem(this.key); return null; // expirado
      }
      return payload.token;
    } catch { return null; }
  }
}
