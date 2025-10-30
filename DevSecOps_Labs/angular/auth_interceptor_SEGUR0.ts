
// auth_interceptor_SEGUR0.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorSeguro implements HttpInterceptor {
  getToken(): string | null {
    const raw = sessionStorage.getItem('session_token');
    if (!raw) return null;
    try {
      const payload = JSON.parse(atob(raw));
      if (payload.exp < Math.floor(Date.now()/1000)) return null;
      return payload.token;
    } catch { return null; }
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.getToken();
    const cloned = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` }}) : req;
    return next.handle(cloned);
  }
}
