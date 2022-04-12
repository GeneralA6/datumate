import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvFileUploaderComponent } from './csv-file-uploader.component';

describe('FileInputComponent', () => {
  let component: CsvFileUploaderComponent;
  let fixture: ComponentFixture<CsvFileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvFileUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
