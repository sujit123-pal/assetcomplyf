import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
})
export class DepartmentComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);
  }
}
