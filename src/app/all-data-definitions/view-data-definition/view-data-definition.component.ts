import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataQualityDefinition } from 'src/app/models/data-quality-definition.model';

@Component({
  selector: 'app-view-data-definition',
  templateUrl: './view-data-definition.component.html',
  styleUrls: ['./view-data-definition.component.css']
})
export class ViewDataDefinitionComponent implements OnInit {

  constructor(private _router: Router) { 
    // this.dataFromRoute = this._router.getCurrentNavigation().extras.state?.['someData'];
    // this.name = this._router.getCurrentNavigation().extras.state.someData;

  }


  @Input()
  dataQualityDefinition!: DataQualityDefinition;

  refTableId!: string;

  ngOnInit(): void {
    this.dataQualityDefinition = history.state.someData;
    this.refTableId = this.dataQualityDefinition.refDataTable
    //  console.log(this.dataQualityDefinition)
    
  }
}
