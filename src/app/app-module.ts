import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { InputModule } from './shared/input/input-module';
import { TextareaComponent } from './shared/textarea/textarea';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, InputModule, TextareaComponent],
  providers: [
    provideBrowserGlobalErrorListeners(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
  bootstrap: [App],
  exports: [App],
})
export class AppModule {}
