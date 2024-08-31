import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-data-definitions',
  templateUrl: './all-data-definitions.component.html',
  styleUrls: ['./all-data-definitions.component.css']
})
export class AllDataDefinitionsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this._router.navigate(["view-data-definition"]);
} 

}
