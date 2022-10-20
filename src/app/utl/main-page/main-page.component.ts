import { Component } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  /* alumnosUtl: AlumnosUtl[] = [
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
  ]; */

  regAlum: AlumnosUtl = {
    nombre: 'mario',
    edad: 24,
  };

  // constructor(private UtlService: UtlService) {}
  constructor() {}

  /* agregarNuevoAlumno(argumento: AlumnosUtl) {
    this.alumnosUtl.push(argumento);
    this.UtlService.muestra();
  } */
}
