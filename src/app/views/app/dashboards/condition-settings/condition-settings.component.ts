import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-condition-settings',
  templateUrl: './condition-settings.component.html',
})
export class ConditionSettingsComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);
  }

}
