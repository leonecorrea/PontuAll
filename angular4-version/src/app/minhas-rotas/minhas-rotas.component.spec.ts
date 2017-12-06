import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasRotasComponent } from './minhas-rotas.component';

describe('MinhasRotasComponent', () => {
  let component: MinhasRotasComponent;
  let fixture: ComponentFixture<MinhasRotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasRotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
