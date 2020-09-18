import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  columns = [
      { prop: 'name', name: 'Name' },
      { prop: 'email', name: 'Email' },
      { prop: 'phn', name: 'Phone Number' },
      { prop: 'address', name: 'Address' },
    ];
     elementType = NgxQrcodeElementTypes.URL;
     correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
    result=" "
  gen(data){
     console.log(this.form.value);
    
   this.result=data.name+" "+data.email+" "+data.phn+" "+data.address;
   console.log(this.result);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
