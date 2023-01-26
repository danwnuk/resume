import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSectionHeaderComponent } from './panel-section-header.component';

describe('SectionHeaderComponent', () => {
  let component: PanelSectionHeaderComponent;
  let fixture: ComponentFixture<PanelSectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
