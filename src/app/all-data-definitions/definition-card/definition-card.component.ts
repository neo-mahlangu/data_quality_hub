import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-definition-card',
  templateUrl: './definition-card.component.html',
  styleUrls: ['./definition-card.component.css']
})
export class DefinitionCardComponent implements OnInit {

  @Input()
  displayTab!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
