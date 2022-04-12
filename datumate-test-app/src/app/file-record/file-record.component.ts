import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-record',
  templateUrl: './file-record.component.html',
  styleUrls: ['./file-record.component.scss']
})
export class FileRecordComponent {
  @Input() name: string = '';
  @Output() delete = new EventEmitter<string>();

  onDelete() {
    this.delete.emit(this.name);
  }
}
