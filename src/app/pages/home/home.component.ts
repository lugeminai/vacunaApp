import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
 registroForm = new FormGroup({
   registrado: new FormGroup({
    dni :new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    fechaNac: new FormControl (''),
    celular: new FormControl (''),
    ubigeo: new FormControl ('')
   })
    
 });


  constructor() { }

  ngOnInit(): void {
  }

}
