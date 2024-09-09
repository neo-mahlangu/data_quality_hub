import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DqHubService } from '../service/dq-hub.service';
import { DataQualityDefinition } from '../models/data-quality-definition.model';
import { ReferenceTable } from '../models/reference-tables.model';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-dq-dimensions',
  templateUrl: './add-dq-dimensions.component.html',
  styleUrls: ['./add-dq-dimensions.component.css']
})
export class AddDqDimensionsComponent implements OnInit {
  refData!: ReferenceTable[];
  refData$!: Observable<ReferenceTable[]>;
  addFormGroup!: FormGroup;
  progressBar = false;

  constructor(private _dqHubService :DqHubService) {
    this._dqHubService.getReferenceTables().subscribe(
      (response) => { 
        this.refData = response; 
        this.Update(); 
        console.log(response); },
      (error) => { console.log(error); });
   }

  ngOnInit(): void {

    this.addFormGroup = new FormGroup({
      name: new FormControl('Sita'),
      description: new FormControl('tes'),
      java: new FormControl('test'),
      c: new FormControl('test'),
      python: new FormControl('test'),
      dimension: new FormControl('0'),
      // refDataTable: new FormControl('0')

    });

      // this._dqHubService.getReferenceTables().subscribe(
      //   (response) => { this.refData = response; console.log(response); },
      //   (error) => { console.log(error); });
  }


  Update() {
    this.addFormGroup.patchValue({
      refDataTable: 'Nancy',
    });
  }
  addDqDimension(): void {

    this.progressBar =true;
  
    const dataQualityDefinition = new DataQualityDefinition();
    dataQualityDefinition.name =  this.addFormGroup.get('name')?.value;
    dataQualityDefinition.description =  this.addFormGroup.get('description')?.value;
    dataQualityDefinition.dimension =  this.addFormGroup.get('dimension')?.value;
    dataQualityDefinition.java =  this.addFormGroup.get('java')?.value;
    dataQualityDefinition.c =  this.addFormGroup.get('c')?.value;
    dataQualityDefinition.python =  this.addFormGroup.get('python')?.value;
    // this.dataQualityDefinition.refDataTable = this.addFormGroup.get('refDataTable')?.value;

    this._dqHubService.addDQDimension(dataQualityDefinition).subscribe(
      (response) => { console.log(response); this.progressBar =false; },
      (error) => { console.log(error); });  
  }
}
