import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
personaForm = this.personaFB.group({
  persona: this.personaFB.group({
    dni: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    fechaNac: ['', Validators.required],
    celular: ['', Validators.required],
    ubigeo: ['', Validators.required]
  })
});

  constructor(private personaFB: FormBuilder) { }

  onSubmit(){
    console.log(this.personaForm.value)
  }

  ngOnInit(): void {
  }

}
