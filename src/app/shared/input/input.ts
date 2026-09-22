import { Component, computed, input, model, output, signal } from '@angular/core';

export type TypeInput = 'text' | 'number' | 'password';

@Component({
  selector: 'ra-input',
  standalone: false,
  styleUrl: './input.css',
  templateUrl: './input.html',
})
export class InputComponent {
  test() {
    console.log('elemento focuseado', this.type());
  }
  test2() {
    console.log('elemento perdió foco', this.type());
  }
  test3() {
    console.log('Valor actual', this.value());
  }

  id = input<number>(0);

  value = model<any>();

  esDatoCorrecto = signal<boolean>(true);

  inputClass =
    'rounded-md shadow-md border border-yellow-300 font-black p-2 placeholder:text-gray-300';

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
