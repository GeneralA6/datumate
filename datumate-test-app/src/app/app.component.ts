import { Component } from '@angular/core';
import { CsvFileData } from './csv-file-uploader/csv-file-uploader.component';
import { GcpStoreService } from './gcp-store/gcp-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly gcpStoreService: GcpStoreService) {}

  loadCsvFileData(csvFileData: CsvFileData) {
    this.gcpStoreService.addGcpFileData(csvFileData);
  }
}
