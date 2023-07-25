import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormEditComponent } from '../form-edit/form-edit.component';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css'],
})
export class FinancialsComponent implements OnInit {
  commonData: any[] = [];
  panelOpenState = false;
  constructor(private dialog: MatDialog, private fileService: FileService) {}

  ngOnInit(): void {
    this.fileService.getAllFinancialFiles().subscribe(
      (data) => {
        this.commonData = data;
      },
      (error) => {
        console.error('An error occurred while retrieving the data:', error);
      }
    );
    console.log('check', this.commonData);
  }

  openPDF(url: string) {
    const win = window.open();
    win?.document.write(
      `<iframe src="${url}" frameborder="0" style="width:100%; height:100vh;"></iframe>`
    );
  }

  editFile(id: string) {
    const dialogRef = this.dialog.open(FormEditComponent, {
      // width: '400px',
      // height: '400px',
      data: {
        /* Data to pass to the form component */
        id: id,
        dataBase: 'FINANCIAL',
      },
      // width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result after the form is submitted or the popup is closed
      console.log('Form closed with result:', result);
    });
    console.log('Edit file with id:', id);
  }

  deleteFile(id: string) {
    const dialogRef = this.dialog.open(FormEditComponent, {
      data: {
        id: id,
        isDeleteConfirmation: true,
      },
      width: '400px', // Set the width of the dialog as per your requirement
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        // Perform the deletion
        this.fileService.deleteFile(id, 'FINANCIAL').subscribe((response) => {
          window.location.reload();
          alert(response.message);
        });
      } else {
        console.log('Deletion canceled.');
      }
    });
  }
}
