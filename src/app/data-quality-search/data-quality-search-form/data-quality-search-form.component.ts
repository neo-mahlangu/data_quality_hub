import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReferenceTable } from 'src/app/models/reference-data.model';
import { ReferenceData } from 'src/app/models/reference-tables.model';
import { SearchDQDefinition } from 'src/app/models/search-data.model';
import { DqHubService } from 'src/app/service/dq-hub.service';

@Component({
  selector: 'app-data-quality-search-form',
  templateUrl: './data-quality-search-form.component.html',
  styleUrls: ['./data-quality-search-form.component.css']
})
export class DataQualitySearchFormComponent implements OnInit {

  dataDimensions: ReferenceData[] = [];
  searchFormGroup!: FormGroup;

  constructor(private _dqHubService :DqHubService,private _router: Router) {
    this._dqHubService.getReferenceData('1').subscribe(
      (response) => { this.dataDimensions = response; 
                      console.log(response); },
      (error) => { console.log(error); });
 }

  ngOnInit(): void {
    this.searchFormGroup = new FormGroup({
      name: new FormControl(''),
      dimension: new FormControl(''),
    });  
  }

  buttonClick() {
    // this._router.navigate(["all-dq-definitions"],);

    const searchQuery = new SearchDQDefinition();
    searchQuery.name =  this.searchFormGroup.get('name')?.value;
    searchQuery.dimension =  this.searchFormGroup.get('dimension')?.value;
    
    this._router.navigate(['all-dq-definitions'], {
      state: {
        searchData: searchQuery,
      },
    });

} 

}
