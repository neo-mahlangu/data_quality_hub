import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DqHubService } from '../service/dq-hub.service';
import { Observable } from 'rxjs';
import { DataQualityDefinition } from '../models/data-quality-definition.model';

@Component({
  selector: 'app-all-data-definitions',
  templateUrl: './all-data-definitions.component.html',
  styleUrls: ['./all-data-definitions.component.css']
})
export class AllDataDefinitionsComponent implements OnInit {

  // data$: Observable<any> | undefined;
  dataQualityDefinitions!: DataQualityDefinition[];
  constructor(private _router: Router, private _dqHubService :DqHubService) { }

  ngOnInit(): void {
    // this.data$ = this._dqHubService.getDQDimensions();
    const d = history.state.someData;

    this._dqHubService.getDQDimensions().subscribe(
      (response) => { this.dataQualityDefinitions = response; console.log(response); },
      (error) => { console.log(error); });
  }

  navigate(selected:DataQualityDefinition) {
    // this._router.navigate(["view-data-definition"],);
    // this._router.navigate(['SecondComponent', selected]);

    this._router.navigate(['view-data-definition'], {
      state: {
        someData: selected,
      },
    });

} 

}
