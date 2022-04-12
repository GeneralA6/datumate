import { Component, Input, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { GcpData } from '../csv-file-uploader/csv-file-uploader.component';

@Component({
  selector: 'app-gcp-grid',
  templateUrl: './gcp-grid.component.html',
  styleUrls: ['./gcp-grid.component.scss']
})
export class GcpGridComponent implements OnInit {
  defaultColDef: ColDef = {
    filter: true,
    sortable: true,
  };
  columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'n' },
    { field: 'e' },
    { field: 'h' }
  ];
  rowData = [{}];
  @Input() set gcpData(data: GcpData[]) {
    this.rowData = data;
  };

  constructor() { }

  ngOnInit(): void {}
}
