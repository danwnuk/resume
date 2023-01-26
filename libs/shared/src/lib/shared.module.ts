import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { BodySectionHeaderComponent } from './layout/body-section-header/body-section-header.component';
import { ContentHeaderComponent } from './layout/content-header/content-header.component';
import { PanelSectionContentComponent } from './layout/panel-section-content/panel-section-content.component';
import { PanelSectionHeaderComponent } from './layout/panel-section-header/panel-section-header.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const components = [
  BodySectionHeaderComponent,
  ContentHeaderComponent,
  PanelSectionContentComponent,
  PanelSectionHeaderComponent,
  ProgressBarComponent
]
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatProgressBarModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class SharedModule {}
