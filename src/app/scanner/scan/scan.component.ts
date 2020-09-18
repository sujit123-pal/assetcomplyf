import {Component,OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';
import {  Input, Inject,ChangeDetectionStrategy } from '@angular/core';
import {FormControl, FormGroup,} from '@angular/forms';
export * from '@zxing/ngx-scanner';
@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss'],changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScanComponent implements OnInit {
  form:FormGroup;
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  hasDevices: boolean;
  hasPermission: boolean;
  arr=[];
  a=[];b=[];c=[];d=[];result=[];
  
  qrResultString: string;

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly _dialog: MatDialog) { }

  clearResult(): void {
    this.form.reset();
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    this.qrResultString = resultString;
    this.arr=this.qrResultString.trim().split(":")
    this.a=this.arr[3].split(";")
    this.b=this.arr[6].split(";;")
    this.c=this.arr[4].split("TEL")
    this.d=this.arr[5].split("ADR")
    this.result[0]=this.a[0].split("EMAIL");
    this.result[1]=this.c[0];
    this.result[2]=this.d[0];
    this.result[3]=this.b[1].split("END");
    // this.result[4]=this.b[1].split("");
    // if (this.arr.indexOf(this.qrResultString)==-1){
    //  this.arr.push(this.qrResultString);}
  }

  onDeviceSelectChange(selected: string) {
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }
  
  
  ngOnInit(){
    this.form = new FormGroup({
      first: new FormControl('')
    });
  }
  
}
