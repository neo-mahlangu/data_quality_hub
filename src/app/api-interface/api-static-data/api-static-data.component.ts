import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../api-validate-data/api-validate-data.component';

@Component({
  selector: 'app-api-static-data',
  templateUrl: './api-static-data.component.html',
  styleUrls: ['./api-static-data.component.css']
})
export class ApiStaticDataComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
