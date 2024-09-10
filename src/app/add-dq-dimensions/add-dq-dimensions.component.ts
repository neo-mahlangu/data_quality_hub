import { Component, OnInit } from '@angular/core';
import { DqHubService } from '../service/dq-hub.service';
import { DataQualityDefinition } from '../models/data-quality-definition.model';
import { ReferenceData } from '../models/reference-tables.model';
import { FormControl, FormGroup } from '@angular/forms';
import { ReferenceTable } from '../models/reference-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dq-dimensions',
  templateUrl: './add-dq-dimensions.component.html',
  styleUrls: ['./add-dq-dimensions.component.css']
})

export class AddDqDimensionsComponent implements OnInit {

  dataDimensions: ReferenceData[] = [];
  dataTables: ReferenceTable[] = [];
  addFormGroup!: FormGroup;
  progressBar = false;

  constructor(private _dqHubService :DqHubService, private _router: Router) {
      this._dqHubService.getReferenceData('1').subscribe(
        (response) => { this.dataDimensions = response; 
                        this.getRefDataTables();
                        console.log(response); },
        (error) => { console.log(error); });
   }

  ngOnInit(): void {
    this.addFormGroup = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      java: new FormControl(''),
      c: new FormControl(''),
      python: new FormControl(''),
      dimension: new FormControl(''),
      refDataTable: new FormControl('')
    });  
  }

 getRefDataTables(): void {
    this._dqHubService.getReferenceTables().subscribe(
    (response) => { this.dataTables = response; console.log(response); },
    (error) => { console.log(error); });
 }

 navigate() {
  this._router.navigate(["all-dq-definitions"],); }

  // this._router.navigate(['all-dq-definitions'], {
  //   state: {
  //     searchData: searchQuery,
  //   },
  // });

  addDqDimension(): void {

    this.progressBar =true;

    const dataQualityDefinition = new DataQualityDefinition();
    dataQualityDefinition.name =  this.addFormGroup.get('name')?.value;
    dataQualityDefinition.description =  this.addFormGroup.get('description')?.value;
    dataQualityDefinition.dimension =  this.addFormGroup.get('dimension')?.value;
    dataQualityDefinition.java =  this.addFormGroup.get('java')?.value;
    dataQualityDefinition.c =  this.addFormGroup.get('c')?.value;
    dataQualityDefinition.python =  this.addFormGroup.get('python')?.value;
    dataQualityDefinition.refDataTable = this.addFormGroup.get('refDataTable')?.value;

    this._dqHubService.addDQDimension(dataQualityDefinition).subscribe(
      (response) => { 
        console.log(response); 
        this.progressBar =false;
        this.navigate()
        },
      (error) => { console.log(error); });  
  }
}
