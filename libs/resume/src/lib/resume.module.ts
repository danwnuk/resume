import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@resume/shared';

import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SkillsComponent } from './skills/skills.component';
import { SoftwareComponent } from './software/software.component';
import { LanguagesComponent } from './languages/languages.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { BodyHeaderComponent } from './body-header/body-header.component';

const components = [
  PersonalInformationComponent,
  SkillsComponent,
  SoftwareComponent,
  LanguagesComponent,
  ExperienceComponent,
  EducationComponent,
  PersonalProjectsComponent,
  PanelHeaderComponent,
  BodyHeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  
    SharedModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class ResumeModule {}
