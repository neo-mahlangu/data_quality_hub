import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-api-validate-data',
  templateUrl: './api-validate-data.component.html',
  styleUrls: ['./api-validate-data.component.css']
})
export class ApiValidateDataComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
