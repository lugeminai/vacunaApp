import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consultapadron',
  templateUrl: './consultapadron.component.html',
  styleUrls: ['./consultapadron.component.scss']
})
export class ConsultapadronComponent implements OnInit {

  consultarForm = new FormGroup ({
    consultado: new FormGroup({
      dni :new FormControl('')
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

}
