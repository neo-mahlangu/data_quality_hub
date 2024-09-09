import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { DataQualitySearchComponent } from './data-quality-search/data-quality-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DataQualitySearchFormComponent } from './data-quality-search/data-quality-search-form/data-quality-search-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchTileComponent } from './data-quality-search/search-tile/search-tile.component';
import { AddDqDimensionsComponent } from './add-dq-dimensions/add-dq-dimensions.component';
import { ValidateDqDimensionsComponent } from './validate-dq-dimensions/validate-dq-dimensions.component';
import { ApiInterfaceComponent } from './api-interface/api-interface.component';
import { ApiValidateDataComponent } from './api-interface/api-validate-data/api-validate-data.component';
import { ApiStaticDataComponent } from './api-interface/api-static-data/api-static-data.component';
import { AllReferenceDataComponent } from './all-reference-data/all-reference-data.component';
import { AllDataDefinitionsComponent } from './all-data-definitions/all-data-definitions.component';
import { DefinitionCardComponent } from './all-data-definitions/definition-card/definition-card.component';
import { ViewReferenceDataComponent } from './all-reference-data/view-reference-data/view-reference-data.component';
import { ViewDataDefinitionComponent } from './all-data-definitions/view-data-definition/view-data-definition.component';
import { HttpClientModule } from  '@angular/common/http';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DataQualitySearchComponent,
    DataQualitySearchFormComponent,
    SearchTileComponent,
    AddDqDimensionsComponent,
    ValidateDqDimensionsComponent,
    ApiInterfaceComponent,
    ApiStaticDataComponent,
    ApiValidateDataComponent,
    AllReferenceDataComponent,
    AllDataDefinitionsComponent,
    DefinitionCardComponent,
    ViewReferenceDataComponent,
    ViewDataDefinitionComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
