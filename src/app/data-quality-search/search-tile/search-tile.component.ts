import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferenceTable } from 'src/app/models/reference-data.model';
import { ReferenceData } from 'src/app/models/reference-tables.model';
import { DqHubService } from 'src/app/service/dq-hub.service';

@Component({
  selector: 'app-search-tile',
  templateUrl: './search-tile.component.html',
  styleUrls: ['./search-tile.component.css']
})
export class SearchTileComponent implements OnInit {

  @Input()
  title!: string;

  @Input()
  icon!: string;

  @Input()
  path!: string;
  
  constructor(private _router: Router) {}

  ngOnInit(): void {

  }

  navigate() {
    this._router.navigate([this.path]);
} 
}
