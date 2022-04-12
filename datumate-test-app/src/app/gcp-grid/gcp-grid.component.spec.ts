import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpGridComponent } from './gcp-grid.component';

describe('GcpGridComponent', () => {
  let component: GcpGridComponent;
  let fixture: ComponentFixture<GcpGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcpGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcpGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
