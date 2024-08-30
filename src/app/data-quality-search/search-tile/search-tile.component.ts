import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
