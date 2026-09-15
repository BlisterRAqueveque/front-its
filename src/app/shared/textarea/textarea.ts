import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ra-textarea',
  standalone: true,
  styleUrl: './textarea.css',
  templateUrl: './textarea.html',
  imports: [CommonModule, FormsModule],
})
export class TextareaComponent {}
