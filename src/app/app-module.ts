import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { InputModule } from './shared/input/input-module';
import { TextareaComponent } from './shared/textarea/textarea';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, InputModule, TextareaComponent],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
  exports: [App],
})
export class AppModule {}
