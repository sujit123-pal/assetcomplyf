import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meter-type-settings',
  templateUrl: './meter-type-settings.component.html',
})
export class MeterTypeSettingsComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);
  }
}
