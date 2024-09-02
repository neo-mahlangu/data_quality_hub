import { Component, Input, OnInit } from '@angular/core';
import { DataQualityDefinition } from 'src/app/models/data-quality-definition.model';

@Component({
  selector: 'app-definition-card',
  templateUrl: './definition-card.component.html',
  styleUrls: ['./definition-card.component.css']
})
export class DefinitionCardComponent implements OnInit {

  @Input()
  displayTab!: boolean;

  @Input()
  dataQualityDefinitions!: DataQualityDefinition;
  
  constructor() { }

  ngOnInit(): void {
  }

}
