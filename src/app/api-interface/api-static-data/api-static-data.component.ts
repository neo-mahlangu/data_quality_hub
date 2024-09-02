import { Component, OnInit } from '@angular/core';


export interface Request {
  table_name: string;
}

export interface Response {
  code: string;
  value: string;
}

@Component({
  selector: 'app-api-static-data',
  templateUrl: './api-static-data.component.html',
  styleUrls: ['./api-static-data.component.css']
})
export class ApiStaticDataComponent implements OnInit {

  request: Request = {table_name: "static_emails"};
;
  
  response: Response[] = [
    {code: "1", value: 'Hydrogen'},
    {code: "2", value: 'Helium'},
    {code: "3", value: 'Lithium'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
