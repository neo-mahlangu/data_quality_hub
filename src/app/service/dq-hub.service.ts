import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReferenceData } from '../models/reference-tables.model';
import { ReferenceTable } from '../models/reference-data.model';
import { DataQualityDefinition } from '../models/data-quality-definition.model';
import { ValidateDQDefinition } from '../models/validate-data.model';
import { SearchDQDefinition } from '../models/search-data.model';
import { ValigateResponse } from '../models/validate-response.model';

@Injectable({
  providedIn: 'root'
})
export class DqHubService {
  
  url = 'http://127.0.0.1:5000/';
  constructor(private _httpClient: HttpClient) { }

  getDQDimensions1(){
    return this._httpClient.get(this.url+'dq-dimensions');
  }

  addDQDimension(dq : DataQualityDefinition ): Observable<string> {
    return <Observable<string>><unknown>this._httpClient.post(this.url+'add-dq-dimension',dq);
  }

  validateDQDimension(dq : ValidateDQDefinition ): Observable<ValigateResponse> {
    return <Observable<ValigateResponse>><unknown>this._httpClient.post(this.url+'validate-dq-dimension',dq);
  }

  getDQDimensions(search : SearchDQDefinition): Observable<DataQualityDefinition[]> {
    console.log(search)

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let params = new URLSearchParams();
    params.append("name", search?.name)
    params.append("dimension", search?.dimension)

    return <Observable<DataQualityDefinition[]>><unknown>this._httpClient.get(this.url+'dq-dimensions', {
      params: { ...search }
    });
  }

  getReferenceTables(): Observable<ReferenceTable[]> {
    return <Observable<ReferenceTable[]>>this._httpClient.get(this.url+'reference-tables');
  }

  getReferenceData(id:string): Observable<ReferenceData[]> {
    return <Observable<ReferenceData[]>>this._httpClient.get(`${this.url}reference-data/${id}`);
  }
}
