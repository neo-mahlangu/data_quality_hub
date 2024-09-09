import { Component, OnInit } from '@angular/core';
import { DqHubService } from '../service/dq-hub.service';
import { ReferenceTable } from '../models/reference-data.model';
import { ReferenceData } from '../models/reference-tables.model';

@Component({
  selector: 'app-data-quality-search',
  templateUrl: './data-quality-search.component.html',
  styleUrls: ['./data-quality-search.component.css']
})
export class DataQualitySearchComponent implements OnInit {

  dataDimension$: ReferenceTable[] = [];
  refTables: ReferenceTable[] = [];
  
  constructor(private _dqHubService :DqHubService) {

    // this._dqHubService.getReferenceTables().subscribe(
    //   (response) => { 
    //     this.refTables = response; 
    //     console.log(response); },
    //   (error) => { console.log(error); });

    //   this._dqHubService.getReferenceData('1').subscribe(
    //     (response) => { this.dataDimension$ = response; console.log(response); },
    //     (error) => { console.log(error); });
   }

  ngOnInit(): void {
  }

}
