
// xss_SEGURO.component.ts
import { Component, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-xss-seguro',
  template: `<div>{{ username }}</div>`
})
export class XssSeguroComponent {
  username: string = '';
  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    const raw = this.route.snapshot.params['username'] ?? '';
    // ✅ Sanitizar valor antes de mostrar
    this.username = this.sanitizer.sanitize(SecurityContext.HTML, raw) || '';
  }
}
