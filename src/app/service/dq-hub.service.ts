import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReferenceData } from '../models/reference-tables.model';
import { ReferenceTable } from '../models/reference-data.model';
import { DataQualityDefinition } from '../models/data-quality-definition.model';
import { ValidateDQDefinition } from '../models/validate-data.model';
import { SearchDQDefinition } from '../models/validate-data.model copy';

@Injectable({
  providedIn: 'root'
})
export class DqHubService {
  
  constructor(private _httpClient: HttpClient) { }

  getDQDimensions1(){
    return this._httpClient.get('http://127.0.0.1:5000/dq-dimensions');
  }

  addDQDimension(dq : DataQualityDefinition ): Observable<string> {
    return <Observable<string>><unknown>this._httpClient.post('http://127.0.0.1:5000/add-dq-dimension',dq);
  }

  validateDQDimension(dq : ValidateDQDefinition ): Observable<string> {
    return <Observable<string>><unknown>this._httpClient.post('http://127.0.0.1:5000/validate-dq-dimension',dq);
  }

  getDQDimensions(search : SearchDQDefinition): Observable<DataQualityDefinition[]> {
    console.log(search)

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let params = new URLSearchParams();
    params.append("name", search?.name)
    params.append("dimension", search?.dimension)

    return <Observable<DataQualityDefinition[]>><unknown>this._httpClient.get('http://127.0.0.1:5000/dq-dimensions', {
      params: { ...search }
    });
  }

  getReferenceTables(): Observable<ReferenceTable[]> {
    return <Observable<ReferenceTable[]>>this._httpClient.get('http://127.0.0.1:5000/reference-tables');
  }

  getReferenceData(id:string): Observable<ReferenceData[]> {
    return <Observable<ReferenceData[]>>this._httpClient.get(`http://127.0.0.1:5000/reference-data/${id}`);
  }
}
