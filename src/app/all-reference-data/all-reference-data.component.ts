import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../api-interface/api-validate-data/api-validate-data.component';
import { Router } from '@angular/router';


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
];


@Component({
  selector: 'app-all-reference-data',
  templateUrl: './all-reference-data.component.html',
  styleUrls: ['./all-reference-data.component.css']
})

export class AllReferenceDataComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'description','actions'];
  dataSource = ELEMENT_DATA;

  constructor(private _router: Router) { }


  ngOnInit(): void {
  }

  navigate() {
    this._router.navigate(["view-reference-data"]);
} 

}
