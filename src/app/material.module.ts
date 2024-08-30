import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [],
  exports: [MatInputModule, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule,MatCardModule, MatSelectModule]
})
export class MaterialModule {}

