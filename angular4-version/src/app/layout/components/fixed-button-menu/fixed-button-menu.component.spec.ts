import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedButtonMenuComponent } from './fixed-button-menu.component';

describe('FixedButtonMenuComponent', () => {
  let component: FixedButtonMenuComponent;
  let fixture: ComponentFixture<FixedButtonMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedButtonMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
