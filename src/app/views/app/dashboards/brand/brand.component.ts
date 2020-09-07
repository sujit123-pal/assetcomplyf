import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrandService } from '../../../../services/application-setting/brand.service'
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
})
export class BrandComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  @ViewChild('myTable') table: any;
  productItems: any = [];

  expanded: any = {};
  timeout: any;
  rows;
  itemsPerPage = 5;
  ColumnMode = ColumnMode;
  columns = [
    { prop: 'modelname', name: 'Model Name' },
  ];
  temp: any[];

  constructor(
    private bservice: BrandService,
    private notifications: NotificationsService
  ) {}

  getModelData() {
    this.bservice
      .getData({ username: localStorage.getItem('usr_name') })
      .subscribe(<Response>(data) => {
        this.rows = data.brand;
        this.rows.map(
          ({
            brandname,
          }) => ({
            brandname,
          })
        );
//        console.log(this.rows);
        this.temp = [...this.rows];
      });
  }

  ngOnInit() {
    this.getModelData();
  }

  onSubmit() {
    this.form.value.username = localStorage.getItem('usr_name');
    if (this.form.valid) {
      this.bservice.postData(this.form.value).subscribe((data: Response) => {
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
        this.getModelData()
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
