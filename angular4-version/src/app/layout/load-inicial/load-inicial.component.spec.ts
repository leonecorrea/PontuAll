import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadInicialComponent } from './load-inicial.component';

describe('LoadInicialComponent', () => {
  let component: LoadInicialComponent;
  let fixture: ComponentFixture<LoadInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
