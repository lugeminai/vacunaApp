import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consultalocal',
  templateUrl: './consultalocal.component.html',
  styleUrls: ['./consultalocal.component.scss']
})
export class ConsultalocalComponent implements OnInit {
  consultarLocalForm = new FormGroup ({
    consultado: new FormGroup({
      dni :new FormControl('')
    })
  });


  constructor() { }

  ngOnInit(): void {
  }

}
