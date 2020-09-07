import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reason-settings',
  templateUrl: './reason-settings.component.html',
})
export class ReasonSettingsComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.form);
  }
}
