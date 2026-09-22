import { Component, effect, model, viewChild, viewChildren } from '@angular/core';
import { InputComponent, TypeInput } from '../../shared/input/input';

@Component({
  selector: 'ra-login',
  standalone: false,
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class LoginComponent {
  inputType = model<TypeInput>('text');

  test = model('');

  inputs = viewChildren(InputComponent);

  formulario: { type: TypeInput; placeholder: string; label: string; valor: any }[] = [
    { type: 'text', placeholder: 'Ingrese usuario', label: 'Usuario', valor: '' },
    { type: 'password', placeholder: 'Ingrese contraseña', label: 'Contraseña', valor: '' },
    { type: 'number', placeholder: 'Ingrese edad', label: 'Edad', valor: 20 },
    { type: 'number', placeholder: 'Ingrese edad', label: 'Edad', valor: 20 },
    { type: 'number', placeholder: 'Ingrese edad', label: 'Edad', valor: 20 },
    { type: 'number', placeholder: 'Ingrese edad', label: 'Edad', valor: 20 },
    { type: 'number', placeholder: 'Ingrese edad', label: 'Edad', valor: 20 },
    { type: 'number', placeholder: 'Ingrese edad', label: 'Edad', valor: 20 },
    { type: 'number', placeholder: 'Ingrese edad', label: 'Edad', valor: 20 },
    { type: 'number', placeholder: 'Ingrese edad', label: 'Edad', valor: 20 },
    { type: 'number', placeholder: 'Ingrese edad', label: 'Edad', valor: 20 },
  ];

  login() {
    this.inputs()[0]; //=> username
    this.inputs()[1]; //=> password

    this.inputs().forEach((input) => {
      console.log(input.id(), input.value());
    });
  }

  constructor() {
    effect(() => {
      console.log('cambio un signal');
      // => consultas a la API
      // => re calcular valores
    });
  }
}
