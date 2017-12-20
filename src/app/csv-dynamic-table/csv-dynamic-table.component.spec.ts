import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvDynamicTableComponent } from './csv-dynamic-table.component';

describe('CsvDynamicTableComponent', () => {
  let component: CsvDynamicTableComponent;
  let fixture: ComponentFixture<CsvDynamicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvDynamicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
