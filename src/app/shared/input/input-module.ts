import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input';
import { Eye } from '@primeicons/angular/eye';
import { EyeSlash } from '@primeicons/angular/eye-slash';

@NgModule({
  declarations: [InputComponent /** ...n */],
  imports: [CommonModule, FormsModule, Eye, EyeSlash],
  exports: [InputComponent],
})
export class InputModule {}
