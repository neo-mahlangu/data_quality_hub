import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    // this.router(path);
    // this.router.canActivate;
    this._router.navigate([this.path]);
    // this._router.navigateByUrl(this.path);
} 

}
