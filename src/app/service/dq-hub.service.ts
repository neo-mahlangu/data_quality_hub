import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReferenceTable } from '../models/reference-tables.model';
import { ReferenceData } from '../models/reference-data.model';
import { DataQualityDefinition } from '../models/data-quality-definition.model';
import { ValidateDQDefinition } from '../models/validate-data.model';

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

  getDQDimensions(): Observable<DataQualityDefinition[]> {
    return <Observable<DataQualityDefinition[]>>this._httpClient.get('http://127.0.0.1:5000/dq-dimensions');
  }

  getReferenceTables(): Observable<ReferenceTable[]> {
    return <Observable<ReferenceTable[]>>this._httpClient.get('http://127.0.0.1:5000/reference-tables');
  }

  getReferenceData(id:string): Observable<ReferenceData[]> {
    return <Observable<ReferenceData[]>>this._httpClient.get(`http://127.0.0.1:5000/reference-data/${id}`);
  }
}
