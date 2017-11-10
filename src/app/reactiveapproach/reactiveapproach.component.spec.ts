import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveapproachComponent } from './reactiveapproach.component';

describe('ReactiveapproachComponent', () => {
  let component: ReactiveapproachComponent;
  let fixture: ComponentFixture<ReactiveapproachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveapproachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveapproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
