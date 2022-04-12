import { Injectable } from '@angular/core';
import { CsvFileData } from '../csv-file-uploader/csv-file-uploader.component';

@Injectable({
  providedIn: 'root'
})
export class GcpStoreService {
  csvFiles: CsvFileData[] = [];

  constructor() { }

  addGcpFileData(csvFileData: CsvFileData) {
    this.csvFiles.push(csvFileData);
    console.log(this.csvFiles);
  }
}
