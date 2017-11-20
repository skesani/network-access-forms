import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedformComponent } from './updatedform.component';

describe('UpdatedformComponent', () => {
  let component: UpdatedformComponent;
  let fixture: ComponentFixture<UpdatedformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
