import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PersonalInformationComponent } from './components/personal-information.component';
import { SkillsComponent } from './components/skills.component';
import { SoftwareComponent } from './components/software.component';
import { LanguagesComponent } from './components/languages.component';
import { ExperienceComponent } from './components/experience.component';
import { EducationComponent } from './components/education.component';
import { PersonalProjectsComponent } from './components/personal-projects.component';
import { InterestsComponent } from './components/interests.component';
import { PanelHeaderComponent } from './components/panel-header.component';
import { ContentHeaderComponent } from './components/content-header.component';

const components = [
  PersonalInformationComponent,
  SkillsComponent,
  SoftwareComponent,
  LanguagesComponent,
  ExperienceComponent,
  EducationComponent,
  PersonalProjectsComponent,
  InterestsComponent,
  PanelHeaderComponent,
  ContentHeaderComponent
];

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [...components],
  exports: [...components]
})
export class ResumeModule {}
