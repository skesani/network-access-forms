import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkaccessComponent } from './networkaccess.component';

describe('NetworkaccessComponent', () => {
  let component: NetworkaccessComponent;
  let fixture: ComponentFixture<NetworkaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
