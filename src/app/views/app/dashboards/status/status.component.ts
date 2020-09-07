import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatusService } from '../../../../services/application-setting/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
})
export class StatusComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor(private status: StatusService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.form);
    this.status.postData(this.form.value).subscribe((data: Response) => {
      console.log(data);
    });
  }
}
