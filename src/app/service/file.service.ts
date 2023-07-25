import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private apiUrl = environment.apiLink;
  constructor(private http: HttpClient) {}

  uploadFile(file: File, id: string, dataBase?: string): Promise<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('dataBase', dataBase);
    return this.http
      .put(`${this.apiUrl}document-archive/update/${id}`, formData)
      .toPromise();
  }

  deleteFile(id: string, dataBase?: string): Observable<any> {
    const url = `${this.apiUrl}document-archive/delete/${id}`;
    const bodyData = { dataBase };

    return this.http.request('delete', url, { body: bodyData });
  }

  getAllFinancialFiles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}document-archive`);
  }
}
