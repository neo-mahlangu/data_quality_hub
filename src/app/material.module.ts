import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [],
  imports: [],
  exports: [MatInputModule, 
    MatToolbarModule, MatButtonModule, MatIconModule, 
    MatFormFieldModule,MatCardModule, 
    MatSelectModule,MatTabsModule,MatTableModule,MatChipsModule,MatChipsModule]
})
export class MaterialModule {}

