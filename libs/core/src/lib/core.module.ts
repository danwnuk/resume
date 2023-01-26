import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class CoreModule {}
