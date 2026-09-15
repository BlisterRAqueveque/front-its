import { Component, computed, input, model, output, signal } from '@angular/core';

export type TypeInput = 'text' | 'number' | 'password';

@Component({
  selector: 'ra-input',
  standalone: false,
  styleUrl: './input.css',
  templateUrl: './input.html',
})
export class InputComponent {
  comprobarDato($event: InputEvent) {
    if (true) {
      this.esDatoCorrecto.set(false);
    }
  }

  esDatoCorrecto = signal<boolean>(true);

  /** two way binding  */
  type = model<TypeInput>('text');

  /** component binding  */
  isPassword = signal<boolean>(false);

  ngOnInit() {
    this.isPassword.set(this.type() === 'password');
  }

  showPassword() {
    switch (this.type()) {
      case 'password':
        this.type.set('text');
        break;
      case 'text':
        this.type.set('password');
        break;
    }
  }

  /** One way binding  */
  placeHolder = input.required<string>();

  countChanges = 0;
  changes = computed(() => {
    console.log(this.type());
  });
}
