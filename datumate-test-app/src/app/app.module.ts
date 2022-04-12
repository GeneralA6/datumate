import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { NgxCsvParserModule } from 'ngx-csv-parser';

import { AppComponent } from './app.component';
import { FileInputComponent } from './csv-file-uploader/csv-file-uploader.component';
import { FileRecordComponent } from './file-record/file-record.component';
import { FileRecordsListComponent } from './file-records-list/file-records-list.component';
import { GcpGridComponent } from './gcp-grid/gcp-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    FileInputComponent,
    FileRecordComponent,
    FileRecordsListComponent,
    GcpGridComponent
  ],
  imports: [
    BrowserModule,
    NgxCsvParserModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
