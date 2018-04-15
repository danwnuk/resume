import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SectionHeaderComponent } from './components/section-header.component';
import { SectionContentComponent } from './components/section-content.component';
import { BodySectionHeaderComponent } from './components/body-section-header.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [SectionHeaderComponent, SectionContentComponent, BodySectionHeaderComponent],
  exports: [SectionHeaderComponent, SectionContentComponent, BodySectionHeaderComponent]
})
export class SharedModule {}
