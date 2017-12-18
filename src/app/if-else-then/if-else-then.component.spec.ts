import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseThenComponent } from './if-else-then.component';

describe('IfElseThenComponent', () => {
  let component: IfElseThenComponent;
  let fixture: ComponentFixture<IfElseThenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfElseThenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfElseThenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
