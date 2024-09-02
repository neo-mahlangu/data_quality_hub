import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReferenceTable } from '../models/reference-tables.model';
import { ReferenceData } from '../models/reference-data.model';
import { DataQualityDefinition } from '../models/data-quality-definition.model';

@Injectable({
  providedIn: 'root'
})
export class DqHubService {
  
  constructor(private _httpClient: HttpClient) { }

  getDQDimensions1(){
    // return this.http.get('https://dummyjson.com/users');

    return this._httpClient.get('http://127.0.0.1:5000/dq-dimensions');
  
  }

  getDQDimensions(): Observable<DataQualityDefinition[]> {
    return <Observable<DataQualityDefinition[]>>this._httpClient.get('http://127.0.0.1:5000/dq-dimensions');
  }

  getReferenceTables(): Observable<ReferenceTable[]> {
    return <Observable<ReferenceTable[]>>this._httpClient.get('http://127.0.0.1:5000/reference-tables');
  }

  getReferenceData(): Observable<ReferenceData[]> {
    return <Observable<ReferenceData[]>>this._httpClient.get('http://127.0.0.1:5000/reference-data/1');
  }
}
