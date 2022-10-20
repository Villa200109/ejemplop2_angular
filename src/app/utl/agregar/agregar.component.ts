import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../services/utl.service';
import { UtlModule } from '../utl.module';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  // @Input() AlumnosUtl: AlumnosUtl[] = []; //el input trae datos del padre al hijo
  @Input() regAlum: AlumnosUtl = {
    nombre: '',
    edad: 0,
  };

  constructor(private utlservice: UtlService) {}

  // @Output() onNuevoAlumno: EventEmitter<AlumnosUtl> = new EventEmitter();

  agregar(): void {
    console.log(this.regAlum);
    // this.AlumnosUtl.push(this.regAlum);
    // this.onNuevoAlumno.emit(this.regAlum);
    this.utlservice.agregarNuevoAlumno(this.regAlum);
    this.regAlum = {
      nombre: '',
      edad: 0,
    };
  }
}
