import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CsvFileData } from './csv-file-uploader/csv-file-uploader.component';
import { GcpStoreService } from './gcp-store/gcp-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gcpFilenames: string[] = [];
  private destroy = new Subject<void>();

  constructor(private readonly gcpStoreService: GcpStoreService) {
    this.gcpStoreService.gcpFiles
       .pipe(takeUntil(this.destroy))
       .subscribe((gcpFilenames: any) => {
         this.gcpFilenames = gcpFilenames;
       });
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
}
