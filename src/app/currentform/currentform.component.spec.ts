import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentformComponent } from './currentform.component';

describe('CurrentformComponent', () => {
  let component: CurrentformComponent;
  let fixture: ComponentFixture<CurrentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
