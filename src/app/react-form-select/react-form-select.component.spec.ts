import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormSelectComponent } from './react-form-select.component';

describe('ReactFormSelectComponent', () => {
  let component: ReactFormSelectComponent;
  let fixture: ComponentFixture<ReactFormSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactFormSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
