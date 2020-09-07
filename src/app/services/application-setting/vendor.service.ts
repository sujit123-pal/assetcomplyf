import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const token = 'Bearer' + ' ' + localStorage.getItem('usr_token');

let headers = new HttpHeaders();
headers = headers
  .append('Content-Type', 'application/json')
  .append('Authorization', token);


@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private postURL =
    'https://assetcomply.thinkagainlab.com/api/v1/asset/createVendor';

  private getURL =
    'https://assetcomply.thinkagainlab.com/api/v1/asset/getVendorCustomer';

  constructor(private http: HttpClient) {}

  postData(data) {
    return this.http.post(this.postURL, data, { headers: headers });
  }

  getData(data) {
    return this.http.post(this.getURL, data, { headers: headers });
  }
}
