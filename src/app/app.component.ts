import { Component } from '@angular/core';

@Component({
  selector: 'main', // id de balise que j injecte en index .html 
 // templateUrl: './app.component.html',
 template : '<h5> Asslama {{title}} dans Angular</h5>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ODDO_BHF_Tunis';
}
