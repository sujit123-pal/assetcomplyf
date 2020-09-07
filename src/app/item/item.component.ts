import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../services/application-setting/item.service';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  @ViewChild('myTable') table: any;
  productItems: any = [];

  expanded: any = {};
  timeout: any;
  rows;
  itemsPerPage = 5;
  ColumnMode = ColumnMode;
  columns = [
    { prop: 'address_id', name: 'Address Id' },
    { prop: 'itemname', name: 'Item Name' },
    { prop: 'description', name: 'Description' },
    { prop: 'quantity', name: 'Quantity' },
  ];
  temp: any[];

  constructor(
    private item:ItemService,
    private notifications: NotificationsService
  ) {}
  

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.form.value);
    this.form.value.username = localStorage.getItem('usr_name');
    if (this.form.valid) {
      console.log('item details saved');
      this.item.postData(this.form.value).subscribe((data: Response) => {
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
        // this.getAssetData()
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
