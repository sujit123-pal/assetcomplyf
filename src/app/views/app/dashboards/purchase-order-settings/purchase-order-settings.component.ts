import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { PurchaseOrderService } from '../../../../services/application-setting/purchase-order.service';

@Component({
  selector: 'app-purchase-order-settings',
  templateUrl: './purchase-order-settings.component.html',
})
export class PurchaseOrderSettingsComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  @ViewChild('myTable') table: any;
  productItems: any = [];

  expanded: any = {};
  timeout: any;
  rows;
  itemsPerPage = 5;
  ColumnMode = ColumnMode;
  columns = [{ prop: 'modelname', name: 'Model Name' }];
  temp: any[];

  files: File[] = [];

  constructor(
    private poservice: PurchaseOrderService,
    private notifications: NotificationsService
  ) {}

  config = {
    url: 'https://httpbin.org/post',
    thumbnailWidth: 160,
    // tslint:disable-next-line: max-line-length
    previewTemplate:
      '<div class="dz-preview dz-file-preview mb-3"><div class="d-flex flex-row "><div class="p-0 w-30 position-relative"><div class="dz-error-mark"><span><i></i></span></div><div class="dz-success-mark"><span><i></i></span></div><div class="preview-container"><img data-dz-thumbnail class="img-thumbnail border-0" /><i class="simple-icon-doc preview-icon" ></i></div></div><div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative"><div><span data-dz-name></span></div><div class="text-primary text-extra-small" data-dz-size /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div></div><a href="#/" class="remove" data-dz-remove><i class="glyph-icon simple-icon-trash"></i></a></div>',
  };

  onUploadError(event) {
    console.log(event);
  }

  onUploadSuccess(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  getPOData() {
    this.poservice
      .getData({ username: localStorage.getItem('usr_name') })
      .subscribe(<Response>(data) => {
        console.log(data)
        this.rows = data.purchaseorder;
        this.rows.map(
          ({
            ponumber,
            header,
            termsandconditions,
            paymentterms,
          }) => ({
            ponumber,
            header,
            termsandconditions,
            paymentterms,
          })
        );
        console.log(this.rows);
        this.temp = [...this.rows];
      });
  }

  ngOnInit() {
    this.getPOData();
  }

  onSubmit() {
    this.form.value.username = localStorage.getItem('usr_name');
    if (this.form.valid) {
      this.poservice.postData(this.form.value).subscribe((data: Response) => {
        this.form.resetForm();
        this.notifications.create(
          'Success',
          'Record was saved successfully.',
          NotificationType.Success,
          {
            theClass: 'outline success',
            timeOut: 6000,
            showProgressBar: false,
          }
        );
        this.getPOData()
      });
    } else {
      this.notifications.create(
        'Error',
        'Form is not valid',
        NotificationType.Error,
        {
          theClass: 'outline danger',
          timeOut: 6000,
          showProgressBar: false,
        }
      );
    }
  }

  onPage(event) {}

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {}

  updateFilter(event) {
    const val = event.target.value.toLowerCase().trim();
    const count = this.columns.length;
    const keys = Object.keys(this.temp[0]);
    const temp = this.temp.filter((item) => {
      for (let i = 0; i < count; i++) {
        if (
          (item[keys[i]] &&
            item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) ||
          !val
        ) {
          return true;
        }
      }
    });
    this.rows = temp;
    this.table.offset = 0;
  }
}
