import { Component, OnInit } from '@angular/core';
import { Compte } from '../domain/compte';
import { ComptesService } from '../services/comptes.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  data: Compte[];

  constructor(public _service: ComptesService) { }

  ngOnInit() {

 this.data = this._service.getAllComptes() ;
  }

}
