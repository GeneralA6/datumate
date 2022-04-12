import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { NgxCsvParserModule } from 'ngx-csv-parser';

import { AppComponent } from './app.component';
import { CsvFileUploaderComponent } from './csv-file-uploader/csv-file-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvFileUploaderComponent
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
