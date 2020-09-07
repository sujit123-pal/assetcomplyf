import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.form);
  }
}
