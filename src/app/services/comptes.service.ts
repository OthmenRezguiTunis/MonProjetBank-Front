import { Injectable } from '@angular/core';
import { Compte } from '../domain/compte';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  constructor(private _http: HttpClient) { }

  getAllComptes():    Observable Compte[] {


// return [
//   {'numero' : 'SSFake001', proprietaire: 'FakeProprio1' , 'solde': 1111},
//   {'numero' : 'Fake002', proprietaire: 'FakeProprio2' , 'solde': 1111},
//   {'numero' : 'Fake003', proprietaire: 'FakeProprio3' , 'solde': 1111},
//   {'numero' : 'Fake004', proprietaire: 'FakeProprio4' , 'solde': 1111}
// ];


  }
}
