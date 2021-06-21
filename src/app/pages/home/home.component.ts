import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
personaForm = this.personaFB.group({
  persona: this.personaFB.group({
    dni: [''],
    nombre: [''],
    apellido: [''],
    fechaNac: [''],
    celular: [''],
    ubigeo: ['']
  })
});

  constructor(private personaFB: FormBuilder) { }

  ngOnInit(): void {
  }

}
