import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CsvFileData } from '../csv-file-uploader/csv-file-uploader.component';

@Injectable({
   providedIn: 'root'
})
export class GcpStoreService {
   private gcpFilesStore = new BehaviorSubject(new Map<string, any>());
   gcpData: Observable<any[]>;
   gcpFiles: Observable<string[]>;

   constructor() {
      this.gcpData = this.convertGcpFilesStoreToGcpDataObservable();
      this.gcpFiles = this.convertGcpFilesStoreToFileNamesObservable();
   }

   addGcpFileData(csvFileData: CsvFileData) {
      const fileName: string = csvFileData.name;
      const gcpFilesStoreSnapshot: Map<string, any> = this.gcpFilesStore.value;

      if (gcpFilesStoreSnapshot.has(fileName)) {
         return;
      }
      gcpFilesStoreSnapshot.set(fileName, csvFileData.data);

      this.gcpFilesStore.next(gcpFilesStoreSnapshot);
   }

   removeGcpFileData(fileName: string) {
      const gcpFilesStoreSnapshot: Map<string, any> = this.gcpFilesStore.value;

      gcpFilesStoreSnapshot.delete(fileName);

      this.gcpFilesStore.next(gcpFilesStoreSnapshot);
   }

   private convertGcpFilesStoreToGcpDataObservable(): Observable<any[]> {
      return this.gcpFilesStore.asObservable().pipe(
         map(gcpFilesStoreSnapshot => {
            return [ ...gcpFilesStoreSnapshot ].map(([ key, value ]) => (value));
         }));
   }

   private convertGcpFilesStoreToFileNamesObservable(): Observable<string[]> {
      return this.gcpFilesStore.asObservable().pipe(
         map(gcpFilesStoreSnapshot => {
            return [ ...gcpFilesStoreSnapshot ].map(([ key, value ]) => (key));
         }));
   }
}
