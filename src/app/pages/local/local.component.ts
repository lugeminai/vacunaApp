import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  locals=[];
  constructor(private readonly localService: LocalService) {}

  getLocals(){
    this.localService.getLocal().subscribe((rest: any)=> {
      this.locals=rest.data;

    })
  }

  ngOnInit(): void {
    this.getLocals();
  }
}


