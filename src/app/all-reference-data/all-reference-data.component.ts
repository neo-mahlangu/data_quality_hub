import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DqHubService } from '../service/dq-hub.service';
import { ReferenceTable } from '../models/reference-data.model';



@Component({
  selector: 'app-all-reference-data',
  templateUrl: './all-reference-data.component.html',
  styleUrls: ['./all-reference-data.component.css']
})

export class AllReferenceDataComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'description','actions'];
  data: any;
  dataSource: ReferenceTable[] = [];

  constructor(private _router: Router,private _dqHubService :DqHubService) { }


  ngOnInit(): void {
    const d = history.state.searchData;
    console.log(d);

    this._dqHubService.getReferenceTables().subscribe(
      (response) => { this.dataSource = response; console.log(d); },
      (error) => { console.log(error); });
  }

  navigate(selectedId: string) {
    // this._router.navigate(["view-reference-data"],);

    this._router.navigate(['view-reference-data'], {
      state: {
        someData: selectedId,
      },
    });
} 

}
