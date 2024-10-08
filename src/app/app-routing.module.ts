import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDqDimensionsComponent } from './add-dq-dimensions/add-dq-dimensions.component';
import { DataQualitySearchComponent } from './data-quality-search/data-quality-search.component';
import { AppComponent } from './app.component';
import { ValidateDqDimensionsComponent } from './validate-dq-dimensions/validate-dq-dimensions.component';
import { ApiInterfaceComponent } from './api-interface/api-interface.component';
import { AllReferenceDataComponent } from './all-reference-data/all-reference-data.component';
import { AllDataDefinitionsComponent } from './all-data-definitions/all-data-definitions.component';
import { ViewReferenceDataComponent } from './all-reference-data/view-reference-data/view-reference-data.component';
import { ViewDataDefinitionComponent } from './all-data-definitions/view-data-definition/view-data-definition.component';

const routes: Routes = [
  {
    path: "validate-dq-definition",
    component: ValidateDqDimensionsComponent},
  
  {
  path: "add-dq-definition",
  component: AddDqDimensionsComponent},
  {
    path: "",
    component: DataQualitySearchComponent},
    {
      path: "api-interface",
      component: ApiInterfaceComponent},
     {
      path: "reference-data",
      component: AllReferenceDataComponent},
      {
        path: "all-dq-definitions",
        component: AllDataDefinitionsComponent},
        {
          path: "view-reference-data",
          component: ViewReferenceDataComponent},

          {
            path: "view-data-definition",
            component: ViewDataDefinitionComponent},
      ];

      
          
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
