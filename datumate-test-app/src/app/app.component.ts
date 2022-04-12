import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CsvFileData, GcpData } from './csv-file-uploader/csv-file-uploader.component';
import { GcpStoreService } from './gcp-store/gcp-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  gcpData: GcpData[] = [];
  gcpFilenames: string[] = [];
  private destroy = new Subject<void>();

  constructor(private readonly gcpStoreService: GcpStoreService) {
  }

  ngOnInit() {
    this.initGcpData();
    this.initGcpFileNames();
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  loadCsvFileData(csvFileData: CsvFileData) {
    this.gcpStoreService.addGcpFileData(csvFileData);
  }

  deleteGcpFile(fileName: string) {
    this.gcpStoreService.removeGcpFileData(fileName);
  }

  private initGcpFileNames() {
    this.gcpStoreService.gcpFiles
       .pipe(takeUntil(this.destroy))
       .subscribe((gcpFilenames: string[]) => {
         this.gcpFilenames = gcpFilenames;
       });
  }

  private initGcpData() {
    this.gcpStoreService.gcpData
       .pipe(takeUntil(this.destroy))
       .subscribe((gcpData: GcpData[]) => {
         this.gcpData = gcpData;
       });
  }
}
