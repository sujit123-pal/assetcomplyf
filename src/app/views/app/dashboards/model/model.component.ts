import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModelService } from '../../../../services/application-setting/model.service'
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
})
export class ModelComponent implements OnInit {
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
    private mservice: ModelService,
    private notifications: NotificationsService
  ) {}

  getModelData() {
    this.mservice
      .getData({ username: localStorage.getItem('usr_name') })
      .subscribe(<Response>(data) => {
        this.rows = data.assetproperty;
        this.rows.map(
          ({
            modelname,
          }) => ({
            modelname,
          })
        );
        console.log(this.rows);
        this.temp = [...this.rows];
      });
  }

  ngOnInit() {
    this.getModelData();
  }

  onSubmit() {
    console.log(this.form.value)
    this.form.value.username = localStorage.getItem('usr_name');
    if (this.form.valid) {
      this.mservice.postData(this.form.value).subscribe((data: Response) => {
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
