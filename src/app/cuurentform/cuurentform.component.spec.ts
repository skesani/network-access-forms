import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuurentformComponent } from './cuurentform.component';

describe('CuurentformComponent', () => {
  let component: CuurentformComponent;
  let fixture: ComponentFixture<CuurentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuurentformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuurentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
