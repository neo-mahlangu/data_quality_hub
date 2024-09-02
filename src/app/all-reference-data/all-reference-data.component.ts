import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DqHubService } from '../service/dq-hub.service';
import { ReferenceTable } from '../models/reference-tables.model';


// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
// ];


@Component({
  selector: 'app-all-reference-data',
  templateUrl: './all-reference-data.component.html',
  styleUrls: ['./all-reference-data.component.css']
})

export class AllReferenceDataComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'description','actions'];
  data: any;
  ELEMENT_DATA: ReferenceTable[] = [];
  dataSource = this.ELEMENT_DATA;

  constructor(private _router: Router,private _dqHubService :DqHubService) { }


  ngOnInit(): void {
    const d = history.state.someData;
    this._dqHubService.getReferenceTables().subscribe(
      (response) => { this.dataSource = response; console.log(response); },
      (error) => { console.log(error); });
  }

  navigate() {
    this._router.navigate(["view-reference-data"]);
} 

}
