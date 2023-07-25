import { Component, Inject, OnInit } from '@angular/core';
import { FileService } from 'src/app/service/file.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css'],
})
export class FormEditComponent implements OnInit {
  selectedFile: File | null = null;
  singleFileName: string = '';
  id: string;
  dataBase: string;

  constructor(
    private fileService: FileService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormEditComponent>
  ) {
    this.id = data.id;
    this.dataBase = data.dataBase;
    console.log('test', this.dataBase);
  }

  confirmDelete(): void {
    this.dialogRef.close('confirm');
  }
  cancelDelete(): void {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  updateSingleFileName(event: any): void {
    const id = event.target.value;
    this.singleFileName = event.target.value;
  }

  onUpload() {
    if (this.selectedFile) {
      this.fileService
        .uploadFile(this.selectedFile, this.id, this.dataBase)
        .then((response) => {
          window.location.reload();
          alert('File uploaded successfully');
        })
        .catch((error) => {
          console.error('File upload failed', error);
        });
    }
  }
  ngOnInit(): void {}
}
