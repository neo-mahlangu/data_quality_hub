import { Component, OnInit } from '@angular/core';


export interface Request {
  name: string;
  value: string;
}

export interface Response {
  name: string;
  value: string;
  expression:string;
  results: string;
}


@Component({
  selector: 'app-api-validate-data',
  templateUrl: './api-validate-data.component.html',
  styleUrls: ['./api-validate-data.component.css']
})
export class ApiValidateDataComponent implements OnInit {

  ELEMENT_DATA: Request[] = [
    { name: 'Name', value: "siyabonga"},
    { name: 'Email', value: "siya.dlamini@standardbank.co.za"},
    {name: 'Id', value: "95124387374"}
  ];

  response: Response[] = [
    {
      name: 'Name', value: "siyabonga",
      expression: 'wrwtr 4546',
      results: 'Fail'
    },
    {
      name: 'Email', value: "siya.dlamini@standardbank.co.za",
      expression: "Address EXISTS AND len(trim(Address)) <> 0",
      results: 'Pass'
    },
    {
      name: 'Id', value: "95124387374",
      expression: "Address EXISTS AND len(trim(Address)) <> 0",
      results: 'Pass'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
