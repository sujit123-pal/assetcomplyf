import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VendorService } from '../../../../services/application-setting/vendor.service';

@Component({
  selector: 'app-vendor-settings',
  templateUrl: './vendor-settings.component.html',
})
export class VendorSettingsComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor(private vservice: VendorService) {}

  ngOnInit() {}

  onSubmit() {
    this.vservice.postData(this.form.value).subscribe((data: Response) => {
      console.log(data);
    });
  }
}
