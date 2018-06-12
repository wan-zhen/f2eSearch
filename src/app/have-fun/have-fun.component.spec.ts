import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveFunComponent } from './have-fun.component';

describe('HaveFunComponent', () => {
  let component: HaveFunComponent;
  let fixture: ComponentFixture<HaveFunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveFunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
