import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-quality-search-form',
  templateUrl: './data-quality-search-form.component.html',
  styleUrls: ['./data-quality-search-form.component.css']
})
export class DataQualitySearchFormComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  buttonClick() {
    this._router.navigate(["all-dq-definitions"]);
} 

}
