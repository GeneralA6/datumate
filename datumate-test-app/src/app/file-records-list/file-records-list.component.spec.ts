import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileRecordsListComponent } from './file-records-list.component';

describe('FileRecordsListComponent', () => {
  let component: FileRecordsListComponent;
  let fixture: ComponentFixture<FileRecordsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileRecordsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileRecordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
