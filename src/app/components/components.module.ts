import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { IncrementarComponent } from './incrementar/incrementar.component';
import { DonaComponent } from './dona/dona.component';



@NgModule({
  declarations: [
    IncrementarComponent,
    DonaComponent
  ],
  exports: [
    IncrementarComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
  ]
})
export class ComponentsModule { }
