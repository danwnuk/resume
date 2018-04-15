import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from './components/section-header.component';
import { SectionContentComponent } from './components/section-content.component';
import { BodySectionHeaderComponent } from './components/body-section-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SectionHeaderComponent, SectionContentComponent, BodySectionHeaderComponent],
  exports: [SectionHeaderComponent, SectionContentComponent, BodySectionHeaderComponent]
})
export class SharedModule {}
