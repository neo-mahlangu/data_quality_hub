import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/api-interface/api-validate-data/api-validate-data.component';


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
];

@Component({
  selector: 'app-view-reference-data',
  templateUrl: './view-reference-data.component.html',
  styleUrls: ['./view-reference-data.component.css']
})
export class ViewReferenceDataComponent implements OnInit {


  displayedColumns: string[] = [ 'name', 'description'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
