import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Details } from './statc-data/static-data';
import { MatDialog } from '@angular/material/dialog';
import { FormEditComponent } from '../form-edit/form-edit.component';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-share-holders',
  templateUrl: './share-holders.component.html',
  styleUrls: ['./share-holders.component.css'],
})
export class ShareHoldersComponent implements OnInit {
  shareholderData1: any[] = [];
  shareholderData2: any[] = [];
  details = Details;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.fetchShareholderData1();
  }

  fetchShareholderData1(): void {
    const apiUrl = environment.apiUrl;

    this.http.get<any>(apiUrl).subscribe(
      (data) => {
        this.shareholderData1 = data.shareholderData1;
        this.shareholderData2 = data.shareholderData2;
      },
      (error) => {
        console.log('An error occurred while retrieving the data:', error);
      }
    );
  }

  editFile(id: string) {
    // Handle the edit functionality here
    // You can use the `id` to identify the file to be edited
    // Implement the logic to fetch the necessary data from the database and update the file
    // For example:
    const dialogRef = this.dialog.open(FormEditComponent, {
      data: {
        /* Data to pass to the form component */
        id: id,
      },
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
        this.fileService.deleteFile(id).subscribe((response) => {
          window.location.reload();
          alert(response.message);
        });
      } else {
        console.log('Deletion canceled.');
      }
    });
  }
}
