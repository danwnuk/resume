import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySectionHeaderComponent } from './body-section-header.component';

describe('BodySectionHeaderComponent', () => {
  let component: BodySectionHeaderComponent;
  let fixture: ComponentFixture<BodySectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
