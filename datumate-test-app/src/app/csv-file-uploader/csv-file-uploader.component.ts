import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { catchError, EMPTY, Observable } from 'rxjs';

export interface CsvFileData {
  name: string;
  data: any[];
}

@Component({
  selector: 'app-csv-file-uploader',
  templateUrl: './csv-file-uploader.component.html',
  styleUrls: ['./csv-file-uploader.component.scss']
})
export class FileInputComponent {
  @Output() load = new EventEmitter<CsvFileData>();

  @ViewChild('inputElement') inputElement!: ElementRef;

  constructor(private readonly ngxCsvParser: NgxCsvParser) { }

  uploadCsv($event: any): void {
    const files: FileList = $event.target.files;
    const file = files[0];

    this.parseCsvFile(file).subscribe((csvContent) => {
      const csvFileData: CsvFileData = { name: file.name, data: csvContent as any[] };
      this.load.emit(csvFileData);
    });
  }

  openFileDialog() {
    this.inputElement?.nativeElement.click();
  }

  private parseCsvFile(csvFile: File): Observable<any[] | NgxCSVParserError> {
    return this.ngxCsvParser.parse(csvFile, { header: true, delimiter: ',' }).pipe(
       catchError((error: NgxCSVParserError) => {
         console.log('Error', error);
         // TODO: handle errors
         return EMPTY;
       })
    );
  }
}
