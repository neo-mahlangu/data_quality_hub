import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDqDimensionsComponent } from './add-dq-dimensions/add-dq-dimensions.component';
import { DataQualitySearchComponent } from './data-quality-search/data-quality-search.component';
import { AppComponent } from './app.component';
import { ValidateDqDimensionsComponent } from './validate-dq-dimensions/validate-dq-dimensions.component';
import { ApiInterfaceComponent } from './api-interface/api-interface.component';

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
      component: ApiInterfaceComponent},];


    ValidateDqDimensionsComponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
