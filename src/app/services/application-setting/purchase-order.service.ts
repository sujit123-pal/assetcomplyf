import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FinalService } from './final.service';
const token = 'Bearer' + ' ' + localStorage.getItem('usr_token');

let headers = new HttpHeaders();
headers = headers
  .append('Content-Type', 'application/json')
  .append('Authorization', token);

  
@Injectable({
  providedIn: 'root',
})
export class PurchaseOrderService {
  private postURL =
  this.final.a+'createPurchaseOrder';

private getURL =
  this.final.a+'getPurchaseOrder';

constructor(private http: HttpClient,private final:FinalService) {}

postData(data) {
  return this.http.post(this.postURL, data, { headers: headers });
}

getData(data) {
  return this.http.post(this.getURL, data, { headers: headers });
}
}
