import { Component, Input, OnInit } from '@angular/core';
import { ReferenceData } from 'src/app/models/reference-tables.model';
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

 @Input()
  id!: string;

  constructor(private _dqHubService :DqHubService) { 

    // if(!this.id){
    //   this.id = history.state.someData;
    // }

      // console.log(this.id)
      // this._dqHubService.getReferenceData(this.id).subscribe(
      //   (response) => { this.dataSource = response; console.log(response); },
      //   (error) => { console.log(error); });
  }



  ngOnInit(): void {
    console.log(this.id)
    if(!this.id){
        this.id = history.state.someData;
      }
    this._dqHubService.getReferenceData(this.id).subscribe(
      (response) => { this.dataSource = response; console.log(response); },
      (error) => { console.log(error); });
  }

}
