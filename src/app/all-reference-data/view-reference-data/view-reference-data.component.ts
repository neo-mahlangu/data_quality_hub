import { Component, OnInit } from '@angular/core';
import { ReferenceData } from 'src/app/models/reference-data.model';
import { DqHubService } from 'src/app/service/dq-hub.service';


const ELEMENT_DATA: ReferenceData[] = [];

@Component({
  selector: 'app-view-reference-data',
  templateUrl: './view-reference-data.component.html',
  styleUrls: ['./view-reference-data.component.css']
})
export class ViewReferenceDataComponent implements OnInit {


  displayedColumns: string[] = [ 'code', 'value'];
  dataSource = ELEMENT_DATA;

  constructor(private _dqHubService :DqHubService) { }



  ngOnInit(): void {
    this._dqHubService.getReferenceData().subscribe(
      (response) => { this.dataSource = response; console.log(response); },
      (error) => { console.log(error); });
  }

}
