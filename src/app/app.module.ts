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
import { AddDqDimensionComponent } from './tiles-view/add-dq-dimension/add-dq-dimension.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DataQualitySearchComponent,
    DataQualitySearchFormComponent,
    SearchTileComponent,
    AddDqDimensionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
