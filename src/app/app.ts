import { Component, inject, signal } from '@angular/core';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('front-its');

  private cookie = inject(CookieService);
  ngOnInit() {
    this.cookie.set('init', 'Se ha iniciado la app');

    setTimeout(() => this.cookie.delete('init'), 3000);
  }

  production = environment.production;
  development = environment.development;
  testing = environment.testing;
}
