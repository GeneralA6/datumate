import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
   selector: 'app-file-records-list',
   templateUrl: './file-records-list.component.html',
   styleUrls: [ './file-records-list.component.scss' ]
})
export class FileRecordsListComponent {
   @Input() csvFiles: string[] = [];
   @Output() delete = new EventEmitter<string>();

   deleteFileRecord(fileName: string) {
      this.delete.emit(fileName);
   }
}
