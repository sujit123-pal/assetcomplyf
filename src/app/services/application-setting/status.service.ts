import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FinalService } from './final.service';
const token = 'Bearer' + ' ' + localStorage.getItem('usr_token');

let headers = new HttpHeaders();
headers = headers
  .append('Content-Type', 'application/json')
  .append('Authorization', token);


@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private postURL =
    this.final.a+'setStatus';

  private getURL =
    this.final.a+'getAssetStatus';

  constructor(private http: HttpClient,private final:FinalService) {}

  postData(data) {
    return this.http.post(this.postURL, data, { headers: headers });
  }

  getData(data) {
    return this.http.post(this.getURL, data, { headers: headers });
  }
}
