import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';

@Injectable({
  providedIn: 'root',
})
export class UtlService {
  private _alumnosUtl: AlumnosUtl[] = [
    {
      nombre: 'Mario',
      edad: 22,
    },
    {
      nombre: 'Fabian',
      edad: 25,
    },
    {
      nombre: 'carlos',
      edad: 24,
    },
  ];

  get alumnos(): AlumnosUtl[] {
    return [...this._alumnosUtl]; //separacion de variables, romper referencia al objeto
  }

  constructor() {}

  agregarNuevoAlumno(argumento: AlumnosUtl) {
    this._alumnosUtl.push(argumento);
  }

  muestra() {
    console.log('nombre');
  }
}
