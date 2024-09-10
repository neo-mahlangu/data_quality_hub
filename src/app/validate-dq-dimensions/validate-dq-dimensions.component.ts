import { Component, OnInit } from '@angular/core';
import { DqHubService } from '../service/dq-hub.service';
import { ValidateDQDefinition } from '../models/validate-data.model';
import { FormControl, FormGroup } from '@angular/forms';
import { DataQualityDefinition } from '../models/data-quality-definition.model';

@Component({
  selector: 'app-validate-dq-dimensions',
  templateUrl: './validate-dq-dimensions.component.html',
  styleUrls: ['./validate-dq-dimensions.component.css']
})
export class ValidateDqDimensionsComponent implements OnInit {

  validateFormGroup!: FormGroup;
  constructor(private _dqHubService :DqHubService) { }
  progressBar = false;

  dataQualityDefinitions!: DataQualityDefinition[];
  

  ngOnInit(): void {

    this.validateFormGroup = new FormGroup({
      data: new FormControl('Sita'),
      dqDefinition: new FormControl('tes'),
    });

       this._dqHubService.getDQDimensions(history.state.searchData).subscribe(
      (response) => { this.dataQualityDefinitions = response; console.log(response); },
      (error) => { console.log(error); });

  }

  validateData(): void {

    this.progressBar =true;
  
    const dataQualityDefinition = new ValidateDQDefinition();
    dataQualityDefinition.data =  this.validateFormGroup.get('data')?.value;
    dataQualityDefinition.id =  this.validateFormGroup.get('dqDefinition')?.value;

    this._dqHubService.validateDQDimension(dataQualityDefinition).subscribe(
      (response) => { console.log(response); this.progressBar=false; },
      (error) => { console.log(error); });  
  }
}

