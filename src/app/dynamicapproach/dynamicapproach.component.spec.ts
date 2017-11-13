import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicapproachComponent } from './dynamicapproach.component';

describe('DynamicapproachComponent', () => {
  let component: DynamicapproachComponent;
  let fixture: ComponentFixture<DynamicapproachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicapproachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicapproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
