import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CsvFileData, GcpData } from '../csv-file-uploader/csv-file-uploader.component';

@Injectable({
   providedIn: 'root'
})
export class GcpStoreService {
   private gcpFilesStore = new BehaviorSubject(new Map<string, GcpData[]>());
   gcpData: Observable<GcpData[]>;
   gcpFiles: Observable<string[]>;

   constructor() {
      this.gcpData = this.convertGcpFilesStoreToGcpDataObservable();
      this.gcpFiles = this.convertGcpFilesStoreToFileNamesObservable();
   }

   addGcpFileData(csvFileData: CsvFileData) {
      const fileName: string = csvFileData.name;
      const gcpFilesStoreSnapshot: Map<string, GcpData[]> = this.gcpFilesStore.value;

      if (gcpFilesStoreSnapshot.has(fileName)) {
         return;
      }
      gcpFilesStoreSnapshot.set(fileName, csvFileData.data);

      this.gcpFilesStore.next(gcpFilesStoreSnapshot);
   }

   removeGcpFileData(fileName: string) {
      const gcpFilesStoreSnapshot: Map<string, GcpData[]> = this.gcpFilesStore.value;

      gcpFilesStoreSnapshot.delete(fileName);

      this.gcpFilesStore.next(gcpFilesStoreSnapshot);
   }

   private convertGcpFilesStoreToGcpDataObservable(): Observable<GcpData[]> {
      return this.gcpFilesStore.asObservable().pipe(
         map(gcpFilesStoreSnapshot => {
            return [ ...gcpFilesStoreSnapshot ]
               .map(([ key, value ]) => (value))
               .flat();
         }));
   }

   private convertGcpFilesStoreToFileNamesObservable(): Observable<string[]> {
      return this.gcpFilesStore.asObservable().pipe(
         map(gcpFilesStoreSnapshot => {
            return [ ...gcpFilesStoreSnapshot ].map(([ key, value ]) => (key));
         }));
   }
}
